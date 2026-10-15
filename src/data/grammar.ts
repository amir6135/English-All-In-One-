import { LESSONS_A } from "./lessons-a";
import { LESSONS_B } from "./lessons-b";
import { LESSONS_C } from "./lessons-c";
import type { Lesson } from "./types";

export const LESSONS: Lesson[] = [...LESSONS_A, ...LESSONS_B, ...LESSONS_C];

export const BUILTIN_LESSON_IDS = new Set(LESSONS.map((lesson) => lesson.id));
