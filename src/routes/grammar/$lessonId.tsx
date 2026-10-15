import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/types";
import { mergeLessons } from "@/lib/curriculum";
import { useLearn } from "@/lib/store";
import { Quiz } from "@/components/quiz";
import { SpeakButton } from "@/components/speak-button";
import { Button, Panel } from "@/components/ui";

export const Route = createFileRoute("/grammar/$lessonId")({
  component: LessonPage,
});

function LessonPage() {
  const { lessonId } = Route.useParams();
  const state = useLearn();
  const lesson = mergeLessons(state).find((item) => item.id === lessonId);
  const toggleBookmark = useLearn((store) => store.toggleBookmark);
  const markStudied = useLearn((store) => store.markStudied);
  const unlocked = state.unlocked && state.hydrated;

  if (!lesson) {
    return (
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-medium">این درس پیدا نشد</h1>
        <Link to="/grammar" className="mt-4 inline-block text-pine">
          بازگشت به فهرست
        </Link>
      </div>
    );
  }

  const category = CATEGORIES.find((item) => item.id === lesson.category);
  const saved = state.bookmarks.includes(lesson.id);
  const studied = state.studied.includes(lesson.id);

  return (
    <article className="mx-auto grid max-w-3xl gap-4">
      <p className="text-sm text-muted">
        <Link to="/grammar">{category?.fa}</Link>
        <span className="mx-2">/</span>
        {lesson.level}
      </p>
      <header>
        <h1 className="font-serif text-4xl" dir="ltr">
          {lesson.title}
        </h1>
        <p className="mt-2 text-lg">{lesson.titleFa}</p>
      </header>
      <Panel>
        <p className="text-sm text-muted">فرمول</p>
        <p className="mt-1 font-serif text-xl" dir="ltr">
          {lesson.formula}
        </p>
      </Panel>
      <p>{lesson.summary}</p>
      <Panel>
        <h2 className="font-medium">نکته برای فارسی‌زبان</h2>
        <p className="mt-2 text-muted">{lesson.persianNote}</p>
      </Panel>
      <section>
        <h2 className="text-lg font-medium">ریز جزئیات</h2>
        <ul className="mt-2 grid gap-2">
          {lesson.points.map((point) => (
            <li key={point} className="rounded-lg border border-line bg-surface px-3 py-2">
              {point}
            </li>
          ))}
        </ul>
      </section>
      {lesson.uses.map((use) => (
        <section key={use.title}>
          <h2 className="text-lg font-medium">{use.title}</h2>
          <p className="mt-1 text-muted">{use.body}</p>
          <div className="mt-3 grid gap-2">
            {use.examples.map((example) => (
              <Panel key={example.en} className="grid gap-2">
                <p className="font-serif text-lg" dir="ltr">
                  {example.en}
                </p>
                <p className="text-muted">{example.fa}</p>
                <SpeakButton text={example.en} />
              </Panel>
            ))}
          </div>
        </section>
      ))}
      <section>
        <h2 className="text-lg font-medium">شکل‌ها</h2>
        <div className="mt-2 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[32rem] text-sm">
            <tbody>
              {lesson.forms.map((form) => (
                <tr key={form.name} className="border-b border-line last:border-0">
                  <th className="bg-subtle px-3 py-3 text-start font-medium">{form.name}</th>
                  <td className="px-3 py-3" dir="ltr">
                    {form.pattern}
                  </td>
                  <td className="px-3 py-3" dir="ltr">
                    {form.sample}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-medium">واژه‌های همراه</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {lesson.signals.map((signal) => (
            <span key={signal} className="rounded-lg border border-line bg-surface px-3 py-2 text-sm" dir="ltr">
              {signal}
            </span>
          ))}
        </div>
      </section>
      <section className="grid gap-2">
        <h2 className="text-lg font-medium">خطاهای رایج</h2>
        {lesson.mistakes.map((mistake) => (
          <Panel key={mistake.wrong}>
            <p className="text-brick" dir="ltr">
              {mistake.wrong}
            </p>
            <p className="mt-1 text-pine" dir="ltr">
              {mistake.right}
            </p>
            <p className="mt-2 text-sm text-muted">{mistake.why}</p>
          </Panel>
        ))}
      </section>
      {lesson.contrast ? (
        <Panel>
          <h2 className="font-medium">با چه چیزی قاطی می‌شود</h2>
          <p className="mt-2 text-muted">{lesson.contrast}</p>
        </Panel>
      ) : null}
      <section className="grid gap-2">
        <h2 className="text-lg font-medium">سنجش کوتاه</h2>
        <Quiz id={lesson.id} questions={lesson.quiz} />
      </section>
      <div className="flex flex-wrap gap-2">
        <Button variant={studied ? "secondary" : "primary"} onClick={() => markStudied(lesson.id)}>
          {studied ? "خوانده شده" : "علامت به‌عنوان خوانده‌شده"}
        </Button>
        <Button variant="secondary" onClick={() => toggleBookmark(lesson.id)}>
          {saved ? "برداشتن نشان" : "نشان کردن"}
        </Button>
        <SpeakButton text={lesson.title} label="خواندن عنوان" />
        {unlocked ? (
          <Link
            to="/studio/grammar/$lessonId"
            params={{ lessonId: lesson.id }}
            className="inline-flex h-11 items-center rounded-lg border border-line bg-surface px-4 text-sm"
          >
            ویرایش این درس
          </Link>
        ) : null}
      </div>
    </article>
  );
}
