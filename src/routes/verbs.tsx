import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { VERBS } from "@/data/verbs";
import type { Verb } from "@/data/types";
import { SpeakButton } from "@/components/speak-button";
import { Button, Panel, TextInput } from "@/components/ui";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/verbs")({
  component: VerbsPage,
});

const GROUPS = ["all", "AAA", "ABB", "ABC", "ABA"] as const;

function VerbsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<(typeof GROUPS)[number]>("all");
  const [drill, setDrill] = useState(false);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VERBS.filter((verb) => {
      if (group !== "all" && verb.group !== group) return false;
      if (!q) return true;
      return `${verb.base} ${verb.past} ${verb.pp} ${verb.fa}`.toLowerCase().includes(q);
    });
  }, [query, group]);

  return (
    <div className="mx-auto grid max-w-5xl gap-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-medium">افعال بی‌قاعده</h1>
          <p className="mt-2 max-w-2xl text-muted">
            شکل پایه، گذشته و قسمت سوم. AAA هر سه یکی، ABB گذشته و قسمت سوم یکی، ABC هر سه متفاوت، ABA پایه و قسمت سوم یکی.
          </p>
        </div>
        <Button onClick={() => setDrill((value) => !value)}>{drill ? "فهرست" : "تمرین"}</Button>
      </header>
      {drill ? (
        <Drill verbs={filtered.length ? filtered : VERBS} />
      ) : (
        <>
          <TextInput value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جستجو" aria-label="جستجوی فعل" />
          <div className="flex flex-wrap gap-2">
            {GROUPS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setGroup(item)}
                className={cn(
                  "h-10 rounded-lg border px-3 text-sm",
                  group === item ? "border-pine bg-pine text-pine-fg" : "border-line bg-surface",
                )}
              >
                {item === "all" ? "همه" : item}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[36rem] text-sm">
              <thead className="bg-subtle text-muted">
                <tr>
                  <th className="px-3 py-3 text-start">پایه</th>
                  <th className="px-3 py-3 text-start">گذشته</th>
                  <th className="px-3 py-3 text-start">قسمت سوم</th>
                  <th className="px-3 py-3 text-start">معنی</th>
                  <th className="px-3 py-3 text-start">الگو</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((verb) => (
                  <tr key={verb.base} className="border-t border-line">
                    <td className="px-3 py-3 font-serif" dir="ltr">
                      {verb.base}
                    </td>
                    <td className="px-3 py-3" dir="ltr">
                      {verb.past}
                    </td>
                    <td className="px-3 py-3" dir="ltr">
                      {verb.pp}
                    </td>
                    <td className="px-3 py-3">{verb.fa}</td>
                    <td className="px-3 py-3" dir="ltr">
                      {verb.group}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function Drill({ verbs }: { verbs: Verb[] }) {
  const [index, setIndex] = useState(0);
  const [past, setPast] = useState("");
  const [pp, setPp] = useState("");
  const [checked, setChecked] = useState(false);
  const verb = verbs[index % verbs.length];

  function normalize(value: string) {
    return value.trim().toLowerCase().replace(/\s+/g, "");
  }

  if (!verb) return null;
  const pastOk = normalize(past) === normalize(verb.past);
  const ppOk = normalize(pp) === normalize(verb.pp);

  return (
    <Panel className="grid gap-3">
      <p className="text-sm text-muted">{verb.fa}</p>
      <h2 className="font-serif text-4xl" dir="ltr">
        {verb.base}
      </h2>
      <SpeakButton text={`${verb.base}, ${verb.past}, ${verb.pp}`} label="شنیدن سه شکل" />
      <label className="grid gap-2 text-sm">
        گذشته
        <TextInput value={past} onChange={(event) => setPast(event.target.value)} dir="ltr" />
      </label>
      <label className="grid gap-2 text-sm">
        قسمت سوم
        <TextInput value={pp} onChange={(event) => setPp(event.target.value)} dir="ltr" />
      </label>
      {checked ? (
        <p className={pastOk && ppOk ? "text-pine" : "text-brick"}>
          {pastOk && ppOk ? "درست است." : `شکل درست: ${verb.past} / ${verb.pp}`}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setChecked(true)}>بررسی</Button>
        <Button
          variant="secondary"
          onClick={() => {
            setIndex((value) => value + 1);
            setPast("");
            setPp("");
            setChecked(false);
          }}
        >
          بعدی
        </Button>
      </div>
    </Panel>
  );
}
