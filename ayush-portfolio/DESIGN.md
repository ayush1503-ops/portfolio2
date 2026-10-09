# Ayush Thakur

## Overview

**Product:** Ayush Thakur — portfolio
**URL:** https://portfolio2-1bo4.vercel.app/
**Surface type:** Personal portfolio / marketing
**Audience:** Visitors reviewing Ayush's work, including recruiters, collaborators and prospective clients
**Brand character:** Editorial manga influence; oversized typography; warm paper surfaces; black, blue, acid-yellow and orange accents; existing anime illustration and project screenshots.

### Design Principles

- **Preserve before inventing** — retain Ayush's own established layout, section sequence, artwork and identity.
- **Authentic project proof** — use screenshots captured from current live project sites in the work cards.
- **Token-driven additions** — use the existing CSS palette and type roles for all new UI.
- **Accessible by default** — visible focus, keyboard support, responsive layout and reduced-motion behavior are baseline requirements.
- **Facts before flourish** — project descriptions, technologies and contact details must stay grounded in Ayush's public portfolio and project pages.

## Colors

| Token | Value | Role |
|---|---|---|
| `paper` | `#F3F0E8` | Main background / paper surface |
| `ink` | `#121210` | Main text and dark section background |
| `blue` | `#2449D8` | Toolkit section and key accent |
| `acid` | `#E8FF42` | Stamps, highlights and sticker-like emphasis |
| `orange` | `#FF633B` | Small accent and focus treatment |
| `white` | `#FFFFFF` | Text on dark/blue surfaces |
| `muted` | `#AAAAAA` | Secondary copy on dark surfaces |
| `status` | `#68AD35` | Availability dot only |
| `rule` | `rgba(18, 18, 16, 0.2)` | Thin editorial dividers derived from ink |

The main palette is defined in `styles.css` as `--paper`, `--ink`, `--blue`, `--acid` and `--orange`. Keep status green and muted neutrals in their limited, existing roles. Do not add a new palette from the Aashish Thakuri reference files.

## Typography

**Font stack:** Inter, DM Mono, Newsreader (italic accent), with system fallbacks.

| Role | Size / treatment | Usage |
|---|---|---|
| Hero display | `clamp(100px, 17vw, 270px)` desktop; `25vw` compact | Name in oversized sans and editorial italic |
| Section display | `clamp(54px, 7.5vw, 120px)` | Manifesto and section titles |
| World title | `clamp(58px, 8vw, 125px)` | Illustrated panorama section |
| Body | `15–16px`, line-height around `1.65–1.75` | Paragraphs and explanations |
| Lead | `24px` | Short statement under the manifesto heading |
| Project name | Around `25px`, bold | Work-card title |
| Metadata | `9–11px`, DM Mono, letter-spaced | Navigation, chapters, tags and stack labels |
| Serif accent | Newsreader italic, light | Emphasized words and expressive copy |

Write paragraph content in sentence case. Keep full uppercase for short section labels, metadata and selected project names; do not set full paragraphs in uppercase.

## Spacing

**Layout rhythm:** responsive viewport gutters with generous editorial section spacing.

| Token | Current value | Usage |
|---|---:|---|
| `page-gutter` | `3vw` | Header, work grid and footer |
| `manifesto-inset` | `8vw` desktop; `7vw` mobile | Origin-story section |
| `world-inset` | `5vw` | Panorama copy |
| `card-inset` | `18px` | Project card interior |
| `section-space` | `130px` desktop | Work and toolkit sections |
| `title-gap` | `80px` desktop | Section title to card grid |
| `mobile-breakpoint` | `760px` | Mobile navigation and one-column work grid |
| `compact-breakpoint` | `460px` | Hide WebGL overlay, fit hero art to narrow screens |

Keep the current responsive spacing system. The attached reference's 4px spacing grid is not a requirement for Ayush's existing layout.

## Shapes

- Large content blocks and project cards use square corners and thin borders.
- Availability status uses a pill radius.
- Stamp, cursor and circular menu control use full circular shapes.
- The portrait is slightly rotated with a hard-offset acid backing shadow.
- Project thumbnails retain their screenshot aspect ratio and crop responsively; do not place rounded device frames around them.

## Elevation

- Portrait accent: `18px 18px 0 var(--acid)`.
- Prefer hard offset print/sticker-style layers and fine rules.
- Avoid diffuse shadows on every card or soft, uniform card containers.
- Keep the existing screenshot and hero artwork unaltered except for responsive image fitting.

## Motion

- Framer Motion provides entrance reveals, scroll-linked panorama drift, subtle project-card tilt and small CTA feedback.
- Shared reveal easing: `[0.22, 1, 0.36, 1]`; reveal duration: about `0.82s`.
- Hero entrance is brief and finishes promptly; it must not delay access to the page content.
- The Three.js scene uses simple authored wireframe/orbit geometry in the existing palette, not generated imagery.
- The WebGL scene is loaded only above the compact breakpoint, capped to a `1.5` device-pixel ratio and paused when out of view.
- When reduced motion is requested, remove cursor-follow, tilt and parallax; leave content visible and render the WebGL scene statically or omit it.

## Components

- **Header:** AT mark, About/Work/Arsenal/LinkedIn navigation, availability link and compact menu.
- **Hero:** name, original anime lineup, code-authored Three.js detail, status stamp and contact actions.
- **Origin story:** original manga portrait and biography.
- **World section:** existing panorama with a restrained scroll effect and four-step route.
- **Work grid:** four current project links; every image is a screenshot from the corresponding live project page.
- **Toolkit:** React, Three.js, Next.js, Node, Python and Motion labels.
- **Contact:** prefilled `mailto:` draft with Ayush's address, subject and starter message; the visitor still chooses when to press Send.

### Current Project Cards

| Card | Current live destination | Displayed stack / status |
|---|---|---|
| The Pasha Atelier | https://thepashaatelier.vercel.app/ | React · Next.js; magazine catalogue and custom-order flow |
| Brainchild Games | https://games-studio-smoky.vercel.app/ | React · Vite · Supabase; catalog/editor CMS demo |
| Archive N°9 | https://frontented-e-commerce-website-desig.vercel.app/ | React · TypeScript · Vite; fictional storefront concept, client-side cart |
| Editing Box | https://editing-box-j3as.vercel.app/ | React · Motion; video-editing portfolio and selected work |

Brainchild Games and Archive N°9 include fictional sample content. Treat those values as project-demo content, never as Ayush's personal results or customer metrics.

## Do's and Don'ts

### Do

- Preserve existing identity and page hierarchy.
- Use `styles.css` custom properties for the established palette.
- Keep the original hero, portrait and panorama artwork from the supplied site.
- Use `public/assets/project-*.webp` for the actual live-page screenshot thumbnails.
- Include hover, focus-visible, active and disabled behavior when an interactive control has those states.
- Check keyboard operation, reduced-motion settings and both mobile breakpoints.
- Keep direct email links addressed to `ayusheditor1503@gmail.com`; use a prefilled draft rather than claiming automatic sending.
- Describe project demos accurately and avoid unverified claims.

### Don't

- Do not replace Ayush's identity or editorial/manga style with the Aashish Thakuri site or its palette.
- Do not use AI-generated project mockups or substitute invented artwork for real project screenshots.
- Do not bring back the deleted mock-looking project thumbnails.
- Do not alter or replace the existing anime hero artwork without Ayush's instruction.
- Do not introduce unrelated colors, typefaces, pill-card patterns or arbitrary rounded corners.
- Do not add fabricated experience, education, certifications, client work, technologies or metrics.
- Do not make the page send an email without the visitor's explicit confirmation.
- Do not nest interactive controls or remove keyboard/focus support.

## Writing Tone

Concise, confident, personal and playful where appropriate. Keep Ayush's existing copy where possible; avoid filler and unsupported claims.

## Authoring Workflow

When adding a component or changing a project card:

1. State its purpose and where it fits in the existing page.
2. Map colors, typography, spacing, shape and elevation to this design system.
3. Define semantic anatomy, states and responsive behavior.
4. Describe keyboard, pointer and touch interaction, including Escape for the menu.
5. Add testable accessibility and reduced-motion criteria.
6. Verify project facts and thumbnail source against the current live project page.
7. List anti-patterns and edge cases.
8. Build and check at mobile and desktop widths before release.

## Definition of Done

- Existing layout, identity and original art are preserved.
- Project cards use real screenshots from current live pages.
- No fabricated content or generated project mockups are introduced.
- All interactive elements are keyboard operable with visible focus.
- Reduced-motion and compact-screen behavior are respected.
- Images are local, optimized and described with useful alt text.
- The email link opens a preaddressed draft and never sends silently.
- Production build passes and the site works at the smallest and largest supported breakpoints.
