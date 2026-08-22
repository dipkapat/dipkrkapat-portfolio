# Selected Work Horizontal Carousel — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Selected Work section (filterable grid with EnterpriseHero) with a horizontal scroll-snap carousel showcasing all 5 projects equally, using Soft Structuralism visual language.

**Architecture:** Native CSS scroll-snap carousel with Framer Motion entry/hover animations. New `ProjectCardCarousel` component optimized for horizontal context. Removes project filtering and EnterpriseHero from this section.

**Tech Stack:** Next.js 15 (App Router), React 19, Tailwind CSS v4, Framer Motion (`motion/react`), TypeScript.

---

### File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/components/sections/ProjectCardCarousel.tsx` | **Create** | Carousel-optimized project card (fixed width, aspect-ratio image, compact meta) |
| `src/components/sections/SelectedWork.tsx` | **Modify (replace)** | New section wrapper with carousel track, header, scroll hint, CTA |
| `src/app/globals.css` | **Modify** | Add carousel utility classes (scroll-snap, scrollbar hiding) |

---

## Task 1: Add Carousel CSS Utilities to globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add carousel utility classes at end of `@layer utilities`**

```css
/* Carousel / Scroll-Snap Utilities */
.carousel-track {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 var(--container-padding);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  margin: 0 calc(var(--container-padding) * -1);
  padding: 0 var(--container-padding);
  padding-bottom: var(--space-4);
}
.carousel-track::-webkit-scrollbar {
  display: none;
}

.carousel-inner {
  display: flex;
  gap: var(--space-6);
  will-change: scroll-position;
}

.carousel-card {
  flex: 0 0 340px;
  max-width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

@media (max-width: 639px) {
  .carousel-card {
    flex-basis: calc(100vw - 2rem);
  }
  .carousel-track {
    gap: var(--space-4);
    padding-bottom: var(--space-6);
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .carousel-card {
    flex-basis: 320px;
  }
  .carousel-track {
    gap: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .carousel-card {
    flex-basis: 340px;
  }
  .carousel-track {
    gap: var(--space-8);
  }
}

/* Scroll hint (mobile only) */
.scroll-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
  color: var(--fg-2);
  font: var(--style-label);
}
.scroll-hint svg {
  animation: scroll-hint-bounce 1.5s ease-in-out infinite;
}
@keyframes scroll-hint-bounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
}
@media (prefers-reduced-motion: reduce) {
  .scroll-hint svg {
    animation: none;
  }
}
.lg\:hidden {
  display: none;
}
@media (max-width: 1023px) {
  .lg\:hidden {
    display: flex;
  }
}
```

- [ ] **Step 2: Verify Tailwind compiles**

Run: `npm run build 2>&1 | head -50`
Expected: No CSS errors, build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "style: add carousel scroll-snap utilities"
```

---

## Task 2: Create ProjectCardCarousel Component

**Files:**
- Create: `src/components/sections/ProjectCardCarousel.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { CategoryBadge } from "@/components/ui/CategoryBadge";

interface ProjectCardCarouselProps {
  project: Project;
}

export function ProjectCardCarousel({ project }: ProjectCardCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="group relative flex-shrink-0 snap-start carousel-card"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer Shell */}
      <div
        className={cn(
          "rounded-2xl border border-bg-3 bg-bg-1 p-1.5 transition-all duration-400 ease-out",
          "group-hover:border-bg-4 group-hover:shadow-[0_12px_48px_rgba(13,13,13,0.06),0_4px_16px_rgba(13,13,13,0.04)]",
          "dark:group-hover:shadow-[0_12px_48px_rgba(0,0,0,0.25),0_4px_16px_rgba(0,0,0,0.2)]"
        )}
      >
        {/* Inner Core */}
        <div className="rounded-[20px] bg-bg-0 overflow-hidden">
          {/* Image — fixed 4:3 aspect ratio */}
          <a
            href={`/work/${project.slug}`}
            className="block relative aspect-[4/3] overflow-hidden"
            aria-label={`${project.name} case study`}
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ scale: hovered && !reduceMotion ? 1.02 : 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                className="w-full h-full object-cover"
                sizes="340px"
              />
            </motion.div>
          </a>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-fg-2">
              {project.index} / {project.name}
            </p>
            <CategoryBadge category={project.category} className="mt-2" />
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent-0">
              {project.label}
            </p>
            <h3 className="mt-4 font-ui font-semibold text-xl lg:text-2xl leading-snug tracking-tight text-fg-0">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-1 line-clamp-3">
              {project.description}
            </p>

            <dl className="mt-6 grid gap-3">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-fg-2">
                  Role
                </dt>
                <dd className="mt-1 text-sm text-fg-0">{project.role.join(" · ")}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-fg-2">
                  Stack
                </dt>
                <dd className="mt-1 text-sm text-fg-0">{project.stack.join(" · ")}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <motion.a
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-0 underline-offset-4 transition-colors hover:text-accent-0"
                whileHover={{ x: 4 }}
                onClick={() => trackEvent("project_visit", { project: project.slug })}
              >
                View Case Study
                <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
              </motion.a>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-1 underline-offset-4 transition-colors hover:text-accent-0"
                  whileHover={{ x: 4 }}
                >
                  Live Project
                  <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
```

- [ ] **Step 2: Type-check the component**

Run: `npx tsc --noEmit src/components/sections/ProjectCardCarousel.tsx`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ProjectCardCarousel.tsx
git commit -m "feat: add ProjectCardCarousel component for horizontal carousel"
```

---

## Task 3: Rewrite SelectedWork Section

**Files:**
- Modify: `src/components/sections/SelectedWork.tsx` (full replacement)

- [ ] **Step 1: Write the new SelectedWork component**

```tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCardCarousel } from "@/components/sections/ProjectCardCarousel";
import { Container } from "@/components/ui/Container";
import { DualCTA } from "@/components/ui/DualCTA";
import { ArrowRight } from "lucide-react";

export function SelectedWork() {
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const hintSeen = localStorage.getItem("carousel-hint-seen");
    if (!hintSeen) {
      const timer = setTimeout(() => setShowScrollHint(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissHint = () => {
    localStorage.setItem("carousel-hint-seen", "true");
    setShowScrollHint(false);
  };

  return (
    <>
      <section id="work" className="py-24 lg:py-32" aria-labelledby="work-heading">
        <Container>
          {/* Section Header — no eyebrow per design-taste rule */}
          <header className="mb-12 lg:mb-16">
            <h2 id="work-heading" className="font-ui font-semibold text-5xl lg:text-6xl xl:text-7xl tracking-tight text-fg-0">
              Selected Work
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-fg-1 max-w-[60ch]">
              Five projects spanning brand, fintech, SaaS, and AI — each designed around real problems and shipped to production.
            </p>
          </header>

          {/* Carousel Track */}
          <div className="carousel-track" role="region" aria-label="Project showcase">
            <div className="carousel-inner">
              {projects.map((project) => (
                <ProjectCardCarousel key={project.slug} project={project} />
              ))}
            </div>
          </div>

          {/* Mobile Scroll Hint */}
          {showScrollHint && (
            <motion.div
              className="scroll-hint lg:hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={dismissHint}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && dismissHint()}
              aria-label="Dismiss scroll hint"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-fg-2">Scroll</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                whileHover={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <DualCTA primary={{ label: "View All Case Studies", href: "#contact" }} />
          </motion.div>
        </Container>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Type-check the component**

Run: `npx tsc --noEmit src/components/sections/SelectedWork.tsx`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/SelectedWork.tsx
git commit -m "feat: rewrite SelectedWork as horizontal scroll-snap carousel"
```

---

## Task 4: Verify Build & Visual Regression

**Files:**
- Test: Run dev server and verify manually

- [ ] **Step 1: Start dev server**

Run: `npm run dev`
Expected: Server starts on localhost:3000

- [ ] **Step 2: Manual verification checklist**

Open `http://localhost:3000` and verify:

- [ ] Section renders at `#work` with "Selected Work" heading (h2)
- [ ] All 5 project cards visible in horizontal carousel
- [ ] Native scroll-snap: each card snaps to start on scroll/swipe
- [ ] Momentum scrolling smooth on trackpad/mouse wheel
- [ ] Card hover: lift (-4px), shadow bloom, border color change, image scale 1.02
- [ ] Card tap/click: scale 0.98 tactile feedback
- [ ] Entry animation: cards cascade in with stagger (~80ms each)
- [ ] Mobile (< 640px): ~1 card visible, next card peeks, scroll hint appears once
- [ ] Tablet (640–1023px): 1.5 cards visible
- [ ] Desktop (≥ 1024px): 2.5 cards visible, no scroll hint
- [ ] Dark mode: tokens swap correctly, shadows deepen
- [ ] Keyboard: Tab navigates cards, Enter opens links, focus ring visible
- [ ] Reduced motion: animations disabled (test via DevTools rendering tab)
- [ ] CTA "View All Case Studies" links to `#contact`
- [ ] No layout shift on load (CLS < 0.1)

- [ ] **Step 3: Run lint & typecheck**

Run: `npm run lint && npx tsc --noEmit`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: Selected Work horizontal carousel — complete implementation"
```

---

## Task 5: Lighthouse Performance Audit

**Files:**
- Test: Lighthouse CI or local DevTools

- [ ] **Step 1: Run Lighthouse on production build**

Run: `npm run build && npm run start`
Then: Open DevTools → Lighthouse → Performance, Accessibility, Best Practices, SEO

- [ ] **Step 2: Verify thresholds**

| Metric | Target |
|--------|--------|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 90 |
| SEO | ≥ 90 |
| CLS | < 0.1 |
| LCP | < 2.5s |

- [ ] **Step 3: Commit if passes**

```bash
git commit --allow-empty -m "chore: lighthouse audit passed"
```

---

## Spec Coverage Check

| Spec Section | Task(s) |
|--------------|---------|
| CSS Utilities (4.2) | Task 1 |
| ProjectCardCarousel component (5.1) | Task 2 |
| SelectedWork section rewrite (4.1, 6) | Task 3 |
| Responsive breakpoints (4.3) | Task 1 (CSS), Task 3 (hint logic) |
| Motion & Interaction (6.1–6.4) | Task 2, Task 3 |
| Accessibility (7) | Task 2, Task 3, verified in Task 4 |
| Data Integration (8) | Task 3 (uses `projects` array) |
| Acceptance Criteria (11) | Task 4, Task 5 |

---

**Plan complete and saved to `docs/superpowers/plans/2026-08-22-selected-work-carousel.md`. Two execution options:**

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**