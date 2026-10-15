import { createFileRoute, Link } from "@tanstack/react-router";
import { mergeLessons, mergeTopics, mergeWords } from "@/lib/curriculum";
import { dayIndex } from "@/lib/speech";
import { useLearn } from "@/lib/store";
import { LEVELS, LEVEL_FA } from "@/data/types";
import { VERBS } from "@/data/verbs";
import { SOUNDS } from "@/data/extra";
import { Panel } from "@/components/ui";
import { SpeakButton } from "@/components/speak-button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const state = useLearn();
  const lessons = mergeLessons(state);
  const words = mergeWords(state);
  const topics = mergeTopics(state);
  const studied = state.hydrated ? state.studied.length : 0;
  const known = state.hydrated ? state.knownWords.length : 0;
  const last = state.hydrated ? lessons.find((lesson) => lesson.id === state.lastLessonId) : undefined;
  const next = last ?? lessons.find((lesson) => !state.studied.includes(lesson.id)) ?? lessons[0];
  const daily = words[state.hydrated ? dayIndex(words.length) : 0];

  return (
    <div className="mx-auto grid max-w-5xl gap-6">
      <header className="max-w-2xl">
        <p className="text-sm text-muted">آموزش یک‌جا</p>
        <h1 className="mt-2 font-serif text-4xl text-pine" dir="ltr">
          English All-in-One
        </h1>
        <p className="mt-3 text-lg text-fg">
          گرامر از ترتیب جمله تا وارونگی، واژگان موضوعی، تلفظ مخصوص گوش فارسی، و تمرین کوتاه. همه‌چیز دسته‌بندی شده و برای مالک قابل ویرایش است.
        </p>
      </header>

      {next ? (
        <Link to="/grammar/$lessonId" params={{ lessonId: next.id }} className="block">
          <Panel className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-muted">{last ? "ادامهٔ درس" : "شروع از بنیان"}</p>
              <h2 className="mt-1 font-serif text-2xl" dir="ltr">
                {next.title}
              </h2>
              <p className="text-muted">{next.titleFa}</p>
            </div>
            <span className="text-sm text-pine">
              {next.level} · {LEVEL_FA[next.level]}
            </span>
          </Panel>
        </Link>
      ) : null}

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="درس گرامر" value={lessons.length} hint={`${studied} خوانده‌شده`} />
        <Stat label="واژه" value={words.length} hint={`${known} بلد`} />
        <Stat label="موضوع" value={topics.length} hint="با مثال و ترجمه" />
        <Stat label="فعل بی‌قاعده" value={VERBS.length} hint={`${SOUNDS.length} درس تلفظ`} />
      </section>

      <section>
        <h2 className="text-lg font-medium">سطح‌ها</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-5">
          {LEVELS.map((level) => {
            const count = lessons.filter((lesson) => lesson.level === level).length;
            const done = state.hydrated
              ? lessons.filter((lesson) => lesson.level === level && state.studied.includes(lesson.id)).length
              : 0;
            return (
              <Link key={level} to="/grammar" search={{ level }} className="rounded-xl border border-line bg-surface p-4">
                <p className="font-serif text-2xl text-pine" dir="ltr">
                  {level}
                </p>
                <p className="text-sm text-muted">{LEVEL_FA[level]}</p>
                <p className="mt-3 text-sm tabular-nums">
                  {done}/{count}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <Door to="/grammar" title="گرامر" text="قاعده، فرمول، خطای فارسی‌زبان، و آزمون کوتاه." />
        <Door to="/words" title="واژگان" text="موضوع‌به‌موضوع، با آوانویسی و جمله." />
        <Door to="/practice" title="تمرین" text="آزمون، فلش‌کارت، و جفت‌های گیج‌کننده." />
      </section>

      {daily ? (
        <Panel>
          <p className="text-sm text-muted">واژهٔ امروز</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-3xl" dir="ltr">
                {daily.en}
              </h2>
              <p className="text-muted" dir="ltr">
                {daily.ipa} · {daily.pos}
              </p>
              <p className="mt-2">{daily.fa}</p>
            </div>
            <SpeakButton text={daily.en} />
          </div>
        </Panel>
      ) : null}
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: number; hint: string }) {
  return (
    <Panel>
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 font-serif text-3xl tabular-nums text-pine">{value}</p>
      <p className="text-sm text-muted">{hint}</p>
    </Panel>
  );
}

function Door({ to, title, text }: { to: "/grammar" | "/words" | "/practice"; title: string; text: string }) {
  return (
    <Link to={to} className="rounded-xl border border-line bg-surface p-4">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </Link>
  );
}
