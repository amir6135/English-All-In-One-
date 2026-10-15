import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lesson, Topic, Word } from "@/data/types";

export type ContentSlice = {
  grammarPatches: Record<string, Partial<Lesson>>;
  grammarAdded: Lesson[];
  grammarHidden: string[];
  wordPatches: Record<string, Partial<Word>>;
  wordsAdded: Word[];
  wordsHidden: string[];
  topicsAdded: Topic[];
};

type Score = { correct: number; total: number; at: number };

type LearnState = ContentSlice & {
  pinHash: string | null;
  unlocked: boolean;
  hydrated: boolean;
  studied: string[];
  knownWords: string[];
  bookmarks: string[];
  lastLessonId: string | null;
  scores: Record<string, Score>;
  setHydrated: (value: boolean) => void;
  setPinHash: (hash: string) => void;
  setUnlocked: (value: boolean) => void;
  markStudied: (id: string) => void;
  toggleBookmark: (id: string) => void;
  toggleKnown: (id: string) => void;
  setLastLesson: (id: string) => void;
  saveScore: (id: string, correct: number, total: number) => void;
  saveLesson: (lesson: Lesson, origin: "builtin" | "custom" | "new") => void;
  hideLesson: (id: string) => void;
  restoreLesson: (id: string) => void;
  removeCustomLesson: (id: string) => void;
  saveWord: (word: Word, origin: "builtin" | "custom" | "new") => void;
  hideWord: (id: string) => void;
  restoreWord: (id: string) => void;
  removeCustomWord: (id: string) => void;
  addTopic: (topic: Topic) => void;
  importContent: (data: ContentSlice) => void;
  resetProgress: () => void;
};

const emptyContent = (): ContentSlice => ({
  grammarPatches: {},
  grammarAdded: [],
  grammarHidden: [],
  wordPatches: {},
  wordsAdded: [],
  wordsHidden: [],
  topicsAdded: [],
});

export const useLearn = create<LearnState>()(
  persist(
    (set) => ({
      ...emptyContent(),
      pinHash: null,
      unlocked: false,
      hydrated: false,
      studied: [],
      knownWords: [],
      bookmarks: [],
      lastLessonId: null,
      scores: {},
      setHydrated: (hydrated) => set({ hydrated }),
      setPinHash: (pinHash) => set({ pinHash, unlocked: true }),
      setUnlocked: (unlocked) => set({ unlocked }),
      markStudied: (id) =>
        set((state) => ({
          studied: state.studied.includes(id) ? state.studied : [...state.studied, id],
          lastLessonId: id,
        })),
      toggleBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(id)
            ? state.bookmarks.filter((item) => item !== id)
            : [...state.bookmarks, id],
        })),
      toggleKnown: (id) =>
        set((state) => ({
          knownWords: state.knownWords.includes(id)
            ? state.knownWords.filter((item) => item !== id)
            : [...state.knownWords, id],
        })),
      setLastLesson: (lastLessonId) => set({ lastLessonId }),
      saveScore: (id, correct, total) =>
        set((state) => ({
          scores: { ...state.scores, [id]: { correct, total, at: Date.now() } },
        })),
      saveLesson: (lesson, origin) =>
        set((state) => {
          if (origin === "builtin") {
            return { grammarPatches: { ...state.grammarPatches, [lesson.id]: lesson } };
          }
          if (origin === "custom") {
            return {
              grammarAdded: state.grammarAdded.map((item) => (item.id === lesson.id ? lesson : item)),
            };
          }
          return { grammarAdded: [...state.grammarAdded, { ...lesson, custom: true }] };
        }),
      hideLesson: (id) =>
        set((state) => ({
          grammarHidden: state.grammarHidden.includes(id) ? state.grammarHidden : [...state.grammarHidden, id],
        })),
      restoreLesson: (id) =>
        set((state) => ({ grammarHidden: state.grammarHidden.filter((item) => item !== id) })),
      removeCustomLesson: (id) =>
        set((state) => ({ grammarAdded: state.grammarAdded.filter((item) => item.id !== id) })),
      saveWord: (word, origin) =>
        set((state) => {
          if (origin === "builtin") {
            return { wordPatches: { ...state.wordPatches, [word.id]: word } };
          }
          if (origin === "custom") {
            return { wordsAdded: state.wordsAdded.map((item) => (item.id === word.id ? word : item)) };
          }
          return { wordsAdded: [...state.wordsAdded, { ...word, custom: true }] };
        }),
      hideWord: (id) =>
        set((state) => ({
          wordsHidden: state.wordsHidden.includes(id) ? state.wordsHidden : [...state.wordsHidden, id],
        })),
      restoreWord: (id) =>
        set((state) => ({ wordsHidden: state.wordsHidden.filter((item) => item !== id) })),
      removeCustomWord: (id) =>
        set((state) => ({ wordsAdded: state.wordsAdded.filter((item) => item.id !== id) })),
      addTopic: (topic) => set((state) => ({ topicsAdded: [...state.topicsAdded, topic] })),
      importContent: (data) => set({ ...data }),
      resetProgress: () => set({ studied: [], knownWords: [], bookmarks: [], lastLessonId: null, scores: {} }),
    }),
    {
      name: "eai-owner",
      skipHydration: true,
      partialize: (state) => ({
        pinHash: state.pinHash,
        studied: state.studied,
        knownWords: state.knownWords,
        bookmarks: state.bookmarks,
        lastLessonId: state.lastLessonId,
        scores: state.scores,
        grammarPatches: state.grammarPatches,
        grammarAdded: state.grammarAdded,
        grammarHidden: state.grammarHidden,
        wordPatches: state.wordPatches,
        wordsAdded: state.wordsAdded,
        wordsHidden: state.wordsHidden,
        topicsAdded: state.topicsAdded,
      }),
    },
  ),
);

export async function digestPin(pin: string) {
  const data = new TextEncoder().encode(`english-all-in-one:${pin}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
