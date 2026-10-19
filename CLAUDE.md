# CLAUDE.md

Public site for the **Ailurus Lab**, a student research lab at Trinity University led by
Prof. Eduardo Davalos. React + TypeScript + Vite SPA, Tailwind v4 with shadcn-style
components, deployed to GitHub Pages from `main` via `.github/workflows/host.yml`.
The build copies `index.html` to `404.html` so deep links like `/people` survive a refresh.

## Brand

- Name: "Ailurus" in running text; the logo styles it **AIlurus** (`src/components/ui/wordmark.tsx`).
- Mascot: the red panda face, `public/ailurus-mascot.svg`. `src/components/ui/red-panda.tsx`
  is the same artwork inline (so it can blink) - keep the two in step.
  `favicon.ico`, `logo-192x192.png`, `logo-512x512.png`, `ailurus-mascot-1024.png` (transparent),
  and `ailurus-icon-1024.png` (on a leaf background, for avatars) are rasterized from the SVG.
- Look: a bamboo forest, deliberately unlike the Marble Labs site. Cream paper background,
  serif headings (Fraunces) over Nunito Sans, rounded organic shapes, hills between sections.
- Colors are Tailwind tokens in `src/index.css`: `paper` #FAF5EC, `leaf` #EAF0DC, `bamboo` #8DB255,
  `moss` #4F7A3A, `forest` #22392A, `bark` #6B4A2F, `rust` #C8501E (mascot), `ember` #B4441A (buttons).
- Decorations live in `src/components/ui/nature.tsx` (Bamboo, Leaf, Hills, Grass, LeafBullet);
  topic illustrations in `research-visual.tsx`.
- Avoid names tied to Firefox, Bamboo/Bambu, or "Forest".

## Layout

- `src/pages/` - `Home`, `Research`, `People`; routes in `src/main.tsx`.
- Research topics (copy, questions, related student projects) live in `src/content/topics.ts`,
  shared by Home and Research. Other content is in plain arrays at the top of each page file.
- `src/components/ui/join-lab.tsx` - recruiting block and prefilled email, used on Home and People.

## Conventions

- `npm run build` must pass. `npm run lint` has two pre-existing shadcn errors
  (`button.tsx`, `navigation-menu.tsx`); don't add more.
- Nav links inside Radix `asChild` wrappers use `RouteLink` (in `nav-bar.tsx`), not NavLink:
  Slot can't merge NavLink's function className.
- Keep copy plain and short. No marketing superlatives, no em-dashes or en-dashes,
  no all-caps eyebrow labels, no "01 · Tagline" numbering, and don't over-explain the name.
