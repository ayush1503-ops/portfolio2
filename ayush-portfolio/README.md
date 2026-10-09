# Ayush Thakur — portfolio upgrade

This is an upgrade of Ayush’s existing portfolio at [portfolio2-1bo4.vercel.app](https://portfolio2-1bo4.vercel.app/), not a new visual concept. The original cream/black/blue/yellow palette, oversized type, section order and existing anime artwork are retained. The four project thumbnails now use screenshots of the current live project pages, replacing the earlier mock-looking project images; no AI-generated project mockups were added.

The upgrade layers a lightweight Three.js scene behind the existing anime lineup, adds Framer Motion for page entrance, scroll reveals and project-card interaction, and keeps the original editorial layout and content flow. The 3D scene uses hand-authored geometry only; it does not replace or obscure the original character art.

## Run and build

```bash
npm install
npm run dev
```

Vite serves the preview on port `4173`. For a production build:

```bash
npm run build
```

The output is `dist/`; deploy it to Vercel or another static host with the build command `npm run build` and output directory `dist`.

## Design and implementation

- Original portfolio structure: anime-led hero, origin story, illustrated world, selected projects, toolkit and contact footer
- Original hero, portrait and panorama artwork is kept from the supplied portfolio and optimized as WebP in `public/assets/`
- Project-card images are optimized WebP screenshots captured from the four current live project sites; they show the actual deployed interfaces
- `src/ThreeHeroScene.jsx` lazy-loads Three.js orbit rings, wireframe geometry and subtle particles over the existing hero artwork; WebGL failure leaves the original hero visible
- Framer Motion in `src/App.jsx` handles entrance reveals, scroll parallax, cursor easing, card tilt and hover states
- Reduced-motion preferences are respected; the Three.js scene pauses when out of view and uses a capped device-pixel ratio
- Project cards preserve the original visual treatment while using current project names and verified stacks
- Responsive menu, visible focus states, semantic sections and local image assets
- Email CTAs open a pre-addressed draft to Ayush with a ready-to-send subject and starter message; sending remains in the visitor’s email app

## Project labels and accuracy

| Card | Current representation | Preview |
| --- | --- | --- |
| The Pasha Atelier | Personalized magazine catalogue and custom-order experience; React and Next.js | [Live site](https://thepashaatelier.vercel.app/) |
| Brainchild Games | Catalog/editor CMS demo; fictional preview content is not presented as real studio/game information | [Live preview](https://games-studio-smoky.vercel.app/) · [Source](https://github.com/ayush1503-ops/games-studio) |
| Archive N°9 | Fictional storefront concept; client-side cart, no backend | [Live preview](https://frontented-e-commerce-website-desig.vercel.app/) · [Source](https://github.com/ayush1503-ops/frontented-e---commerce-website-design-) |
| Editing Box | Video-editor portfolio and selected work; React and Motion | [Live preview](https://editing-box-j3as.vercel.app/) · [Source](https://github.com/ayush1503-ops/editing-box) |

The earlier site labeled two entries NexStudio Games and Pulse Commerce. Their linked destinations now present Brainchild Games and Archive N°9; the portfolio keeps the same four-card positions but uses the current project names and screenshots.

## Existing-site assets

The anime hero, manga portrait and illustrated panorama are retained from `https://portfolio2-1bo4.vercel.app/assets/` and optimized locally. The four card thumbnails are real screenshots of the current live project pages (Pasha Atelier, Brainchild Games, Archive N°9 and Editing Box), not generated project mockups. Verify any third-party image/video usage rights inside those project pages before redistributing the site publicly.

## Before changing the domain

The canonical URL and Open Graph/Twitter image URLs currently point to `https://portfolio2-1bo4.vercel.app/`, the existing portfolio URL. If the final site uses a different domain, update those absolute URLs in `index.html`.
