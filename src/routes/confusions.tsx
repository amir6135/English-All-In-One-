import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CONFUSIONS } from "@/data/extra";
import { Panel } from "@/components/ui";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/confusions")({
  component: ConfusionsPage,
});

function ConfusionsPage() {
  const [picked, setPicked] = useState<Record<string, number>>({});

  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      <header>
        <h1 className="text-3xl font-medium">جفت‌های گیج‌کننده</h1>
        <p className="mt-2 text-muted">فرق را کوتاه بخوانید، بعد همان‌جا یک پرسش را جواب بدهید.</p>
      </header>
      {CONFUSIONS.map((item) => {
        const choice = picked[item.id];
        return (
          <Panel key={item.id} className="grid gap-2">
            <h2 className="font-serif text-2xl" dir="ltr">
              {item.a} / {item.b}
            </h2>
            <p>{item.fa}</p>
            <p className="text-sm text-muted" dir="ltr">
              {item.tip}
            </p>
            <p className="mt-2 font-medium" dir="ltr">
              {item.quiz.prompt}
            </p>
            <div className="grid gap-2">
              {item.quiz.options.map((option, index) => {
                const revealed = choice !== undefined;
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={revealed}
                    onClick={() => setPicked((current) => ({ ...current, [item.id]: index }))}
                    className={cn(
                      "min-h-11 rounded-lg border border-line px-3 py-2 text-start",
                      revealed && index === item.quiz.answer && "border-pine text-pine",
                      revealed && index === choice && index !== item.quiz.answer && "border-brick text-brick",
                    )}
                  >
                    <span dir="auto">{option}</span>
                  </button>
                );
              })}
            </div>
            {choice !== undefined ? <p className="text-sm text-muted">{item.quiz.explain}</p> : null}
          </Panel>
        );
      })}
    </div>
  );
}
