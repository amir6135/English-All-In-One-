import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SOUNDS } from "@/data/extra";
import { SpeakButton } from "@/components/speak-button";
import { Panel } from "@/components/ui";

export const Route = createFileRoute("/sounds")({
  component: SoundsPage,
});

function SoundsPage() {
  const [open, setOpen] = useState(SOUNDS[0]?.id ?? "");

  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      <header>
        <h1 className="text-3xl font-medium">تلفظ</h1>
        <p className="mt-2 text-muted">
          ده نقطه‌ای که برای گوش فارسی معمولاً سخت است. جفت‌ها را بشنوید و فرق را با دهان، نه فقط با چشم، تمرین کنید.
        </p>
      </header>
      {SOUNDS.map((sound) => {
        const expanded = open === sound.id;
        return (
          <Panel key={sound.id}>
            <button type="button" className="w-full text-start" onClick={() => setOpen(expanded ? "" : sound.id)}>
              <h2 className="font-serif text-2xl" dir="ltr">
                {sound.title}
              </h2>
              <p>{sound.titleFa}</p>
            </button>
            {expanded ? (
              <div className="mt-3 grid gap-3 border-t border-line pt-3">
                <p>{sound.summary}</p>
                {sound.pairs.map((pair) => (
                  <div key={pair.a} className="grid gap-2 rounded-lg bg-subtle p-3">
                    <p dir="ltr">{pair.a}</p>
                    <p dir="ltr">{pair.b}</p>
                    <p className="text-sm text-muted">{pair.note}</p>
                    <SpeakButton text={pair.a.split("/")[0] ?? pair.a} label="اولی" />
                    <SpeakButton text={pair.b.split("/")[0] ?? pair.b} label="دومی" />
                  </div>
                ))}
                <p className="text-sm">{sound.tip}</p>
              </div>
            ) : null}
          </Panel>
        );
      })}
    </div>
  );
}
