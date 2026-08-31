# Selected Work Section Redesign -Specification

**Date:** 2026-08-22
**Status:** Approved
**Branch:** `feat/selected-work-redesign`

---

## 1. Design Read

> **Reading this as:** Portfolio showcase section for a senior product designer/developer, targeting hiring managers and potential clients, with a **Soft Structuralism** visual language (silver-grey/white, bold grotesk typography, floating cards with diffused shadows), implemented as a **horizontal scroll-snap carousel** with native CSS momentum scrolling.

---

## 2. Dial Settings (from design-taste-frontend)

| Dial               | Value | Rationale                                                                        |
| ------------------ | ----- | -------------------------------------------------------------------------------- |
| `DESIGN_VARIANCE`  | 7     | Asymmetric horizontal carousel breaks vertical rhythm; card peek creates tension |
| `MOTION_INTENSITY` | 4     | Subtle entry stagger + hover elevation; no scroll-hijack, no infinite loops      |
| `VISUAL_DENSITY`   | 3     | Generous whitespace (`py-32`), airy cards, macro breathing room                  |

---

## 3. Visual Direction -Soft Structuralism

### 3.1 Color & Surface

| Token        | Light     | Dark      | Usage                                 |
| ------------ | --------- | --------- | ------------------------------------- |
| `--bg-0`     | `#fafaf8` | `#0a0a0a` | Page background, card inner core      |
| `--bg-1`     | `#f4f3ef` | `#121212` | Card outer shell                      |
| `--bg-3`     | `#e0dfd9` | `#2a2a2a` | Borders, dividers                     |
| `--fg-0`     | `#0d0d0d` | `#fafaf8` | Primary text (headlines)              |
| `--fg-1`     | `#3a3934` | `#c8c7c0` | Secondary text (descriptions)         |
| `--fg-2`     | `#6d6c66` | `#9d9c94` | Tertiary (labels, meta)               |
| `--accent-0` | `#b87333` | `#d4a574` | Focus rings, CTA hover, category tags |

**No category-color floods.** Category conveyed via `CategoryBadge` with soft background (`--accent-*-soft`).

### 3.2 Typography

| Element                  | Font                         | Weight         | Size                               | Tracking          | Line Height       |
| ------------------------ | ---------------------------- | -------------- | ---------------------------------- | ----------------- | ----------------- |
| Section Title            | `font-ui` (Instrument Sans)  | 600 (Semibold) | `text-5xl lg:text-6xl xl:text-7xl` | `tracking-tight`  | `leading-tight`   |
| Section Description      | `font-ui`                    | 400            | `text-lg lg:text-xl`               | `tracking-normal` | `leading-relaxed` |
| Card Index/Name          | `font-mono` (JetBrains Mono) | 500            | `text-xs`                          | `tracking-wider`  | `normal`          |
| Card Category Label      | `font-mono`                  | 500            | `text-xs`                          | `tracking-wider`  | `normal`          |
| Card Title               | `font-ui`                    | 500 (Medium)   | `text-xl lg:text-2xl`              | `tracking-tight`  | `leading-snug`    |
| Card Description         | `font-ui`                    | 400            | `text-sm`                          | `tracking-normal` | `leading-relaxed` |
| Meta Labels (Role/Stack) | `font-mono`                  | 500            | `text-[10px]`                      | `tracking-widest` | `normal`          |
| Meta Values              | `font-ui`                    | 400            | `text-sm`                          | `normal`          | `normal`          |
| CTA Links                | `font-ui`                    | 500            | `text-sm`                          | `normal`          | `normal`          |

**No serif display fonts.** Grotesk dominance per Soft Structuralism.

### 3.3 Shadows -"Unbelievably Soft, Highly Diffused"

```css
/* Outer shell - subtle lift */
--shadow-card-outer:
	0 4px 24px rgba(13, 13, 13, 0.04), 0 1px 3px rgba(13, 13, 13, 0.03);

/* Inner core - nearly invisible depth */
--shadow-card-inner: 0 2px 8px rgba(13, 13, 13, 0.02);

/* Hover - gentle elevation bloom */
--shadow-card-hover:
	0 12px 48px rgba(13, 13, 13, 0.06), 0 4px 16px rgba(13, 13, 13, 0.04);
```

Dark mode: `rgba(0,0,0,0.15)`, `rgba(0,0,0,0.2)`, `rgba(0,0,0,0.25)` respectively.

### 3.4 Border Radius (Double-Bezel Architecture)

- Outer shell: `rounded-2xl` (24px / `var(--radius-2xl)`)
- Inner core: `rounded-[20px]` (concentric: 24px - 4px shell padding)

### 3.5 Spacing Scale

| Context                  | Value                                                      |
| ------------------------ | ---------------------------------------------------------- |
| Section vertical padding | `py-24 lg:py-32` (96px / 128px)                            |
| Carousel gap             | `gap-6 lg:gap-8` (24px / 32px)                             |
| Card internal padding    | `p-6 lg:p-8` (24px / 32px)                                 |
| Scroll padding (inline)  | `var(--container-padding)` / `var(--container-padding-lg)` |

---

## 4. Layout Architecture

### 4.1 Section Structure

```html
<section id="work" class="py-24 lg:py-32" aria-labelledby="work-heading">
  <Container>
    <!-- Header (no eyebrow) -->
    <header class="mb-12 lg:mb-16">
      <h2 id="work-heading" class="font-ui font-semibold text-5xl lg:text-6xl xl:text-7xl tracking-tight text-fg-0">
        Selected Work
      </h2>
      <p class="mt-4 text-lg lg:text-xl text-fg-1 max-w-[60ch]">
        Five projects spanning brand, fintech, SaaS, and AI - each designed around real problems and shipped to production.
      </p>
    </header>

    <!-- Carousel Track -->
    <div class="carousel-track" role="region" aria-label="Project showcase">
      <div class="carousel-inner">
        <!-- ProjectCardCarousel × 5 -->
      </div>
    </div>

    <!-- Mobile scroll hint -->
    <div class="scroll-hint lg:hidden" aria-hidden="true">...</div>

    <!-- CTA -->
    <div class="mt-16 text-center">
      <DualCTA primary={{ label: "View All Case Studies", href: "#contact" }} />
    </div>
  </Container>
</section>
```

### 4.2 Carousel CSS (Native Scroll-Snap)

```css
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

.project-card {
	flex: 0 0 340px;
	max-width: 100%;
	scroll-snap-align: start;
	scroll-snap-stop: always;
}
```

### 4.3 Responsive Card Widths

| Breakpoint   | Card Width           | Visible Cards | Gap  | Scroll Padding |
| ------------ | -------------------- | ------------- | ---- | -------------- |
| `< 640px`    | `calc(100vw - 2rem)` | 1.0–1.1       | 16px | 16px           |
| `640–1023px` | 320px                | 1.5           | 24px | 24px           |
| `≥ 1024px`   | 340px                | 2.5           | 32px | 32px           |

---

## 5. Component Specification

### 5.1 New Component: `ProjectCardCarousel`

**File:** `src/components/sections/ProjectCardCarousel.tsx`

**Props:**

```ts
interface ProjectCardCarouselProps {
	project: Project; // from @/data/projects
}
```

**Structure:**

```
<motion.article class="group relative flex-shrink-0 snap-start" style={{width: "340px"}}>
  <!-- Outer Shell -->
  <div class="rounded-2xl border border-bg-3 bg-bg-1 p-1.5 transition-all duration-400 group-hover:border-bg-4 group-hover:shadow-card-hover">
    <!-- Inner Core -->
    <div class="rounded-[20px] bg-bg-0 overflow-hidden">
      <!-- Image Link (aspect-[4/3]) -->
      <a href="/work/{slug}" class="block relative aspect-[4/3] overflow-hidden">
        <motion.div animate={{scale: hovered ? 1.02 : 1}} class="absolute inset-0">
          <Image src={project.image.src} alt={project.image.alt} fill className="object-cover" sizes="340px" />
        </motion.div>
      </a>

      <!-- Content -->
      <div class="p-6 lg:p-8">
        <p class="font-mono text-xs uppercase tracking-wider text-fg-2">{index} / {name}</p>
        <CategoryBadge category={project.category} className="mt-2" />
        <p class="mt-2 font-mono text-xs uppercase tracking-wider text-accent-0">{label}</p>
        <h3 class="mt-4 font-ui font-semibold text-xl lg:text-2xl leading-snug tracking-tight text-fg-0">{title}</h3>
        <p class="mt-3 text-sm leading-relaxed text-fg-1 line-clamp-3">{description}</p>

        <dl class="mt-6 grid gap-3">
          <div><dt class="font-mono text-[10px] uppercase tracking-widest text-fg-2">Role</dt><dd class="mt-1 text-sm text-fg-0">{role.join(" · ")}</dd></div>
          <div><dt class="font-mono text-[10px] uppercase tracking-widest text-fg-2">Stack</dt><dd class="mt-1 text-sm text-fg-0">{stack.join(" · ")}</dd></div>
        </dl>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <motion.a href="/work/{slug}" whileHover={{x: 4}} onClick={trackEvent}>View Case Study <ArrowUpRight /></motion.a>
          {liveUrl && <motion.a href={liveUrl} target="_blank" whileHover={{x: 4}}>Live Project <ArrowUpRight /></motion.a>}
        </div>
      </div>
    </div>
  </div>
</motion.article>
```

**State:**

- `hovered` (boolean) -drives image scale + shell shadow/border transition
- `reduceMotion` (from `useReducedMotion()`) -gates all animations

**Animations:**
| Trigger | Property | Values | Transition |
|---------|----------|--------|------------|
| Entry (whileInView) | opacity, y | 0, 24 → 1, 0 | 600ms `ease-out-expo`, stagger `index * 80ms` |
| Hover (card) | y, box-shadow | 0 → -4px, outer→hover | 400ms `ease-out-expo` |
| Hover (image) | scale | 1 → 1.02 | 700ms `ease-out-expo` |
| Tap (card) | scale | 1 → 0.98 | 100ms `ease-out` |
| Focus (keyboard) | ring, scale | visible, 1.01 | 150ms |

---

## 6. Motion & Interaction

### 6.1 Entry Animation (Framer Motion)

- Carousel track: `initial={false}` → `animate={{opacity: 1}}` with `staggerChildren: 0.08, delayChildren: 0.1`
- Each `ProjectCardCarousel`: `initial={reduceMotion ? false : {opacity: 0, y: 24}}` → `whileInView={{opacity: 1, y: 0}}` `viewport={{once: true, amount: 0.3}}` `transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}`

### 6.2 Scroll Behavior

- **Native CSS scroll-snap** -no JS scroll listeners
- Momentum scrolling preserved on iOS (`-webkit-overflow-scrolling: touch`)
- `scroll-snap-stop: always` prevents skipping cards on fast swipe
- Scrollbar hidden (`scrollbar-width: none`, `::-webkit-scrollbar {display: none}`)

### 6.3 Mobile Scroll Hint

- Shows once per session (localStorage `carousel-hint-seen`)
- "Scroll →" label + animated arrow (Framer Motion `whileHover` loop)
- Hidden on `lg:` (desktop)

### 6.4 Reduced Motion

- All `motion` components respect `useReducedMotion()`
- Entry: instant opacity, no transform
- Hover: instant state change, no transition
- Scroll hint: static, no animation

---

## 7. Accessibility

| Requirement         | Implementation                                                                        |
| ------------------- | ------------------------------------------------------------------------------------- |
| Semantic heading    | `<h2 id="work-heading">` referenced by `aria-labelledby` on `<section>`               |
| Carousel region     | `role="region" aria-label="Project showcase"` on `.carousel-track`                    |
| Keyboard navigation | Tab order follows DOM; Enter/Space activates links                                    |
| Focus visible       | `focus-visible: ring-2 ring-accent-0 ring-offset-2 ring-offset-bg-0` + `scale-[1.01]` |
| Reduced motion      | `useReducedMotion()` gates all Framer Motion animations                               |
| Color contrast      | WCAG AA verified on all token combinations (light & dark)                             |
| Alt text            | Project images use descriptive `alt` from data                                        |
| Touch targets       | All interactive elements ≥ 44×44px; full-card hit area on image link                  |
| No scroll-hijack    | Native scroll only -no interference with AT                                           |

---

## 8. Data Integration

**Source:** `src/data/projects.ts` -existing `projects` array (5 items)

- All 5 projects displayed in carousel order (index 01–05)
- `featured` flag ignored (no hero card in this layout)
- `CategoryBadge` uses existing `category` field (SaaS, AI, FinTech, Brand, Enterprise)

---

## 9. Files to Create / Modify

### New Files

1. `src/components/sections/ProjectCardCarousel.tsx` -carousel-optimized project card
2. `src/components/sections/SelectedWork.tsx` -**rewrite** (replace current implementation)

### Modified Files

1. `src/components/sections/SelectedWork.tsx` -complete replacement with new carousel architecture
2. `src/app/globals.css` -add carousel utility classes (if not using Tailwind arbitrary values)

### Untouched

- `src/data/projects.ts` -data source unchanged
- `src/components/ui/CategoryBadge.tsx` -reused
- `src/components/ui/Container.tsx` -reused
- `src/components/ui/DualCTA.tsx` -reused
- `src/components/ui/SectionHeading.tsx` -**not used** (no eyebrow)

---

## 10. Implementation Dependencies

**Existing (verified in package.json):**

- `motion/react` (Framer Motion) -for entry/hover animations
- `next/image` -for optimized project images
- `lucide-react` -`ArrowUpRight` icon
- `@/lib/utils` -`cn()` utility
- `@/lib/analytics` -`trackEvent()`

**No new dependencies required.**

---

## 11. Acceptance Criteria

- [ ] Section renders at `#work` with correct heading hierarchy
- [ ] Horizontal carousel displays all 5 projects in order
- [ ] Native scroll-snap works: each card snaps to start on scroll/swipe
- [ ] Momentum scrolling smooth on iOS Safari and Android Chrome
- [ ] Card hover: gentle lift (-4px) + shadow bloom + image scale (1.02)
- [ ] Card tap: scale 0.98 tactile feedback
- [ ] Entry stagger: cards cascade in with 80ms delay each
- [ ] Reduced motion: all animations disabled, instant states
- [ ] Keyboard navigation: Tab through cards, Enter opens links, focus ring visible
- [ ] Mobile: single card visible with next-card peek; scroll hint shows once
- [ ] Desktop: 2.5 cards visible; no scroll hint
- [ ] Dark mode: all tokens swap correctly, shadows deepen appropriately
- [ ] No layout shift on load (CLS < 0.1)
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90

---

## 12. Out of Scope

- GSAP horizontal pan / scroll-hijack (explicitly rejected in favor of native)
- Magnetic center-lock carousel (Approach C)
- Sticky stack on scroll (Approach B alternative)
- Project filtering (removed -all 5 shown equally)
- EnterpriseHero section (removed -separate Enterprise section exists below)
- Infinite loop / autoplay carousel

---

## 13. Spec Self-Review (Pre-Commit)

| Check                                                 | Status |
| ----------------------------------------------------- | ------ |
| No TBD / TODO / placeholder content                   | ✅     |
| Internal consistency (tokens match globals.css)       | ✅     |
| Scope focused (single section, no feature creep)      | ✅     |
| No ambiguous requirements                             | ✅     |
| All animations motivated (hierarchy, feedback, state) | ✅     |
| Accessibility requirements explicit and testable      | ✅     |
| Responsive behavior declared per breakpoint           | ✅     |
| File list complete with paths                         | ✅     |

---

_Spec written and committed. Ready for implementation planning._
