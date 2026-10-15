import type { Lesson } from "./types";

export const LESSONS_A: Lesson[] = [
  {
    id: "word-order",
    level: "A1",
    category: "foundations",
    title: "Word order",
    titleFa: "ترتیب کلمات",
    formula: "Subject + Verb + Object + Place + Time",
    summary:
      "جملهٔ خبری انگلیسی تقریباً همیشه با فاعل شروع می‌شود و فعل بلافاصله بعد از آن می‌آید. بر خلاف فارسی که فعل معمولاً آخر جمله است، در انگلیسی فعل زود می‌آید.",
    persianNote:
      "فارسی ترتیب فاعل–مفعول–فعل دارد: «من کتاب را دیروز خریدم». اگر فعل را آخر بگذارید، جمله انگلیسی شکسته می‌شود. زمان و مکان را هم معمولاً ته جمله می‌گذارند، نه وسط.",
    points: [
      "ترتیب پایه: فاعل + فعل + مفعول + مکان + زمان.",
      "قید تکرار (always, usually) قبل از فعل اصلی و بعد از am/is/are می‌آید.",
      "صفت قبل از اسم می‌آید: a red car، نه car red.",
      "یک جملهٔ ساده فقط یک فعل اصلی دارد؛ فعل دوم معمولاً به to یا ing نیاز دارد.",
      "حرف اضافه را از انتهای گروهش جدا نکنید: look at the photo، نه look the photo at.",
      "در نوشتار، اول جمله و اسم خاص با حرف بزرگ شروع می‌شود و جمله با نقطه تمام می‌شود.",
    ],
    uses: [
      {
        title: "جملهٔ خبری",
        body: "اول بگویید چه کسی کار را انجام می‌دهد، بعد خود کار، بعد بقیهٔ اطلاعات.",
        examples: [
          { en: "Sara reads a book every night.", fa: "سارا هر شب کتاب می‌خواند." },
          { en: "We met Ali at the station yesterday.", fa: "دیروز علی را در ایستگاه دیدیم." },
        ],
      },
      {
        title: "جای قید",
        body: "قید حالت معمولاً بعد از مفعول می‌آید. قید تکرار به فعل می‌چسبد.",
        examples: [
          { en: "She speaks English slowly.", fa: "او انگلیسی را آهسته حرف می‌زند." },
          { en: "He is usually late.", fa: "او معمولاً دیر می‌کند." },
        ],
      },
    ],
    forms: [
      { name: "خبری", pattern: "S + V + O", sample: "I drink tea." },
      { name: "مکان سپس زمان", pattern: "S + V + place + time", sample: "They study at home in the evening." },
      { name: "صفت قبل از اسم", pattern: "adj + noun", sample: "a quiet street" },
    ],
    signals: ["every day", "at home", "slowly", "usually", "yesterday"],
    mistakes: [
      {
        wrong: "I every day tea drink.",
        right: "I drink tea every day.",
        why: "فعل باید بلافاصله بعد از فاعل بیاید و زمان ته جمله باشد.",
      },
      {
        wrong: "She has a car red.",
        right: "She has a red car.",
        why: "صفت در انگلیسی قبل از اسم قرار می‌گیرد.",
      },
    ],
    contrast: "در پرسش، فعل کمکی قبل از فاعل می‌آید. ترتیب خبری را در سؤال حفظ نکنید.",
    quiz: [
      {
        prompt: "Which sentence has natural English word order?",
        options: [
          "Yesterday I in the park walked.",
          "I walked in the park yesterday.",
          "I in the park yesterday walked.",
          "Walked I in the park yesterday.",
        ],
        answer: 1,
        explain: "فاعل، فعل، مکان، زمان.",
      },
      {
        prompt: "Choose the correct phrase.",
        options: ["a house big", "big a house", "a big house", "house a big"],
        answer: 2,
        explain: "حرف تعریف، بعد صفت، بعد اسم.",
      },
      {
        prompt: "Where does the verb go?",
        options: [
          "At the end, like Persian",
          "Right after the subject",
          "Before the subject in every sentence",
          "After the time expression",
        ],
        answer: 1,
        explain: "در جملهٔ خبری فعل درست بعد از فاعل است.",
      },
    ],
  },
  {
    id: "to-be",
    level: "A1",
    category: "foundations",
    title: "The verb be",
    titleFa: "فعل be",
    formula: "I am · you/we/they are · he/she/it is",
    summary:
      "be برای هویت، حالت، سن، شغل، مکان و وصف به کار می‌رود. شکل آن با فاعل عوض می‌شود و در حال ساده فعل دیگری کنارش نمی‌آید.",
    persianNote:
      "معادل «است / هست» همیشه لازم است. «She teacher» غلط است چون be افتاده. منفی با not ساخته می‌شود، نه با «نـ» روی فعل بعدی.",
    points: [
      "I am · he/she/it is · you/we/they are. در گذشته: I/he/she/it was · you/we/they were.",
      "منفی: am not / is not (isn't) / are not (aren't).",
      "پرسش: جای be و فاعل عوض می‌شود: Are you ready?",
      "بعد از be اسم، صفت یا عبارت مکان می‌آید، نه شکل سادهٔ یک فعل دیگر.",
      "سن: I am 20 years old. نه I have 20 years.",
      "there's و there are جدا از خود فعل be درس داده می‌شوند، ولی همان am/is/are هستند.",
    ],
    uses: [
      {
        title: "هویت و وصف",
        body: "شغل، ملیت، صفت و احساس پایدار یا لحظه‌ای با be می‌آید.",
        examples: [
          { en: "Neda is an engineer.", fa: "ندا مهندس است." },
          { en: "The soup is hot.", fa: "سوپ داغ است." },
        ],
      },
      {
        title: "مکان",
        body: "برای گفتن کجاست، be به‌تنهایی کافی است.",
        examples: [
          { en: "My keys are on the table.", fa: "کلیدهایم روی میز است." },
          { en: "We were at home last night.", fa: "دیشب خانه بودیم." },
        ],
      },
    ],
    forms: [
      { name: "حال", pattern: "am / is / are", sample: "They are tired." },
      { name: "گذشته", pattern: "was / were", sample: "It was cold." },
      { name: "پرسش", pattern: "Be + subject?", sample: "Is she your sister?" },
    ],
    signals: ["a/an + job", "from", "years old", "at home", "hungry", "late"],
    mistakes: [
      {
        wrong: "He are a student.",
        right: "He is a student.",
        why: "he/she/it با is می‌آید، نه are.",
      },
      {
        wrong: "I am agree.",
        right: "I agree.",
        why: "agree خودش فعل است و be نمی‌خواهد.",
      },
    ],
    contrast: "have برای مالکیت است (I have a car) و be برای وصف (The car is new).",
    quiz: [
      {
        prompt: "She ___ from Isfahan.",
        options: ["am", "is", "are", "be"],
        answer: 1,
        explain: "she با is می‌آید.",
      },
      {
        prompt: "Which question is correct?",
        options: ["You are ready?", "Are you ready?", "Do you be ready?", "Ready you are?"],
        answer: 1,
        explain: "برای پرسش با be، خود be اول می‌آید.",
      },
      {
        prompt: "They ___ at the cinema yesterday.",
        options: ["was", "were", "are", "is"],
        answer: 1,
        explain: "they در گذشته were می‌گیرد.",
      },
    ],
  },
  {
    id: "pronouns",
    level: "A1",
    category: "foundations",
    title: "Pronouns",
    titleFa: "ضمایر",
    formula: "I / me · he / him · she / her · they / them",
    summary:
      "ضمیر فاعلی کار را انجام می‌دهد. ضمیر مفعولی کار روی آن انجام می‌شود. صفت ملکی قبل از اسم می‌آید و ضمیر ملکی جای اسم را می‌گیرد.",
    persianNote:
      "«او» در فارسی برای زن و مرد یکی است، ولی انگلیسی he و she را جدا می‌کند. it برای چیز، حیوانِ بی‌نام و گاهی نوزاد است، نه برای آدم. جنسیت اشیاء در انگلیسی خنثی است.",
    points: [
      "فاعلی: I, you, he, she, it, we, they.",
      "مفعولی: me, you, him, her, it, us, them.",
      "صفت ملکی: my, your, his, her, its, our, their + اسم.",
      "ضمیر ملکی: mine, yours, his, hers, ours, theirs. its ملکی مستقل تقریباً به کار نمی‌رود.",
      "I همیشه بزرگ نوشته می‌شود. it's یعنی it is؛ its یعنی مالِ آن.",
      "برای آدم ناشناس در انگلیسی امروز often they مفرد به کار می‌رود: Someone left their bag.",
    ],
    uses: [
      {
        title: "فاعل و مفعول",
        body: "ضمیر فاعلی قبل از فعل است. بعد از فعل یا حرف اضافه، شکل مفعولی لازم است.",
        examples: [
          { en: "She called me.", fa: "او به من زنگ زد." },
          { en: "We saw them at the market.", fa: "آن‌ها را در بازار دیدیم." },
        ],
      },
      {
        title: "مالکیت",
        body: "اگر اسم بعدش بیاید صفت ملکی، اگر اسم حذف شود ضمیر ملکی.",
        examples: [
          { en: "This is her notebook.", fa: "این دفتر اوست." },
          { en: "This notebook is hers.", fa: "این دفتر مال اوست." },
        ],
      },
    ],
    forms: [
      { name: "فاعلی", pattern: "قبل از فعل", sample: "They know the answer." },
      { name: "مفعولی", pattern: "بعد از فعل / حرف اضافه", sample: "Tell us the news." },
      { name: "ملکی", pattern: "my book / mine", sample: "Your idea is better than mine." },
    ],
    signals: ["me", "him", "her", "them", "my", "their", "mine"],
    mistakes: [
      {
        wrong: "Me is a teacher.",
        right: "I am a teacher.",
        why: "شروع جملهٔ خبری ضمیر فاعلی می‌خواهد.",
      },
      {
        wrong: "The cat washed it's paws.",
        right: "The cat washed its paws.",
        why: "its مالکیت است و آپاستروف ندارد.",
      },
    ],
    contrast: "your صفت است (your bag). you're یعنی you are. این دو فقط شبیه هم شنیده می‌شوند.",
    quiz: [
      {
        prompt: "Between you and ___, the plan is risky.",
        options: ["I", "me", "my", "mine"],
        answer: 1,
        explain: "بعد از حرف اضافهٔ between شکل مفعولی می‌آید.",
      },
      {
        prompt: "This umbrella is ___.",
        options: ["her", "she", "hers", "she's"],
        answer: 2,
        explain: "اسم بعد از ضمیر نیامده، پس ضمیر ملکی لازم است.",
      },
      {
        prompt: "Ali lost ___ keys.",
        options: ["her", "his", "he's", "him"],
        answer: 1,
        explain: "Ali مرد است و قبل از اسم his می‌آید.",
      },
    ],
  },
  {
    id: "questions",
    level: "A1",
    category: "foundations",
    title: "Questions",
    titleFa: "پرسش‌ها",
    formula: "(Wh-) + auxiliary + subject + verb",
    summary:
      "در پرسش بله/خیر یک فعل کمکی قبل از فاعل می‌آید. اگر فعل اصلی be یا فعل وجهی باشد، خودش جلو می‌آید. فعل معمولی به do/does/did نیاز دارد.",
    persianNote:
      "در فارسیOften فقط آهنگ جمله سؤال می‌سازد. در انگلیسی خبری را با آهنگ به سؤال تبدیل نکنید: You like tea گفتن با لحن پرسشی هنوز غلط است. باید Do you like tea باشد.",
    points: [
      "حال ساده: Do/Does + فاعل + فعل ساده. he/she/it با Does، و فعل s نمی‌گیرد.",
      "گذشتهٔ ساده: Did + فاعل + فعل ساده. فعل دیگر گذشته نمی‌شود.",
      "be و can/will/should خودشان کمکی‌اند: Is she here? Can you swim?",
      "کلمات پرسشی: what, where, when, who, why, how, which, whose.",
      "اگر who فاعل باشد، do نمی‌خواهد: Who called you?",
      "حرف اضافه معمولاً ته سؤال می‌ماند: What are you looking at?",
    ],
    uses: [
      {
        title: "بله یا خیر",
        body: "فقط جای کمکی و فاعل عوض می‌شود. جواب کوتاه کمکی را تکرار می‌کند.",
        examples: [
          { en: "Does Mina live here? — Yes, she does.", fa: "مینا اینجا زندگی می‌کند؟ — بله." },
          { en: "Are they ready? — No, they aren't.", fa: "آماده‌اند؟ — نه." },
        ],
      },
      {
        title: "پرسش با کلمه",
        body: "کلمهٔ پرسشی اول می‌آید، بعد همان ترتیب سؤال بله/خیر.",
        examples: [
          { en: "Where did you put the keys?", fa: "کلیدها را کجا گذاشتی؟" },
          { en: "Why is the shop closed?", fa: "چرا مغازه بسته است؟" },
        ],
      },
    ],
    forms: [
      { name: "حال", pattern: "Do/Does + S + V?", sample: "Do they know him?" },
      { name: "گذشته", pattern: "Did + S + V?", sample: "Did you see the film?" },
      { name: "با be", pattern: "Am/Is/Are + S?", sample: "Are you a doctor?" },
    ],
    signals: ["what", "where", "when", "why", "how", "who", "which"],
    mistakes: [
      {
        wrong: "Where you live?",
        right: "Where do you live?",
        why: "فعل معمولی بدون کمکی سؤال نمی‌سازد.",
      },
      {
        wrong: "Does she likes coffee?",
        right: "Does she like coffee?",
        why: "s سوم‌شخص فقط وقتی می‌آید که does نباشد.",
      },
    ],
    contrast: "در پرسش غیرمستقیم ترتیب خبری برمی‌گردد: Tell me where you live. نه Tell me where do you live.",
    quiz: [
      {
        prompt: "___ she finish the report yesterday?",
        options: ["Do", "Does", "Did", "Is"],
        answer: 2,
        explain: "yesterday گذشته است، پس Did.",
      },
      {
        prompt: "Which question is correct?",
        options: [
          "What you are reading?",
          "What are you reading?",
          "What do you reading?",
          "What are reading you?",
        ],
        answer: 1,
        explain: "are کمکی است و قبل از فاعل می‌آید.",
      },
      {
        prompt: "Who ___ the window?",
        options: ["did break", "broke", "does broke", "broken"],
        answer: 1,
        explain: "who خودش فاعل است؛ فعل عادی می‌ماند.",
      },
    ],
  },
  {
    id: "articles",
    level: "A1",
    category: "nouns",
    title: "Articles",
    titleFa: "حروف تعریف",
    formula: "a / an + singular countable · the + known noun",
    summary:
      "a و an یعنی یکی از یک نوع، برای شنونده تازه. the یعنی همان که هر دو می‌شناسیم، یا چیزی یکتا. اسم جمع و شمارش‌ناپذیر در معنی کلی اغلب بدون حرف تعریف می‌آیند.",
    persianNote:
      "فارسی حرف تعریف جدا مثل the ندارد. فارسی‌زبان‌ها یا همه جا the می‌گذارند یا هیچ‌جا. قانون ساده: بار اول و نامشخص a/an، بار دوم و مشخص the، مفهوم کلی بدون حرف.",
    points: [
      "an قبل از صدای مصوت: an apple, an hour. a قبل از صدای صامت: a university (صدای /j/).",
      "a/an فقط با اسم مفرد شمارش‌پذیر. a water و a informations غلط است.",
      "the با چیزی که قبلاً ذکر شده، در موقعیت واضح است، یا در جهان یکی است: the sun, the door.",
      "اسم جمع کلی: Dogs are loyal. نه The dogs are loyal مگر سگ‌های مشخص.",
      "وعده‌های غذا، ورزش و بیشتر کشورها بدون the: lunch, tennis, Iran. استثنا: the UAE, the Netherlands.",
      "صفت عالی و ترتیب: the best, the first. آلات موسیقی: play the piano.",
    ],
    uses: [
      {
        title: "اولین اشاره",
        body: "وقتی شنونده هنوز نمی‌داند کدام یکی، a/an به کار می‌رود.",
        examples: [
          { en: "I bought a lamp. The lamp is brass.", fa: "یک چراغ خریدم. آن چراغ برنجی است." },
          { en: "She is an architect.", fa: "او معمار است." },
        ],
      },
      {
        title: "چیز مشخص یا یکتا",
        body: "the به دانش مشترک تکیه می‌کند.",
        examples: [
          { en: "Close the window, please.", fa: "لطفاً پنجره را ببند." },
          { en: "The moon looks huge tonight.", fa: "ماه امشب خیلی بزرگ است." },
        ],
      },
    ],
    forms: [
      { name: "ناشناس مفرد", pattern: "a / an + noun", sample: "a useful tool" },
      { name: "شناخته", pattern: "the + noun", sample: "the tool on the desk" },
      { name: "کلی", pattern: "Ø + plural / uncountable", sample: "Water is essential." },
    ],
    signals: ["a", "an", "the", "first mention", "unique"],
    mistakes: [
      {
        wrong: "I need a advice.",
        right: "I need some advice. / I need a piece of advice.",
        why: "advice شمارش‌ناپذیر است.",
      },
      {
        wrong: "She is best student.",
        right: "She is the best student.",
        why: "صفت عالی the می‌خواهد.",
      },
    ],
    contrast: "درس پیشرفتهٔ حرف تعریف، موارد صفر مثل hospital, school و اسم‌های خاص را دقیق‌تر باز می‌کند.",
    quiz: [
      {
        prompt: "He is ___ honest man.",
        options: ["a", "an", "the", "—"],
        answer: 1,
        explain: "honest با صدای مصوت شروع می‌شود.",
      },
      {
        prompt: "I saw a cat. ___ cat was hungry.",
        options: ["A", "An", "The", "—"],
        answer: 2,
        explain: "اشارهٔ دوم به همان گربه the می‌گیرد.",
      },
      {
        prompt: "___ life is short.",
        options: ["A", "The", "An", "—"],
        answer: 3,
        explain: "life در معنی کلی حرف تعریف نمی‌گیرد.",
      },
    ],
  },
  {
    id: "nouns",
    level: "A1",
    category: "nouns",
    title: "Nouns and plurals",
    titleFa: "اسم، جمع و شمارش",
    formula: "countable: a book / books · uncountable: information",
    summary:
      "اسم شمارش‌پذیر مفرد و جمع دارد. اسم شمارش‌ناپذیر در شکل عادی جمع بسته نمی‌شود و a/an نمی‌گیرد. خیلی از خطاهای سطح پایه همین‌جا است.",
    persianNote:
      "کلماتی مثل information, advice, news, furniture, luggage, homework, knowledge, traffic, money در انگلیسی شمارش‌ناپذیرند، حتی اگر در فارسی «یک خبر» یا «چند تا وسیله» بگوییم.",
    points: [
      "جمع منظم: book → books. بعد از s, sh, ch, x, z: es (boxes).",
      "consonant + y → ies (city/cities). vowel + y → s (boy/boys).",
      "بی‌قاعدهٔ رایج: man/men, woman/women, child/children, person/people, tooth/teeth, foot/feet, mouse/mice.",
      "بعضی اسم‌ها جمع و مفردشان یکی است: sheep, fish, series, species.",
      "شمارش‌ناپذیر را با ظرف بشمارید: a piece of advice, two glasses of water, an item of news.",
      "some با شمارش‌ناپذیر و جمع؛ a/an فقط مفرد شمارش‌پذیر.",
      "اسم‌هایی که جمع به نظر می‌رسند ولی فعل مفرد می‌گیرند: news, maths, politics.",
      "hair, fruit, light می‌توانند هم کلی (غیرقابل شمارش) باشند هم دانه/نوع (قابل شمارش).",
    ],
    uses: [
      {
        title: "جمع بستن",
        body: "بیشتر اسم‌ها با s جمع می‌شوند، ولی چند خانواده استثنا دارند.",
        examples: [
          { en: "Three children are in the yard.", fa: "سه کودک در حیاط‌اند." },
          { en: "The leaves turn yellow in autumn.", fa: "برگ‌ها پاییز زرد می‌شوند." },
        ],
      },
      {
        title: "چیزی که دانه دانه نیست",
        body: "به جای جمع بستن، مقدار یا ظرف را عوض کنید.",
        examples: [
          { en: "She gave me useful advice.", fa: "توصیهٔ مفیدی به من کرد." },
          { en: "We need some more furniture.", fa: "چند وسیلهٔ دیگر لازم داریم." },
        ],
      },
    ],
    forms: [
      { name: "مفرد", pattern: "a/an + noun", sample: "an idea" },
      { name: "جمع", pattern: "noun + s/es", sample: "two ideas" },
      { name: "غیرقابل شمارش", pattern: "some / much + noun", sample: "some information" },
    ],
    signals: ["many", "much", "a few", "a little", "some", "piece of"],
    mistakes: [
      {
        wrong: "I have many homeworks.",
        right: "I have a lot of homework.",
        why: "homework جمع بسته نمی‌شود.",
      },
      {
        wrong: "The newses are bad.",
        right: "The news is bad.",
        why: "news مفرد است، هرچند s دارد.",
      },
    ],
    contrast: "many با شمارش‌پذیر جمع (many books) و much با شمارش‌ناپذیر (much time).",
    quiz: [
      {
        prompt: "Could you give me ___?",
        options: ["an advice", "some advice", "advices", "an advices"],
        answer: 1,
        explain: "advice غیرقابل شمارش است.",
      },
      {
        prompt: "Two ___ were waiting outside.",
        options: ["woman", "womans", "women", "womens"],
        answer: 2,
        explain: "جمع woman می‌شود women.",
      },
      {
        prompt: "There isn't much ___ left.",
        options: ["chairs", "time", "apples", "friends"],
        answer: 1,
        explain: "much با اسم شمارش‌ناپذیر می‌آید.",
      },
    ],
  },
  {
    id: "there-this",
    level: "A1",
    category: "nouns",
    title: "There is and this",
    titleFa: "وجود و اشاره",
    formula: "There is/are · This/that/these/those",
    summary:
      "there is و there are برای گفتن «وجود دارد» به کار می‌روند، نه برای اشاره با انگشت. this/these نزدیک‌اند و that/those دور.",
    persianNote:
      "there را با قید مکان there (آنجا) قاطی نکنید. There is a cafe there یعنی «آنجا یک کافه هست». فاعل دستوری there است و فعل با اسم بعدش مطابقت می‌کند.",
    points: [
      "There is + مفرد یا شمارش‌ناپذیر. There are + جمع.",
      "در محاوره، لیست با there is شروع می‌شود حتی اگر اولی مفرد باشد: There's a pen and two books.",
      "منفی: there isn't / there aren't. پرسش: Is there...? Are there...?",
      "some در خبری، any معمولاً در منفی و پرسش: Are there any seats?",
      "this/these نزدیک گوینده؛ that/those دورتر یا در زمان دیگر.",
      "تلفن: This is Reza. نه I am Reza، وقتی خودتان را معرفی می‌کنید.",
    ],
    uses: [
      {
        title: "وجود داشتن",
        body: "وقتی معرفی می‌کنید چیزی هست، نه اینکه آن چیز کجاست با اشاره.",
        examples: [
          { en: "There is a pharmacy on this street.", fa: "در این خیابان داروخانه هست." },
          { en: "There aren't any tickets left.", fa: "بلیطی نمانده." },
        ],
      },
      {
        title: "اشاره",
        body: "فاصله یا نزدیکی ذهنی را نشان می‌دهد.",
        examples: [
          { en: "This cake is better than that one.", fa: "این کیک از آن یکی بهتر است." },
          { en: "Those mountains stay white all year.", fa: "آن کوه‌ها همهٔ سال سفید می‌مانند." },
        ],
      },
    ],
    forms: [
      { name: "مفرد", pattern: "There is + noun", sample: "There is a problem." },
      { name: "جمع", pattern: "There are + noun", sample: "There are two problems." },
      { name: "اشاره", pattern: "this/that + singular", sample: "That building is new." },
    ],
    signals: ["there is", "there are", "this", "that", "these", "those", "any"],
    mistakes: [
      {
        wrong: "It is a bank near here.",
        right: "There is a bank near here.",
        why: "برای معرفی وجود، there is لازم است نه it is.",
      },
      {
        wrong: "There are a book on the desk.",
        right: "There is a book on the desk.",
        why: "a book مفرد است.",
      },
    ],
    contrast: "It is cold هوا را وصف می‌کند. There is a cold wind وجود باد را می‌گوید.",
    quiz: [
      {
        prompt: "___ any milk in the fridge?",
        options: ["Is there", "Are there", "There is", "Have"],
        answer: 0,
        explain: "milk غیرقابل شمارش است و پرسش با Is there ساخته می‌شود.",
      },
      {
        prompt: "I like ___ shoes you are wearing.",
        options: ["this", "that", "these", "there"],
        answer: 2,
        explain: "shoes جمع و نزدیک مخاطب است؛ these طبیعی است.",
      },
      {
        prompt: "Which sentence introduces existence?",
        options: [
          "The cafe is there.",
          "There is a cafe on King Street.",
          "It is a cafe.",
          "Cafe there is.",
        ],
        answer: 1,
        explain: "there is وجود را معرفی می‌کند.",
      },
    ],
  },
  {
    id: "present-simple",
    level: "A1",
    category: "tenses",
    title: "Present simple",
    titleFa: "حال ساده",
    formula: "Subject + verb (+ s/es)",
    summary:
      "حال ساده برای عادت، حقیقت، برنامهٔ ثابت و وضعیت پایدار است. سوم‌شخص مفرد فعل را تغییر می‌دهد و منفی و پرسش با do/does ساخته می‌شود.",
    persianNote:
      "فارسی برای عادت و برای کاری که همین حالا جریان دارد یک ساخت مشابه دارد. انگلیسی این دو را جدا می‌کند. «من کار می‌کنم» اگر شغل و عادت است present simple است، نه continuous.",
    points: [
      "he/she/it: فعل + s/es. I/you/we/they شکل ساده.",
      "es بعد از s, sh, ch, x, o: goes, watches, misses.",
      "consonant + y → ies: carry/carries. play/plays چون مصوت دارد.",
      "منفی: don't / doesn't + فعل ساده. She doesn't work. نه doesn't works.",
      "قید تکرار قبل از فعل اصلی: I often walk. بعد از be: She is often late.",
      "با جدول زمانی حتی برای آینده: The train leaves at 6.",
      "افعال حالت (know, like, want, need, believe) معمولاً continuous نمی‌شوند.",
    ],
    uses: [
      {
        title: "عادت و تکرار",
        body: "کاری که با نظم انجام می‌شود.",
        examples: [
          { en: "I walk to work on weekdays.", fa: "روزهای هفته پیاده سر کار می‌روم." },
          { en: "Water boils at 100 degrees.", fa: "آب در صد درجه می‌جوشد." },
        ],
      },
      {
        title: "برنامهٔ ثابت",
        body: "حرکت قطار، کلاس، پرواز؛ آینده‌ای که جدول دارد.",
        examples: [
          { en: "The class starts at eight.", fa: "کلاس ساعت هشت شروع می‌شود." },
          { en: "Does the museum open on Mondays?", fa: "موزه دوشنبه‌ها باز می‌کند؟" },
        ],
      },
    ],
    forms: [
      { name: "مثبت", pattern: "S + V / V-s", sample: "He teaches maths." },
      { name: "منفی", pattern: "don't / doesn't + V", sample: "They don't eat meat." },
      { name: "پرسش", pattern: "Do / Does + S + V?", sample: "Does it rain a lot here?" },
    ],
    signals: ["always", "usually", "often", "sometimes", "never", "every", "on Mondays"],
    mistakes: [
      {
        wrong: "He don't like spicy food.",
        right: "He doesn't like spicy food.",
        why: "he با doesn't می‌آید و فعل ساده می‌ماند.",
      },
      {
        wrong: "She studys English.",
        right: "She studies English.",
        why: "y بعد از بی‌صدا به ies تبدیل می‌شود.",
      },
    ],
    contrast: "Present continuous برای همین حالا یا برنامهٔ شخصی موقت است، نه عادت همیشگی.",
    quiz: [
      {
        prompt: "My brother ___ in a bank.",
        options: ["work", "works", "working", "is work"],
        answer: 1,
        explain: "سوم‌شخص مفرد s می‌گیرد.",
      },
      {
        prompt: "We ___ TV every morning.",
        options: ["don't watch", "doesn't watch", "not watch", "aren't watch"],
        answer: 0,
        explain: "we با don't و فعل ساده.",
      },
      {
        prompt: "The bus ___ at 7:15.",
        options: ["leave", "leaves", "is leave", "leaving"],
        answer: 1,
        explain: "برنامهٔ ثابت با حال ساده.",
      },
    ],
  },
  {
    id: "present-continuous",
    level: "A1",
    category: "tenses",
    title: "Present continuous",
    titleFa: "حال استمراری",
    formula: "am / is / are + verb-ing",
    summary:
      "برای کاری که همین حالا در جریان است، موقعیت موقت، و برنامهٔ شخصی قطعی در آیندهٔ نزدیک.",
    persianNote:
      "اگر فقط عادت را بگویید continuous غلط است: I am going to school every day برای عادت ثابت ضعیف است. هر روز ثابت = simple. این هفته موقتاً = continuous.",
    points: [
      "شکل: be + ing. منفی روی be می‌آید: isn't working.",
      "e آخر اغلب حذف می‌شود: make → making. ie → y: lie → lying.",
      "تک‌هجایی با مصوت کوتاه + بی‌صدا: حرف آخر تکرار می‌شود: sit → sitting, run → running.",
      "w, x, y تکرار نمی‌شوند: snowing, fixing, playing.",
      "افعال حالت را continuous نکنید: know, want, love, believe, own, seem. استثناهای معنی‌دار: I'm loving this (محاوره، موقت).",
      "آیندهٔ ترتیبی: I'm meeting Sara tonight. برنامه چیده شده است.",
    ],
    uses: [
      {
        title: "همین حالا",
        body: "عمل در لحظهٔ حرف زدن جریان دارد.",
        examples: [
          { en: "Be quiet. The baby is sleeping.", fa: "ساکت باش. بچه خواب است." },
          { en: "Why are you wearing a coat?", fa: "چرا پالتو پوشیده‌ای؟" },
        ],
      },
      {
        title: "موقت یا قرار قطعی",
        body: "دوره‌ای که همیشگی نیست، یا قراری که چیده شده.",
        examples: [
          { en: "I'm staying with my uncle this month.", fa: "این ماه پیش دایی‌ام هستم." },
          { en: "We're flying to Tabriz on Friday.", fa: "جمعه به تبریز پرواز می‌کنیم." },
        ],
      },
    ],
    forms: [
      { name: "مثبت", pattern: "be + V-ing", sample: "She is reading." },
      { name: "منفی", pattern: "be not + V-ing", sample: "I'm not waiting." },
      { name: "پرسش", pattern: "be + S + V-ing?", sample: "Are they coming?" },
    ],
    signals: ["now", "right now", "at the moment", "today", "this week", "Look!"],
    mistakes: [
      {
        wrong: "I am knowing the answer.",
        right: "I know the answer.",
        why: "know فعل حالت است.",
      },
      {
        wrong: "He is runing.",
        right: "He is running.",
        why: "بعد از مصوت کوتاه، حرف بی‌صدا تکرار می‌شود.",
      },
    ],
    contrast: "حال ساده عادت و حقیقت است. اگر کلمهٔ every day دیدید، معمولاً simple درست است نه continuous.",
    quiz: [
      {
        prompt: "Listen! Someone ___ the piano.",
        options: ["plays", "play", "is playing", "played"],
        answer: 2,
        explain: "Listen نشانهٔ لحظهٔ حال است.",
      },
      {
        prompt: "I ___ this city. It's my home.",
        options: ["am loving", "love", "loving", "am love"],
        answer: 1,
        explain: "علاقهٔ پایدار با فعل حالت و حال ساده.",
      },
      {
        prompt: "She ___ tennis this season, but she doesn't usually.",
        options: ["plays", "is playing", "play", "played"],
        answer: 1,
        explain: "this season دورهٔ موقت را نشان می‌دهد.",
      },
    ],
  },
  {
    id: "can-could",
    level: "A1",
    category: "modals",
    title: "Can and could",
    titleFa: "توانستن",
    formula: "can / could + base verb",
    summary:
      "can برای توانایی، اجازه و امکان در حال است. could گذشتهٔ توانایی، درخواست مؤدبانه‌تر، و امکان ضعیف‌تر است. بعد از هر دو، فعل ساده بدون to می‌آید.",
    persianNote:
      "معادل «می‌توانم» اغلب با can گفته می‌شود، ولی برای توانایی کلی در یک موقعیت خاص be able to دقیق‌تر است. can گذشتهٔ کامل ندارد: نه I caned و نه I could to go.",
    points: [
      "بدون s، بدون to، بدون do: She can swim. Can she swim? She can't swim.",
      "توانایی گذشته: could. توانایی یک لحظهٔ مشخص در گذشته اغلب was/were able to است: The door was locked but I was able to climb in.",
      "اجازه: Can I leave early? در رسمی‌تر May I...?",
      "درخواست: Could you help me? از Can you مؤدبانه‌تر است ولی گذشته نیست.",
      "امکان: It can get cold here. / We could be late.",
      "توانایی آینده: will be able to، نه will can.",
    ],
    uses: [
      {
        title: "توانایی و اجازه",
        body: "بلد بودن یا مجاز بودن.",
        examples: [
          { en: "Can you read this handwriting?", fa: "می‌توانی این دستخط را بخوانی؟" },
          { en: "You can't park here.", fa: "اینجا نمی‌توانی پارک کنی." },
        ],
      },
      {
        title: "مؤدب و ممکن",
        body: "could الزاماً گذشته نیست.",
        examples: [
          { en: "Could you say that again?", fa: "ممکن است دوباره بگویید؟" },
          { en: "This road could be faster.", fa: "شاید این جاده سریع‌تر باشد." },
        ],
      },
    ],
    forms: [
      { name: "مثبت", pattern: "can / could + V", sample: "Birds can fly." },
      { name: "منفی", pattern: "can't / couldn't + V", sample: "I couldn't sleep." },
      { name: "پرسش", pattern: "Can / Could + S + V?", sample: "Can we start?" },
    ],
    signals: ["can", "can't", "could", "couldn't", "be able to"],
    mistakes: [
      {
        wrong: "She can to drive.",
        right: "She can drive.",
        why: "بعد از فعل وجهی to نمی‌آید.",
      },
      {
        wrong: "Do you can swim?",
        right: "Can you swim?",
        why: "فعل وجهی خودش پرسش می‌سازد.",
      },
    ],
    contrast: "may/might برای احتمال‌اند. can بیشتر توانایی یا امکان عمومی است.",
    quiz: [
      {
        prompt: "He ___ speak three languages.",
        options: ["can", "cans", "can to", "is can"],
        answer: 0,
        explain: "can بدون s و بدون to.",
      },
      {
        prompt: "When the fire started, she ___ open the back door.",
        options: ["can", "could", "was able to", "is able to"],
        answer: 2,
        explain: "موفقیت در یک لحظهٔ گذشته: was able to دقیق‌تر از could است.",
      },
      {
        prompt: "___ you pass the salt?",
        options: ["Could", "Do could", "Are could", "Could to"],
        answer: 0,
        explain: "درخواست مؤدب با Could you + فعل ساده.",
      },
    ],
  },
  {
    id: "prepositions",
    level: "A1",
    category: "prepositions",
    title: "Prepositions",
    titleFa: "حروف اضافه",
    formula: "in / on / at · time and place",
    summary:
      "حروف اضافهٔ زمان و مکان قواعد قابل حفظ دارند، ولی خیلی از ترکیب‌ها فقط با فعل یا صفت چفت شده‌اند و باید با خود کلمه یاد گرفته شوند.",
    persianNote:
      "ترجمهٔ کلمه‌به‌کلمه از «در، به، با، از» جواب نمی‌دهد. depend on، married to، listen to، arrive in/at، good at، interested in را به صورت عبارت کامل حفظ کنید.",
    points: [
      "زمان: at برای ساعت و نقاط کوچک (at 6, at night, at the weekend در انگلیسی بریتانیایی رایج). on برای روز و تاریخ (on Monday, on 3 May). in برای ماه، سال، فصل و بخش روز (in July, in 2024, in the morning).",
      "مکان: at نقطه (at the bus stop). on سطح یا خط (on the table, on the coast). in فضای بسته یا شهر/کشور (in the room, in Rasht).",
      "حرکت به داخل: into. روی سطح به قصد قرار دادن: onto. رسیدن: arrive in a city, arrive at a building.",
      "وسیله: by bus, by car ولی on foot و in a taxi (وقتی داخل بودن مهم است).",
      "until برای تا یک لحظه. by برای حداکثر تا آن لحظه (مهلت).",
      "for برای مدت. since برای نقطهٔ شروع. during برای در طول یک رویداد.",
    ],
    uses: [
      {
        title: "زمان",
        body: "از کوچک به بزرگ: at، on، in.",
        examples: [
          { en: "The meeting is at 9 on Wednesday in March.", fa: "جلسه ساعت ۹ چهارشنبه در مارس است." },
          { en: "We stayed for three days.", fa: "سه روز ماندیم." },
        ],
      },
      {
        title: "مکان و ترکیب ثابت",
        body: "حرف اضافه بخشی از فعل است، نه ترجمهٔ آزاد.",
        examples: [
          { en: "She is good at chess.", fa: "در شطرنج خوب است." },
          { en: "Don't laugh at his accent.", fa: "به لهجه‌اش نخند." },
        ],
      },
    ],
    forms: [
      { name: "ساعت", pattern: "at + clock", sample: "at half past two" },
      { name: "روز", pattern: "on + day", sample: "on Friday morning" },
      { name: "دوره", pattern: "in + month/year", sample: "in winter" },
    ],
    signals: ["at", "on", "in", "for", "since", "by", "until", "into"],
    mistakes: [
      {
        wrong: "I arrived to the airport.",
        right: "I arrived at the airport.",
        why: "arrive با at یا in می‌آید، نه to.",
      },
      {
        wrong: "She is married with a doctor.",
        right: "She is married to a doctor.",
        why: "ترکیب ثابت married to است.",
      },
    ],
    contrast: "in the morning ولی on Monday morning. وقتی روز مشخص شود، on غالب است.",
    quiz: [
      {
        prompt: "I'll see you ___ Friday ___ 8.",
        options: ["in / at", "on / at", "at / on", "on / in"],
        answer: 1,
        explain: "روز با on، ساعت با at.",
      },
      {
        prompt: "We've lived here ___ 2019.",
        options: ["for", "since", "during", "by"],
        answer: 1,
        explain: "since با نقطهٔ شروع.",
      },
      {
        prompt: "He depends ___ his sister.",
        options: ["of", "on", "to", "from"],
        answer: 1,
        explain: "depend on ترکیب ثابت است.",
      },
    ],
  },
];
