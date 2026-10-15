import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LEVELS, type Level, type QuizQ } from "@/data/types";
import { mergeLessons, mergeTopics, mergeWords } from "@/lib/curriculum";
import { useLearn } from "@/lib/store";
import { Quiz } from "@/components/quiz";
import { SpeakButton } from "@/components/speak-button";
import { Button, Panel } from "@/components/ui";

export const Route = createFileRoute("/practice")({
  component: PracticePage,
});

type Mode = "hub" | "grammar" | "cards" | "mix";

function PracticePage() {
  const state = useLearn();
  const [mode, setMode] = useState<Mode>("hub");
  const [level, setLevel] = useState<Level | "all">("all");
  const [topicId, setTopicId] = useState("all");
  const [questions, setQuestions] = useState<QuizQ[]>([]);
  const topics = mergeTopics(state);
  const words = mergeWords(state);

  useEffect(() => {
    if (mode !== "grammar") return;
    const pool = mergeLessons(useLearn.getState())
      .filter((lesson) => level === "all" || lesson.level === level)
      .flatMap((lesson) => lesson.quiz);
    setQuestions(shuffle(pool).slice(0, 8));
  }, [level, mode]);

  const cardWords = words.filter((word) => topicId === "all" || word.topicId === topicId);

  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      <header>
        <h1 className="text-3xl font-medium">تمرین</h1>
        <p className="mt-2 text-muted">کوتاه، با بازخورد همان لحظه. نمرهٔ آزمون گرامر ذخیره می‌شود.</p>
      </header>
      {mode === "hub" ? (
        <div className="grid gap-3">
          <Panel>
            <h2 className="font-medium">آزمون گرامر</h2>
            <p className="mt-1 text-sm text-muted">هشت پرسش تصادفی از سطح انتخابی.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button variant={level === "all" ? "primary" : "secondary"} onClick={() => setLevel("all")}>
                همه
              </Button>
              {LEVELS.map((item) => (
                <Button key={item} variant={level === item ? "primary" : "secondary"} onClick={() => setLevel(item)}>
                  {item}
                </Button>
              ))}
            </div>
            <Button className="mt-3" onClick={() => setMode("grammar")}>
              شروع
            </Button>
          </Panel>
          <Panel>
            <h2 className="font-medium">فلش‌کارت</h2>
            <label className="mt-3 grid gap-2 text-sm">
              موضوع
              <select
                className="h-11 rounded-lg border border-line bg-surface px-3"
                value={topicId}
                onChange={(event) => setTopicId(event.target.value)}
              >
                <option value="all">همه</option>
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.titleFa}
                  </option>
                ))}
              </select>
            </label>
            <Button className="mt-3" onClick={() => setMode("cards")}>
              شروع
            </Button>
          </Panel>
          <Link to="/confusions" className="rounded-xl border border-line bg-surface p-4">
            <h2 className="font-medium">جفت‌های گیج‌کننده</h2>
            <p className="mt-1 text-sm text-muted">say/tell، since/for، affect/effect و بقیه.</p>
          </Link>
          <Link to="/verbs" className="rounded-xl border border-line bg-surface p-4">
            <h2 className="font-medium">تمرین افعال بی‌قاعده</h2>
            <p className="mt-1 text-sm text-muted">گذشته و قسمت سوم را به یاد بیاورید.</p>
          </Link>
        </div>
      ) : null}
      {mode === "grammar" ? (
        <div className="grid gap-3">
          <Button variant="secondary" onClick={() => setMode("hub")}>
            بازگشت
          </Button>
          <Quiz id={`practice-${level}-${questions.length}`} questions={questions} />
        </div>
      ) : null}
      {mode === "cards" ? <Cards words={cardWords} onExit={() => setMode("hub")} /> : null}
    </div>
  );
}

function Cards({
  words,
  onExit,
}: {
  words: ReturnType<typeof mergeWords>;
  onExit: () => void;
}) {
  const toggleKnown = useLearn((state) => state.toggleKnown);
  const knownWords = useLearn((state) => state.knownWords);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const word = words[index];

  if (!word) return <p className="text-muted">واژه‌ای نیست.</p>;

  return (
    <div className="grid gap-3">
      <Button variant="secondary" onClick={onExit}>
        بازگشت
      </Button>
      <Panel>
        <p className="text-sm text-muted tabular-nums">
          {index + 1} / {words.length}
        </p>
        <button type="button" className="mt-3 block w-full text-start" onClick={() => setShow((value) => !value)}>
          <span className="font-serif text-4xl" dir="ltr">
            {word.en}
          </span>
          <span className="mt-2 block text-muted" dir="ltr">
            {word.ipa}
          </span>
          {show ? (
            <span className="mt-4 block">
              <span className="block">{word.fa}</span>
              <span className="mt-2 block font-serif" dir="ltr">
                {word.example}
              </span>
              <span className="mt-1 block text-sm text-muted">{word.exampleFa}</span>
            </span>
          ) : (
            <span className="mt-4 block text-sm text-muted">برای معنی لمس کنید</span>
          )}
        </button>
        <div className="mt-4 flex flex-wrap gap-2">
          <SpeakButton text={`${word.en}. ${word.example}`} />
          <Button
            variant="secondary"
            onClick={() => {
              toggleKnown(word.id);
              setShow(false);
              setIndex((value) => (value + 1) % words.length);
            }}
          >
            {knownWords.includes(word.id) ? "بردار از بلدها" : "بلدَم"}
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setShow(false);
              setIndex((value) => (value + 1) % words.length);
            }}
          >
            بعدی
          </Button>
        </div>
      </Panel>
    </div>
  );
}

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}
