import { createFileRoute, Link } from "@tanstack/react-router";
import { BUILTIN_LESSON_IDS } from "@/data/grammar";
import { LessonEditor } from "@/components/editors";
import { blankLesson, mergeLessons } from "@/lib/curriculum";
import { useLearn } from "@/lib/store";

export const Route = createFileRoute("/studio/grammar/$lessonId")({
  component: EditLessonPage,
});

function EditLessonPage() {
  const { lessonId } = Route.useParams();
  const state = useLearn();
  if (!state.hydrated) return <p className="text-muted">در حال باز کردن…</p>;
  if (!state.unlocked) {
    return (
      <p>
        اول از <Link to="/studio" className="text-pine">استودیو</Link> وارد شوید.
      </p>
    );
  }
  const existing = mergeLessons({ ...state, grammarHidden: [] }).find((lesson) => lesson.id === lessonId);
  const origin = lessonId === "new" ? "new" : existing?.custom || !BUILTIN_LESSON_IDS.has(lessonId) ? "custom" : "builtin";
  const initial = lessonId === "new" ? blankLesson() : existing;
  if (!initial) {
    return <p>این درس برای ویرایش پیدا نشد.</p>;
  }
  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      <Link to="/studio" className="text-sm text-muted">
        استودیو
      </Link>
      <h1 className="text-3xl font-medium">{origin === "new" ? "درس تازه" : "ویرایش درس"}</h1>
      <LessonEditor key={initial.id || "new"} initial={initial} origin={origin} />
    </div>
  );
}
