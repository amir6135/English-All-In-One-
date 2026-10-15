import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { mergeTopics, mergeWords } from "@/lib/curriculum";
import { useLearn } from "@/lib/store";
import { SpeakButton } from "@/components/speak-button";
import { Button, Panel } from "@/components/ui";

export const Route = createFileRoute("/words/$topicId")({
  component: TopicPage,
});

function TopicPage() {
  const { topicId } = Route.useParams();
  const state = useLearn();
  const topic = mergeTopics(state).find((item) => item.id === topicId);
  const words = mergeWords(state).filter((word) => word.topicId === topicId);
  const toggleKnown = useLearn((store) => store.toggleKnown);
  const [open, setOpen] = useState<string | null>(words[0]?.id ?? null);

  if (!topic) {
    return (
      <div>
        <h1 className="text-2xl font-medium">این موضوع نیست</h1>
        <Link to="/words" className="mt-3 inline-block text-pine">
          فهرست واژگان
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      <Link to="/words" className="text-sm text-muted">
        واژگان
      </Link>
      <header>
        <h1 className="font-serif text-4xl" dir="ltr">
          {topic.title}
        </h1>
        <p className="mt-1 text-lg">{topic.titleFa}</p>
        <p className="mt-2 text-muted">{topic.blurb}</p>
      </header>
      <div className="grid gap-2">
        {words.map((word) => {
          const known = state.knownWords.includes(word.id);
          const expanded = open === word.id;
          return (
            <Panel key={word.id}>
              <button type="button" className="flex w-full items-start justify-between gap-3 text-start" onClick={() => setOpen(expanded ? null : word.id)}>
                <span>
                  <span className="block font-serif text-2xl" dir="ltr">
                    {word.en}
                  </span>
                  <span className="text-sm text-muted" dir="ltr">
                    {word.ipa} · {word.pos} · {word.level}
                  </span>
                </span>
                <span className="text-sm text-pine">{known ? "بلدَم" : "باز کن"}</span>
              </button>
              {expanded ? (
                <div className="mt-3 grid gap-2 border-t border-line pt-3">
                  <p>{word.fa}</p>
                  <p className="font-serif" dir="ltr">
                    {word.example}
                  </p>
                  <p className="text-sm text-muted">{word.exampleFa}</p>
                  <div className="flex flex-wrap gap-2">
                    <SpeakButton text={`${word.en}. ${word.example}`} />
                    <Button variant="secondary" onClick={() => toggleKnown(word.id)}>
                      {known ? "هنوز نه" : "علامت بلدَم"}
                    </Button>
                    {state.unlocked ? (
                      <Link
                        to="/studio/word/$wordId"
                        params={{ wordId: word.id }}
                        className="inline-flex h-11 items-center rounded-lg border border-line px-3 text-sm"
                      >
                        ویرایش
                      </Link>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </Panel>
          );
        })}
      </div>
    </div>
  );
}
