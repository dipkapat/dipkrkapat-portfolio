# Dip Kumar Kapat — Portfolio Website Design Spec

**Date:** 2026-08-19
**Status:** Approved
**Scope:** Production-ready personal portfolio for a Senior UI/UX Designer & Frontend Product Builder.

## 1. Business Objectives

1. Help the owner get hired for UI/UX Website Engineer and Frontend Developer roles.
2. Generate qualified freelance inquiries.
3. Showcase best projects and demonstrate how the owner thinks and works.
4. Establish a memorable, credible personal brand.

Primary audiences: employers, technical and design hiring managers, recruiters, potential freelance clients. The site must communicate who they are, what they specialize in, what value they provide, quality of work, capabilities, and how to hire/contact them — within a 30–60 second evaluation window.

## 2. Positioning & Message

- **Identity:** Senior UI/UX Designer & Frontend Product Builder
- **Hero message:** "I design complex digital products and build the interfaces that bring them to life."
- **Proof strip:** 18+ years experience · 25+ enterprise modules · React · Next.js · Tailwind CSS · AI-assisted development
- **Central narrative:** one integrated identity — design and frontend execution in a single workflow — not "two separate jobs."

## 3. Design Direction — "Editorial Product"

Swiss editorial discipline + modern SaaS interface + subtle creative motion. Typography does the talking; restrained color, whitespace, composition, and purposeful motion carry the premium feel.

### 3.1 Color System (light-first with dark mode)

| Token | Light | Dark |
|---|---|---|
| Background | `#F5F5F2` | `#0D0D0D` |
| Surface | `#FFFFFF` | `#151515` |
| Surface muted | `#ECECE8` | `#1C1C1C` |
| Text primary | `#111111` | `#F5F5F0` |
| Text secondary | `#5F5F5A` | `#A5A5A0` |
| Text tertiary | `#898985` | `#6E6E6A` |
| Border | `#D9D9D4` | `#292929` |
| Accent | `#2563EB` | `#4D7CFE` |
| Accent soft | `#E8F0FF` | `#1A2B4D` |
| Success / Warning / Error | `#16803C` / `#B7791F` / `#C53030` | adjusted for AA |

Do not use 5–6 accent colors. Project screenshots provide visual variety; the portfolio stays disciplined.

### 3.2 Typography

- **Instrument Sans** — nav, body, buttons, metadata, project descriptions, UI
- **Instrument Serif** — selective display emphasis (hero accent lines, key moments)
- **JetBrains Mono** — project numbers, technology tags, dates, metadata, small technical labels, process diagrams

Loaded via `next/font` with `display: swap`.

### 3.3 Type Scale (desktop / mobile)

| Style | Size | Weight |
|---|---|---|
| Hero display | 80px / 48px | 500 |
| H1 | 64px / 40px | 500 |
| H2 | 48px / 34px | 500 |
| H3 | 32px | 600 |
| H4 | 24px | 600 |
| Body large | 20px | 400 |
| Body | 17px / 16px | 400 |
| Small | 14px | 400 |
| Metadata | 12px | 600 |
| Navigation | 14px | 500 |

Typographic detail: display `-0.045em`, H1/H2 `-0.035em`, body `-0.01em`, uppercase labels `+0.08em`.

### 3.4 Grid, Spacing, Radius

- 12-column grid, max-width 1440px, content 1280px
- Side padding 64px (desktop) / 32px (tablet) / 20px (mobile); column gap 24px
- Section rhythm: major 160–200px, standard 120px, small 72px; internal 24/32/48px
- Radius: 6px (buttons/inputs), 12px (cards/UI), 20px (project visuals). Avoid pills.

### 3.5 Borders & Depth

Borders establish structure rather than shadows. Default `#D9D9D4`, strong divider `#BDBDB7`, dark `#292929`. Project visuals use 1px border, 16–24px radius, very soft shadow.

### 3.6 Icons

Lucide, 1.5px stroke, 18–20px, minimal, monochrome. No mixed icon libraries.

### 3.7 Motion

Framer Motion only. Purposeful, restrained, reinforces hierarchy and feedback.

- Page/section entrance: opacity `0→1`, y `20px→0`, 500–700ms
- Project image: scale `0.97→1`, 700ms
- Hover: `translateY(-4px)`, 200ms
- Stagger: 80–120ms
- Respect `prefers-reduced-motion`: animations disabled/reduced, site remains fully usable

Avoid: excessive parallax, scroll hijacking, long intros, custom cursors, animating everything.

## 4. Information Architecture

### 4.1 Homepage (single-page narrative, ordered)

01 Hero → 02 Introduction → 03 What I Do → 04 Selected Work → 05 Enterprise Experience (25+ modules) → 06 Design→Code → 07 AI-Assisted Workflow → 08 Design Principles → 09 Experience → 10 Technology → 11 About → 12 Why Work With Me → 13 Contact CTA → Footer.

Signature editorial device: `01 / 02 / 03` numbered section labels.

### 4.2 Case-Study Pages

Route `/work/[slug]`, static generation for all five projects. Structure (per Content Outline 1): Overview → Problem → Users → Role → Product Structure → Key UX Decisions → UI System → Interaction → Frontend → Result → Reflection.

### 4.3 Navigation

- Left: wordmark "Dip Kumar Kapat" + role micro-line (UI/UX · Frontend · AI)
- Center: Work · Capabilities · About · Experience
- Right: Let's Talk CTA, theme toggle
- On scroll: reduced height, backdrop blur, thin bottom border, stronger background
- Mobile: accessible menu (hamburger → panel), keyboard/escape/outside-click handling, focus management

## 5. Content

Real content supplied by the owner is used directly: bio, five live projects (with live URLs), experience timeline, skills, contact details, enterprise ERP case study. Missing assets are implemented with clearly-labeled placeholders:

- Project thumbnails: styled placeholder compositions per project (documented swap-in path)
- Professional portrait: placeholder slot in About
- Resume: `public/resume/` placeholder + README instructions
- Testimonials: **never fabricated** — component + data structure render only when populated

Copy rules: concise, confident, professional; outcomes over buzzwords.

## 6. UX Requirements

Mobile-first, fully responsive (320→1440+), easy to scan, keyboard accessible, touch-friendly, visually hierarchical, conversion-focused. Intentional layouts per breakpoint (navigation, reordering, grid changes, touch targets ≥44px, form usability), not just shrinking desktop.

## 7. Accessibility (WCAG 2.2 AA)

- Semantic HTML, logical heading hierarchy, keyboard nav, visible focus states
- Accessible nav (aria-current, skip link), proper form labels + error messaging
- ARIA only when necessary, sufficient contrast, screen-reader-friendly interactions
- Respect `prefers-reduced-motion`; site usable without animation

## 8. Technical Architecture

### Stack

Next.js 15 (App Router), React, TypeScript (strict), Tailwind CSS v4, Framer Motion, lucide-react, zod.

### Principles

- RSC-first; client components only where interactivity requires
- Reusable typed components; clean boundaries; data-driven repeated content
- Minimal dependencies

### Folder Structure

```
src/
  app/
    layout.tsx, page.tsx, globals.css, robots.ts, sitemap.ts
    work/[slug]/page.tsx
    api/contact/route.ts
  components/
    layout/   Navbar, MobileMenu, Footer
    sections/ Hero, Introduction, WhatIDo, SelectedWork, Enterprise, DesignToCode,
              AIWorkflow, Principles, Experience, Technology, About, WhyWorkWithMe,
              Contact, FinalCTA
    ui/       Button, Badge, Card, Container, SectionHeading, Stat, TechTag, Divider
    motion/   Reveal, Stagger, MotionLink
  data/       site.ts, projects.ts, experience.ts, skills.ts, services.ts,
              testimonials.ts, socials.ts, modules.ts, principles.ts
  lib/        utils.ts (cn), validation.ts, contact.ts, analytics.ts, seo.ts
  styles/
```

### Data Layer

Single typed source drives homepage cards and detail pages: `Project` (slug, title, category, role, description, stack, links, case study fields, image). Same pattern for experience, skills, services, modules, principles, testimonials, socials.

### Contact Form

- Client component: fields Name, Email, Company (optional), Inquiry type (select), Message
- Client validation + server-side zod validation in `POST /api/contact`
- Honeypot field for spam mitigation
- States: idle, validating, loading, success, error (accessible announcements)
- Backend: Resend. Env vars: `RESEND_API_KEY`, `CONTACT_FORM_FROM_EMAIL`, `CONTACT_FORM_TO_EMAIL` (documented in `.env.example` + README). No secrets in client code.

### SEO

- Metadata API: title strategy, meta description, canonical, OG, Twitter cards
- JSON-LD structured data: Person, WebSite, CreativeWork
- `robots.ts`, `sitemap.ts`
- Semantic HTML, correct heading hierarchy

### Analytics

Lightweight typed `trackEvent` helper (Resume download, contact submission, project visits, CTA clicks) with a no-op default. No intrusive tracking.

### Performance

`next/image` with dimensions, `next/font` swap, lazy media, RSC where possible, no layout shift, no unnecessary client JS.

## 9. Error Handling

- Form: validation errors per-field, server error → user-facing message, no crash
- External links: `rel="noopener noreferrer"`, `target="_blank"` where appropriate
- 404 for unknown `/work/[slug]` via `notFound()`
- No unsanitized HTML; typed data with defensive handling

## 10. Testing & QA Gate

- `next build` succeeds; `next lint` clean; `tsc --noEmit` clean
- No console errors, no hydration warnings
- Keyboard navigation, visible focus, reduced-motion respected
- Responsive 320/768/1024/1440; no horizontal overflow
- Contrast AA; metadata complete; sitemap + robots present
- Manual browser verification (Playwright) for nav, filtering, form states, mobile menu

## 11. Deliverables

Full implementation, reusable components, responsive states, accessibility, SEO, functional filtering, contact form architecture, resume download, social links, performance optimization, `.env.example`, README (setup/build/deploy/QA checklist), local dev instructions, deployment instructions (Vercel).
