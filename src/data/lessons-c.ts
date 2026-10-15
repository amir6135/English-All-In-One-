import type { Lesson } from "./types";

export const LESSONS_C: Lesson[] = [
  {
    id: "adjectives-adverbs",
    level: "A2",
    category: "modifiers",
    title: "Adjectives and adverbs",
    titleFa: "صفت و قید",
    formula: "opinion–size–age–shape–color–origin–material",
    summary:
      "صفت اسم را وصف می‌کند و معمولاً قبل از آن یا بعد از be می‌آید. قید فعل، صفت یا قید دیگر را وصف می‌کند و اغلب ly می‌گیرد. ترتیب چند صفت تقریباً ثابت است.",
    persianNote:
      "در فارسی صفت بعد از اسم است. در انگلیسی قبل از اسم: a quiet old man. همچنین good صفت است و well قید. خیلی‌ها He speaks English good می‌گویند که باید well باشد.",
    points: [
      "ترتیب رایج صفت: نظر، اندازه، سن، شکل، رنگ، مبدأ، جنس، کاربرد. a lovely small old round blue Chinese porcelain tea cup بیش از حد است؛ معمولاً دو یا سه صفت کافی است.",
      "بعد از فعل ربطی صفت می‌آید نه قید: feel, seem, look, taste, smell, sound, become. The soup tastes good.",
      "قید از صفت: slow → slowly. استثنا: fast, hard, late, early هم صفت‌اند هم قید. hardly یعنی «به‌سختی / تقریباً نه» و با hard فرق دارد.",
      "well قیدِ good است، مگر در معنی سالم: I'm well.",
      "قید تکرار قبل از فعل اصلی. قید حالت معمولاً ته جمله، یا قبل از فعل برای تأکید.",
      "enough بعد از صفت و قبل از اسم: old enough, enough time.",
      "so + صفت. such + (a) اسم. so beautiful, such a beautiful day.",
    ],
    uses: [
      {
        title: "وصف اسم",
        body: "صفت‌ها را شلوغ نکنید؛ ترتیب را اگر چند تا شدند رعایت کنید.",
        examples: [
          { en: "She bought a small black leather bag.", fa: "کیف چرمی مشکی کوچکی خرید." },
          { en: "It was a long, boring film.", fa: "فیلم طولانی و کسل‌کننده‌ای بود." },
        ],
      },
      {
        title: "وصف فعل",
        body: "قید می‌گوید کار چطور انجام شد.",
        examples: [
          { en: "He answered politely.", fa: "مؤدبانه جواب داد." },
          { en: "She works hard.", fa: "سخت کار می‌کند. (نه hardly)" },
        ],
      },
    ],
    forms: [
      { name: "صفت", pattern: "adj + noun / be + adj", sample: "a careful driver" },
      { name: "قید", pattern: "verb + adv", sample: "drive carefully" },
      { name: "کافی", pattern: "adj + enough", sample: "warm enough" },
    ],
    signals: ["very", "really", "quite", "enough", "so", "such", "-ly"],
    mistakes: [
      {
        wrong: "She sings beautiful.",
        right: "She sings beautifully.",
        why: "فعل را قید وصف می‌کند.",
      },
      {
        wrong: "I haven't enough big a bag.",
        right: "The bag isn't big enough.",
        why: "enough بعد از صفت می‌آید.",
      },
    ],
    contrast: "hard کار را شدید می‌کند. hardly تقریباً آن را نفی می‌کند: I hardly slept.",
    quiz: [
      {
        prompt: "This tea smells ___.",
        options: ["strange", "strangely", "stranged", "too strangely"],
        answer: 0,
        explain: "smell فعل ربطی است و صفت می‌گیرد.",
      },
      {
        prompt: "Choose the natural order.",
        options: [
          "a wooden big table",
          "a big wooden table",
          "a table big wooden",
          "wooden big a table",
        ],
        answer: 1,
        explain: "اندازه قبل از جنس.",
      },
      {
        prompt: "He ___ ever complains.",
        options: ["hard", "hardly", "harder", "well"],
        answer: 1,
        explain: "hardly ever یعنی تقریباً هرگز.",
      },
    ],
  },
  {
    id: "gerunds-infinitives",
    level: "B1",
    category: "clauses",
    title: "Gerunds and infinitives",
    titleFa: "اسم مصدر و مصدر",
    formula: "verb + -ing · verb + to · verb + object + to",
    summary:
      "بعضی فعل‌ها ing می‌خواهند، بعضی to، و بعضی هر دو را با فرق معنی. ing همچنین بعد از حرف اضافه و به عنوان فاعل جمله می‌آید.",
    persianNote:
      "بعد از حرف اضافه همیشه ing است، حتی اگر ذهن فارسی «که + فعل» بسازد: before leaving، not before to leave. interested in learning، نه interested to learning.",
    points: [
      "معمولاً ing: enjoy, avoid, finish, mind, suggest, keep, consider, practise, fancy, give up.",
      "معمولاً to: decide, hope, plan, promise, refuse, agree, afford, manage, seem, tend, would like.",
      "هر دو با فرق معنی: remember/forget/stop/try/regret. I stopped to smoke (ایستادم تا سیگار بکشم) در برابر I stopped smoking (سیگار را ترک کردم).",
      "remember doing کار گذشته را به یاد می‌آورد. remember to do یادش می‌ماند که انجام دهد.",
      "try doing آزمایش. try to do تلاش.",
      "بعد از صفت اغلب to: easy to read, pleased to meet.",
      "let, make, help در شکل فعال: make someone do (بدون to). در مجهول to برمی‌گردد: be made to do.",
      "فاعل ing می‌تواند مالک باشد: I appreciate your helping. در محاوره often مفعولی: me helping.",
    ],
    uses: [
      {
        title: "انتخاب ing یا to",
        body: "فعل قبلی تصمیم می‌گیرد، نه سلیقه.",
        examples: [
          { en: "I enjoy cooking on Fridays.", fa: "جمعه‌ها از آشپزی لذت می‌برم." },
          { en: "We decided to walk.", fa: "تصمیم گرفتیم پیاده برویم." },
        ],
      },
      {
        title: "فرق معنی",
        body: "همان فعل با ing یا to داستان دیگری می‌گوید.",
        examples: [
          { en: "I remember locking the door.", fa: "یادم هست در را قفل کردم." },
          { en: "Remember to lock the door.", fa: "یادت باشد در را قفل کنی." },
        ],
      },
    ],
    forms: [
      { name: "ing", pattern: "enjoy + V-ing", sample: "Avoid eating late." },
      { name: "to", pattern: "hope + to V", sample: "I hope to pass." },
      { name: "حرف اضافه", pattern: "prep + V-ing", sample: "thanks for coming" },
    ],
    signals: ["enjoy", "avoid", "decide", "remember", "stop", "try", "mind"],
    mistakes: [
      {
        wrong: "She suggested to take a taxi.",
        right: "She suggested taking a taxi.",
        why: "suggest با ing می‌آید، یا suggest (that) we take.",
      },
      {
        wrong: "I'm looking forward to see you.",
        right: "I'm looking forward to seeing you.",
        why: "اینجا to حرف اضافه است نه بخشی از مصدر.",
      },
    ],
    contrast: "would like to دعوت یا میل لحظه‌ای است. like + ing سلیقهٔ کلی: I like swimming.",
    quiz: [
      {
        prompt: "Would you mind ___ the window?",
        options: ["to close", "closing", "close", "closed"],
        answer: 1,
        explain: "mind با ing می‌آید.",
      },
      {
        prompt: "I forgot ___ the oven. I hope it's off.",
        options: ["turning off", "to turn off", "turn off", "to turning off"],
        answer: 1,
        explain: "فراموش کردم انجام بدهم: forget to do.",
      },
      {
        prompt: "He made me ___ the whole form again.",
        options: ["fill", "to fill", "filling", "filled"],
        answer: 0,
        explain: "make + مفعول + فعل ساده.",
      },
    ],
  },
  {
    id: "conditionals",
    level: "B1",
    category: "conditionals",
    title: "Conditionals 0, 1 and 2",
    titleFa: "شرطی صفر، یک و دو",
    formula: "If + present, present / will / would",
    summary:
      "شرطی صفر حقیقت همیشگی است، نوع اول آیندهٔ واقعی، نوع دوم حال یا آیندهٔ غیرواقعی یا بعید. در بند if از will و would برای خودِ شرط استفاده نکنید.",
    persianNote:
      "در فارسی اغلب یک «اگر» برای همه‌چیز کافی است. انگلیسی فاصلهٔ واقعیت را با زمان فعل نشان می‌دهد: برای حال غیرواقعی، گذشتهٔ ساده در بند if می‌آید حتی اگر دربارهٔ حالا باشد.",
    points: [
      "صفر: If you heat ice, it melts. هر دو حال ساده.",
      "اول: If it rains, we'll stay in. حال ساده + will. may, can, imperative هم در نتیجه ممکن است.",
      "دوم: If I had more time, I would travel. گذشتهٔ ساده + would. were برای همهٔ شخص‌ها در رسمی: If I were you.",
      "unless تقریباً if not است، ولی در همهٔ جمله‌ها عوض نمی‌شود. اگر منفی پیچیده شد unless را نگذارید.",
      "می‌توان نتیجه را اول گفت: We'll stay in if it rains.",
      "provided, as long as, in case خانواده‌اند ولی in case یعنی «محض احتیاط» نه «اگر».",
      "could و might به جای would احتمال یا توانایی نتیجه را عوض می‌کنند.",
    ],
    uses: [
      {
        title: "واقعی",
        body: "قانون یا آیندهٔ ممکن.",
        examples: [
          { en: "If the water reaches 100 degrees, it boils.", fa: "اگر آب به صد درجه برسد می‌جوشد." },
          { en: "If I finish early, I'll call you.", fa: "اگر زود تمام کنم زنگ می‌زنم." },
        ],
      },
      {
        title: "بعید یا خیالی",
        body: "حالا جور دیگری بود اگر...",
        examples: [
          { en: "If I were taller, I would play basketball.", fa: "اگر قدبلندتر بودم بسکتبال بازی می‌کردم." },
          { en: "If we had a car, we could leave tonight.", fa: "اگر ماشین داشتیم امشب می‌توانستیم برویم." },
        ],
      },
    ],
    forms: [
      { name: "صفر", pattern: "If + present, present", sample: "If you mix them, they change color." },
      { name: "اول", pattern: "If + present, will", sample: "If you ask, she'll help." },
      { name: "دوم", pattern: "If + past, would", sample: "If he knew, he would say." },
    ],
    signals: ["if", "unless", "as long as", "provided", "were", "would"],
    mistakes: [
      {
        wrong: "If it will rain, we will cancel.",
        right: "If it rains, we will cancel.",
        why: "در بند if نوع اول will نمی‌آید.",
      },
      {
        wrong: "If I would be you, I would wait.",
        right: "If I were you, I would wait.",
        why: "would در بند شرط نوع دوم غلط است.",
      },
    ],
    contrast: "نوع سوم دربارهٔ گذشتهٔ تمام‌شده است و در درس بعد می‌آید.",
    quiz: [
      {
        prompt: "If I ___ the answer, I would tell you.",
        options: ["know", "knew", "will know", "would know"],
        answer: 1,
        explain: "نوع دوم: گذشته در بند if.",
      },
      {
        prompt: "If you press this button, the door ___.",
        options: ["opened", "opens", "would open", "had opened"],
        answer: 1,
        explain: "حقیقت همیشگی، شرطی صفر.",
      },
      {
        prompt: "We'll miss the train unless we ___.",
        options: ["will hurry", "hurry", "hurried", "would hurry"],
        answer: 1,
        explain: "unless مثل if است و حال ساده می‌گیرد.",
      },
    ],
  },
  {
    id: "conditionals-advanced",
    level: "B2",
    category: "conditionals",
    title: "Third and mixed conditionals",
    titleFa: "شرطی سوم و مختلط",
    formula: "If + had + pp, would have + pp",
    summary:
      "نوع سوم گذشته را تصور می‌کند که عوض نشده. شرطی مختلط، گذشته را به نتیجهٔ حال یا حال را به نتیجهٔ گذشته وصل می‌کند.",
    persianNote:
      "«اگر رفته بودم» برای حسرت گذشته است، نه برای آینده. would have را در هر دو بند نگذارید. فقط نتیجه would have می‌گیرد.",
    points: [
      "سوم: If I had left earlier, I would have caught the bus.",
      "منفی: If you hadn't shouted, he wouldn't have woken up.",
      "مختلط گذشته→حال: If I had slept, I wouldn't be so tired now.",
      "مختلط حال→گذشته (کمتر): If she were more careful, she wouldn't have fallen.",
      "could have / might have به جای would have درجه را عوض می‌کند.",
      "حذف if با وارونگی رسمی: Had I known, I would have waited.",
      "wish دربارهٔ گذشته هم معنی نزدیک دارد ولی ساختار درس خودش را دارد.",
    ],
    uses: [
      {
        title: "حسرت گذشته",
        body: "هر دو طرف تمام شده‌اند.",
        examples: [
          { en: "If we had booked earlier, the tickets would have been cheaper.", fa: "اگر زودتر رزرو کرده بودیم بلیت ارزان‌تر بود." },
          { en: "She would have passed if she had revised.", fa: "اگر مرور کرده بود قبول می‌شد." },
        ],
      },
      {
        title: "گذشته هنوز روی حال اثر دارد",
        body: "شرط در گذشته، نتیجه الان.",
        examples: [
          { en: "If I had taken that job, I would live in Shiraz now.", fa: "اگر آن کار را گرفته بودم حالا شیراز زندگی می‌کردم." },
          { en: "You wouldn't be lost if you had followed the map.", fa: "اگر نقشه را دنبال کرده بودی حالا گم نبودی." },
        ],
      },
    ],
    forms: [
      { name: "سوم", pattern: "If + had pp, would have pp", sample: "If I had seen him, I would have waved." },
      { name: "مختلط", pattern: "If + had pp, would + V", sample: "If she had eaten, she wouldn't be hungry." },
      { name: "وارونگی", pattern: "Had + S + pp, ...", sample: "Had we known, we would have helped." },
    ],
    signals: ["had", "would have", "could have", "if only", "now", "then"],
    mistakes: [
      {
        wrong: "If I would have known, I would have told you.",
        right: "If I had known, I would have told you.",
        why: "would have در بند if استاندارد نیست.",
      },
      {
        wrong: "If I had studied, I would pass yesterday.",
        right: "If I had studied, I would have passed.",
        why: "نتیجه هم در گذشته است، پس would have.",
      },
    ],
    contrast: "نوع دوم هنوز دربارهٔ حالا یا آینده است. همین که گذشته تمام شده باشد، نوع سوم یا مختلط لازم می‌شود.",
    quiz: [
      {
        prompt: "If they ___ the map, they wouldn't have got lost.",
        options: ["took", "had taken", "would take", "have taken"],
        answer: 1,
        explain: "شرط نوع سوم: had + قسمت سوم.",
      },
      {
        prompt: "If I had saved more, I ___ a flat now.",
        options: ["would buy", "would have bought yesterday only", "would own", "had owned"],
        answer: 2,
        explain: "نتیجهٔ حال از شرط گذشته: would + فعل ساده.",
      },
      {
        prompt: "Which inversion is correct?",
        options: [
          "Had I seen you, I would have stopped.",
          "If had I seen you, I would stop.",
          "Did I had seen you, I would have stopped.",
          "Have I seen you, I would had stopped.",
        ],
        answer: 0,
        explain: "Had + فاعل + قسمت سوم، if حذف شده.",
      },
    ],
  },
  {
    id: "passive",
    level: "B1",
    category: "voice",
    title: "The passive",
    titleFa: "مجهول",
    formula: "be + past participle",
    summary:
      "مجهول وقتی به کار می‌رود که کار مهم‌تر از کننده باشد، کننده ناشناس باشد، یا لحن رسمی و بی‌طرف بخواهیم. زمان روی be می‌آید و قسمت سوم ثابت می‌ماند.",
    persianNote:
      "فارسی با «شدن» مجهول می‌سازد. در انگلیسی هر زمان شکل be خودش را دارد. مفعول جملهٔ معلوم، فاعل مجهول می‌شود. اگر کننده مهم است با by برمی‌گردد.",
    points: [
      "حال ساده: is made. گذشته: was made. حال کامل: has been made. آینده: will be made.",
      "استمراری: is being repaired, was being repaired.",
      "وجهی: must be signed, should have been told.",
      "by + کننده فقط وقتی اطلاعات تازه بدهد. وگرنه حذف شود.",
      "افعال دو مفعولی دو مجهول دارند: I was given a map. / A map was given to me. اولی در انگلیسی طبیعی‌تر است.",
      "بعضی فعل‌ها مجهول نمی‌شوند چون مفعول نمی‌گیرند: happen, arrive, die, sleep.",
      "have/get something done برای سفارشی است که دیگری انجام می‌دهد: I had my hair cut.",
    ],
    uses: [
      {
        title: "کار مهم‌تر از فاعل",
        body: "گزارش، خبر، علم و روندها.",
        examples: [
          { en: "The road is being repaired.", fa: "جاده در حال تعمیر است." },
          { en: "English is spoken in the office.", fa: "در دفتر انگلیسی حرف زده می‌شود." },
        ],
      },
      {
        title: "کننده نامعلوم یا بدیهی",
        body: "by را اگر چیزی اضافه نمی‌کند نیاورید.",
        examples: [
          { en: "My bike has been stolen.", fa: "دوچرخه‌ام دزدیده شده." },
          { en: "The results will be announced on Friday.", fa: "نتایج جمعه اعلام می‌شود." },
        ],
      },
    ],
    forms: [
      { name: "حال", pattern: "am/is/are + pp", sample: "Tea is grown in Gilan." },
      { name: "گذشته", pattern: "was/were + pp", sample: "The letter was sent." },
      { name: "کامل", pattern: "has/have been + pp", sample: "The windows have been cleaned." },
    ],
    signals: ["is/are + pp", "was/were", "been", "being", "by"],
    mistakes: [
      {
        wrong: "The house built in 1920.",
        right: "The house was built in 1920.",
        why: "بدون be مجهول کامل نیست.",
      },
      {
        wrong: "A new school is building near here.",
        right: "A new school is being built near here.",
        why: "جریانِ مجهول being + قسمت سوم می‌خواهد.",
      },
    ],
    contrast: "معلوم مسئول را روشن می‌کند. اگر مسئول مهم است مجهول ننویسید.",
    quiz: [
      {
        prompt: "These shoes ___ in Tabriz.",
        options: ["made", "are made", "are making", "have made"],
        answer: 1,
        explain: "حال سادهٔ مجهول.",
      },
      {
        prompt: "The documents ___ when I called.",
        options: ["were signing", "were being signed", "have signed", "signed"],
        answer: 1,
        explain: "گذشتهٔ استمراری مجهول.",
      },
      {
        prompt: "You should ___ earlier.",
        options: ["have told", "have been told", "be tell", "been told"],
        answer: 1,
        explain: "توصیه دربارهٔ گذشتهٔ مجهول: should have been + pp.",
      },
    ],
  },
  {
    id: "reported-speech",
    level: "B1",
    category: "voice",
    title: "Reported speech",
    titleFa: "نقل قول",
    formula: "say/tell + tense one step back",
    summary:
      "در نقل قول غیرمستقیم، اگر فعل گزارش در گذشته باشد، زمان جمله معمولاً یک پله عقب می‌رود. ضمیر، زمان و مکان هم از دید گویندهٔ جدید عوض می‌شوند.",
    persianNote:
      "tell حتماً مفعول شخص می‌خواهد: told me. say مفعول شخص مستقیم نمی‌گیرد مگر say to me. کهِ فارسی را با that می‌شود گفت و اغلب حذف می‌شود.",
    points: [
      "present simple → past simple. present continuous → past continuous. present perfect و past simple → past perfect. will → would. can → could.",
      "past perfect عوض نمی‌شود. اگر حرف هنوز راست باشد، عقب بردن اختیاری است: She said she is tired. / was tired.",
      "this → that, today → that day, tomorrow → the next day, yesterday → the day before, here → there.",
      "پرسش بله/خیر: ask if/whether + ترتیب خبری. پرسش با wh: ask where I lived. نه asked where did I live.",
      "امر: tell someone to do / not to do.",
      "suggest + ing یا suggest (that) + فاعل. نه suggest him to.",
      "افعال گزارش لحن را حمل می‌کنند: admit, deny, promise, warn, offer, refuse.",
    ],
    uses: [
      {
        title: "خبر را منتقل کردن",
        body: "زمان و ضمیر را از نو تنظیم کنید.",
        examples: [
          { en: "\"I can't come.\" → She said she couldn't come.", fa: "گفت نمی‌تواند بیاید." },
          { en: "\"We finished it.\" → They told me they had finished it.", fa: "به من گفتند تمامش کرده‌اند." },
        ],
      },
      {
        title: "سؤال و دستور",
        body: "در گزارش، سؤال دیگر ترتیب پرسشی ندارد.",
        examples: [
          { en: "He asked where I worked.", fa: "پرسید کجا کار می‌کنم." },
          { en: "She told us not to wait.", fa: "گفت منتظر نمانیم." },
        ],
      },
    ],
    forms: [
      { name: "خبر", pattern: "said (that) + clause", sample: "He said he was ill." },
      { name: "سؤال", pattern: "asked if / wh- + statement", sample: "I asked if she knew." },
      { name: "امر", pattern: "told + person + to V", sample: "They told me to sit." },
    ],
    signals: ["said", "told", "asked", "if", "whether", "that", "to"],
    mistakes: [
      {
        wrong: "He told that he was busy.",
        right: "He said that he was busy. / He told me that he was busy.",
        why: "told بدون مفعول شخص ناقص است.",
      },
      {
        wrong: "She asked me where was the station.",
        right: "She asked me where the station was.",
        why: "بعد از کلمهٔ پرسشی در نقل قول، ترتیب خبری است.",
      },
    ],
    contrast: "نقل قول مستقیم گیومه و زمان اصلی را نگه می‌دارد. غیرمستقیم برای روایت روان‌تر است.",
    quiz: [
      {
        prompt: "\"I'll help you.\" → He said he ___ help me.",
        options: ["will", "would", "helps", "had"],
        answer: 1,
        explain: "will در گزارش گذشته به would تبدیل می‌شود.",
      },
      {
        prompt: "She asked me where ___.",
        options: ["did I live", "I lived", "do I live", "lived I"],
        answer: 1,
        explain: "ترتیب خبری.",
      },
      {
        prompt: "The guard told us ___ inside.",
        options: ["not wait", "not to wait", "to not wait", "don't wait"],
        answer: 1,
        explain: "نهی: not to + فعل.",
      },
    ],
  },
  {
    id: "relative-clauses",
    level: "B1",
    category: "clauses",
    title: "Relative clauses",
    titleFa: "عبارت موصولی",
    formula: "who / which / that / whose / where",
    summary:
      "عبارت موصولی اسم را مشخص یا اضافه توضیح می‌دهد. در نوع مشخص‌کننده، کهِ ضروری است و کاما ندارد. در نوع توضیحی، اطلاعات اضافه است و با کاما جدا می‌شود و that نمی‌گیرد.",
    persianNote:
      "در فارسی «که» همه‌کاره است. در انگلیسی آدم who، چیز which، و that برای هر دو در جملهٔ مشخص‌کننده. اگر ضمیر مفعول باشد اغلب حذف می‌شود: the book I bought.",
    points: [
      "who برای آدم، which برای چیز، that برای هر دو در defining.",
      "whose مالکیت آدم و چیز: the writer whose book we read.",
      "where مکان، when زمان، why بعد از reason.",
      "اگر ضمیر مفعول باشد حذف درست است: the film (that) we saw. اگر فاعل باشد حذف نمی‌شود.",
      "حرف اضافه رسمی قبل از which/whom: the city in which I grew up. محاوره: the city I grew up in.",
      "non-defining کاما دارد و حذفش معنی اصلی را خراب نمی‌کند: My brother, who lives in Qom, is a nurse. that اینجا غلط است.",
      "what یعنی the thing that و به اسم قبلی برنمی‌گردد: I know what you mean.",
    ],
    uses: [
      {
        title: "مشخص کردن",
        body: "بدون این بند نمی‌فهمیم کدام اسم.",
        examples: [
          { en: "The woman who called you is outside.", fa: "زنی که زنگ زد بیرون است." },
          { en: "The keys I lost were in my coat.", fa: "کلیدهایی که گم کرده بودم در پالتویم بود." },
        ],
      },
      {
        title: "توضیح اضافه",
        body: "اسم از قبل معلوم است؛ بند فقط اطلاعات می‌افزاید.",
        examples: [
          { en: "Shiraz, which I love, gets very hot in summer.", fa: "شیراز، که دوستش دارم، تابستان خیلی گرم می‌شود." },
          { en: "Her father, who is a pilot, travels a lot.", fa: "پدرش، که خلبان است، زیاد سفر می‌کند." },
        ],
      },
    ],
    forms: [
      { name: "فاعل", pattern: "noun + who/that + verb", sample: "students who work" },
      { name: "مفعول", pattern: "noun + (that) + S + V", sample: "the song we heard" },
      { name: "مالک", pattern: "whose + noun", sample: "a man whose name I forget" },
    ],
    signals: ["who", "which", "that", "whose", "where", "when"],
    mistakes: [
      {
        wrong: "The man which lives here is a baker.",
        right: "The man who lives here is a baker.",
        why: "برای آدم who، نه which.",
      },
      {
        wrong: "My sister that lives in Rasht is a lawyer.",
        right: "My sister, who lives in Rasht, is a lawyer.",
        why: "اگر فقط یک خواهر مشخص است، بند توضیحی است: کاما و who.",
      },
    ],
    contrast: "what بند اسمی می‌سازد و جای which را وقتی اسم قبلش هست نمی‌گیرد.",
    quiz: [
      {
        prompt: "The café ___ we met has closed.",
        options: ["which", "where", "what", "whose"],
        answer: 1,
        explain: "مکان: where. یا which/that + in.",
      },
      {
        prompt: "That's the artist ___ paintings sold out.",
        options: ["who", "which", "whose", "that his"],
        answer: 2,
        explain: "مالکیت با whose.",
      },
      {
        prompt: "Choose the correct non-defining clause.",
        options: [
          "Tehran, that is huge, has heavy traffic.",
          "Tehran, which is huge, has heavy traffic.",
          "Tehran which is huge has heavy traffic.",
          "Tehran, what is huge, has heavy traffic.",
        ],
        answer: 1,
        explain: "توضیحی: کاما و which، نه that.",
      },
    ],
  },
  {
    id: "wish-used-to",
    level: "B1",
    category: "advanced",
    title: "Wish and used to",
    titleFa: "آرزو و عادت گذشته",
    formula: "wish + past · used to + verb",
    summary:
      "wish واقعیت را وارونه می‌کند: برای حال، گذشتهٔ ساده؛ برای گذشته، گذشتهٔ کامل. used to عادت یا وضعیت گذشته است که دیگر نیست. would برای عادت تکراری گذشته هم می‌آید ولی وضعیت پایدار نمی‌سازد.",
    persianNote:
      "«کاش» را با زمان واقعی ترجمه نکنید. I wish I know غلط است. دربارهٔ حالا: I wish I knew. used to را با be used to (عادت داشتن به) و get used to (عادت کردن) قاطی نکنید؛ آن دو ing می‌خواهند.",
    points: [
      "wish + past simple برای حالِ ناراضی: I wish I lived closer. were برای be رسمی‌تر است: I wish I were taller.",
      "wish + would برای شکایت از رفتار که عوض شود: I wish you would listen. دربارهٔ خودتان would نمی‌آید.",
      "wish + had + pp برای حسرت گذشته: I wish I had asked.",
      "If only emphatic همان ساختارها را دارد.",
      "used to + فعل ساده برای گذشته‌ای که قطع شده. منفی: didn't use to. پرسش: Did you use to...?",
      "would + فعل برای کار تکراری گذشته، نه برای حالت: We would sit by the river. نه I would live in Qom به معنی سکونت.",
      "be used to + ing یعنی عادت دارم. get used to + ing یعنی دارم عادت می‌کنم.",
    ],
    uses: [
      {
        title: "کاش",
        body: "زمان فعل یک پله از واقعیت عقب است.",
        examples: [
          { en: "I wish I spoke French.", fa: "کاش فرانسه بلد بودم. (بلد نیستم)" },
          { en: "I wish we had left earlier.", fa: "کاش زودتر راه افتاده بودیم." },
        ],
      },
      {
        title: "قبلاً این‌طور بود",
        body: "used to تغییر را برجسته می‌کند.",
        examples: [
          { en: "I used to walk to school.", fa: "قبلاً پیاده مدرسه می‌رفتم." },
          { en: "I'm not used to getting up at five.", fa: "به بیدار شدن ساعت پنج عادت ندارم." },
        ],
      },
    ],
    forms: [
      { name: "آرزوی حال", pattern: "wish + past", sample: "I wish it was quieter." },
      { name: "حسرت", pattern: "wish + had pp", sample: "She wishes she had studied." },
      { name: "عادت قبل", pattern: "used to + V", sample: "We used to play here." },
    ],
    signals: ["wish", "if only", "used to", "would", "be used to", "get used to"],
    mistakes: [
      {
        wrong: "I wish I can help.",
        right: "I wish I could help.",
        why: "wish زمان را عقب می‌برد.",
      },
      {
        wrong: "I'm used to wake up early.",
        right: "I'm used to waking up early.",
        why: "این to حرف اضافه است و ing می‌گیرد.",
      },
    ],
    contrast: "would rather + گذشته برای ترجیح حال: I'd rather you didn't smoke. برای گذشته: I'd rather you hadn't said that.",
    quiz: [
      {
        prompt: "I wish I ___ more time today.",
        options: ["have", "had", "will have", "have had"],
        answer: 1,
        explain: "آرزو دربارهٔ حال با گذشتهٔ ساده.",
      },
      {
        prompt: "He ___ live by the sea, but he moved.",
        options: ["used to", "is used to", "use to", "was used to living"],
        answer: 0,
        explain: "عادت قطع‌شده: used to + فعل ساده.",
      },
      {
        prompt: "I wish you ___ interrupt me.",
        options: ["don't", "won't", "wouldn't", "hadn't to"],
        answer: 2,
        explain: "شکایت از رفتار دیگری با would.",
      },
    ],
  },
  {
    id: "question-tags",
    level: "B2",
    category: "advanced",
    title: "Question tags",
    titleFa: "پرسش تأییدی",
    formula: "positive statement, negative tag",
    summary:
      "تگ کوتاهی است که تأیید، تعجب یا دعوت به حرف می‌خواهد. اگر جمله مثبت باشد تگ منفی است و برعکس. ضمیر و فعل کمکی از خود جمله می‌آیند.",
    persianNote:
      "معادل دقیق «مگه نه؟» همیشه یک شکل ندارد. کمکی جمله را تکرار کنید. آهنگ پایین یعنی انتظار تأیید، آهنگ بالا یعنی سؤال واقعی.",
    points: [
      "جمله مثبت، تگ منفی: It's cold, isn't it?",
      "جمله منفی، تگ مثبت: You don't agree, do you?",
      "اگر فعل کمکی هست همان می‌آید. اگر نیست do/does/did.",
      "I am → aren't I? در تگ. I'm late, aren't I?",
      "Let's → shall we? امر → will you? یا won't you? برای دعوت نرم.",
      "never, hardly, nobody جمله را منفی می‌کنند و تگ مثبت می‌خواهد.",
      "there در تگ می‌ماند: There's time, isn't there?",
    ],
    uses: [
      {
        title: "دنبال تأیید",
        body: "گوینده جواب را تقریباً می‌داند.",
        examples: [
          { en: "You've met Leila, haven't you?", fa: "لیلا را دیده‌ای، نه؟" },
          { en: "The shop closes at six, doesn't it?", fa: "مغازه ساعت شش می‌بندد، این‌طور نیست؟" },
        ],
      },
      {
        title: "امر و پیشنهاد",
        body: "تگ از الگوی معمولی جدا می‌شود.",
        examples: [
          { en: "Close the door, will you?", fa: "در را ببند، می‌شود؟" },
          { en: "Let's take a break, shall we?", fa: "یک استراحت کنیم؟" },
        ],
      },
    ],
    forms: [
      { name: "مثبت / منفی", pattern: "..., aren't they?", sample: "They're here, aren't they?" },
      { name: "منفی / مثبت", pattern: "..., did she?", sample: "She didn't call, did she?" },
      { name: "بی کمکی", pattern: "do / does / did", sample: "He works hard, doesn't he?" },
    ],
    signals: ["isn't", "aren't", "don't", "didn't", "shall we", "will you"],
    mistakes: [
      {
        wrong: "She can drive, doesn't she?",
        right: "She can drive, can't she?",
        why: "تگ همان کمکی جمله را تکرار می‌کند.",
      },
      {
        wrong: "Nobody called, didn't they?",
        right: "Nobody called, did they?",
        why: "nobody جمله را منفی می‌کند.",
      },
    ],
    contrast: "تگ جای سؤال کامل را نمی‌گیرد وقتی اطلاعات واقعاً مجهول است. آن‌وقت سؤال wh لازم است.",
    quiz: [
      {
        prompt: "You haven't finished, ___?",
        options: ["haven't you", "have you", "did you", "don't you"],
        answer: 1,
        explain: "جمله منفی است پس تگ مثبت با have.",
      },
      {
        prompt: "I'm next, ___?",
        options: ["amn't I", "aren't I", "don't I", "isn't I"],
        answer: 1,
        explain: "تگ استاندارد I'm می‌شود aren't I.",
      },
      {
        prompt: "Let's start, ___?",
        options: ["will we", "shall we", "don't we", "do we"],
        answer: 1,
        explain: "Let's با shall we.",
      },
    ],
  },
  {
    id: "causative-phrasal",
    level: "B2",
    category: "advanced",
    title: "Causative and phrasal verbs",
    titleFa: "سببی و افعال عبارتی",
    formula: "have/get something done · verb + particle",
    summary:
      "ساخت سببی یعنی ترتیب دادن که کس دیگری کار را بکند. فعل عبارتی فعل به‌علاوهٔ قید یا حرف اضافه است که معنی‌اش اغلب از اجزا جدا نیست و جداشدنی یا جدانشدنی است.",
    persianNote:
      "have my hair cut یعنی «موهایم را کوتاه کردم» حتی اگر خودتان قیچی نزده باشید. فعل عبارتی را کلمه‌به‌کلمه ترجمه نکنید: give up یعنی ترک کردن، نه «دادن به بالا».",
    points: [
      "have + مفعول + قسمت سوم: I had the roof repaired.",
      "get همان ساخت را غیررسمی‌تر می‌کند: I got my phone fixed.",
      "get someone to do یعنی قانع کردن. have someone do (بدون to) یعنی ترتيب دادن که انجام دهد.",
      "make someone do اجبار. let someone do اجازه.",
      "فعل عبارتی جدانشدنی مفعول را بعد از هر دو جزء می‌گذارد: look after the baby. نه look the baby after.",
      "جداشدنی: turn the light off یا turn off the light. ضمیر حتماً وسط است: turn it off. نه turn off it.",
      "سه جزئی‌ها جدانشدنی‌اند: look up to, put up with, run out of.",
      "تکیه در فعل عبارتی معمولاً روی جزء دوم است، بر خلاف فعل + حرف اضافهٔ معمولی.",
    ],
    uses: [
      {
        title: "سپردن کار به دیگری",
        body: "فاعل ترتیب‌دهنده است نه حتماً انجام‌دهنده.",
        examples: [
          { en: "We had the documents translated.", fa: "اسناد را دادیم ترجمه کنند." },
          { en: "She got her brother to drive her.", fa: "برادرش را راضی کرد او را برساند." },
        ],
      },
      {
        title: "معنی بستهٔ فعل عبارتی",
        body: "جزء دوم را جدی بگیرید؛ معنی را عوض می‌کند.",
        examples: [
          { en: "I looked up the word. / I looked it up.", fa: "کلمه را جستجو کردم." },
          { en: "We ran out of petrol.", fa: "بنزینمان تمام شد." },
        ],
      },
    ],
    forms: [
      { name: "سببی", pattern: "have + object + pp", sample: "have the car serviced" },
      { name: "جداشدنی", pattern: "V + object + particle", sample: "pick it up" },
      { name: "جدانشدنی", pattern: "V + particle + object", sample: "look after them" },
    ],
    signals: ["have something done", "get someone to", "up", "off", "out", "after"],
    mistakes: [
      {
        wrong: "I cut my hair at the salon.",
        right: "I had my hair cut at the salon.",
        why: "اگر آرایشگر کوتاه کرده، ساخت سببی دقیق است. cut my hair یعنی خودم کوتاه کردم.",
      },
      {
        wrong: "Please turn off it.",
        right: "Please turn it off.",
        why: "ضمیر در فعل جداشدنی بین فعل و جزء می‌آید.",
      },
    ],
    contrast: "look up to someone یعنی احترام گذاشتن و جدا نمی‌شود. look a word up یعنی جستجو و جدا می‌شود.",
    quiz: [
      {
        prompt: "I need to ___ my watch ___.",
        options: ["repair / —", "have / repair", "have / repaired", "get / repairing"],
        answer: 2,
        explain: "have + وسیله + قسمت سوم.",
      },
      {
        prompt: "These shoes are wet. ___ before you come in.",
        options: ["Take off them", "Take them off", "Take they off", "Off take them"],
        answer: 1,
        explain: "ضمیر وسط قرار می‌گیرد.",
      },
      {
        prompt: "She finally got him ___ the truth.",
        options: ["tell", "to tell", "told", "telling"],
        answer: 1,
        explain: "get someone to do.",
      },
    ],
  },
  {
    id: "noun-clauses-linkers",
    level: "B2",
    category: "clauses",
    title: "Noun clauses and linkers",
    titleFa: "بند اسمی و پیوندها",
    formula: "that / wh- / whether · however · although",
    summary:
      "بند اسمی جای اسم را در جمله می‌گیرد: فاعل، مفعول یا بعد از be. پیوندها رابطهٔ منطق دو جمله را روشن می‌کنند: تضاد، علت، نتیجه، هدف و افزودن.",
    persianNote:
      "چون و اما را با یک کلمه تمام نکنید. although و but با هم در یک پیوند نمی‌آیند. so و because هم یکی کافی است. هدف با to یا so that، نه با for + فعل ساده.",
    points: [
      "that اغلب بعد از فعل حذف می‌شود: I think (that) you're right. به عنوان فاعل حذف نمی‌شود: That she left surprised us.",
      "whether / if برای بند اسمی بله‌وخیر. whether رسمی‌تر است و بعد از حرف اضافه فقط whether: depend on whether.",
      "what, who, how بند اسمی می‌سازند و ترتیب خبری دارند.",
      "تضاد: although, even though, though, despite + اسم/ing, in spite of. but جمله را در میان وصل می‌کند.",
      "علت: because, since, as. نتیجه: so, therefore, as a result.",
      "هدف: to, in order to, so that + can/could.",
      "افزودن: also, moreover, besides, as well as. besides یعنی علاوه بر این؛ beside یعنی کنار.",
      "however ته یا اول جمله با کاما است و متضاد می‌آورد. how ever جدا یعنی «چطور ممکن است».",
    ],
    uses: [
      {
        title: "بند به جای اسم",
        body: "یک جملهٔ کامل را مفعول یا فاعل کنید.",
        examples: [
          { en: "I don't know whether the office is open.", fa: "نمی‌دانم دفتر باز است یا نه." },
          { en: "What you decide matters.", fa: "اینکه چه تصمیم بگیری مهم است." },
        ],
      },
      {
        title: "رابطهٔ دو ایده",
        body: "پیوند، خواننده را مجبور نمی‌کند رابطه را حدس بزند.",
        examples: [
          { en: "Although it was late, we kept working.", fa: "هرچند دیر بود به کار ادامه دادیم." },
          { en: "We left early so that we could avoid the traffic.", fa: "زود راه افتادیم تا به ترافیک نخوریم." },
        ],
      },
    ],
    forms: [
      { name: "that", pattern: "verb + (that) + clause", sample: "She said that it was fine." },
      { name: "تضاد", pattern: "Although + clause", sample: "Although he tried, he failed." },
      { name: "هدف", pattern: "so that + clause", sample: "so that everyone hears" },
    ],
    signals: ["that", "whether", "although", "despite", "because", "so that", "however"],
    mistakes: [
      {
        wrong: "Although it was raining, but we went out.",
        right: "Although it was raining, we went out.",
        why: "although و but با هم نمی‌آیند.",
      },
      {
        wrong: "Despite he was tired, he finished.",
        right: "Despite being tired, he finished.",
        why: "despite با اسم یا ing می‌آید نه با جملهٔ کامل. برای جمله although.",
      },
    ],
    contrast: "during حرف اضافهٔ زمان است نه پیوند علت. چون خسته بودم ≠ during I was tired.",
    quiz: [
      {
        prompt: "___ she said was true.",
        options: ["What", "That what", "Which", "Despite"],
        answer: 0,
        explain: "what بند اسمی فاعلی می‌سازد.",
      },
      {
        prompt: "We whispered ___ wake the baby.",
        options: ["for not", "so that we wouldn't", "despite not", "because not"],
        answer: 1,
        explain: "هدف منفی با so that + wouldn't.",
      },
      {
        prompt: "He passed ___ revising very little.",
        options: ["although", "despite", "but", "so that"],
        answer: 1,
        explain: "بعد از جای خالی ing آمده، پس despite.",
      },
    ],
  },
  {
    id: "inversion-articles",
    level: "C1",
    category: "advanced",
    title: "Inversion and article nuance",
    titleFa: "وارونگی و ظرایف حرف تعریف",
    formula: "Negative adverb + auxiliary + subject",
    summary:
      "در سبک رسمی، قید منفی یا محدودکننده اول جمله می‌آید و ترتیب پرسش به جملهٔ خبری می‌دهد. کنار آن، حرف تعریف در سطح بالا به اسم‌های نهاد، صفر، و اسم خاص حساس است.",
    persianNote:
      "این الگو را در حرف زدن روزمره زیاد نکنید؛ نوشتار و سخن رسمی است. برای حرف تعریف، hospital و school در انگلیسی بریتانیایی وقتی به نقششان اشاره شود the نمی‌گیرند: in hospital یعنی به عنوان بیمار.",
    points: [
      "Never, rarely, seldom, hardly, no sooner, not only, little, under no circumstances + کمکی + فاعل.",
      "No sooner had I sat down than the phone rang. than را با when عوض نکنید مگر با hardly/scarcely ... when.",
      "Not only did she apologize, but she also paid.",
      "Only after / only when / only if همین وارونگی را در بند اصلی می‌سازند نه در بند خودشان.",
      "So + صفت + that: So cold was it that the pipes froze. بیشتر ادبی است.",
      "the با ساز، بعضی کشورها و رشته‌کوه‌ها و رودها: the piano, the United States, the Alps, the Nile.",
      "بدون the: وعده غذا، بیشتر ورزش‌ها، زبان‌ها (French)، اسم شخص. the French یعنی مردم فرانسه.",
      "به نقش نهاد: at school, at university, in prison, in hospital (بریتانیایی). the school یعنی ساختمان.",
      "اسامی روزنامه و سازمان اغلب the دارند: the BBC. شرکت‌ها معمولاً نه: Google.",
    ],
    uses: [
      {
        title: "تأکید رسمی",
        body: "قید منفی را جلو بگذارید تا وزن جمله عوض شود.",
        examples: [
          { en: "Rarely have I heard such a clear explanation.", fa: "به‌ندرت این‌قدر توضیح روشن شنیده‌ام." },
          { en: "Under no circumstances should you sign it.", fa: "تحت هیچ شرایطی نباید امضا کنی." },
        ],
      },
      {
        title: "حرف تعریف سطح بالا",
        body: "فرق نقش و خودِ مکان، و فرق زبان و ملت.",
        examples: [
          { en: "She is in hospital with a broken leg.", fa: "با پای شکسته بستری است." },
          { en: "The hospital on our street has a new wing.", fa: "بیمارستان خیابان ما بال جدید دارد." },
        ],
      },
    ],
    forms: [
      { name: "وارونگی", pattern: "Neg + aux + S + V", sample: "Little did we know." },
      { name: "no sooner", pattern: "No sooner had + S + pp than", sample: "No sooner had he left than it rained." },
      { name: "نهاد", pattern: "Ø + institution as role", sample: "go to university" },
    ],
    signals: ["never", "rarely", "not only", "no sooner", "little", "the Alps", "in hospital"],
    mistakes: [
      {
        wrong: "Never I have seen that.",
        right: "Never have I seen that.",
        why: "بعد از قید منفی اول جمله، کمکی قبل از فاعل می‌آید.",
      },
      {
        wrong: "She speaks the Spanish fluently.",
        right: "She speaks Spanish fluently.",
        why: "اسم زبان the نمی‌گیرد. the Spanish یعنی اسپانیایی‌ها.",
      },
    ],
    contrast: "سوال معمولی به جواب نیاز دارد. وارونگی هنوز جملهٔ خبری است و فقط تأکید می‌کند.",
    quiz: [
      {
        prompt: "Not only ___ late, but he also forgot the file.",
        options: ["he was", "was he", "he did be", "did he be"],
        answer: 1,
        explain: "وارونگی با was he.",
      },
      {
        prompt: "No sooner ___ down than she fell asleep.",
        options: ["she had lain", "had she lain", "she lay", "did she laid"],
        answer: 1,
        explain: "No sooner + had + فاعل.",
      },
      {
        prompt: "He learned to play ___.",
        options: ["piano", "the piano", "a piano always the", "pianos the"],
        answer: 1,
        explain: "آلات موسیقی در این ساخت the می‌گیرند.",
      },
    ],
  },
  {
    id: "future-perfect",
    level: "B2",
    category: "tenses",
    title: "Future perfect and continuous",
    titleFa: "آیندهٔ کامل و استمراری",
    formula: "will have + pp · will be + ing",
    summary:
      "آیندهٔ کامل می‌گوید تا یک لحظه در آینده کاری تمام شده است. آیندهٔ استمراری می‌گوید در یک لحظهٔ آینده کاری در جریان خواهد بود.",
    persianNote:
      "by Friday یعنی «حداکثر تا جمعه، تمام شده». آن را با on Friday که فقط زمان اتفاق است قاطی نکنید. برای طول یک فعالیت در آن لحظه، استمراری لازم است نه کامل.",
    points: [
      "will have + قسمت سوم. منفی won't have finished.",
      "by، by the time، before نقطهٔ مهلت را می‌سازند.",
      "will be + ing برای برنامه یا روند در جریان: This time tomorrow I'll be flying.",
      "will have been + ing برای طول تا آن نقطه: By June I'll have been teaching for ten years.",
      "در بند زمانی آینده (when, by the time) خود فعل زمان حال می‌ماند: By the time you arrive, I will have cooked.",
      "این زمان‌ها پیش‌بینی و برنامه‌اند، نه قطعیت جادویی.",
    ],
    uses: [
      {
        title: "تمام‌شده تا آن موقع",
        body: "نگاه از یک نقطهٔ آینده به عقب.",
        examples: [
          { en: "I will have submitted the form by noon.", fa: "تا ظهر فرم را فرستاده‌ام." },
          { en: "By the time we get there, the film will have started.", fa: "تا برسیم فیلم شروع شده." },
        ],
      },
      {
        title: "در جریان در آینده",
        body: "لحظه‌ای را در آینده تصور کنید و بگویید وسط چه کاری هستید.",
        examples: [
          { en: "Don't call at eight. I'll be putting the kids to bed.", fa: "ساعت هشت زنگ نزن. دارم بچه‌ها را می‌خوابانم." },
          { en: "Next week we'll be travelling.", fa: "هفتهٔ بعد در سفر خواهیم بود." },
        ],
      },
    ],
    forms: [
      { name: "کامل", pattern: "will have + pp", sample: "She will have left." },
      { name: "استمراری", pattern: "will be + ing", sample: "They will be working." },
      { name: "کامل استمراری", pattern: "will have been + ing", sample: "I will have been waiting for an hour." },
    ],
    signals: ["by", "by the time", "this time tomorrow", "in two years"],
    mistakes: [
      {
        wrong: "By Friday I will finish the book.",
        right: "By Friday I will have finished the book.",
        why: "by نقطهٔ «تا آن زمان تمام شده» است.",
      },
      {
        wrong: "When you will arrive, I'll be ready.",
        right: "When you arrive, I'll be ready.",
        why: "در بند زمانی، will نمی‌آید.",
      },
    ],
    contrast: "going to و present continuous برنامهٔ نزدیک‌تر و شخصی‌ترند. will have از یک مهلت آینده حرف می‌زند.",
    quiz: [
      {
        prompt: "By 2030 she ___ her degree.",
        options: ["will finish", "will have finished", "finishes", "has finished"],
        answer: 1,
        explain: "اتمام قبل از یک نقطه در آینده.",
      },
      {
        prompt: "This time next week we ___ on the beach.",
        options: ["will lie", "will have lain", "will be lying", "are lie"],
        answer: 2,
        explain: "فعالیت در جریان در آن لحظه.",
      },
      {
        prompt: "By the time he ___, we will have eaten.",
        options: ["will get here", "gets here", "got here", "is getting already will"],
        answer: 1,
        explain: "بند زمانی حال ساده می‌ماند.",
      },
    ],
  },
];
