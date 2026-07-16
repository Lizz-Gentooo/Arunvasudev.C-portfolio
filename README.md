# Arun Vasudev C — Portfolio

Aerospace-inspired personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Content is sourced entirely from the provided resume — no invented projects, work experience, or contact details.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Dark mode is default; toggle in the navbar switches to light mode (respects `prefers-color-scheme` on first load, then remembers your choice).
- The résumé PDF served from `/public/Arun_Vasudev_Resume.pdf` is the exact file you uploaded — replace it any time to update the download.
- Sections shown (Hero, About, Skills, Education, Resume, Contact) map 1:1 to what's on the resume. Projects/Experience/Achievements sections were intentionally omitted since the resume doesn't include that content yet — add new section files under `src/sections` and wire them into `src/App.tsx` when you have that content.
