# Selected Work Section — Design Specification

**Date:** 2026-08-22
**Status:** Approved for Implementation
**Approach:** Hybrid — Flagship Hero + Editorial Grid (Approach C)

---

## 1. Overview

### Purpose
Transform the "Selected Work" section into a premium, editorial-grade showcase that:
1. **Leads with strongest proof** — 25+ module Enterprise ERP as a cinematic hero
2. **Demonstrates range** — 5 demo projects across SaaS, AI, FinTech, Brand in an asymmetric bento grid
3. **Drives conversion** — Every card CTAs to case study; hero CTAs to ERP deep-dive + scroll anchor to grid

### Success Criteria
- Visual parity with reference sites (ashwingupta.dev, portfolioone.framer.ai, cohesion.framer.ai)
- Sub-100ms interaction latency on hover/filter
- Zero layout shift (CLS < 0.1)
- Full accessibility compliance (WCAG 2.1 AA)
- Respects `prefers-reduced-motion`

---

## 2. Section Architecture

```
#work (section)
├── EnterpriseHero           // New — ERP flagship
│   ├── Content column (7/12)
│   │   ├── Eyebrow: "03 / Selected Work"
│   │   ├── H1: "25+ Modules. One Product Ecosystem."
│   │   ├── Supporting copy (2 lines)
│   │   ├── TechBadgeRow: React · Next.js · Tailwind · shadcn/ui · Flowbite · Framer Motion
│   │   └── DualCTA: "Explore Enterprise ERP" (primary) + "View Demo Projects" (scroll anchor)
│   └── Visual column (5/12)
│       └── HeroImageFrame: Double-bezel, sanitized dashboard screenshot, parallax 0.15x
├── ProjectFilter            // New — Sticky filter pills
│   ├── All (count: 5)
│   ├── SaaS (count: 2)
│   ├── AI (count: 1)
│   ├── FinTech (count: 1)
│   └── Brand (count: 1)
├── ProjectGrid              // Refined — Bento grid for 5 demo projects
│   ├── PulseMetrics (SaaS) — 8 cols, 2 rows (featured)
│   ├── AI Content Studio (AI) — 4 cols, 1 row
│   ├── VetBook (SaaS) — 6 cols, 1 row
│   ├── LoanLens (FinTech) — 6 cols, 1 row
│   └── Saint's Paradise (Brand) — 12 cols, 1 row (full-width closer)
└── ViewAllCTA               // Enhanced — "Let's Work Together" → #contact
```

---

## 3. Component Specifications

### 3.1 EnterpriseHero (New Component)
**File:** `src/components/sections/EnterpriseHero.tsx`

**Props:** None (self-contained, reads from constants)

**Layout:**
- Container: `max-w-[1280px] mx-auto px-6 lg:px-8`
- Grid: `lg:grid lg:grid-cols-12 lg:gap-12 items-start`
- Content: `lg:col-span-7`
- Visual: `lg:col-span-5 relative`

**Content Column:**
```tsx
<div className="pt-4 lg:pt-8">
  <SectionHeading
    eyebrow="03 / Selected Work"
    title="25+ Modules. One Product Ecosystem."
    description="For a School Automation ERP platform, I designed and built 25+ interconnected modules — academics, attendance, fees, payroll, transport, library, hostel, admissions, and more — as a single coherent product on a continuous delivery cycle."
  />
  <TechBadgeRow badges={[
    "React", "Next.js", "Tailwind CSS", "shadcn/ui", "Flowbite", "Framer Motion"
  ]} />
  <DualCTA
    primary={{ label: "Explore Enterprise ERP", href: "#enterprise" }}
    secondary={{ label: "View Demo Projects", href: "#demo-projects", variant: "text" }}
  />
</div>
```

**Visual Column:**
```tsx
<HeroImageFrame
  src="/work/enterprise-erp-dashboard.png"
  alt="School Automation ERP dashboard showing multiple modules"
  className="relative h-[480px] lg:h-[560px]"
  parallax={0.15}
/>
```

**Motion:**
- Content: Staggered reveal (eyebrow → title → description → badges → CTA), 80ms delay each
- Visual: Parallax on scroll (transform: translateY(scrollY * 0.15))
- Image: Subtle scale on hover (1.02x, 700ms ease-out)

---

### 3.2 ProjectFilter (New Component)
**File:** `src/components/sections/ProjectFilter.tsx`

**Props:**
```ts
interface ProjectFilterProps {
  filters: { key: ProjectFilter; label: string; count: number }[];
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}
```

**Filters Data:**
```ts
const FILTER_CONFIG = [
  { key: "All", label: "All", count: 5 },
  { key: "UI/UX", label: "SaaS", count: 2 },      // PulseMetrics, VetBook
  { key: "Frontend", label: "AI", count: 1 },      // AI Content Studio
  { key: "Web Applications", label: "FinTech", count: 1 }, // LoanLens
  { key: "Websites", label: "Brand", count: 1 },   // Saint's Paradise
] as const;
```

**Visual:**
- Container: `sticky top-24 z-10 flex flex-wrap gap-2 pb-8`
- Pill base: `rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-all duration-200`
- Active: `bg-fg-0 text-bg-0 shadow-sm`
- Inactive: `bg-bg-2 text-fg-1 border border-bg-3 hover:border-accent-0 hover:text-fg-0`
- Count badge: `ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full bg-accent-3 text-accent-0` (only on inactive)

**Motion:**
- Filter change: Exit stagger (opacity 1→0, scale 0.98, 150ms) → Enter stagger (as reveal)
- Count update: Scale 1→1.15→1 (150ms spring)
- Pill press: Scale 0.98 (spring)

---

### 3.3 ProjectGrid (Refined Component)
**File:** `src/components/sections/ProjectGrid.tsx`

**Grid Configuration:**
```ts
const GRID_LAYOUT = [
  { slug: "pulsemetrics", span: "lg:col-span-8 lg:row-span-2", featured: true },
  { slug: "ai-content-studio", span: "lg:col-span-4", featured: false },
  { slug: "vetbook", span: "lg:col-span-6", featured: false },
  { slug: "loanlens", span: "lg:col-span-6", featured: false },
  { slug: "saints-paradise", span: "lg:col-span-12", featured: false },
] as const;
```

**Container:**
```tsx
<motion.div
  className="grid gap-6 lg:grid-cols-12 lg:gap-8"
  initial={false}
  animate={{ opacity: 1 }}
  transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
>
  {filteredProjects.map((project, index) => {
    const layout = GRID_LAYOUT.find(l => l.slug === project.slug)!;
    return (
      <motion.div
        key={project.slug}
        className={cn(layout.span, layout.featured && "lg:row-span-2")}
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <ProjectCard project={project} reversed={index % 2 === 1} />
      </motion.div>
    );
  })}
</motion.div>
```

---

### 3.4 ProjectCard (Enhanced — Existing)
**File:** `src/components/sections/ProjectCard.tsx` (modify)

**Changes:**
1. Add `CategoryBadge` in content column (below label, above title)
2. Refine hover orchestration:
   - Image: `scale(1.02)` 700ms ease-out (existing)
   - Outer shell border: `--bg-3` → `--accent-0` 200ms (existing)
   - CategoryBadge: `scale(1.05)` 150ms spring (new)
   - Content: No transform (text readability)
3. Update inner core padding: `p-6 sm:p-8 lg:p-10` (was `p-6 sm:p-8`)
4. Title: `font-display font-normal text-2xl leading-snug tracking-tight text-fg-0 sm:text-3xl lg:text-[2.25rem]` (existing, verified)
5. Description: `text-base leading-relaxed text-fg-1` (existing)

**CategoryBadge Position:**
```tsx
<p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
  {project.index} / {project.name}
</p>
<CategoryBadge category={project.category} />  // NEW
<p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent-0">
  {project.label}
</p>
```

---

### 3.5 CategoryBadge (New Component)
**File:** `src/components/ui/CategoryBadge.tsx`

**Props:**
```ts
interface CategoryBadgeProps {
  category: "SaaS" | "AI" | "FinTech" | "Brand" | "Enterprise";
}
```

**Color Mapping:**
```ts
const CATEGORY_COLORS = {
  SaaS: "bg-accent-3 text-accent-0",           // Copper soft / copper
  AI: "bg-[--accent-ai-soft] text-[--accent-ai]", // Violet (new tokens needed)
  FinTech: "bg-[--accent-fin-soft] text-[--accent-fin]", // Emerald (new tokens needed)
  Brand: "bg-accent-3 text-accent-0",          // Copper soft / copper
  Enterprise: "bg-fg-1 text-fg-0",             // Neutral dark
} as const;
```

**New CSS Tokens Required (add to `colors_and_type.css`):**
```css
:root {
  --accent-ai: #7c5cff;        /* Violet */
  --accent-ai-soft: #f0ebff;   /* Violet soft */
  --accent-fin: #10b981;       /* Emerald */
  --accent-fin-soft: #ecfdf5;  /* Emerald soft */
}
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    --accent-ai: #a78bff;
    --accent-ai-soft: #1e1833;
    --accent-fin: #34d399;
    --accent-fin-soft: #06281e;
  }
}
```

**Visual:**
- `inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.1em]`
- Hover: `scale(1.05)` spring (on card hover via group-hover)

---

### 3.6 TechBadgeRow (New Component)
**File:** `src/components/ui/TechBadgeRow.tsx`

**Props:**
```ts
interface TechBadgeRowProps {
  badges: string[];
}
```

**Visual:**
- `flex flex-wrap gap-2 mt-6`
- Each badge: `px-3 py-1.5 rounded-md bg-bg-2 text-fg-1 font-mono text-[11px] uppercase tracking-[0.08em] border border-bg-3 hover:border-accent-0 hover:text-accent-0 transition-all duration-200`
- Stagger reveal: delay index × 40ms

---

### 3.7 DualCTA (New Component — Reusable)
**File:** `src/components/ui/DualCTA.tsx`

**Props:**
```ts
interface DualCTAProps {
  primary: { label: string; href: string };
  secondary: { label: string; href: string; variant?: "text" | "outline" };
}
```

**Visual:**
- Container: `flex flex-wrap items-center gap-4 mt-8`
- Primary: `inline-flex items-center gap-2 rounded-full bg-fg-0 px-6 py-3 text-sm font-medium text-bg-0 transition-all duration-200 hover:bg-accent-0 hover:shadow-glow`
- Secondary (text): `inline-flex items-center gap-2 text-sm font-medium text-fg-1 underline-offset-4 transition-colors hover:text-accent-0 hover:underline`
- Arrow icon: `ArrowUpRight` size-4, `whileHover={{ x: 4 }}` (Framer Motion)

---

### 3.8 HeroImageFrame (New Component)
**File:** `src/components/ui/HeroImageFrame.tsx`

**Props:**
```ts
interface HeroImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  parallax?: number; // 0-1, default 0
}
```

**Structure:**
```tsx
<div className="relative overflow-hidden rounded-2xl border border-bg-3 bg-bg-2 p-1.5">
  <div className="relative overflow-hidden rounded-[20px] bg-surface-muted">
    <motion.div
      className="relative h-full w-full"
      style={{ transform: `translateY(${parallax * scrollY}px)` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </motion.div>
  </div>
</div>
```

---

### 3.9 ViewAllCTA (Enhanced — Existing)
**File:** `src/components/sections/SelectedWork.tsx` (modify)

**Changes:**
- Position: After grid, `mt-16 text-center`
- Button: `inline-flex items-center gap-2 rounded-full bg-fg-0 px-8 py-3 text-sm font-medium text-bg-0 transition-all duration-200 hover:bg-accent-0 hover:shadow-glow`
- Arrow: `whileHover={{ x: 4 }}`
- Scroll target: `#contact` (existing)

---

## 4. Data Model Updates

### 4.1 Project Type Extension
**File:** `src/types/index.ts` (modify)

```ts
export interface Project {
  // ... existing fields
  category: "SaaS" | "AI" | "FinTech" | "Brand" | "Enterprise";
  // Add featured flag for grid layout
  featured?: boolean;
}
```

### 4.2 Project Data Updates
**File:** `src/data/projects.ts` (modify)

Add `category` and `featured` to each project:
```ts
// PulseMetrics
category: "SaaS",
featured: true,

// AI Content Studio
category: "AI",
featured: false,

// VetBook
category: "SaaS",
featured: false,

// LoanLens
category: "FinTech",
featured: false,

// Saint's Paradise
category: "Brand",
featured: false,
```

Add Enterprise ERP as a separate constant (not in projects array):
```ts
export const enterpriseProject = {
  slug: "enterprise-erp",
  name: "School Automation ERP",
  label: "Enterprise · Product Ecosystem",
  title: "25+ Modules. One Product Ecosystem.",
  // ... other fields for hero
};
```

---

## 5. Motion Specifications

### 5.1 Reveal Animations (Staggered)
```css
/* Each item in grid: */
@keyframes reveal {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
animation: reveal 450ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
animation-delay: calc(var(--index) * 80ms);
```

### 5.2 Hover Orchestration (Card)
| Element | Property | From | To | Duration | Easing |
|---------|----------|------|-----|----------|--------|
| Image | transform | scale(1) | scale(1.02) | 700ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Outer shell border | border-color | var(--bg-3) | var(--accent-0) | 200ms | ease-out |
| Outer shell box-shadow | box-shadow | none | var(--shadow-glow) | 200ms | ease-out |
| CategoryBadge | transform | scale(1) | scale(1.05) | 150ms | cubic-bezier(0.34, 1.56, 0.64, 1) |

### 5.3 Filter Transition
```css
/* Exit */
@keyframes filter-exit {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.98); }
}
animation: filter-exit 150ms ease-out forwards;

/* Enter (staggered per item) */
@keyframes filter-enter {
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
animation: filter-enter 300ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
animation-delay: calc(var(--index) * 60ms);
```

### 5.4 Parallax (Hero Image)
```js
// On scroll (throttled 16ms)
const translateY = scrollY * parallaxFactor; // parallaxFactor = 0.15
imageContainer.style.transform = `translateY(${translateY}px)`;
```

---

## 6. Responsive Breakpoints

| Breakpoint | Hero | Grid | Filter | Card Padding |
|------------|------|------|--------|--------------|
| `< 640px` | Stack (content → image), full width | 1 col (12/12 all) | Horizontal scroll, snap-x, `-mx-6 px-6` | 24px |
| `640-1023px` | 6/6 split | 2-col pairs (6/6), Saint's 12/12 | Sticky, 2-row wrap | 32px |
| `≥ 1024px` | 7/5 split | Full bento pattern | Sticky, single row | 40px (lg) |

**Container Padding:**
- Mobile: `px-6` (24px)
- Tablet: `px-8` (32px)
- Desktop: `px-10` (40px)

**Section Padding:**
- `py-20 lg:py-28` (80px / 112px) — consistent with design system

---

## 7. Accessibility Checklist

- [ ] Semantic `<section aria-labelledby="work-heading">`
- [ ] `<h2 id="work-heading">` for section title (visually hidden if needed)
- [ ] Each project in `<article>` with `aria-labelledby="project-{slug}-title"`
- [ ] Filter group: `role="group" aria-label="Filter projects by category"`
- [ ] Filter pills: `role="button" aria-pressed="true/false"` (native `<button>`)
- [ ] Focus visible: `--ring-0` (2px, offset 2px) on all interactive elements
- [ ] Images: Descriptive `alt` from project data, `loading="lazy"` below hero
- [ ] Reduced motion: All animations disabled via `@media (prefers-reduced-motion: reduce)`
- [ ] Color contrast: Category badges ≥ 4.5:1, text ≥ 4.5:1, large text ≥ 3:1
- [ ] No color-only indicators (badges have text + color)
- [ ] Touch targets: Minimum 44×44px (CTAs, filter pills)
- [ ] Keyboard navigation: Tab order logical, focus visible

---

## 8. Performance Budgets

| Metric | Target |
|--------|--------|
| Section LCP contribution | < 500ms |
| Filter interaction latency | < 100ms |
| Hover response (paint) | < 50ms |
| CLS (section) | < 0.1 |
| Bundle size increase | < 15KB gzipped |
| Image weight (hero) | < 150KB WebP |
| Image weight (grid) | < 100KB each WebP |

**Optimization Strategies:**
- Hero image: `priority` + `sizes="50vw"` + preload link
- Grid images: `loading="lazy"` + `sizes="(min-width: 1024px) 50vw, 100vw"`
- Next.js Image: Automatic WebP/AVIF, widths 640/1024/1280/1920
- Code-split: `ProjectFilter`, `ProjectGrid` as dynamic imports if needed

---

## 9. Implementation Sequence

### Phase 1: Foundation (Tokens + Types)
1. Add category accent tokens to `colors_and_type.css`
2. Extend `Project` type in `src/types/index.ts`
3. Update `src/data/projects.ts` with category + featured fields
4. Add `enterpriseProject` constant

### Phase 2: New Components
5. Create `CategoryBadge.tsx`
6. Create `TechBadgeRow.tsx`
7. Create `DualCTA.tsx`
8. Create `HeroImageFrame.tsx`
9. Create `EnterpriseHero.tsx`
10. Create `ProjectFilter.tsx`

### Phase 3: Enhanced Components
11. Enhance `ProjectCard.tsx` — add CategoryBadge, refine hover
12. Create `ProjectGrid.tsx` (extract from SelectedWork)
13. Refactor `SelectedWork.tsx` — orchestrate hero + filter + grid + CTA

### Phase 4: Polish & Verification
14. Add enterprise hero image to `public/work/`
15. Test filter interactions, scroll reveals, hover states
16. Verify reduced motion, accessibility, responsive
17. Lint + typecheck + build

---

## 10. Open Questions / Decisions Needed

| Question | Status | Decision |
|----------|--------|----------|
| Enterprise ERP hero image asset | Pending | Need sanitized dashboard screenshot |
| Category badge colors (AI/FinTech) | Defined | New tokens added to spec |
| Filter mapping (current filters → categories) | Defined | See FILTER_CONFIG above |
| Sticky filter offset | Defined | `top-24` (accounts for nav height) |
| Grid item count for "All" filter | Defined | 5 demo projects (excludes ERP) |

---

## 11. References

- Design System: `opendesign/design-systems/portfolio/tokens/colors_and_type.css`
- Style Notes: `opendesign/design-systems/portfolio/brand/style-notes.md`
- Voice & Tone: `opendesign/design-systems/portfolio/brand/voice-and-tone.md`
- Current Implementation: `src/components/sections/SelectedWork.tsx`, `src/components/sections/ProjectCard.tsx`
- Reference Sites: ashwingupta.dev, portfolioone.framer.ai, cohesion.framer.ai, re-birth.framer.website

---

*Spec self-reviewed for placeholders, contradictions, ambiguity, and scope. Ready for implementation planning.*