import { Link, useRouterState } from "@tanstack/react-router";
import {
  AudioLines,
  BookOpenText,
  House,
  Library,
  PenLine,
  Search,
  Shuffle,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { VERBS } from "@/data/verbs";
import { mergeLessons, mergeWords } from "@/lib/curriculum";
import { cn } from "@/lib/cn";
import { useLearn } from "@/lib/store";
import { TextInput } from "@/components/ui";

const NAV = [
  { to: "/", label: "خانه", icon: House, exact: true },
  { to: "/grammar", label: "گرامر", icon: BookOpenText, exact: false },
  { to: "/words", label: "واژگان", icon: Library, exact: false },
  { to: "/practice", label: "تمرین", icon: Shuffle, exact: false },
] as const;

type AppPath = "/" | "/grammar" | "/words" | "/practice" | "/sounds" | "/verbs" | "/studio";

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hydrated = useLearn((state) => state.hydrated);
  const unlocked = useLearn((state) => state.unlocked);
  const content = useLearn((state) => state);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);

  useEffect(() => {
    let active = true;
    void Promise.resolve(useLearn.persist.rehydrate()).finally(() => {
      if (active) useLearn.setState({ hydrated: true });
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setMore(false);
  }, [pathname]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 1) return { lessons: [], words: [], verbs: [] };
    const lessons = mergeLessons(content)
      .filter((lesson) =>
        `${lesson.title} ${lesson.titleFa} ${lesson.summary} ${lesson.formula}`.toLowerCase().includes(q),
      )
      .slice(0, 6);
    const words = mergeWords(content)
      .filter((word) => `${word.en} ${word.fa} ${word.example}`.toLowerCase().includes(q))
      .slice(0, 6);
    const verbs = VERBS.filter((verb) => `${verb.base} ${verb.past} ${verb.pp} ${verb.fa}`.toLowerCase().includes(q)).slice(0, 5);
    return { lessons, words, verbs };
  }, [query, content]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <aside className="fixed inset-y-0 start-0 z-20 hidden w-60 flex-col border-e border-line bg-surface md:flex">
        <div className="px-5 pt-6 pb-4">
          <p className="font-serif text-xl text-pine" dir="ltr">
            English All-in-One
          </p>
          <p className="mt-1 text-sm text-muted">گرامر، واژه، تلفظ</p>
        </div>
        <nav className="grid gap-1 px-3">
          {NAV.map((item) => (
            <NavLink key={item.to} {...item} />
          ))}
          <NavLink to="/sounds" label="تلفظ" icon={AudioLines} exact={false} />
          <NavLink to="/verbs" label="افعال بی‌قاعده" icon={BookOpenText} exact={false} />
          <NavLink to="/studio" label="استودیو مالک" icon={PenLine} exact={false} />
        </nav>
        <p className="mt-auto px-5 pb-6 text-sm text-muted">
          {unlocked ? "حالت ویرایش روشن است" : "برای ویرایش، استودیو را باز کنید"}
        </p>
      </aside>

      <div className="md:ps-60">
        <header className="sticky top-0 z-30 border-b border-line bg-bg/95 backdrop-blur-sm">
          <div className="flex items-center gap-2 px-4 py-3">
            <Link to="/" className="font-serif text-lg text-pine md:hidden" dir="ltr">
              All-in-One
            </Link>
            <button
              type="button"
              className="press ms-auto inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-sm text-muted md:ms-0 md:min-w-72"
              onClick={() => setOpen(true)}
            >
              <Search className="size-4" />
              جستجو
            </button>
            <Link
              to="/studio"
              className={cn(
                "press inline-flex h-11 items-center rounded-lg px-3 text-sm md:hidden",
                unlocked ? "bg-pine text-pine-fg" : "border border-line bg-surface",
              )}
            >
              ویرایش
            </Link>
          </div>
        </header>
        <main className="px-4 pt-5 pb-28 md:px-8 md:pt-8 md:pb-16">{children}</main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface md:hidden">
        <div className="grid grid-cols-5">
          {NAV.map((item) => (
            <MobileLink key={item.to} {...item} pathname={pathname} />
          ))}
          <button type="button" className="grid h-16 place-items-center text-xs text-muted" onClick={() => setMore((value) => !value)}>
            <AudioLines className="size-5" />
            بیشتر
          </button>
        </div>
        {more ? (
          <div className="panel-in grid gap-1 border-t border-line p-3">
            <Link to="/sounds" className="rounded-lg px-3 py-3 hover:bg-subtle">
              تلفظ
            </Link>
            <Link to="/verbs" className="rounded-lg px-3 py-3 hover:bg-subtle">
              افعال بی‌قاعده
            </Link>
            <Link to="/confusions" className="rounded-lg px-3 py-3 hover:bg-subtle">
              جفت‌های گیج‌کننده
            </Link>
            <Link to="/studio" className="rounded-lg px-3 py-3 hover:bg-subtle">
              استودیو مالک
            </Link>
          </div>
        ) : null}
      </nav>

      {open ? (
        <div className="fixed inset-0 z-40 bg-fg/30" onClick={() => setOpen(false)}>
          <div
            className="panel-in mx-auto mt-16 w-[min(40rem,calc(100%-2rem))] rounded-xl border border-line bg-surface p-4 shadow-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <TextInput
              autoFocus
              placeholder="درس، واژه یا فعل"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="جستجو"
            />
            <div className="mt-4 grid max-h-[60dvh] gap-4 overflow-auto">
              <ResultGroup title="گرامر">
                {results.lessons.map((lesson) => (
                  <Link key={lesson.id} to="/grammar/$lessonId" params={{ lessonId: lesson.id }} className="block rounded-lg px-2 py-2 hover:bg-subtle">
                    <span className="text-sm text-muted">{lesson.level}</span>
                    <span className="mx-2 font-serif" dir="ltr">
                      {lesson.title}
                    </span>
                    <span>{lesson.titleFa}</span>
                  </Link>
                ))}
              </ResultGroup>
              <ResultGroup title="واژه">
                {results.words.map((word) => (
                  <Link key={word.id} to="/words/$topicId" params={{ topicId: word.topicId }} className="block rounded-lg px-2 py-2 hover:bg-subtle">
                    <span className="font-serif" dir="ltr">
                      {word.en}
                    </span>
                    <span className="ms-2 text-muted">{word.fa}</span>
                  </Link>
                ))}
              </ResultGroup>
              <ResultGroup title="فعل">
                {results.verbs.map((verb) => (
                  <Link key={verb.base} to="/verbs" className="block rounded-lg px-2 py-2 hover:bg-subtle" dir="ltr">
                    {verb.base} · {verb.past} · {verb.pp}
                  </Link>
                ))}
              </ResultGroup>
              {hydrated && query && !results.lessons.length && !results.words.length && !results.verbs.length ? (
                <p className="text-sm text-muted">چیزی پیدا نشد.</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ResultGroup({ title, children }: { title: string; children: ReactNode }) {
  const list = Array.isArray(children) ? children : [children];
  if (!list.some(Boolean)) return null;
  return (
    <div>
      <p className="mb-1 text-sm text-muted">{title}</p>
      <div className="grid">{children}</div>
    </div>
  );
}

function NavLink({
  to,
  label,
  icon: Icon,
  exact,
}: {
  to: AppPath;
  label: string;
  icon: typeof House;
  exact: boolean;
}) {
  return (
    <Link
      to={to}
      activeOptions={{ exact }}
      className="flex h-11 items-center gap-3 rounded-lg px-3 text-sm text-fg"
      activeProps={{
        className: "flex h-11 items-center gap-3 rounded-lg bg-subtle px-3 text-sm font-medium text-pine",
      }}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
}

function MobileLink({
  to,
  label,
  icon: Icon,
  exact,
  pathname,
}: {
  to: AppPath;
  label: string;
  icon: typeof House;
  exact: boolean;
  pathname: string;
}) {
  const active = exact ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
  return (
    <Link to={to} className={cn("grid h-16 place-items-center text-xs", active ? "text-pine" : "text-muted")}>
      <Icon className="size-5" />
      {label}
    </Link>
  );
}
