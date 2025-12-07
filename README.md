# easy-techniques
⚠️ This project was vibecoded

[live page link](https://maz4.github.io/easy-techniques)

Capoeira techniques library rebuilt with Next.js 14. It renders category pages (movements, attacks, esquivas, floreio) with bilingual headings/toggles (English/Japanese) and links out to YouTube for each technique.

## Requirements
- Node.js or Bun

## Run with Bun
```bash
bun install
bun dev
```

## Run with npm
```bash
npm install
npm run dev
```

## Project structure
- `app/` — Next.js route pages for each category.
- `components/` — shared UI parts like `TechniqueCard` and `TechniqueSection`.
- `legacy/` — original static HTML kept for reference.
