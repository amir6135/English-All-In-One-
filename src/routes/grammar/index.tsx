import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CATEGORIES, LEVELS, LEVEL_FA, type Level } from "@/data/types";
import { mergeLessons } from "@/lib/curriculum";
import { useLearn } from "@/lib/store";
import { cn } from "@/lib/cn";

type GrammarSearch = { level?: Level };

export const Route = createFileRoute("/grammar/")({
  validateSearch: (search: Record<string, unknown>): GrammarSearch => {
    const level = search.level;
    return LEVELS.includes(level as Level) ? { level: level as Level } : {};
  },
  component: GrammarPage,
});

function GrammarPage() {
  const { level } = Route.useSearch();
  const state = useLearn();
  const lessons = mergeLessons(state);
  const [category, setCategory] = useState<string>("all");
  const [savedOnly, setSavedOnly] = useState(false);

  const visible = useMemo(() => {
    return lessons.filter((lesson) => {
      if (level && lesson.level !== level) return false;
      if (category !== "all" && lesson.category !== category) return false;
      if (savedOnly && !state.bookmarks.includes(lesson.id)) return false;
      return true;
    });
  }, [lessons, level, category, savedOnly, state.bookmarks]);

  return (
    <div className="mx-auto grid max-w-5xl gap-5">
      <header>
        <h1 className="text-3xl font-medium">گرامر</h1>
        <p className="mt-2 max-w-2xl text-muted">
          از ساخت جمله تا ساختارهای سطح بالا. هر درس فرمول، جزئیات، خطای رایج فارسی‌زبان و سه پرسش دارد.
        </p>
      </header>
      <div className="flex flex-wrap gap-2">
        <FilterLink level={undefined} current={level} label="همه" />
        {LEVELS.map((item) => (
          <FilterLink key={item} level={item} current={level} label={`${item} ${LEVEL_FA[item]}`} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Chip active={category === "all"} onClick={() => setCategory("all")}>
          همهٔ دسته‌ها
        </Chip>
        {CATEGORIES.map((item) => (
          <Chip key={item.id} active={category === item.id} onClick={() => setCategory(item.id)}>
            {item.fa}
          </Chip>
        ))}
        <Chip active={savedOnly} onClick={() => setSavedOnly((value) => !value)}>
          نشان‌شده
        </Chip>
      </div>
      <div className="grid gap-6">
        {CATEGORIES.map((item) => {
          const group = visible.filter((lesson) => lesson.category === item.id);
          if (!group.length) return null;
          return (
            <section key={item.id}>
              <h2 className="text-sm text-muted">
                {item.fa}
                <span className="ms-2" dir="ltr">
                  {item.en}
                </span>
              </h2>
              <div className="mt-2 grid gap-2">
                {group.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to="/grammar/$lessonId"
                    params={{ lessonId: lesson.id }}
                    className="rounded-xl border border-line bg-surface px-4 py-3"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-serif text-xl" dir="ltr">
                        {lesson.title}
                      </h3>
                      <span className="text-sm text-muted">{lesson.level}</span>
                    </div>
                    <p className="mt-1">{lesson.titleFa}</p>
                    <p className="mt-1 text-sm text-muted" dir="ltr">
                      {lesson.formula}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
        {!visible.length ? <p className="text-muted">درسی با این صافی نیست.</p> : null}
      </div>
    </div>
  );
}

function FilterLink({ level, current, label }: { level?: Level; current?: Level; label: string }) {
  const active = level === current;
  return (
    <Link
      to="/grammar"
      search={{ level }}
      className={cn(
        "inline-flex h-11 items-center rounded-lg border px-3 text-sm",
        active ? "border-pine bg-pine text-pine-fg" : "border-line bg-surface",
      )}
    >
      {label}
    </Link>
  );
}

function Chip({ active, children, onClick }: { active: boolean; children: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "press h-10 rounded-lg border px-3 text-sm",
        active ? "border-pine bg-subtle text-pine" : "border-line bg-surface",
      )}
    >
      {children}
    </button>
  );
}
