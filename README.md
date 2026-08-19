# Dip Kumar Kapat — Portfolio

Personal portfolio for Dip Kumar Kapat — Senior UI/UX Designer & Frontend Product Builder.

A single-page narrative homepage plus per-project case studies, built with Next.js 16 (App Router), Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework:** Next.js 16.3.1 (Turbopack, React 19, TypeScript strict)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` tokens in `src/app/globals.css`)
- **Motion:** Framer Motion (scroll reveals, stagger, `prefers-reduced-motion` respected)
- **Icons:** lucide-react
- **Contact form:** zod validation + Resend API route
- **Fonts:** Instrument Sans / Instrument Serif / JetBrains Mono via `next/font`

## Getting Started

```bash
npm install
cp .env.example .env.local   # add your Resend key
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run build       # production build
```

## Environment Variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For the contact form | Resend API key for the `/api/contact` route |
| `CONTACT_FORM_FROM_EMAIL` | For the contact form | Verified sender address in Resend |
| `CONTACT_FORM_TO_EMAIL` | For the contact form | Where inquiries are delivered (defaults to the site email) |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER` | No | Set to `none` (default) or a provider name; wiring lives in `src/lib/analytics.ts` |

The site runs and builds with none of these set — the contact form falls back to a
clear "not configured" message instead of failing silently.

## Content

All copy and data live in `src/data/`:

- `site.ts` — name, roles, contact details, nav links, inquiry types
- `projects.ts` — single typed source driving both homepage cards and `/work/[slug]` case-study pages
- `experience.ts`, `skills.ts`, `services.ts`, `modules.ts`, `testimonials.ts`

## Replacing Placeholders

The site ships with clearly-labeled placeholders. Swap them when final assets are ready:

1. **Project thumbnails** — replace the generated SVGs in `public/work/` with real images. Update the `image` field in `src/data/projects.ts` (an object with `src`, `alt`, and optional `caption`).
2. **Portrait / avatar** — referenced from the About section; add the file to `public/` and update the reference in `src/components/sections/About.tsx`.
3. **Resume PDF** — drop the PDF at `public/resume/Dip-Kumar-Kapat-Resume.pdf` (see `public/resume/README.md`).
4. **Testimonials** — the testimonials section renders only when entries exist in `src/data/testimonials.ts`. Add real quotes there to enable it.
5. **Analytics** — implement the hook in `src/lib/analytics.ts` when a provider is chosen.

## Project Structure

```
src/
  app/
    layout.tsx        # fonts, metadata, theme script, JSON-LD
    page.tsx          # homepage section composition
    work/[slug]/      # case-study pages (SSG)
    api/contact/      # Resend contact route
    robots.ts sitemap.ts not-found.tsx
  components/
    ui/               # Button, Badge, Card, Stat, TechTag, ...
    motion/           # Reveal, Stagger wrappers
    theme/            # ThemeProvider + toggle
    layout/           # Navbar, MobileMenu, Footer, SkipLink
    sections/         # one component per homepage section
    forms/            # ContactForm
  data/ types/ lib/   # content, types, utilities
```

## Deploy on Vercel

Import the repo into Vercel. Next.js is detected automatically. Add the environment
variables from the table above in Project → Settings → Environment Variables, then deploy.

## QA Checklist

- `npm run lint`, `npm run typecheck`, `npm run build` all pass
- No horizontal overflow from 320px to 1440px (mobile nav collapses to the menu button)
- Project filters, theme toggle (persists via localStorage), mobile menu, and anchor navigation all work
- Case-study pages generate for all projects and render all 10 content sections
- Contact form validates on the client, handles honeypot submissions, and degrades gracefully when Resend is unconfigured