export const LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
export type Level = (typeof LEVELS)[number];

export const CATEGORIES = [
  { id: "foundations", fa: "بنیان جمله", en: "Foundations" },
  { id: "nouns", fa: "اسم و تعریف", en: "Nouns" },
  { id: "tenses", fa: "زمان‌ها", en: "Tenses" },
  { id: "modals", fa: "افعال وجهی", en: "Modals" },
  { id: "modifiers", fa: "صفت، قید، مقدار", en: "Modifiers" },
  { id: "prepositions", fa: "حرف اضافه", en: "Prepositions" },
  { id: "clauses", fa: "جمله‌واره", en: "Clauses" },
  { id: "conditionals", fa: "شرطی", en: "Conditionals" },
  { id: "voice", fa: "مجهول و نقل‌قول", en: "Voice" },
  { id: "advanced", fa: "ساختارهای پیشرفته", en: "Advanced" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export type Example = { en: string; fa: string };

export type UseCase = {
  title: string;
  body: string;
  examples: Example[];
};

export type FormRow = { name: string; pattern: string; sample: string };

export type Mistake = { wrong: string; right: string; why: string };

export type QuizQ = {
  prompt: string;
  options: string[];
  answer: number;
  explain: string;
};

export type Lesson = {
  id: string;
  level: Level;
  category: CategoryId;
  title: string;
  titleFa: string;
  formula: string;
  summary: string;
  persianNote: string;
  points: string[];
  uses: UseCase[];
  forms: FormRow[];
  signals: string[];
  mistakes: Mistake[];
  contrast: string;
  quiz: QuizQ[];
  custom?: boolean;
};

export type Topic = {
  id: string;
  title: string;
  titleFa: string;
  blurb: string;
  level: Level;
  custom?: boolean;
};

export type Word = {
  id: string;
  topicId: string;
  en: string;
  ipa: string;
  pos: string;
  fa: string;
  example: string;
  exampleFa: string;
  level: Level;
  custom?: boolean;
};

export type Verb = {
  base: string;
  past: string;
  pp: string;
  fa: string;
  group: "AAA" | "ABB" | "ABC" | "ABA";
};

export type SoundLesson = {
  id: string;
  title: string;
  titleFa: string;
  summary: string;
  pairs: { a: string; b: string; note: string }[];
  tip: string;
};

export type Confusion = {
  id: string;
  a: string;
  b: string;
  fa: string;
  tip: string;
  quiz: QuizQ;
};

export const LEVEL_FA: Record<Level, string> = {
  A1: "شروع",
  A2: "پایه",
  B1: "میانی",
  B2: "فوق میانی",
  C1: "پیشرفته",
};
