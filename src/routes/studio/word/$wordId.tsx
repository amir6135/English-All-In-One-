import { createFileRoute, Link } from "@tanstack/react-router";
import { BUILTIN_WORD_IDS } from "@/data/vocab";
import { WordEditor } from "@/components/editors";
import { blankWord, mergeTopics, mergeWords } from "@/lib/curriculum";
import { useLearn } from "@/lib/store";

export const Route = createFileRoute("/studio/word/$wordId")({
  component: EditWordPage,
});

function EditWordPage() {
  const { wordId } = Route.useParams();
  const state = useLearn();
  if (!state.hydrated) return <p className="text-muted">در حال باز کردن…</p>;
  if (!state.unlocked) {
    return (
      <p>
        اول از <Link to="/studio" className="text-pine">استودیو</Link> وارد شوید.
      </p>
    );
  }
  const topics = mergeTopics(state);
  const existing = mergeWords({ ...state, wordsHidden: [] }).find((word) => word.id === wordId);
  const origin = wordId === "new" ? "new" : existing?.custom || !BUILTIN_WORD_IDS.has(wordId) ? "custom" : "builtin";
  const initial = wordId === "new" ? blankWord(topics[0]?.id ?? "people") : existing;
  if (!initial) return <p>این واژه پیدا نشد.</p>;
  return (
    <div className="mx-auto grid max-w-xl gap-4">
      <Link to="/studio" className="text-sm text-muted">
        استودیو
      </Link>
      <h1 className="text-3xl font-medium">{origin === "new" ? "واژهٔ تازه" : "ویرایش واژه"}</h1>
      <WordEditor key={initial.id || "new"} initial={initial} origin={origin} topics={topics} />
    </div>
  );
}
