# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Production-ready portfolio for Dip Kumar Kapat — Senior UI/UX Designer & Frontend Product Builder — with a single-page narrative homepage, per-project case-study pages, a Resend-backed contact form, full SEO, and a light/dark "Editorial Product" design system.

**Architecture:** Next.js 16 App Router, RSC-first. Typed data layer (`src/data/*.ts`) drives both homepage sections and `/work/[slug]` case-study pages via static generation. Client components are isolated to interactivity: navbar/theme toggle, mobile menu, project filtering, motion wrappers, and the contact form. Contact form posts to a server route handler that validates with zod and sends via Resend. Tailwind v4 CSS-first tokens define the design system; Framer Motion handles restrained motion with `prefers-reduced-motion` support.

**Tech Stack:** Next.js 16.3 (App Router, Turbopack), React 19.2, TypeScript strict, Tailwind CSS v4 (`@tailwindcss/postcss`), Framer Motion, lucide-react, zod, Resend.

**Spec:** `docs/superpowers/specs/2026-08-19-portfolio-design.md`

## Global Constraints

- Light-first theme with dark mode toggle (default light); tokens per spec §3.1.
- Fonts: Instrument Sans (sans), Instrument Serif (serif), JetBrains Mono (mono) via `next/font/google`.
- Radius: 6 / 12 / 20px. Borders over shadows. Lucide icons only, 1.5px stroke.
- Section numbers `01 / 02 / 03` editorial device.
- Typed data in `src/data/`; UI never hardcodes content. Data/UI separation.
- No fabricated content. Testimonials render only when populated.
- Contact form: zod server validation, honeypot, Resend. Secrets only in env vars (`RESEND_API_KEY`, `CONTACT_FORM_FROM_EMAIL`, `CONTACT_FORM_TO_EMAIL`).
- Next.js 16: async `params` (`await props.params`), `LayoutProps`/`PageProps`/`RouteContext` helpers, Turbopack default, ESLint CLI (no `next lint`), `data-scroll-behavior="smooth"` on `<html>`.
- `next/image` for raster media; placeholder visuals in `/public/work/` clearly labeled.
- Verify: `npm run lint`, `tsc --noEmit`, `npm run build` all pass; no console errors; responsive 320→1440; reduced-motion respected.

---

### Task 1: Project setup — deps, config, base layout, design tokens

**Files:**
- Modify: `package.json` (scripts `typecheck`)
- Modify: `src/app/globals.css` (design tokens)
- Modify: `src/app/layout.tsx` (fonts, metadata, html attrs)
- Create: `.env.example`, `next.config.ts`
- Delete: default `src/app/page.tsx` content (replaced in later task)

- [ ] **Step 1:** Install deps: `npm i framer-motion lucide-react zod resend`
- [ ] **Step 2:** Add `"typecheck": "tsc --noEmit"` to `package.json` scripts.
- [ ] **Step 3:** Write `src/app/globals.css` with Tailwind v4 `@theme` tokens: colors (`background`, `surface`, `surface-muted`, `text-primary`, `text-secondary`, `text-tertiary`, `border`, `accent`, `accent-soft`, success/warning/error, light+dark via `.dark` class), fonts (`--font-sans`, `--font-serif`, `--font-mono`), radius (`--radius-sm/md/lg`), plus `@custom-variant dark`, base styles, focus-visible ring, reduced-motion default, selection color.
- [ ] **Step 4:** Write `src/app/layout.tsx`: `Instrument_Sans`, `Instrument_Serif`, `JetBrains_Mono` via next/font (variable). `<html lang="en" data-scroll-behavior="smooth" className="...">`, body with base colors. Root metadata (title template, description, canonical, OG, twitter). Theme script to set `.dark` before paint.
- [ ] **Step 5:** Write `.env.example` (Resend vars) and `next.config.ts` (typed, empty defaults).
- [ ] **Step 6:** `npm run build` succeeds; `npm run lint` clean.

### Task 2: Data layer + lib utilities

**Files:**
- Create: `src/data/site.ts`, `src/data/projects.ts`, `src/data/experience.ts`, `src/data/skills.ts`, `src/data/services.ts`, `src/data/modules.ts`, `src/data/principles.ts`, `src/data/testimonials.ts`, `src/data/socials.ts`, `src/types/index.ts`
- Create: `src/lib/utils.ts` (cn helper), `src/lib/seo.ts` (JSON-LD builders), `src/lib/analytics.ts` (trackEvent no-op)

- [ ] **Step 1:** Define shared types in `src/types/index.ts`: `Project`, `CaseStudy`, `Experience`, `SkillGroup`, `Service`, `Testimonial`, `Social`, `InquiryType`.
- [ ] **Step 2:** Populate `src/data/site.ts` (name, role, email, location, nav links, hero copy) from docs (actual website-ready copy).
- [ ] **Step 3:** `src/data/projects.ts` — 5 projects with all homepage + case-study fields (PulseMetrics, AI Content Studio, VetBook, LoanLens, Saint's Paradise) incl. live URLs, categories, stacks, image placeholders.
- [ ] **Step 4:** Remaining data files from docs (experience timeline phases, skill groups, services, 25+ modules, 5 principles, empty testimonials array, socials).
- [ ] **Step 5:** `cn`, `trackEvent`, JSON-LD helpers. `tsc --noEmit` clean.

### Task 3: UI primitives + motion wrappers

**Files:**
- Create: `src/components/ui/Container.tsx`, `Button.tsx`, `Badge.tsx`, `SectionHeading.tsx`, `Stat.tsx`, `TechTag.tsx`, `Divider.tsx`, `Card.tsx`
- Create: `src/components/motion/Reveal.tsx`, `Stagger.tsx`

- [ ] **Step 1:** `Container` (max-w 1280, px responsive). `Button` (primary/secondary/text variants; asChild link support; focus ring; disabled). `Badge` (mono uppercase). `TechTag`. `Card` (surface, border, radius-md). `Stat` (big number + label). `Divider`.
- [ ] **Step 2:** `SectionHeading` (eyebrow number + label, serif title, description; alignment prop).
- [ ] **Step 3:** `Reveal` (motion.div whileInView fade+y, respects reduced motion) and `Stagger` (container + item variants).
- [ ] **Step 4:** `tsc --noEmit` clean.

### Task 4: Theme provider, theme toggle, navbar, mobile menu, footer

**Files:**
- Create: `src/components/theme/ThemeProvider.tsx` (client; `next-themes`-free, class-based toggle), `src/components/theme/ThemeToggle.tsx`
- Create: `src/components/layout/Navbar.tsx`, `src/components/layout/MobileMenu.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/SkipLink.tsx`
- Modify: `src/app/layout.tsx` (wrap with provider; add navbar/footer + skip link)

- [ ] **Step 1:** `ThemeProvider` client: reads stored theme / `prefers-color-scheme`, toggles `document.documentElement.classList`, persists. `ThemeToggle` accessible button with Sun/Moon icons.
- [ ] **Step 2:** `Navbar` client: wordmark, nav links (Work/Capabilities/About/Experience → anchors), Let's Talk CTA, theme toggle; scroll-shrink + blur + border on scroll.
- [ ] **Step 3:** `MobileMenu`: accessible hamburger, panel with links, focus trap, Esc close, aria-expanded.
- [ ] **Step 4:** `Footer`: wordmark, positioning, nav, socials, email, copyright.
- [ ] **Step 5:** `SkipLink` + integrate. `tsc` clean; build passes.

### Task 5: Homepage sections (single page)

**Files:**
- Create: `src/components/sections/Hero.tsx`, `Introduction.tsx`, `WhatIDo.tsx`, `SelectedWork.tsx`, `Enterprise.tsx`, `DesignToCode.tsx`, `AIWorkflow.tsx`, `Principles.tsx`, `Experience.tsx`, `Technology.tsx`, `About.tsx`, `WhyWorkWithMe.tsx`, `ContactCTA.tsx`, `Testimonials.tsx` (render-only-if-data)
- Modify: `src/app/page.tsx`

- [ ] **Step 1:** `Hero`: eyebrow, serif headline, supporting copy, CTAs (View Selected Work / Get in Touch), proof strip, asymmetric 7/5 layout, subtle grid bg.
- [ ] **Step 2:** `Introduction` + `WhatIDo` (3 pillars with numbered cards).
- [ ] **Step 3:** `SelectedWork`: alternating 40/60 editorial cards, project meta (mono labels, role, stack), filtering (All/UI-UX/Frontend/WebApp/Website) — client filter with motion layout.
- [ ] **Step 4:** `Enterprise` (25+ matrix, hover highlight), `DesignToCode` (pipeline), `AIWorkflow` (4 capabilities, calm system-diagram language).
- [ ] **Step 5:** `Principles` (5), `Experience` (3-phase timeline), `Technology` (grouped), `About` (narrative + portrait placeholder), `WhyWorkWithMe` (3 proof points), `ContactCTA`, `Testimonials` (conditional).
- [ ] **Step 6:** Compose `src/app/page.tsx` with section ids. Build passes.

### Task 6: Case-study pages

**Files:**
- Create: `src/app/work/[slug]/page.tsx`, `src/app/work/[slug]/layout.tsx`, `src/components/sections/CaseStudy.tsx`

- [ ] **Step 1:** `generateStaticParams` from projects data; `generateMetadata` (async params). `notFound()` for unknown slug.
- [ ] **Step 2:** `CaseStudy` component rendering the 11-part structure; back link to homepage; CTA to next project + contact.
- [ ] **Step 3:** Build passes; `/work/pulsemetrics` etc. render.

### Task 7: Contact form + API route

**Files:**
- Create: `src/components/forms/ContactForm.tsx`, `src/app/api/contact/route.ts`, `src/lib/validation.ts`, `src/lib/contact.ts`

- [ ] **Step 1:** `src/lib/validation.ts` zod schemas (name, email, optional company, inquiry type enum, message min length).
- [ ] **Step 2:** `src/app/api/contact/route.ts` POST: parse JSON, honeypot check, zod parse, Resend send (guard missing env → 503), error handling, `Response.json`.
- [ ] **Step 3:** `ContactForm` client: fields with labels, client validation, loading/success/error states, `aria-live`, honeypot field, `trackEvent('contact_submit')` on success.
- [ ] **Step 4:** Compose into `ContactCTA` section. Build + typecheck clean.

### Task 8: SEO files + final wiring

**Files:**
- Create: `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/manifest.ts` (optional), `src/app/icon.svg` or keep favicon
- Modify: `src/app/layout.tsx` (JSON-LD Person/WebSite), `src/app/work/[slug]/page.tsx` (CreativeWork JSON-LD)

- [ ] **Step 1:** `robots.ts`, `sitemap.ts` (home + 5 work pages) using `SITE_URL`.
- [ ] **Step 2:** JSON-LD: Person + WebSite in root layout; CreativeWork per project.
- [ ] **Step 3:** `tsc --noEmit`, `npm run lint`, `npm run build` all green.

### Task 9: Placeholders, README, env, QA

**Files:**
- Create: `README.md`, `public/resume/README.md` (placeholder note), placeholder project visuals in `public/work/`
- Verify: full QA checklist

- [ ] **Step 1:** Create placeholder SVG thumbnails per project in `public/work/` (typographic compositions) + portrait placeholder.
- [ ] **Step 2:** Write `README.md`: setup, env vars, build/deploy (Vercel), swap-in placeholders guide, QA checklist.
- [ ] **Step 3:** Full QA: lint, typecheck, build, `next start`, Playwright browser checks (nav, mobile menu, filters, form states, theme toggle, reduced-motion, responsive widths, no console errors, no horizontal overflow).
- [ ] **Step 4:** Final commit.
