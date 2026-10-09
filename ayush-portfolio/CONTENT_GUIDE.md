# Content guide — Ayush Thakur portfolio

This React page preserves the portfolio’s existing editorial/manga identity and content flow. Keep its original project information and existing artwork unless Ayush supplies an update. Do not add invented experience, credentials, client history, metrics or generated character imagery.

## Where to edit

- **Page sections and copy:** `src/App.jsx`
- **Motion:** `src/App.jsx` (`Reveal`, cursor, parallax, and motion props)
- **Three.js scene:** `src/ThreeHeroScene.jsx`
- **Original visual system and responsive rules:** `styles.css`
- **SEO, social metadata and structured data:** `index.html`
- **Original hero/portrait/panorama artwork:** `public/assets/hero-anime.webp`, `anime-sketch.webp`, `world-panorama.webp`
- **Actual project-page screenshot thumbnails:** `public/assets/project-*.webp`
- **Social preview:** `public/og-card.png`
- **Prefilled email draft:** `CONTACT_EMAIL` in `src/App.jsx`

When adding a project, verify its public name, description, stack and current destination from the project itself. Mark concepts, prototypes and demos accurately; don't present fictional preview data as real results.

## Current project references

- **The Pasha Atelier:** magazine catalogue and custom-order flow — [live](https://thepashaatelier.vercel.app/); the existing portfolio lists React and Next.js.
- **Brainchild Games:** CMS/catalog demo — [live](https://games-studio-smoky.vercel.app/) and [source](https://github.com/ayush1503-ops/games-studio). Keep fictional sample content clearly identified.
- **Archive N°9:** storefront concept — [live](https://frontented-e-commerce-website-desig.vercel.app/) and [source](https://github.com/ayush1503-ops/frontented-e---commerce-website-design-). The cart is client-side and there is no backend.
- **Editing Box:** portfolio build — [live](https://editing-box-j3as.vercel.app/) and [source](https://github.com/ayush1503-ops/editing-box). The existing portfolio lists React and Motion.

The original portfolio used the labels NexStudio Games and Pulse Commerce for two of these positions. Their linked sites have since changed, so the upgrade displays the current live names. The card layout is retained, while thumbnails now show screenshots from each current live project page.

## Existing public contact details

- Ayush Thakur
- `ayusheditor1503@gmail.com`
- Phone: `+91 95996 48246`
- GitHub: [ayush1503-ops](https://github.com/ayush1503-ops)
- LinkedIn: [Ayush Thakur](https://www.linkedin.com/in/ayush-thakur-a91827419/)
- Location: Delhi, India

Before publishing, confirm that public email and profile links are still correct. If the deployment hostname changes, update canonical, Open Graph and Twitter image URLs in `index.html`.
