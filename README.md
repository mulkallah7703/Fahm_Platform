# فَهْم | FAHM

موقع تعريفي (portfolio / landing) لمشروع **فَهْم** — منصة الذكاء الاصطناعي للتعلّم التكيفي لذوي الإعاقة.

هذا المستودع يعرض المشروع للمدارس والمستثمرين والشركاء. لا يتضمن منتج فَهْم نفسه (OCR، الصوت، الحسابات)، بل صفحة تسويقية ثابتة فقط.

A bilingual (Arabic-first, RTL) marketing site for FAHM. Deployable on Vercel.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build (used by Vercel) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Language

Arabic is the default (`dir="rtl"`). Use the header toggle to switch to English. The preference is stored in `localStorage`.
