import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BUILTIN_LESSON_IDS } from "@/data/grammar";
import { mergeLessons, mergeWords } from "@/lib/curriculum";
import { digestPin, useLearn, type ContentSlice } from "@/lib/store";
import { Button, Field, Panel, TextInput } from "@/components/ui";

export const Route = createFileRoute("/studio/")({
  component: StudioPage,
});

function StudioPage() {
  const state = useLearn();
  const [pin, setPin] = useState("");
  const [again, setAgain] = useState("");
  const [message, setMessage] = useState("");

  async function createPin() {
    if (pin.trim().length < 4) {
      setMessage("رمز دست‌کم چهار نویسه باشد.");
      return;
    }
    if (pin !== again) {
      setMessage("تکرار رمز یکی نیست.");
      return;
    }
    state.setPinHash(await digestPin(pin.trim()));
    setPin("");
    setAgain("");
    setMessage("رمز گذاشته شد. می‌توانید محتوا را ویرایش کنید.");
  }

  async function unlock() {
    if (!state.pinHash) return;
    const hash = await digestPin(pin.trim());
    if (hash !== state.pinHash) {
      setMessage("رمز نادرست است.");
      return;
    }
    state.setUnlocked(true);
    setPin("");
    setMessage("");
  }

  if (!state.hydrated) {
    return <p className="text-muted">در حال باز کردن استودیو…</p>;
  }

  if (!state.pinHash || !state.unlocked) {
    return (
      <div className="mx-auto grid max-w-md gap-4">
        <header>
          <h1 className="text-3xl font-medium">استودیو مالک</h1>
          <p className="mt-2 text-muted">
            {state.pinHash
              ? "برای ویرایش درس و واژه، رمز همین دستگاه را وارد کنید."
              : "یک رمز محلی بگذارید تا فقط شما روی این مرورگر بتوانید محتوا را عوض کنید."}
          </p>
        </header>
        <Panel className="grid gap-3">
          <Field label="رمز">
            <TextInput type="password" value={pin} onChange={(event) => setPin(event.target.value)} autoComplete="current-password" />
          </Field>
          {!state.pinHash ? (
            <Field label="تکرار رمز">
              <TextInput type="password" value={again} onChange={(event) => setAgain(event.target.value)} autoComplete="new-password" />
            </Field>
          ) : null}
          {message ? <p className="text-sm text-brick">{message}</p> : null}
          <Button onClick={() => void (state.pinHash ? unlock() : createPin())}>
            {state.pinHash ? "ورود" : "ساختن رمز"}
          </Button>
        </Panel>
      </div>
    );
  }

  const lessons = mergeLessons(state);
  const customLessons = state.grammarAdded;
  const words = mergeWords(state);

  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-medium">استودیو مالک</h1>
          <p className="mt-2 text-muted">
            تغییرها روی همین مرورگر می‌ماند. برای نسخهٔ پشتیبان یا انتقال به دستگاه دیگر، خروجی بگیرید و بعداً وارد کنید.
          </p>
        </div>
        <Button variant="secondary" onClick={() => state.setUnlocked(false)}>
          قفل
        </Button>
      </header>
      <div className="flex flex-wrap gap-2">
        <Link to="/studio/grammar/$lessonId" params={{ lessonId: "new" }} className="inline-flex h-11 items-center rounded-lg bg-pine px-4 text-sm text-pine-fg">
          درس تازه
        </Link>
        <Link to="/studio/word/$wordId" params={{ wordId: "new" }} className="inline-flex h-11 items-center rounded-lg border border-line bg-surface px-4 text-sm">
          واژهٔ تازه
        </Link>
        <Button variant="secondary" onClick={() => downloadContent(state)}>
          خروجی
        </Button>
        <label className="inline-flex h-11 cursor-pointer items-center rounded-lg border border-line bg-surface px-4 text-sm">
          ورود فایل
          <input
            type="file"
            accept="application/json"
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              void file.text().then((text) => {
                const parsed = parseContent(text);
                if (!parsed) {
                  setMessage("فایل قابل خواندن نیست.");
                  return;
                }
                state.importContent(parsed);
                setMessage("محتوا وارد شد.");
              });
            }}
          />
        </label>
        <Button variant="ghost" onClick={() => state.resetProgress()}>
          پاک کردن پیشرفت
        </Button>
      </div>
      {message ? <p className="text-sm text-muted">{message}</p> : null}
      <Panel>
        <h2 className="font-medium">درس‌ها</h2>
        <p className="mt-1 text-sm text-muted tabular-nums">
          {lessons.length} درس در فهرست · {customLessons.length} سفارشی · {state.grammarHidden.length} پنهان
        </p>
        <div className="mt-3 grid gap-2">
          {customLessons.map((lesson) => (
            <Link key={lesson.id} to="/studio/grammar/$lessonId" params={{ lessonId: lesson.id }} className="rounded-lg px-2 py-2 hover:bg-subtle">
              <span dir="ltr">{lesson.title}</span>
              <span className="ms-2 text-muted">{lesson.titleFa}</span>
            </Link>
          ))}
          {!customLessons.length ? <p className="text-sm text-muted">هنوز درس سفارشی ندارید. درس‌های اصلی را از داخل خود درس ویرایش کنید.</p> : null}
        </div>
      </Panel>
      {state.grammarHidden.length ? (
        <Panel>
          <h2 className="font-medium">پنهان‌شده‌ها</h2>
          <div className="mt-2 grid gap-2">
            {state.grammarHidden.map((id) => (
              <div key={id} className="flex items-center justify-between gap-2">
                <span dir="ltr">{id}</span>
                <Button variant="secondary" size="sm" onClick={() => state.restoreLesson(id)}>
                  برگرداندن
                </Button>
              </div>
            ))}
          </div>
        </Panel>
      ) : null}
      <Panel>
        <h2 className="font-medium">واژه‌های سفارشی</h2>
        <div className="mt-2 grid gap-2">
          {words
            .filter((word) => word.custom)
            .map((word) => (
              <Link key={word.id} to="/studio/word/$wordId" params={{ wordId: word.id }} className="rounded-lg px-2 py-2 hover:bg-subtle">
                <span dir="ltr">{word.en}</span>
                <span className="ms-2 text-muted">{word.fa}</span>
              </Link>
            ))}
        </div>
        <p className="mt-3 text-sm text-muted">واژهٔ اصلی را از داخل موضوعش ویرایش کنید. شناسهٔ اصلی دست نمی‌خورد.</p>
        <p className="text-sm text-muted tabular-nums">{BUILTIN_LESSON_IDS.size} درس در بستهٔ اصلی است.</p>
      </Panel>
    </div>
  );
}

function downloadContent(state: ContentSlice) {
  const payload: ContentSlice = {
    grammarPatches: state.grammarPatches,
    grammarAdded: state.grammarAdded,
    grammarHidden: state.grammarHidden,
    wordPatches: state.wordPatches,
    wordsAdded: state.wordsAdded,
    wordsHidden: state.wordsHidden,
    topicsAdded: state.topicsAdded,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "english-all-in-one.json";
  link.click();
  URL.revokeObjectURL(url);
}

function parseContent(text: string): ContentSlice | null {
  try {
    const data = JSON.parse(text) as Partial<ContentSlice>;
    if (!data || typeof data !== "object") return null;
    if (!Array.isArray(data.grammarAdded) || !data.grammarPatches) return null;
    return {
      grammarPatches: data.grammarPatches,
      grammarAdded: data.grammarAdded,
      grammarHidden: Array.isArray(data.grammarHidden) ? data.grammarHidden : [],
      wordPatches: data.wordPatches ?? {},
      wordsAdded: Array.isArray(data.wordsAdded) ? data.wordsAdded : [],
      wordsHidden: Array.isArray(data.wordsHidden) ? data.wordsHidden : [],
      topicsAdded: Array.isArray(data.topicsAdded) ? data.topicsAdded : [],
    };
  } catch {
    return null;
  }
}
