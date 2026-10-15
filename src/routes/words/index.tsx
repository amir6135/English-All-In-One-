import { createFileRoute, Link } from "@tanstack/react-router";
import { mergeTopics, mergeWords } from "@/lib/curriculum";
import { useLearn } from "@/lib/store";
import { LEVEL_FA } from "@/data/types";

export const Route = createFileRoute("/words/")({
  component: WordsPage,
});

function WordsPage() {
  const state = useLearn();
  const topics = mergeTopics(state);
  const words = mergeWords(state);

  return (
    <div className="mx-auto grid max-w-5xl gap-5">
      <header>
        <h1 className="text-3xl font-medium">واژگان</h1>
        <p className="mt-2 max-w-2xl text-muted">
          هر موضوع معنی فارسی، آوانویسی، نقش کلمه و جمله دارد. بلد بودن را علامت بزنید تا پیشرفتتان بماند.
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => {
          const list = words.filter((word) => word.topicId === topic.id);
          const known = state.hydrated ? list.filter((word) => state.knownWords.includes(word.id)).length : 0;
          return (
            <Link key={topic.id} to="/words/$topicId" params={{ topicId: topic.id }} className="rounded-xl border border-line bg-surface p-4">
              <p className="text-sm text-muted">
                {topic.level} · {LEVEL_FA[topic.level]}
              </p>
              <h2 className="mt-1 font-serif text-2xl" dir="ltr">
                {topic.title}
              </h2>
              <p>{topic.titleFa}</p>
              <p className="mt-2 text-sm text-muted">{topic.blurb}</p>
              <p className="mt-3 text-sm tabular-nums">
                {known}/{list.length}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
