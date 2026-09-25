# Ayush Thakur — Portfolio

Creative Developer Portfolio built with vanilla HTML, CSS, JS. Designed for fast, expressive delivery.

Live stack: Static HTML + CSS + JS, no framework build needed.

## Structure

```
portfolio2/
├── ayush-portfolio/        # Main website (deploy this)
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── vercel.json         # Vercel config for root-directory deploy
│   ├── assets/
│   └── projects/
│       ├── pasha.html
│       ├── nexstudio.html
│       ├── pulse.html
│       └── editing-box.html
├── vercel.json             # Root config (outputDirectory -> ayush-portfolio)
├── package.json
└── .vercelignore
```

## Deploy to Vercel — 3 Ways

### Option 1: Recommended (One Click)

1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import `portfolio2` repo
4. **Set Root Directory to `ayush-portfolio`** in Vercel project settings
   - Framework Preset: `Other`
   - Build Command: (leave empty)
   - Output Directory: (leave empty, or `.`)
   - Install Command: (leave empty)
5. Click Deploy — Done!

Your site will be live at `https://your-project.vercel.app`

### Option 2: Using Root Config (No Settings Needed)

This repo already has a root `vercel.json` with:

```json
{
  "outputDirectory": "ayush-portfolio"
}
```

So you can:

1. Import repo to Vercel
2. **Leave Root Directory as `./` (default)**
3. Deploy — Vercel will automatically serve `ayush-portfolio` as the site root

### Option 3: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
# When asked for settings:
# - Set up and deploy? Y
# - Which scope? your account
# - Link to existing project? N
# - Project name? ayush-portfolio
# - In which directory is your code located? ./ayush-portfolio
# - Override settings? N
```

Or deploy from root (uses root vercel.json):

```bash
vercel --prod
# Directory: ./
```

## Local Development

```bash
# Simple static server
npx serve ayush-portfolio -l 3000

# Or Python
cd ayush-portfolio
python -m http.server 3000

# Or using npm script
npm run dev
```

Open http://localhost:3000

## Vercel Features Enabled

- `cleanUrls: true` — `/projects/pasha` works without `.html`
- `trailingSlash: false` — No forced trailing slashes
- Asset caching — `assets/*` cached 1 year immutable
- Security headers — X-Frame-Options, X-Content-Type-Options, etc.
- Rewrites for project pages

## Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add your domain `ayushthakur.com`
3. Add CNAME/TXT as instructed
4. SSL is automatic

## Performance Notes

- Static files, no build step = instant deploys (~5-10s)
- Images are ~13MB total — consider optimizing with WebP/AVIF for better Lighthouse scores
- Fonts loaded from Google Fonts with preconnect

## Contact

Ayush Thakur — ayusheditor1503@gmail.com
Delhi, India
