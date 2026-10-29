# MTM Projects Management: animated React site

## Run

```bash
npm install
npm run dev
```

## What is animated

- Intro loader (logo + progress), then navbar drops in and the hero plays
- Hero: slow zoom + scroll parallax, word-by-word headline, drawn gold line, light sweep, scroll cue
- Scroll progress bar, floating WhatsApp (pulsing) and back-to-top buttons
- Every section reveals on scroll (word reveals, wipes, staggered grids)
- Live loops: floating icons with pulse rings, process steps highlighting one by one, glowing panel, shimmer on buttons
- Reduced-motion users get a calm version with no movement

## Edit

- Text and contact details: `src/data.js`
- Animation styles: `src/animations.css`
- Shared helpers (word reveal, eyebrow): `src/components/anim.jsx`
