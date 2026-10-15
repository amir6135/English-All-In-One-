import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CATEGORIES, LEVELS, type CategoryId, type Lesson, type Level, type Topic, type Word } from "@/data/types";
import { lessonSlug } from "@/lib/curriculum";
import { useLearn } from "@/lib/store";
import { Button, Field, Panel, SelectInput, TextArea, TextInput } from "@/components/ui";

export function LessonEditor({
  initial,
  origin,
}: {
  initial: Lesson;
  origin: "builtin" | "custom" | "new";
}) {
  const navigate = useNavigate();
  const saveLesson = useLearn((state) => state.saveLesson);
  const hideLesson = useLearn((state) => state.hideLesson);
  const removeCustomLesson = useLearn((state) => state.removeCustomLesson);
  const [lesson, setLesson] = useState<Lesson>(initial);
  const [error, setError] = useState("");

  function update(patch: Partial<Lesson>) {
    setLesson((current) => ({ ...current, ...patch }));
  }

  function save() {
    if (!lesson.title.trim() || !lesson.titleFa.trim() || !lesson.summary.trim()) {
      setError("عنوان انگلیسی، عنوان فارسی و خلاصه لازم است.");
      return;
    }
    const quiz = lesson.quiz.filter((item) => item.prompt.trim());
    if (!quiz.length) {
      setError("دست‌کم یک پرسش با متن لازم است.");
      return;
    }
    const next: Lesson = {
      ...lesson,
      title: lesson.title.trim(),
      titleFa: lesson.titleFa.trim(),
      points: lesson.points.map((point) => point.trim()).filter(Boolean),
      signals: lesson.signals.map((signal) => signal.trim()).filter(Boolean),
      quiz: quiz.map((item) => ({
        ...item,
        options: [...item.options, "", "", "", ""].slice(0, 4),
      })),
      id: origin === "new" ? lessonSlug(lesson.title) : lesson.id,
    };
    saveLesson(next, origin);
    void navigate({ to: "/grammar/$lessonId", params: { lessonId: next.id } });
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        save();
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="عنوان انگلیسی">
          <TextInput value={lesson.title} onChange={(event) => update({ title: event.target.value })} dir="ltr" />
        </Field>
        <Field label="عنوان فارسی">
          <TextInput value={lesson.titleFa} onChange={(event) => update({ titleFa: event.target.value })} />
        </Field>
        <Field label="سطح">
          <SelectInput value={lesson.level} onChange={(event) => update({ level: event.target.value as Level })}>
            {LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label="دسته">
          <SelectInput
            value={lesson.category}
            onChange={(event) => update({ category: event.target.value as CategoryId })}
          >
            {CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.fa}
              </option>
            ))}
          </SelectInput>
        </Field>
      </div>
      <Field label="فرمول">
        <TextInput value={lesson.formula} onChange={(event) => update({ formula: event.target.value })} dir="ltr" />
      </Field>
      <Field label="خلاصه">
        <TextArea value={lesson.summary} onChange={(event) => update({ summary: event.target.value })} />
      </Field>
      <Field label="نکتهٔ فارسی‌زبان">
        <TextArea value={lesson.persianNote} onChange={(event) => update({ persianNote: event.target.value })} />
      </Field>
      <Field label="با چه چیزی قاطی می‌شود">
        <TextArea value={lesson.contrast} onChange={(event) => update({ contrast: event.target.value })} />
      </Field>
      <Field label="ریز جزئیات، هر خط یکی">
        <TextArea
          value={lesson.points.join("\n")}
          onChange={(event) => update({ points: event.target.value.split("\n") })}
        />
      </Field>
      <Field label="واژه‌های همراه، با ویرگول">
        <TextInput
          dir="ltr"
          value={lesson.signals.join(", ")}
          onChange={(event) => update({ signals: event.target.value.split(",") })}
        />
      </Field>

      <section className="grid gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">کاربرد و مثال</h2>
          <Button
            variant="secondary"
            onClick={() =>
              update({
                uses: [...lesson.uses, { title: "", body: "", examples: [{ en: "", fa: "" }] }],
              })
            }
          >
            کاربرد تازه
          </Button>
        </div>
        {lesson.uses.map((use, useIndex) => (
          <Panel key={useIndex} className="grid gap-3">
            <TextInput
              placeholder="عنوان کاربرد"
              value={use.title}
              onChange={(event) => {
                const uses = lesson.uses.slice();
                uses[useIndex] = { ...use, title: event.target.value };
                update({ uses });
              }}
            />
            <TextArea
              placeholder="توضیح"
              value={use.body}
              onChange={(event) => {
                const uses = lesson.uses.slice();
                uses[useIndex] = { ...use, body: event.target.value };
                update({ uses });
              }}
            />
            {use.examples.map((example, exampleIndex) => (
              <div key={exampleIndex} className="grid gap-2 sm:grid-cols-2">
                <TextInput
                  dir="ltr"
                  placeholder="English"
                  value={example.en}
                  onChange={(event) => {
                    const examples = use.examples.slice();
                    examples[exampleIndex] = { ...example, en: event.target.value };
                    const uses = lesson.uses.slice();
                    uses[useIndex] = { ...use, examples };
                    update({ uses });
                  }}
                />
                <TextInput
                  placeholder="ترجمه"
                  value={example.fa}
                  onChange={(event) => {
                    const examples = use.examples.slice();
                    examples[exampleIndex] = { ...example, fa: event.target.value };
                    const uses = lesson.uses.slice();
                    uses[useIndex] = { ...use, examples };
                    update({ uses });
                  }}
                />
              </div>
            ))}
            <Button
              variant="ghost"
              onClick={() => {
                const uses = lesson.uses.slice();
                uses[useIndex] = { ...use, examples: [...use.examples, { en: "", fa: "" }] };
                update({ uses });
              }}
            >
              مثال تازه
            </Button>
          </Panel>
        ))}
      </section>

      <section className="grid gap-3">
        <h2 className="font-medium">شکل‌ها</h2>
        {lesson.forms.map((form, index) => (
          <div key={index} className="grid gap-2 sm:grid-cols-3">
            <TextInput
              value={form.name}
              onChange={(event) => {
                const forms = lesson.forms.slice();
                forms[index] = { ...form, name: event.target.value };
                update({ forms });
              }}
            />
            <TextInput
              dir="ltr"
              value={form.pattern}
              onChange={(event) => {
                const forms = lesson.forms.slice();
                forms[index] = { ...form, pattern: event.target.value };
                update({ forms });
              }}
            />
            <TextInput
              dir="ltr"
              value={form.sample}
              onChange={(event) => {
                const forms = lesson.forms.slice();
                forms[index] = { ...form, sample: event.target.value };
                update({ forms });
              }}
            />
          </div>
        ))}
      </section>

      <section className="grid gap-3">
        <h2 className="font-medium">خطاها</h2>
        {lesson.mistakes.map((mistake, index) => (
          <Panel key={index} className="grid gap-2">
            <TextInput
              dir="ltr"
              placeholder="نادرست"
              value={mistake.wrong}
              onChange={(event) => {
                const mistakes = lesson.mistakes.slice();
                mistakes[index] = { ...mistake, wrong: event.target.value };
                update({ mistakes });
              }}
            />
            <TextInput
              dir="ltr"
              placeholder="درست"
              value={mistake.right}
              onChange={(event) => {
                const mistakes = lesson.mistakes.slice();
                mistakes[index] = { ...mistake, right: event.target.value };
                update({ mistakes });
              }}
            />
            <TextArea
              placeholder="چرا"
              value={mistake.why}
              onChange={(event) => {
                const mistakes = lesson.mistakes.slice();
                mistakes[index] = { ...mistake, why: event.target.value };
                update({ mistakes });
              }}
            />
          </Panel>
        ))}
        <Button
          variant="secondary"
          onClick={() => update({ mistakes: [...lesson.mistakes, { wrong: "", right: "", why: "" }] })}
        >
          خطای تازه
        </Button>
      </section>

      <section className="grid gap-3">
        <h2 className="font-medium">پرسش‌ها</h2>
        {lesson.quiz.map((question, index) => (
          <Panel key={index} className="grid gap-2">
            <TextInput
              dir="ltr"
              placeholder="پرسش"
              value={question.prompt}
              onChange={(event) => {
                const quiz = lesson.quiz.slice();
                quiz[index] = { ...question, prompt: event.target.value };
                update({ quiz });
              }}
            />
            {question.options.map((option, optionIndex) => (
              <TextInput
                key={optionIndex}
                dir="auto"
                value={option}
                onChange={(event) => {
                  const options = question.options.slice();
                  options[optionIndex] = event.target.value;
                  const quiz = lesson.quiz.slice();
                  quiz[index] = { ...question, options };
                  update({ quiz });
                }}
              />
            ))}
            <Field label="شمارهٔ گزینهٔ درست، از ۱">
              <TextInput
                type="number"
                min={1}
                max={4}
                value={question.answer + 1}
                onChange={(event) => {
                  const answer = Math.min(3, Math.max(0, Number(event.target.value) - 1));
                  const quiz = lesson.quiz.slice();
                  quiz[index] = { ...question, answer };
                  update({ quiz });
                }}
              />
            </Field>
            <TextArea
              placeholder="توضیح جواب"
              value={question.explain}
              onChange={(event) => {
                const quiz = lesson.quiz.slice();
                quiz[index] = { ...question, explain: event.target.value };
                update({ quiz });
              }}
            />
          </Panel>
        ))}
        <Button
          variant="secondary"
          onClick={() =>
            update({
              quiz: [...lesson.quiz, { prompt: "", options: ["", "", "", ""], answer: 0, explain: "" }],
            })
          }
        >
          پرسش تازه
        </Button>
      </section>

      {error ? <p className="text-sm text-brick">{error}</p> : null}
      <div className="flex flex-wrap gap-2">
        <Button type="submit">ذخیره</Button>
        {origin === "builtin" ? (
          <Button
            variant="secondary"
            onClick={() => {
              hideLesson(lesson.id);
              void navigate({ to: "/grammar" });
            }}
          >
            پنهان از فهرست
          </Button>
        ) : null}
        {origin === "custom" ? (
          <Button
            variant="secondary"
            onClick={() => {
              removeCustomLesson(lesson.id);
              void navigate({ to: "/studio" });
            }}
          >
            حذف این درس سفارشی
          </Button>
        ) : null}
      </div>
    </form>
  );
}

export function WordEditor({
  initial,
  origin,
  topics,
}: {
  initial: Word;
  origin: "builtin" | "custom" | "new";
  topics: Topic[];
}) {
  const navigate = useNavigate();
  const saveWord = useLearn((state) => state.saveWord);
  const addTopic = useLearn((state) => state.addTopic);
  const hideWord = useLearn((state) => state.hideWord);
  const removeCustomWord = useLearn((state) => state.removeCustomWord);
  const [word, setWord] = useState(initial);
  const [freshTopic, setFreshTopic] = useState(false);
  const [topic, setTopic] = useState<Topic>({
    id: "",
    title: "",
    titleFa: "",
    blurb: "",
    level: "A1",
    custom: true,
  });
  const [error, setError] = useState("");

  function save() {
    if (!word.en.trim() || !word.fa.trim()) {
      setError("واژه و معنی لازم است.");
      return;
    }
    let topicId = word.topicId;
    if (freshTopic) {
      if (!topic.titleFa.trim() || !topic.title.trim()) {
        setError("برای موضوع تازه، عنوان فارسی و انگلیسی لازم است.");
        return;
      }
      const id = lessonSlug(topic.title);
      addTopic({ ...topic, id, custom: true });
      topicId = id;
    }
    const next: Word = {
      ...word,
      topicId,
      en: word.en.trim(),
      fa: word.fa.trim(),
      id: origin === "new" ? `${topicId}-${lessonSlug(word.en)}` : word.id,
    };
    saveWord(next, origin);
    void navigate({ to: "/words/$topicId", params: { topicId } });
  }

  return (
    <form
      className="grid gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        save();
      }}
    >
      <Field label="موضوع">
        <SelectInput
          value={freshTopic ? "__new" : word.topicId}
          onChange={(event) => {
            if (event.target.value === "__new") setFreshTopic(true);
            else {
              setFreshTopic(false);
              setWord({ ...word, topicId: event.target.value });
            }
          }}
        >
          {topics.map((item) => (
            <option key={item.id} value={item.id}>
              {item.titleFa}
            </option>
          ))}
          <option value="__new">موضوع تازه</option>
        </SelectInput>
      </Field>
      {freshTopic ? (
        <Panel className="grid gap-3">
          <Field label="عنوان انگلیسی موضوع">
            <TextInput dir="ltr" value={topic.title} onChange={(event) => setTopic({ ...topic, title: event.target.value })} />
          </Field>
          <Field label="عنوان فارسی موضوع">
            <TextInput value={topic.titleFa} onChange={(event) => setTopic({ ...topic, titleFa: event.target.value })} />
          </Field>
          <Field label="معرفی کوتاه">
            <TextInput value={topic.blurb} onChange={(event) => setTopic({ ...topic, blurb: event.target.value })} />
          </Field>
        </Panel>
      ) : null}
      <Field label="واژه">
        <TextInput dir="ltr" value={word.en} onChange={(event) => setWord({ ...word, en: event.target.value })} />
      </Field>
      <Field label="آوانویسی">
        <TextInput dir="ltr" value={word.ipa} onChange={(event) => setWord({ ...word, ipa: event.target.value })} />
      </Field>
      <Field label="نقش">
        <TextInput dir="ltr" value={word.pos} onChange={(event) => setWord({ ...word, pos: event.target.value })} />
      </Field>
      <Field label="معنی">
        <TextInput value={word.fa} onChange={(event) => setWord({ ...word, fa: event.target.value })} />
      </Field>
      <Field label="مثال">
        <TextInput dir="ltr" value={word.example} onChange={(event) => setWord({ ...word, example: event.target.value })} />
      </Field>
      <Field label="ترجمهٔ مثال">
        <TextInput value={word.exampleFa} onChange={(event) => setWord({ ...word, exampleFa: event.target.value })} />
      </Field>
      <Field label="سطح">
        <SelectInput value={word.level} onChange={(event) => setWord({ ...word, level: event.target.value as Level })}>
          {LEVELS.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </SelectInput>
      </Field>
      {error ? <p className="text-sm text-brick">{error}</p> : null}
      <div className="flex flex-wrap gap-2">
        <Button type="submit">ذخیره</Button>
        {origin === "builtin" ? (
          <Button
            variant="secondary"
            onClick={() => {
              hideWord(word.id);
              void navigate({ to: "/words/$topicId", params: { topicId: word.topicId } });
            }}
          >
            پنهان کردن
          </Button>
        ) : null}
        {origin === "custom" ? (
          <Button
            variant="secondary"
            onClick={() => {
              removeCustomWord(word.id);
              void navigate({ to: "/studio" });
            }}
          >
            حذف واژهٔ سفارشی
          </Button>
        ) : null}
      </div>
    </form>
  );
}
