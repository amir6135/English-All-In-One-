import type { Lesson } from "./types";

export const LESSONS_B: Lesson[] = [
  {
    id: "past-simple",
    level: "A2",
    category: "tenses",
    title: "Past simple",
    titleFa: "گذشتهٔ ساده",
    formula: "verb-ed · irregular past · did + base",
    summary:
      "گذشتهٔ ساده برای کاری است که در زمان مشخصی تمام شده. منظم‌ها ed می‌گیرند و بی‌قاعده‌ها شکل خاص خود را دارند. منفی و پرسش همیشه did + فعل ساده است.",
    persianNote:
      "اگر زمان تمام شده معلوم باشد (yesterday, in 2019, last week) حال کامل نگذارید. فارسی‌زبان‌ها گاهی I've seen him yesterday می‌گویند؛ yesterday گذشتهٔ ساده می‌خواهد.",
    points: [
      "منظم: ed. اگر e دارد فقط d: lived. consonant+y → ied: cried.",
      "تک‌هجایی مصوت کوتاه + بی‌صدا: stopped, planned. دو هجایی با تکیهٔ آخر هم همین: preferred.",
      "ed سه صدا دارد: /t/ بعد از بی‌صدای غیر از t (watched)، /d/ بعد از صدادار (played)، /ɪd/ بعد از t و d (wanted, needed).",
      "منفی: didn't + شکل ساده. نه didn't went.",
      "was/were منفی و پرسشی‌شان بدون did است: Were you there? She wasn't ill.",
      "used to برای عادت گذشته جدا درس داده می‌شود؛ خود گذشتهٔ ساده هم عادت را می‌گوید: We walked to school.",
    ],
    uses: [
      {
        title: "اتفاق تمام‌شده",
        body: "زمان یا تمام‌شدن برای گوینده روشن است.",
        examples: [
          { en: "I lost my wallet on the bus.", fa: "کیف پولم را در اتوبوس گم کردم." },
          { en: "Did they enjoy the wedding?", fa: "از عروسی خوششان آمد؟" },
        ],
      },
      {
        title: "رشتهٔ روایت",
        body: "داستان را قدم‌به‌قدم با گذشتهٔ ساده پیش می‌بریم.",
        examples: [
          { en: "She opened the door, saw the note, and called me.", fa: "در را باز کرد، یادداشت را دید و به من زنگ زد." },
          { en: "We lived in Yazd for six years.", fa: "شش سال در یزد زندگی کردیم. (آن دوره تمام شده)" },
        ],
      },
    ],
    forms: [
      { name: "مثبت", pattern: "V-ed / irregular", sample: "They left early." },
      { name: "منفی", pattern: "didn't + base", sample: "I didn't hear you." },
      { name: "پرسش", pattern: "Did + S + base?", sample: "Did he call?" },
    ],
    signals: ["yesterday", "last", "ago", "in 2016", "then", "when I was"],
    mistakes: [
      {
        wrong: "I didn't knew.",
        right: "I didn't know.",
        why: "بعد از did فعل به پایه برمی‌گردد.",
      },
      {
        wrong: "She buyed a coat.",
        right: "She bought a coat.",
        why: "buy بی‌قاعده است.",
      },
    ],
    contrast: "Past continuous زمینه و طول را می‌گوید. Past simple خود اتفاق کوتاه را.",
    quiz: [
      {
        prompt: "We ___ the museum last Sunday.",
        options: ["visit", "visited", "have visited", "visiting"],
        answer: 1,
        explain: "last Sunday زمان تمام‌شده است.",
      },
      {
        prompt: "Why ___ you leave so early?",
        options: ["did", "do", "was", "have"],
        answer: 0,
        explain: "پرسش گذشته با Did.",
      },
      {
        prompt: "She ___ not at home.",
        options: ["didn't be", "wasn't", "didn't was", "weren't"],
        answer: 1,
        explain: "be در گذشته was/were است و did نمی‌گیرد.",
      },
    ],
  },
  {
    id: "past-continuous",
    level: "A2",
    category: "tenses",
    title: "Past continuous",
    titleFa: "گذشتهٔ استمراری",
    formula: "was / were + verb-ing",
    summary:
      "کاری که در یک لحظهٔ گذشته در جریان بوده، یا زمینهٔ طولانی‌تر وقتی اتفاق کوتاهی (گذشتهٔ ساده) آن را قطع کرده.",
    persianNote:
      "جملهٔ معروف فارسی «داشتم می‌رفتم که...» دقیقاً همین الگوست: was/were + ing برای زمینه، past simple برای قطع‌کننده.",
    points: [
      "I/he/she/it was. you/we/they were.",
      "منفی: wasn't / weren't + ing.",
      "با while زمینهٔ طولانی، با when اغلب اتفاق کوتاه: While I was cooking, the phone rang.",
      "دو کار موازی هر دو continuous: I was reading while she was writing.",
      "برای عادت گذشته به کار نرود؛ آن used to یا would یا past simple است.",
      "افعال حالت باز هم continuous نمی‌شوند: I knew، نه I was knowing.",
    ],
    uses: [
      {
        title: "زمینهٔ یک داستان",
        body: "صحنه را باز می‌کند قبل از اینکه خبر اصلی بیاید.",
        examples: [
          { en: "The sun was setting when we reached the village.", fa: "وقتی به روستا رسیدیم خورشید غروب می‌کرد." },
          { en: "At 8 p.m. I was still working.", fa: "ساعت هشت هنوز کار می‌کردم." },
        ],
      },
      {
        title: "کار موقت در گذشته",
        body: "دوره‌ای کوتاه، نه هویت دائمی.",
        examples: [
          { en: "That summer he was living with his aunt.", fa: "آن تابستان پیش عمه‌اش زندگی می‌کرد." },
          { en: "Were you waiting long?", fa: "خیلی منتظر ماندی؟" },
        ],
      },
    ],
    forms: [
      { name: "مثبت", pattern: "was/were + ing", sample: "They were talking." },
      { name: "منفی", pattern: "wasn't/weren't + ing", sample: "I wasn't listening." },
      { name: "پرسش", pattern: "Was/Were + S + ing?", sample: "Was it raining?" },
    ],
    signals: ["while", "when", "at that moment", "all evening"],
    mistakes: [
      {
        wrong: "I was cook when you called.",
        right: "I was cooking when you called.",
        why: "شکل ing لازم است.",
      },
      {
        wrong: "They was sleeping.",
        right: "They were sleeping.",
        why: "they با were می‌آید.",
      },
    ],
    contrast: "اگر فقط بگویید چه شد و تمام شد، past simple کافی است و continuous اضافه است.",
    quiz: [
      {
        prompt: "I ___ a shower when the lights went out.",
        options: ["had", "was having", "were having", "have"],
        answer: 1,
        explain: "کار در جریان بوده و اتفاق کوتاه قطعش کرده.",
      },
      {
        prompt: "While she ___, I made tea.",
        options: ["studied", "was studying", "studies", "is studying"],
        answer: 1,
        explain: "while زمینهٔ طولانی را نشان می‌دهد.",
      },
      {
        prompt: "Which pair is parallel actions?",
        options: [
          "I dropped the cup and it broke.",
          "I was reading and he was cooking.",
          "I read the book last year.",
          "She left at noon.",
        ],
        answer: 1,
        explain: "دو عمل همزمان هر دو continuous می‌شوند.",
      },
    ],
  },
  {
    id: "future-forms",
    level: "A2",
    category: "tenses",
    title: "Future forms",
    titleFa: "آینده",
    formula: "will · be going to · present continuous",
    summary:
      "انگلیسی یک زمان آیندهٔ صرفی واحد ندارد. will برای تصمیم لحظه‌ای و پیش‌بینی، going to برای قصد و نشانه‌های حاضر، و present continuous برای قرار قطعی است.",
    persianNote:
      "همه‌چیز را با will نگویید. اگر از قبل تصمیم گرفته‌اید، going to یا continuous طبیعی‌تر است. will در پیشنهاد و قول هم خیلی زنده است: I'll help you.",
    points: [
      "will + فعل ساده. منفی won't. بدون to و بدون s.",
      "تصمیم سر میز حرف: The phone is ringing. I'll get it.",
      "going to: قصد قبلی یا شواهد. Look at those clouds. It's going to rain.",
      "قرار چیده‌شده با زمان: I'm having lunch with Roya tomorrow.",
      "حال ساده فقط برای جدول رسمی: The film starts at 9.",
      "shall برای پیشنهاد با I/we در انگلیسی امروزی کم‌رنگ است: Shall we begin?",
    ],
    uses: [
      {
        title: "تصمیم و پیش‌بینی",
        body: "will سبک و فوری است.",
        examples: [
          { en: "It's cold. I'll close the window.", fa: "سرد است. پنجره را می‌بندم." },
          { en: "I think she'll agree.", fa: "فکر می‌کنم قبول کند." },
        ],
      },
      {
        title: "قصد و قرار",
        body: "برنامه از قبل وجود دارد.",
        examples: [
          { en: "We're going to repaint the kitchen.", fa: "قرار است آشپزخانه را رنگ کنیم." },
          { en: "I'm meeting the lawyer at four.", fa: "ساعت چهار وکیل را می‌بینم." },
        ],
      },
    ],
    forms: [
      { name: "will", pattern: "will + V", sample: "They will wait." },
      { name: "going to", pattern: "be going to + V", sample: "I'm going to rest." },
      { name: "قرار", pattern: "be + V-ing", sample: "She's leaving tonight." },
    ],
    signals: ["tomorrow", "I think", "probably", "look", "tonight", "plan"],
    mistakes: [
      {
        wrong: "I will to call you.",
        right: "I will call you.",
        why: "بعد از will فعل ساده است.",
      },
      {
        wrong: "Wait, I'm going to help you with that bag.",
        right: "Wait, I'll help you with that bag.",
        why: "کمک همان لحظه تصمیم گرفته شده؛ will طبیعی‌تر است.",
      },
    ],
    contrast: "Future continuous و future perfect برای میانه و قبل از یک نقطه در آینده‌اند و در سطح B2 می‌آیند.",
    quiz: [
      {
        prompt: "That box is heavy. I ___ it for you.",
        options: ["'ll carry", "carry", "am carrying yesterday", "carried"],
        answer: 0,
        explain: "تصمیم لحظه‌ای با will.",
      },
      {
        prompt: "We ___ our cousins this weekend. The tickets are booked.",
        options: ["visit", "are visiting", "visited", "visiting"],
        answer: 1,
        explain: "بلیط خریده شده؛ قرار قطعی است.",
      },
      {
        prompt: "Look at the sky. It ___.",
        options: ["rains", "is going to rain", "rain", "rained"],
        answer: 1,
        explain: "شاهد حاضر، پس going to.",
      },
    ],
  },
  {
    id: "comparatives",
    level: "A2",
    category: "modifiers",
    title: "Comparatives",
    titleFa: "تفضیلی و عالی",
    formula: "adj-er than · more adj than · the adj-est",
    summary:
      "برای مقایسهٔ دو چیز صفت تفضیلی و than، برای گروه the و صفت عالی. کوتاه‌ها er/est می‌گیرند و بلندها more/most.",
    persianNote:
      "than را با then قاطی نکنید. بعد از than ضمیر مفعولی طبیعی محاوره است (than me) و در رسمی than I am. صفت را دوبار مقایسه نکنید: more better غلط است.",
    points: [
      "یک هجا: older, cheaper, the biggest. مصوت کوتاه + بی‌صدا: bigger, hotter.",
      "دو هجا با y: happier, the easiest.",
      "دو هجا یا بیشتر: more careful, the most expensive.",
      "بی‌قاعده: good/better/best, bad/worse/worst, far/farther/farthest (یا further برای معنی انتزاعی).",
      "as + صفت + as برای برابری. not as tall as برای نابرابری.",
      "much / a bit / far قبل از تفضیلی شدت می‌دهند: much colder.",
      "the + تفضیلی ..., the + تفضیلی: The sooner, the better.",
    ],
    uses: [
      {
        title: "دو چیز",
        body: "تفضیلی همیشه نسبت را با than یا بافت روشن می‌گوید.",
        examples: [
          { en: "Today is hotter than yesterday.", fa: "امروز از دیروز گرم‌تر است." },
          { en: "This route is more direct.", fa: "این مسیر مستقیم‌تر است." },
        ],
      },
      {
        title: "همهٔ گروه",
        body: "عالی محدوده را مشخص می‌کند.",
        examples: [
          { en: "It was the best meal I've had this year.", fa: "بهترین غذایی بود که امسال خوردم." },
          { en: "She is not as patient as her brother.", fa: "به اندازهٔ برادرش صبور نیست." },
        ],
      },
    ],
    forms: [
      { name: "کوتاه", pattern: "adj-er than", sample: "smaller than" },
      { name: "بلند", pattern: "more + adj + than", sample: "more useful than" },
      { name: "عالی", pattern: "the + est / most", sample: "the most useful" },
    ],
    signals: ["than", "the most", "as ... as", "much", "a bit", "less"],
    mistakes: [
      {
        wrong: "He is more taller than me.",
        right: "He is taller than me.",
        why: "er و more با هم جمع نمی‌شوند.",
      },
      {
        wrong: "This is best option.",
        right: "This is the best option.",
        why: "صفت عالی the می‌خواهد.",
      },
    ],
    contrast: "قید هم همین الگو را دارد: more carefully, faster. well → better. badly → worse.",
    quiz: [
      {
        prompt: "This exercise is ___ than the last one.",
        options: ["more easy", "easier", "easiest", "most easy"],
        answer: 1,
        explain: "easy دو هجا و مختوم به y است: easier.",
      },
      {
        prompt: "She sings ___ her sister.",
        options: ["as good as", "as well as", "as better as", "so good than"],
        answer: 1,
        explain: "قید well لازم است نه صفت good.",
      },
      {
        prompt: "Monday was ___ day of the trip.",
        options: ["worse", "the worse", "the worst", "most bad"],
        answer: 2,
        explain: "عالیِ bad می‌شود the worst.",
      },
    ],
  },
  {
    id: "quantifiers",
    level: "A2",
    category: "modifiers",
    title: "Quantifiers",
    titleFa: "کمیت‌ها",
    formula: "some / any / much / many / a few / a little",
    summary:
      "کمیت‌نماها با اسم می‌آیند و انتخابشان به شمارش‌پذیر بودن، مثبت یا منفی بودن جمله، و لحن (کم ولی کافی در برابر خیلی کم) بستگی دارد.",
    persianNote:
      "a few و few هر دو «کم»اند ولی a few مثبت است (چند تایی هست) و few تقریباً منفی (تقریباً هیچ). همین فرق بین a little و little هست.",
    points: [
      "some در خبری و پیشنهاد/درخواست مؤدب: Would you like some tea?",
      "any در منفی و پرسش، و به معنی «هر کدام».",
      "many + جمع. much + شمارش‌ناپذیر. در خبری محاوره a lot of رایج‌تر از much است.",
      "a few + جمع (چند تا، کافی). few + جمع (انگشت‌شمار، ناکافی).",
      "a little + غیرقابل شمارش. little یعنی خیلی کم و ناکافی.",
      "no = not any، و فعل مثبت می‌ماند: There is no milk.",
      "each برای تک‌تک، every برای همه به شکل مفرد: Every student has a locker.",
      "both, either, neither برای دو تا. neither فعل مفرد می‌گیرد: Neither answer is right.",
    ],
    uses: [
      {
        title: "مقدار نامعین",
        body: "some و any پیش‌فرض روزمره‌اند.",
        examples: [
          { en: "We need some eggs and a little butter.", fa: "کمی تخم‌مرغ و کمی کره لازم داریم." },
          { en: "There aren't any clean glasses.", fa: "هیچ لیوان تمیزی نیست." },
        ],
      },
      {
        title: "نگرش گوینده",
        body: "a few امیدوار است، few هشدار است.",
        examples: [
          { en: "A few people stayed to help.", fa: "چند نفر ماندند کمک کنند." },
          { en: "Few people know the whole story.", fa: "کمتر کسی همهٔ ماجرا را می‌داند." },
        ],
      },
    ],
    forms: [
      { name: "جمع", pattern: "many / a few / few", sample: "a few mistakes" },
      { name: "توده", pattern: "much / a little / little", sample: "little hope" },
      { name: "صفر", pattern: "no / not any", sample: "no time" },
    ],
    signals: ["some", "any", "much", "many", "a few", "few", "a little", "no"],
    mistakes: [
      {
        wrong: "I don't have some questions.",
        right: "I don't have any questions.",
        why: "منفی معمولاً any می‌خواهد نه some.",
      },
      {
        wrong: "How many money do you need?",
        right: "How much money do you need?",
        why: "money شمارش‌ناپذیر است.",
      },
    ],
    contrast: "all و every نزدیک‌اند: all the students جمع است، every student مفرد.",
    quiz: [
      {
        prompt: "There is ___ milk, so we can make tea.",
        options: ["a little", "a few", "many", "few"],
        answer: 0,
        explain: "milk غیرقابل شمارش و مقدار کمِ کافی است.",
      },
      {
        prompt: "___ of the two plans works.",
        options: ["Neither", "None", "Both of them works", "Any"],
        answer: 0,
        explain: "برای دو گزینه neither و فعل مفرد.",
      },
      {
        prompt: "Would you like ___ water?",
        options: ["any", "some", "no", "few"],
        answer: 1,
        explain: "پیشنهاد مؤدب some می‌گیرد.",
      },
    ],
  },
  {
    id: "modals-obligation",
    level: "A2",
    category: "modals",
    title: "Obligation and advice",
    titleFa: "اجبار و توصیه",
    formula: "must · have to · should · ought to",
    summary:
      "must اجبار از طرف گوینده است، have to اجبار بیرونی، should توصیه. منفی‌هایشان هم‌معنی نیستند: mustn't ممنوعیت است و don't have to یعنی لازم نیست.",
    persianNote:
      "بایدِ فارسی هم الزام است هم توصیه. در انگلیسی این دو را جدا کنید. «نباید» ممنوعیت است (mustn't) نه «مجبور نیستی» (don't have to).",
    points: [
      "must + فعل ساده، بدون to و بدون s. گذشته و آینده‌اش معمولاً had to / will have to است.",
      "have to با شخص صرف می‌شود: she has to. پرسش: Do I have to?",
      "must برای قانون قوی یا استنباط گوینده. have to برای مقررات مدرسه، شغل، قانون بیرونی.",
      "should / ought to توصیه. should منفی shouldn't. ought not to رسمی‌تر و کمیاب‌تر.",
      "mustn't = ممنوع. don't have to / needn't = ضروری نیست.",
      "be supposed to انتظار یا قانون نانوشته: We're supposed to wear badges.",
      "had better هشدار نتیجهٔ بد: You'd better charge your phone.",
    ],
    uses: [
      {
        title: "باید و نباید",
        body: "شدت را با انتخاب فعل وجهی نشان بدهید، نه با فریاد جمله.",
        examples: [
          { en: "You must show your ID at the gate.", fa: "دم در باید کارت را نشان بدهی." },
          { en: "You mustn't take photos in the gallery.", fa: "در گالری نباید عکس بگیری." },
        ],
      },
      {
        title: "توصیه و اختیار",
        body: "should نرم است. don't have to آزادی می‌دهد.",
        examples: [
          { en: "You should sleep before the exam.", fa: "بهتر است قبل از امتحان بخوابی." },
          { en: "You don't have to come if you're tired.", fa: "اگر خسته‌ای لازم نیست بیایی." },
        ],
      },
    ],
    forms: [
      { name: "الزام", pattern: "must / have to + V", sample: "I have to leave." },
      { name: "ممنوع", pattern: "mustn't + V", sample: "You mustn't shout." },
      { name: "توصیه", pattern: "should + V", sample: "We should ask." },
    ],
    signals: ["must", "have to", "should", "mustn't", "don't have to", "had better"],
    mistakes: [
      {
        wrong: "You don't must wear a tie.",
        right: "You don't have to wear a tie. / You mustn't wear a tie.",
        why: "must با don't منفی نمی‌شود؛ و این دو جمله هم‌معنی نیستند.",
      },
      {
        wrong: "She shoulds to rest.",
        right: "She should rest.",
        why: "should صرف نمی‌شود و to نمی‌گیرد.",
      },
    ],
    contrast: "درس استنباط (must be / can't be) الزام نیست؛ حدس دربارهٔ واقعیت است.",
    quiz: [
      {
        prompt: "The museum is free. You ___ pay.",
        options: ["mustn't", "don't have to", "should", "must"],
        answer: 1,
        explain: "پرداخت لازم نیست، ممنوع هم نیست.",
      },
      {
        prompt: "Passengers ___ smoke on the plane.",
        options: ["don't have to", "mustn't", "shouldn't to", "haven't to"],
        answer: 1,
        explain: "ممنوعیت با mustn't.",
      },
      {
        prompt: "You look pale. You ___ see a doctor.",
        options: ["should", "have", "must to", "don't have"],
        answer: 0,
        explain: "توصیه با should.",
      },
    ],
  },
  {
    id: "present-perfect",
    level: "B1",
    category: "tenses",
    title: "Present perfect",
    titleFa: "حال کامل",
    formula: "have / has + past participle",
    summary:
      "حال کامل گذشته را به حال وصل می‌کند: تجربه تا اکنون، نتیجهٔ حاضر، یا وضعیتی که از گذشته شروع شده و هنوز ادامه دارد. زمان تمام‌شدهٔ مشخص با آن نمی‌آید.",
    persianNote:
      "اگر دیروز، سال گذشته، یا ساعت مشخص گفتید، گذشتهٔ ساده است. «رفتم اصفهان» اگر فقط خبر سفر تمام‌شده است went. «تا حالا سه بار رفته‌ام» have been. برای مدت ناتمام: I've lived here for five years یعنی هنوز اینجا هستم.",
    points: [
      "have با I/you/we/they. has با he/she/it. شکل سوم فعل، نه گذشتهٔ ساده: gone نه went. بعد از have.",
      "منفی haven't / hasn't. پرسش Have you ever...?",
      "ever در پرسش تجربه، never در خبری. already قبل از قسمت سوم یا ته جمله. yet در منفی و پرسش ته جمله.",
      "just برای همین چند لحظه پیش: I've just eaten.",
      "for + مدت. since + نقطهٔ شروع. How long با حال کامل برای وضعیت ناتمام.",
      "been به معنی رفته و برگشته. gone به معنی رفته و هنوز آنجاست.",
      "it's the first time + حال کامل: It's the first time I've driven at night.",
      "خبر بدون زمان: I've broken my arm. (نتیجه حالا مهم است) در برابر I broke it yesterday.",
    ],
    uses: [
      {
        title: "تجربه و نتیجه",
        body: "کی مهم نیست؛ اثر یا خود تجربه مهم است.",
        examples: [
          { en: "She has visited Yazd twice.", fa: "دو بار یزد را دیده. (در زندگی‌اش تا حالا)" },
          { en: "Someone has opened the window.", fa: "کسی پنجره را باز کرده. (هنوز باز است)" },
        ],
      },
      {
        title: "از گذشته تا حالا",
        body: "شروع در گذشته، ادامه تا این لحظه.",
        examples: [
          { en: "I have known Reza since school.", fa: "از مدرسه رضا را می‌شناسم." },
          { en: "We haven't seen them for months.", fa: "ماه‌ها است ندیده‌ایمشان." },
        ],
      },
    ],
    forms: [
      { name: "مثبت", pattern: "have/has + pp", sample: "They have left." },
      { name: "منفی", pattern: "haven't/hasn't + pp", sample: "He hasn't called." },
      { name: "پرسش", pattern: "Have/Has + S + pp?", sample: "Have you finished?" },
    ],
    signals: ["ever", "never", "already", "yet", "just", "for", "since", "so far", "recently"],
    mistakes: [
      {
        wrong: "I have seen him yesterday.",
        right: "I saw him yesterday.",
        why: "yesterday زمان بسته است.",
      },
      {
        wrong: "She has went home.",
        right: "She has gone home.",
        why: "بعد از has قسمت سوم لازم است.",
      },
    ],
    contrast: "Past simple داستان را در گذشته می‌بندد. Present perfect در را به حال باز می‌گذارد.",
    quiz: [
      {
        prompt: "___ you ever eaten ghormeh sabzi?",
        options: ["Did", "Have", "Has", "Do"],
        answer: 1,
        explain: "تجربه تا حالا با Have you ever.",
      },
      {
        prompt: "I ___ my keys. I can't find them.",
        options: ["lost", "have lost", "have lose", "was lost"],
        answer: 1,
        explain: "نتیجهٔ حاضر مهم است و زمان گم کردن نامشخص.",
      },
      {
        prompt: "They have lived abroad ___ 2020.",
        options: ["for", "since", "ago", "during"],
        answer: 1,
        explain: "2020 نقطهٔ شروع است.",
      },
    ],
  },
  {
    id: "present-perfect-continuous",
    level: "B1",
    category: "tenses",
    title: "Present perfect continuous",
    titleFa: "حال کامل استمراری",
    formula: "have / has been + verb-ing",
    summary:
      "بر طول و تازگی یک فعالیت تأکید می‌کند که تا حالا ادامه داشته یا همین اواخر جریان داشته و اثرش دیده می‌شود.",
    persianNote:
      "اگر نتیجهٔ تمام‌شده را بشمارید (سه ایمیل نوشته‌ام) حال کامل ساده بهتر است. اگر خستگی و طول کار مهم است (سه ساعت است دارم می‌نویسم) استمراری.",
    points: [
      "شکل: have/has been + ing. منفی haven't been working.",
      "for و since خیلی رایج‌اند چون طول زمان محور این زمان است.",
      "با افعال حالت به کار نرود: I've known، نه I've been knowing.",
      "کار تمام‌شده با عدد: I've written four pages. کار ناتمام: I've been writing all morning.",
      "اثر قابل دیدن: Why are you wet? I've been walking in the rain.",
      "live و work هر دو زمان را قبول می‌کنند؛ استمراری موقت‌تر به نظر می‌رسد.",
    ],
    uses: [
      {
        title: "فعالیت ناتمام",
        body: "گوینده هنوز وسط کار است یا تازه دست کشیده.",
        examples: [
          { en: "I've been learning Arabic for a year.", fa: "یک سال است عربی می‌خوانم." },
          { en: "How long have you been waiting?", fa: "چقدر است منتظری؟" },
        ],
      },
      {
        title: "اثر تازه",
        body: "نتیجه عدد نیست؛ حالِ آدم یا صحنه است.",
        examples: [
          { en: "She's been crying.", fa: "گریه می‌کرده. (چشمش قرمز است)" },
          { en: "We've been painting, so the room smells.", fa: "داشتیم نقاشی می‌کردیم، برای همین اتاق بو می‌دهد." },
        ],
      },
    ],
    forms: [
      { name: "مثبت", pattern: "have been + ing", sample: "I have been reading." },
      { name: "منفی", pattern: "haven't been + ing", sample: "He hasn't been sleeping." },
      { name: "پرسش", pattern: "How long have you been...?", sample: "Have they been arguing?" },
    ],
    signals: ["for", "since", "all day", "lately", "how long"],
    mistakes: [
      {
        wrong: "I have been knowing her for years.",
        right: "I have known her for years.",
        why: "know فعل حالت است.",
      },
      {
        wrong: "She has being working.",
        right: "She has been working.",
        why: "شکل درست been است نه being، مگر در ساختار مجهول استمراری.",
      },
    ],
    contrast: "حال کامل ساده روی نتیجه و تعداد دست می‌گذارد. استمراری روی فرآیند.",
    quiz: [
      {
        prompt: "I'm tired. I ___ since six.",
        options: ["have worked", "have been working", "am working", "work"],
        answer: 1,
        explain: "طول کار و خستگی، استمراری می‌خواهد.",
      },
      {
        prompt: "She ___ three articles today.",
        options: ["has been writing", "has written", "wrote since", "is written"],
        answer: 1,
        explain: "عدد تمام‌شده با حال کامل ساده.",
      },
      {
        prompt: "Your hands are dirty. What ___?",
        options: ["did you do yesterday", "have you been doing", "do you do", "you have done"],
        answer: 1,
        explain: "اثر حاضر از فعالیت اخیر.",
      },
    ],
  },
  {
    id: "past-perfect",
    level: "B1",
    category: "tenses",
    title: "Past perfect",
    titleFa: "گذشتهٔ کامل",
    formula: "had + past participle",
    summary:
      "وقتی دو اتفاق در گذشته داریم، گذشتهٔ کامل آن را نشان می‌دهد که زودتر رخ داده. بدون یک گذشتهٔ ساده در بافت، اغلب لازم نیست.",
    persianNote:
      "هر گذشته‌ای را had نکنید. اگر ترتیب وقایع با after، before یا خود روایت روشن است، دو گذشتهٔ ساده کافی و طبیعی‌تر است.",
    points: [
      "had برای همهٔ شخص‌ها یکی است. منفی hadn't. پرسش Had you left?",
      "کار اول: past perfect. کار دوم: past simple.",
      "after و before اغلب به‌تنهایی ترتیب را می‌گویند و had اختیاری است.",
      "وقتی ترتیب بر خلاف انتظار است یا مبهم، had لازم می‌شود.",
      "past perfect continuous: had been + ing برای طول قبل از یک نقطه در گذشته.",
      "در نقل‌قول، حال کامل و گذشتهٔ ساده اغلب به گذشتهٔ کامل برمی‌گردند.",
      "wish دربارهٔ گذشته هم had + قسمت سوم می‌گیرد؛ درس جدا دارد.",
    ],
    uses: [
      {
        title: "قبل از گذشته",
        body: "زمینه‌ای که قبل از لحظهٔ داستان تمام شده.",
        examples: [
          { en: "The film had started when we arrived.", fa: "وقتی رسیدیم فیلم شروع شده بود." },
          { en: "She had never flown before that trip.", fa: "قبل از آن سفر هرگز پرواز نکرده بود." },
        ],
      },
      {
        title: "طول قبل از گذشته",
        body: "استمراری، مدت را تا آن لحظه نشان می‌دهد.",
        examples: [
          { en: "He had been driving for hours, so he was exhausted.", fa: "ساعت‌ها رانندگی کرده بود و کاملاً خسته بود." },
          { en: "I had been waiting for twenty minutes when she texted.", fa: "بیست دقیقه منتظر بودم که پیام داد." },
        ],
      },
    ],
    forms: [
      { name: "ساده", pattern: "had + pp", sample: "They had eaten." },
      { name: "استمراری", pattern: "had been + ing", sample: "It had been raining." },
      { name: "منفی", pattern: "hadn't + pp", sample: "I hadn't noticed." },
    ],
    signals: ["before", "after", "by the time", "already", "never ... before", "when"],
    mistakes: [
      {
        wrong: "When I arrived, she left.",
        right: "When I arrived, she had left.",
        why: "اگر قبل از رسیدن رفته باشد، had لازم است. بدون had یعنی با رسیدن من رفت.",
      },
      {
        wrong: "I had woke up at seven yesterday.",
        right: "I woke up at seven yesterday.",
        why: "یک اتفاق تنها در گذشته ساده است.",
      },
    ],
    contrast: "Past simple ترتیب طبیعی روایت است. Past perfect فقط وقتی تقدم را باید برجسته کنید.",
    quiz: [
      {
        prompt: "By the time we got to the station, the train ___.",
        options: ["left", "has left", "had left", "was left"],
        answer: 2,
        explain: "حرکت قطار قبل از رسیدن ما تمام شده.",
      },
      {
        prompt: "I ___ the book before the class discussed it.",
        options: ["read already", "had already read", "have already read", "already reading"],
        answer: 1,
        explain: "قبل از یک گذشتهٔ دیگر.",
      },
      {
        prompt: "Which sentence needs no past perfect?",
        options: [
          "After he finished lunch, he went out.",
          "He went out after he had lost his key... wait, both can work, but the clearest single event is: She called me at noon.",
          "She called me at noon.",
          "I realized I had forgotten the tickets.",
        ],
        answer: 2,
        explain: "یک واقعهٔ تنها گذشتهٔ ساده است.",
      },
    ],
  },
  {
    id: "modals-deduction",
    level: "B1",
    category: "modals",
    title: "Deduction",
    titleFa: "حدس و استنباط",
    formula: "must · might · may · could · can't + verb",
    summary:
      "فعل وجهی درجهٔ اطمینان را نشان می‌دهد. must تقریباً مطمئنِ مثبت، can't تقریباً مطمئنِ منفی، و may/might/could ممکن.",
    persianNote:
      "mustn't را برای «حتماً نیست» به کار نبرید؛ آن ممنوعیت است. «حتماً او نیست» می‌شود can't be. برای گذشته، فعل وجهی + have + قسمت سوم.",
    points: [
      "حال: must be tired, might know, can't be serious.",
      "گذشته: must have left, might have forgotten, can't have seen us.",
      "could هم توانایی است هم امکان. بافت تصمیم می‌گیرد.",
      "may not و might not امکان منفی ضعیف است، نه اطمینان. can't اطمینان منفی است.",
      "probably و definitely کنار will هم حدس می‌سازند ولی درجه را خود قید می‌دهد.",
      "در پرسش، می‌شود Could she have missed the bus?",
    ],
    uses: [
      {
        title: "دربارهٔ حالا",
        body: "از شاهد به نتیجه می‌رسید.",
        examples: [
          { en: "The lights are off. They must be out.", fa: "چراغ‌ها خاموش است. حتماً بیرون‌اند." },
          { en: "That can't be Reza. Reza is taller.", fa: "او نمی‌تواند رضا باشد. رضا قدبلندتر است." },
        ],
      },
      {
        title: "دربارهٔ گذشته",
        body: "have + قسمت سوم حدس را به عقب می‌برد.",
        examples: [
          { en: "She hasn't called. She might have lost her phone.", fa: "زنگ نزده. شاید گوشی‌اش را گم کرده باشد." },
          { en: "You can't have read it already. I only sent it an hour ago.", fa: "ممکن نیست همین حالا خوانده باشی. یک ساعت پیش فرستادم." },
        ],
      },
    ],
    forms: [
      { name: "اطمینان مثبت", pattern: "must + V / have pp", sample: "He must have known." },
      { name: "امکان", pattern: "may / might / could", sample: "It might rain." },
      { name: "اطمینان منفی", pattern: "can't + V / have pp", sample: "They can't have arrived." },
    ],
    signals: ["must", "can't", "might", "may", "could", "must have", "can't have"],
    mistakes: [
      {
        wrong: "He mustn't be at home; his car is gone.",
        right: "He can't be at home; his car is gone.",
        why: "استنباط منفی can't است نه mustn't.",
      },
      {
        wrong: "She must has left.",
        right: "She must have left.",
        why: "بعد از must شکل have بدون صرف می‌آید.",
      },
    ],
    contrast: "should have یعنی کار درست انجام نشده یا انتظار برآورده نشده، نه حدس خنثی.",
    quiz: [
      {
        prompt: "You've been walking for hours. You ___ be exhausted.",
        options: ["must", "can't", "must to", "should to"],
        answer: 0,
        explain: "نتیجه تقریباً قطعی است.",
      },
      {
        prompt: "I'm not sure. He ___ taken the early train.",
        options: ["must have", "might have", "can't", "should"],
        answer: 1,
        explain: "عدم اطمینان با might have.",
      },
      {
        prompt: "She ___ forgotten. I reminded her twice.",
        options: ["must have", "can't have", "can has", "mustn't have"],
        answer: 1,
        explain: "با شاهد موجود، فراموشی ناممکن به نظر می‌رسد.",
      },
    ],
  },
];
