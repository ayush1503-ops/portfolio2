---
name: design-system-ayush-thakur
description: >
  Apply Ayush Thakur's existing editorial/manga portfolio design system when
  building or updating this portfolio. Preserve the original visual identity,
  use verified portfolio facts and real project screenshots, and avoid generated
  replacement artwork.
---

# Ayush Thakur — Portfolio Design System Skill

## When to Use

- Updating Ayush's existing portfolio UI or adding components to it.
- Choosing colors, typography, spacing, surfaces or motion for the portfolio.
- Replacing project media or writing portfolio copy.
- Reviewing responsive behavior, accessibility, reduced motion or SEO.

## Context

- **Product:** Ayush Thakur — personal portfolio
- **Current site:** https://portfolio2-1bo4.vercel.app/
- **Surface:** single-page portfolio / marketing site
- **Audience:** people reviewing Ayush's work, including recruiters, collaborators and prospective clients
- **Character:** editorial manga influence, oversized typography, warm paper surfaces, black/blue/yellow-orange accents, existing anime artwork and direct project links
- **Implementation:** React, Vite, Framer Motion and Three.js

## Source of Truth

1. Ayush's current site and its downloaded source are the authority for identity, copy, artwork and visual structure.
2. Current project pages and repositories are the authority for project names, descriptions and technologies.
3. Keep project screenshots from the current live project pages in `public/assets/project-*.webp`.
4. The attached Aashish Thakuri files are a documentation-format reference only. Do not copy their brand, page composition, wording, imagery or design tokens.

## Tokens

### Colors

| Token | Value | Role |
|---|---|---|
| `paper` | `#F3F0E8` | Main page surface |
| `ink` | `#121210` | Primary text and dark section surface |
| `blue` | `#2449D8` | Main accent and toolkit section |
| `acid` | `#E8FF42` | Stamp, highlights and playful emphasis |
| `orange` | `#FF633B` | Small accent and focus treatment |
| `white` | `#FFFFFF` | Text on dark/blue surfaces |
| `muted` | `#AAAAAA` | Secondary copy on dark surfaces |
| `status` | `#68AD35` | Availability indicator only |

Use the existing CSS custom properties in `styles.css`: `--paper`, `--ink`, `--blue`, `--acid` and `--orange`. Use status and neutral colors only in their current semantic roles.

### Typography

**Font families:** Inter, DM Mono, Newsreader (italic accent); keep system fallbacks.

| Role | Existing treatment |
|---|---|
| Display | Oversized Inter; hero uses `clamp(100px, 17vw, 270px)` on desktop |
| Editorial accent | Light italic Newsreader on selected words/headings |
| Body | Inter; around 15–16px with generous line-height |
| Metadata / chapter labels | DM Mono; usually 9–11px, uppercase and letter-spaced |
| Project names | Bold Inter, approximately 25px in cards |

Use sentence case for body copy. Uppercase is for short labels, section markers and project titles, not paragraphs.

### Spacing and Layout

Reuse the existing responsive rhythm rather than imposing a new grid:

- **Page gutter:** `3vw` on header, work and footer.
- **Manifesto inset:** `8vw` desktop, reduced on mobile.
- **Chapter marker inset:** `3vw`.
- **Card inset:** `18px`.
- **Work/arsenal section padding:** `130px 3vw` desktop.
- **Section-title to content gap:** `80px` desktop.
- **Responsive breakpoints:** `760px` for the single-column/mobile-navigation layout; `460px` for compact hero treatment and no WebGL scene.

When adding a new value, first reuse an existing value or make a responsive CSS custom property. Do not force the reference files' 4px-only grid onto Ayush's existing fluid layout.

### Shapes

- Project grid and major editorial panels: square corners and thin rules.
- Status pill: `30px` radius.
- Stamp, cursor and circular menu control: `50%` radius.
- Portrait treatment: slight rotation with a hard offset acid shadow.
- Keep borders fine and visible; avoid soft rounded-card systems that change the identity.

### Elevation

- Portrait offset: `18px 18px 0 var(--acid)`.
- Prefer the original hard-edged print/sticker treatment to diffuse UI shadows.
- Do not add decorative shadows to every card.

### Motion

- Use Framer Motion for reveal, entrance and hover feedback; keep movement small and purposeful.
- Existing reveal transition: about `0.82s`, using the shared `[0.22, 1, 0.36, 1]` easing.
- Project tilt is subtle (about `3–4.5deg`); reset to neutral when the pointer leaves.
- The Three.js hero uses hand-authored geometry and is lazy-loaded, capped in pixel ratio and paused outside the viewport.
- Respect `prefers-reduced-motion`: no cursor-follow, parallax or tilt; render the WebGL scene statically or omit it on compact screens.
- Do not add motion that blocks scrolling, reading or keyboard use.

## Content and Project Accuracy

- **Name:** Ayush Thakur
- **Role:** Full-stack Web Developer / Creative Developer
- **Location:** Delhi, India
- **Email:** ayusheditor1503@gmail.com
- **Phone:** +91 95996 48246
- **GitHub:** ayush1503-ops
- **LinkedIn:** Ayush Thakur

Current project cards:

| Project | Public description | Technologies shown |
|---|---|---|
| The Pasha Atelier | Personalized magazine catalogue and custom-order experience | React · Next.js |
| Brainchild Games | Game-studio catalog/editor CMS demo | React · Vite · Supabase |
| Archive N°9 | Fictional storefront concept; client-side cart, no backend | React · TypeScript · Vite |
| Editing Box | Video-editing portfolio and selected work | React · Motion |

Brainchild Games and Archive N°9 contain fictional demo/storefront content. Never present their sample figures, claims or products as Ayush's achievements or real customer metrics. Do not invent employers, education, awards, credentials or numerical outcomes.

## Component Inventory

- Header with responsive navigation and availability link
- Hero with original anime art, hand-authored Three.js layer and contact actions
- Origin-story portrait and biography
- Illustrated panorama and idea-to-ship route
- Four project cards using screenshots of the live project sites
- Toolkit section
- Contact footer and pre-filled `mailto:` action

## Constraints

### Always

- Preserve the existing editorial/manga identity and section order unless Ayush explicitly changes that direction.
- Use existing portfolio art for the hero, portrait and panorama.
- Use real screenshots from Ayush's live project pages for project thumbnails; optimize locally as WebP.
- Keep content truthful and linked to current public project sources.
- Keep semantic landmarks, keyboard focus states, reduced-motion support and responsive layouts.
- Keep email actions as a `mailto:` draft addressed to Ayush; do not claim the website sends mail automatically.

### Never

- Do not add AI-generated replacement artwork or invented project mockups.
- Do not restore the removed mock-looking project thumbnails.
- Do not copy the Aashish Thakuri site's exact layout, text, assets or branding.
- Do not introduce unrelated colors, rounded-card patterns or typography systems.
- Do not invent experience, credentials, technologies, customers or metrics.
- Do not treat demo data in Brainchild Games or Archive N°9 as real-world results.
- Do not hide content behind motion or remove keyboard-accessible navigation.

## Tone

Concise, direct and human. Keep the original portfolio's playful editorial voice without adding unsupported personal claims.

## Authoring Workflow

When documenting or adding a component:

1. State its purpose and where it belongs in the existing page.
2. Map colors, typography, spacing, shape and elevation to the tokens above.
3. Define its semantic anatomy and responsive behavior.
4. Specify default, hover, focus-visible, active, disabled, loading and error states where applicable.
5. Describe keyboard, pointer and touch interaction, including Escape behavior for menus.
6. List testable accessibility and reduced-motion criteria.
7. Identify content risks and anti-patterns.
8. Verify at the smallest and largest supported breakpoints and run the production build.

## Definition of Done

- Existing visual identity and content hierarchy remain intact.
- Project thumbnails are real screenshots of current live projects, not generated mockups.
- No factual claim has been added without a source.
- Keyboard navigation and visible focus work without a pointer.
- Reduced-motion and compact-screen behavior are verified.
- Images are local, optimized and have meaningful alt text.
- The production build passes and the page is responsive.
