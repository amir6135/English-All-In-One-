import { LESSONS } from "@/data/grammar";
import { TOPICS, WORDS } from "@/data/vocab";
import type { Lesson, Topic, Word } from "@/data/types";
import type { ContentSlice } from "@/lib/store";

export function mergeLessons(content: ContentSlice): Lesson[] {
  const hidden = new Set(content.grammarHidden);
  const base = LESSONS.filter((lesson) => !hidden.has(lesson.id)).map((lesson) => {
    const patch = content.grammarPatches[lesson.id];
    return patch ? { ...lesson, ...patch, id: lesson.id, custom: false } : lesson;
  });
  const added = content.grammarAdded
    .filter((lesson) => !hidden.has(lesson.id))
    .map((lesson) => ({ ...lesson, custom: true }));
  return [...base, ...added];
}

export function mergeTopics(content: ContentSlice): Topic[] {
  return [...TOPICS, ...content.topicsAdded];
}

export function mergeWords(content: ContentSlice): Word[] {
  const hidden = new Set(content.wordsHidden);
  const base = WORDS.filter((word) => !hidden.has(word.id)).map((word) => {
    const patch = content.wordPatches[word.id];
    return patch ? { ...word, ...patch, id: word.id, custom: false } : word;
  });
  const added = content.wordsAdded
    .filter((word) => !hidden.has(word.id))
    .map((word) => ({ ...word, custom: true }));
  return [...base, ...added];
}

export function blankLesson(): Lesson {
  return {
    id: "",
    level: "A1",
    category: "foundations",
    title: "",
    titleFa: "",
    formula: "",
    summary: "",
    persianNote: "",
    points: [""],
    uses: [{ title: "", body: "", examples: [{ en: "", fa: "" }] }],
    forms: [{ name: "مثبت", pattern: "", sample: "" }],
    signals: [],
    mistakes: [{ wrong: "", right: "", why: "" }],
    contrast: "",
    quiz: [{ prompt: "", options: ["", "", "", ""], answer: 0, explain: "" }],
    custom: true,
  };
}

export function blankWord(topicId: string): Word {
  return {
    id: "",
    topicId,
    en: "",
    ipa: "",
    pos: "noun",
    fa: "",
    example: "",
    exampleFa: "",
    level: "A1",
    custom: true,
  };
}

export function lessonSlug(title: string) {
  const base = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "lesson";
  return `custom-${base}-${Date.now().toString(36)}`;
}
