# English All-in-One

اپلیکیشن آموزش زبان انگلیسی برای فارسی‌زبانان.

**ویژگی‌ها:**
- درس‌های گرامر سطح‌بندی‌شده (A1 تا C1)
- واژگان موضوعی با مثال و ترجمه
- افعال بی‌قاعده
- تمرین تلفظ مخصوص گوش فارسی
- حالت استودیو برای ویرایش محتوا توسط مالک
- پشتیبانی از حالت تمرین و پیگیری پیشرفت

## تکنولوژی‌ها

- **Frontend:** React 19 + TanStack Router + TanStack Start
- **Styling:** Tailwind CSS 4
- **State:** Zustand
- **Auth (اختیاری):** Better Auth
- **Database:** Kysely + PGlite / Postgres
- **Build:** Vite 8 + Nitro

## راه‌اندازی محلی

```bash
# نصب وابستگی‌ها
npm install

# اجرای حالت توسعه (پورت 8080)
npm run dev

# بیلد برای پروداکشن
npm run build

# پیش‌نمایش بیلد
npm run preview
```

## ساختار پروژه

```
src/
├── components/     # کامپوننت‌های UI
├── data/           # داده‌های دروس، واژگان، افعال
├── lib/            # منطق مشترک، auth، db، store
├── routes/         # صفحات (file-based routing)
│   ├── grammar/
│   ├── words/
│   ├── verbs.tsx
│   ├── practice.tsx
│   ├── sounds.tsx
│   └── studio/     # پنل ویرایش محتوا
public/
migrations/         # مایگریشن‌های دیتابیس
scripts/            # اسکریپت‌های کمکی بیلد
```

## دیپلوی

پروژه برای دیپلوی روی Vercel آماده است (`vercel.json`).

```bash
npm run build
# سپس دیپلوی پوشه dist / خروجی Nitro
```

## لایسنس

MIT (یا هر لایسنسی که خودتان انتخاب کنید)
