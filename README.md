# Invoice Buddy AI — 3D SaaS Landing Page

A premium, dark, futuristic marketing site for Invoice Buddy AI, built with
Next.js, React Three Fiber, and Framer Motion. This is the **marketing/landing
page** — separate from the functional dashboard app (`invoice-buddy-ai/`) you
already have. Use this to sell the product; use the other one to run it.

## How this connects to the working app (invoice-buddy-ai)

The "Start free" and "Get started" buttons on this landing page link to
`/app.html` — a copy of the working dashboard (upload → summary → AI chat)
from the `invoice-buddy-ai` project, placed inside this project's `public/`
folder. That means:

- When you deploy **this** project to Vercel, both the marketing page AND the
  working app are live on the same domain — e.g.
  `yoursite.vercel.app` (landing page) and `yoursite.vercel.app/app.html`
  (the actual product).
- `app.html` still talks to your **separately hosted FastAPI backend**
  (Render/Railway) — open `app.html`, put your backend's live URL into the
  "Connect your backend" box, and it works exactly like it does locally.
- If you update the dashboard in the `invoice-buddy-ai` project later, copy
  the new `frontend/index.html` over `public/app.html` here and redeploy, so
  both stay in sync.

### Full deployment picture

| Piece | Where it lives | Free host |
|---|---|---|
| Marketing site + `/app.html` | this project (`invoice-buddy-saas`) | Vercel |
| FastAPI backend | `invoice-buddy-ai/backend` | Render or Railway |

Once the backend is deployed, its URL (e.g.
`https://invoice-buddy-backend.onrender.com`) is the one thing you paste into
the "Connect your backend" box on `/app.html` — no code changes needed.

## What's in here

- **Hero** — a real 3D scene (React Three Fiber + drei): a floating glass
  "invoice card" with live invoice content, a glowing pulsing AI orb next to
  it, and drifting particle sparkles. The card rotates slowly on its own,
  tilts toward your mouse, and spins a little further as you scroll.
- **Features** — 8 glass cards (AI Invoice Generator, Expense Tracking, Smart
  Reports, Tax Calculation, Client Management, Payment Tracking, PDF Export,
  Analytics Dashboard), each with a subtle 3D tilt + glow that follows your
  cursor, animating in as you scroll.
- **Dashboard preview** — revenue cards, a revenue trend chart, a recent
  invoices list, and an activity feed, all inside a glass panel that animates
  in on scroll.
- **Footer / CTA** with a magnetic button (follows your cursor slightly).

Dark theme throughout — near-black background, violet/blue neon gradients,
glassmorphism, soft glows, Fraunces + Inter + IBM Plex Mono typography.

## Run it locally

You need Node.js 18+ installed.

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

## Build for production

```bash
npm run build
npm start
```

## Deploy it for free

This is a standard Next.js app, so it deploys straight to **Vercel** (the
company that makes Next.js) for free:

1. Push this folder to a GitHub repo
2. Go to vercel.com, "New Project", import the repo
3. Leave all settings as default and deploy

You'll get a free `yourproject.vercel.app` link to send to clients or post on
LinkedIn/Facebook when demoing.

## Project structure

```
app/
  layout.js         — fonts, global wrapper
  page.js           — assembles the sections
  globals.css        — Tailwind + glass/glow utility classes
components/
  Nav.jsx            — top navigation
  HeroSection.jsx     — hero copy + CTA, wraps the 3D canvas
  Hero3D.jsx          — the actual React Three Fiber scene
  FeatureCard.jsx     — single glass feature card w/ 3D tilt
  FeaturesSection.jsx — the 8-feature grid
  DashboardPreview.jsx — dashboard mockup section
  Footer.jsx          — closing CTA + footer links
  MagneticButton.jsx  — cursor-following button used everywhere
```

## Notes on what's real vs. simplified

- The 3D invoice card and AI orb are genuinely rendered in 3D (Three.js via
  React Three Fiber) — not a static image. The invoice's text content is
  rendered as real HTML positioned inside the 3D scene (via drei's `<Html>`),
  which keeps text sharp and avoids extra font-loading dependencies.
- Lighting is done with standard Three.js lights rather than an HDR
  environment map, so the page has no extra runtime dependency on an external
  HDR asset host — it'll always load, even if that host is ever unreachable.
  If you want the extra realism of image-based lighting later, you can add
  `<Environment preset="city" />` from `@react-three/drei` inside `Hero3D.jsx`.
- Chart uses Recharts (lightweight, no extra 3D cost) rather than a 3D chart —
  keeps the dashboard preview fast and readable.
- This page is a **marketing front door**. It doesn't connect to your FastAPI
  backend — for the working product (upload → dashboard → AI chat), use the
  `invoice-buddy-ai/` project instead. You'd link this landing page's "Start
  free" button to that app (or to a signup form) once you decide how you're
  distributing it.

## Customizing

- Colors: `tailwind.config.js` → `violet` / `azure` shades, and the gradients
  inside `globals.css` (`.text-gradient`, `bg-grid-fade`).
- Copy: edit the text directly inside `HeroSection.jsx`, `FeaturesSection.jsx`,
  `Footer.jsx`.
- Invoice card content: edit the `<Html>` block inside `Hero3D.jsx`.
