import { useState } from "react";
import type { QuizQ } from "@/data/types";
import { useLearn } from "@/lib/store";
import { Button, Panel } from "@/components/ui";
import { cn } from "@/lib/cn";

export function Quiz({ id, questions }: { id: string; questions: QuizQ[] }) {
  const saveScore = useLearn((state) => state.saveScore);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  if (!questions.length) return null;
  const current = questions[index];

  function choose(option: number) {
    if (picked !== null || !current) return;
    setPicked(option);
    if (option === current.answer) setCorrect((value) => value + 1);
  }

  function next() {
    if (!current || picked === null) return;
    const score = correct;
    if (index + 1 >= questions.length) {
      setDone(true);
      saveScore(id, score, questions.length);
      return;
    }
    setIndex((value) => value + 1);
    setPicked(null);
  }

  if (done) {
    return (
      <Panel>
        <h3 className="text-lg font-medium">نتیجه</h3>
        <p className="mt-2 tabular-nums">
          {correct} از {questions.length}
        </p>
        <Button
          className="mt-4"
          variant="secondary"
          onClick={() => {
            setIndex(0);
            setPicked(null);
            setCorrect(0);
            setDone(false);
          }}
        >
          دوباره
        </Button>
      </Panel>
    );
  }

  if (!current) return null;

  return (
    <Panel>
      <p className="text-sm text-muted tabular-nums">
        {index + 1} / {questions.length}
      </p>
      <h3 className="mt-2 text-lg font-medium" dir="ltr">
        {current.prompt}
      </h3>
      <div className="mt-4 grid gap-2">
        {current.options.map((option, optionIndex) => {
          const revealed = picked !== null;
          const isAnswer = optionIndex === current.answer;
          const isPicked = optionIndex === picked;
          return (
            <button
              key={`${optionIndex}-${option}`}
              type="button"
              disabled={revealed}
              onClick={() => choose(optionIndex)}
              className={cn(
                "press min-h-11 rounded-lg border border-line px-3 py-2 text-start",
                revealed && isAnswer && "border-pine bg-subtle text-pine",
                revealed && isPicked && !isAnswer && "border-brick text-brick",
              )}
            >
              <span dir="auto">{option}</span>
            </button>
          );
        })}
      </div>
      {picked !== null ? (
        <div className="mt-4">
          <p className="text-sm text-muted">{current.explain}</p>
          <Button className="mt-3" onClick={next}>
            {index + 1 >= questions.length ? "پایان" : "بعدی"}
          </Button>
        </div>
      ) : null}
    </Panel>
  );
}
