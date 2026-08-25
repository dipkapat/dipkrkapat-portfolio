# Navigation Overhaul + GSAP Integration -Specification

**Date:** 2026-08-24
**Status:** Draft
**Branch:** `feat/nav-overlay-gsap`

---

## 1. Executive Summary

Replace the fixed header with a **floating fluid pill** navigation that expands into a **full-screen glass morphism overlay**. Integrate **GSAP ScrollTrigger** for scroll-driven reveals, sticky stack sections, and horizontal pan carousels -replacing Framer Motion for scroll-linked animations while keeping Framer Motion for entry/hover/tap micro-interactions.

---

## 2. Navigation: Floating Pill → Full-Screen Overlay

### 2.1 Visual Design

| State                  | Appearance                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Resting (pill)**     | Centered, detached `mt-6`, `max-w-[800px]`, glass morphism (`bg-bg-0/85 backdrop-blur-md`), rounded-full, thin border `border-bg-3`, shadow `shadow-lg` |
| **Scrolled**           | Same pill, elevated shadow `shadow-xl`, border `border-bg-4`                                                                                            |
| **Expanded (overlay)** | Full viewport, fixed inset-0, `z-[9999]`, glass morphism background `bg-bg-0/95 backdrop-blur-xl`, grain overlay visible                                |

### 2.2 Pill Content (Resting)

```
┌─────────────────────────────────────────────────────────────┐
│  DIP KUMAR KAPAT      Work  Capabilities  About  Experience  Let's Talk  ☀  │
│  UI/UX · Frontend · AI                                               │
└─────────────────────────────────────────────────────────────┘
```

- Left: Wordmark + role micro-line (font-mono, uppercase, tracking-wider)
- Center: 4 nav links (Work, Capabilities, About, Experience)
- Right: "Let's Talk" CTA (primary button), ThemeToggle, hamburger (mobile only -hidden on desktop)

### 2.3 Overlay Content (Expanded)

```
┌─────────────────────────────────────────────────────────────┐
│  ✕  (close, top-right)                                       │
│                                                              │
│  DIP KUMAR KAPAT                                             │
│  UI/UX · Frontend · AI                                       │
│                                                              │
│  Work                                                        │
│  Capabilities                                                │
│  About                                                       │
│  Experience                                                  │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Let's Talk  (primary, full-width)                  │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ──────────────────────────────────────────────────────────  │
│                                                              │
│  GitHub  LinkedIn  Twitter  Email  Resume                   │
│  (social icons + labels, horizontal, wrap on mobile)        │
│                                                              │
│  dipkapat@example.com                                        │
│  Kolkata, India                                              │
└─────────────────────────────────────────────────────────────┘
```

### 2.4 Animation (GSAP)

| Trigger           | Animation                                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Pill click**    | `scale: 1 → 0.95 → 1` (100ms, ease-out), then overlay `clipPath: inset(100% 0 0 0) → inset(0)` (600ms, `expo.out`), content stagger `y: 30 → 0, opacity: 0 → 1` (80ms stagger) |
| **Overlay close** | Reverse: content stagger out (60ms stagger), overlay `clipPath: inset(0) → inset(100% 0 0 0)` (500ms, `expo.in`), pill `scale: 0.95 → 1`                                       |
| **Scroll (pill)** | `y: 0 → -100%` (hide on scroll down), `y: -100% → 0` (show on scroll up), 300ms `power2.out`                                                                                   |

### 2.5 Accessibility

- Pill: `role="button"`, `aria-expanded`, `aria-controls="nav-overlay"`, `aria-label="Open navigation"`
- Overlay: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="nav-title"`, focus trap
- Close on: Escape key, click outside content, click close button, link navigation
- Focus management: On open, focus first link; on close, return to pill
- Reduced motion: Instant show/hide, no transforms

---

## 3. GSAP ScrollTrigger Integration

### 3.1 Migration Strategy

| Animation Type                  | Current                         | New                                   | Rationale                                      |
| ------------------------------- | ------------------------------- | ------------------------------------- | ---------------------------------------------- |
| Section entry (fade + slide up) | Framer Motion `whileInView`     | **GSAP ScrollTrigger**                | Smoother scroll-linked progress, scrub support |
| Staggered children              | Framer Motion `staggerChildren` | **GSAP ScrollTrigger**                | Precise per-item control, scrubbable           |
| Sticky stack sections           | N/A                             | **GSAP ScrollTrigger pin**            | Native pin + scrub                             |
| Horizontal pan carousel         | N/A                             | **GSAP ScrollTrigger horizontalLoop** | Momentum + snap                                |
| Hover/tap micro-interactions    | Framer Motion                   | **Keep Framer Motion**                | Discrete events, not scroll-linked             |
| Page transitions                | Framer Motion                   | **Keep Framer Motion**                | Route-based, not scroll                        |

### 3.2 GSAP Setup

```tsx
// src/lib/gsap.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
	gsap.defaults({ ease: "expo.out", duration: 0.8 });
}

export { gsap, ScrollTrigger };
```

### 3.3 Section Reveal Component (Replaces Framer Motion Reveal)

```tsx
// src/components/motion/ScrollReveal.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
	y?: number;
	delay?: number;
	stagger?: number;
	trigger?: string;
	start?: string;
	end?: string;
	scrub?: boolean | number;
	once?: boolean;
}

export function ScrollReveal({
	children,
	className,
	y = 40,
	delay = 0,
	stagger = 0,
	trigger,
	start = "top 85%",
	end = "bottom 20%",
	scrub = false,
	once = true,
}: ScrollRevealProps) {
	const reduceMotion = useReducedMotion();
	const containerRef = useRef<HTMLDivElement>(null);
	const childRefs = useRef<HTMLElement[]>([]);

	useEffect(() => {
		if (reduceMotion || !containerRef.current) return;

		const ctx = gsap.context(() => {
			const elements =
				containerRef.current!.querySelectorAll<HTMLElement>(
					"[data-reveal]",
				);

			if (stagger > 0 && elements.length > 1) {
				gsap.fromTo(
					elements,
					{ opacity: 0, y },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						stagger,
						delay,
						scrollTrigger: {
							trigger: trigger || containerRef.current,
							start,
							end,
							scrub,
							once,
							toggleActions: scrub
								? undefined
								: "play none none reverse",
						},
					},
				);
			} else {
				gsap.fromTo(
					containerRef.current!,
					{ opacity: 0, y },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						delay,
						scrollTrigger: {
							trigger: trigger || containerRef.current,
							start,
							end,
							scrub,
							once,
							toggleActions: scrub
								? undefined
								: "play none none reverse",
						},
					},
				);
			}
		}, containerRef);

		return () => ctx.revert();
	}, [reduceMotion, y, delay, stagger, trigger, start, end, scrub, once]);

	// Clone children to inject data-reveal attribute
	const childrenWithRefs = React.Children.map(children, (child, index) => {
		if (!React.isValidElement(child)) return child;
		return React.cloneElement(child as React.ReactElement, {
			ref: (el: HTMLElement) => {
				childRefs.current[index] = el;
			},
			"data-reveal": true,
		});
	});

	return (
		<div ref={containerRef} className={className}>
			{childrenWithRefs}
		</div>
	);
}
```

### 3.4 Sticky Stack Section Pattern

```tsx
// src/components/sections/StickyStack.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "framer-motion";

interface StickyStackProps {
	children: React.ReactNode;
	className?: string;
	pinSpacing?: boolean;
}

export function StickyStack({
	children,
	className,
	pinSpacing = true,
}: StickyStackProps) {
	const reduceMotion = useReducedMotion();
	const containerRef = useRef<HTMLDivElement>(null);
	const itemsRef = useRef<HTMLElement[]>([]);

	useEffect(() => {
		if (reduceMotion || !containerRef.current) return;

		const ctx = gsap.context(() => {
			const items =
				containerRef.current!.querySelectorAll<HTMLElement>(
					"[data-stack-item]",
				);

			items.forEach((item, i) => {
				const isLast = i === items.length - 1;

				gsap.to(item, {
					opacity: isLast ? 1 : 0,
					y: isLast ? 0 : 100,
					scale: isLast ? 1 : 0.95,
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top top",
						end: "bottom bottom",
						scrub: 1,
						pin: true,
						pinSpacing,
						anticipatePin: 1,
					},
				});
			});
		}, containerRef);

		return () => ctx.revert();
	}, [reduceMotion, pinSpacing]);

	const childrenWithRefs = React.Children.map(children, (child, index) => {
		if (!React.isValidElement(child)) return child;
		return React.cloneElement(child as React.ReactElement, {
			ref: (el: HTMLElement) => {
				itemsRef.current[index] = el;
			},
			"data-stack-item": true,
			style: {
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				...(child as React.ReactElement).props.style,
			},
		});
	});

	return (
		<div
			ref={containerRef}
			className={cn("relative", className)}
			style={{ height: "500vh" }}
		>
			<div className="relative z-10">{childrenWithRefs}</div>
		</div>
	);
}
```

### 3.5 Horizontal Pan Carousel (Enterprise Modules)

```tsx
// src/components/sections/EnterpriseModules.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "framer-motion";
import { modules } from "@/data/modules";

export function EnterpriseModules() {
	const reduceMotion = useReducedMotion();
	const containerRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (reduceMotion || !containerRef.current || !trackRef.current) return;

		const ctx = gsap.context(() => {
			const track = trackRef.current!;
			const items = track.querySelectorAll<HTMLElement>("[data-module]");
			const itemWidth = items[0]?.offsetWidth || 340;
			const gap = 32;
			const totalWidth = (itemWidth + gap) * items.length - gap;

			gsap.to(track, {
				x: () => -(totalWidth - containerRef.current!.offsetWidth),
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: () => `+=${totalWidth}`,
					scrub: 1,
					pin: true,
					anticipatePin: 1,
					invalidateOnRefresh: true,
				},
			});
		}, containerRef);

		return () => ctx.revert();
	}, [reduceMotion]);

	return (
		<section
			id="enterprise-modules"
			className="py-24 lg:py-32"
			ref={containerRef}
		>
			<Container>
				<header className="mb-12 lg:mb-16">
					<h2 className="font-ui font-semibold text-5xl lg:text-6xl xl:text-7xl tracking-tight text-fg-0">
						Enterprise Modules
					</h2>
					<p className="mt-4 text-lg lg:text-xl text-fg-1 max-w-[60ch]">
						25+ interconnected modules -academics, attendance, fees,
						payroll, transport, library, hostel, admissions, and
						more -built as a single coherent product.
					</p>
				</header>

				<div className="relative overflow-hidden">
					<div
						ref={trackRef}
						className="flex gap-8"
						style={{ width: "max-content" }}
					>
						{modules.map((module) => (
							<article
								key={module.slug}
								className="flex-shrink-0 w-[340px] rounded-2xl border border-bg-3 bg-bg-0 p-6 lg:p-8 transition-all duration-300 hover:border-accent-0 hover:shadow-glow"
								data-module
							>
								<p className="font-mono text-xs uppercase tracking-wider text-accent-0">
									{module.index}
								</p>
								<h3 className="mt-2 font-ui font-semibold text-xl leading-snug tracking-tight text-fg-0">
									{module.name}
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-fg-1">
									{module.description}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{module.tags.map((tag) => (
										<span
											key={tag}
											className="font-mono text-xs uppercase tracking-wider text-fg-2 px-2 py-1 rounded-sm border border-bg-3 bg-bg-2"
										>
											{tag}
										</span>
									))}
								</div>
							</article>
						))}
					</div>
				</div>

				{/* Scroll indicator */}
				<p className="mt-8 text-center font-mono text-xs uppercase tracking-widest text-fg-2">
					Scroll horizontally to explore modules →
				</p>
			</Container>
		</section>
	);
}
```

---

## 4. Enterprise ERP Card in Selected Work

### 4.1 Visual Distinction

| Property         | Standard Card          | Enterprise Card                                       |
| ---------------- | ---------------------- | ----------------------------------------------------- |
| **Width**        | 340px                  | 520px (1.5×)                                          |
| **Border**       | `border-bg-3`          | `border-accent-0/30` (2px)                            |
| **Background**   | `bg-bg-0`              | `bg-gradient-to-br from-bg-0 to-accent-3/20`          |
| **Shadow**       | `shadow-glow` on hover | `shadow-glow-lg` persistent + hover bloom             |
| **Badge**        | CategoryBadge          | Custom "Enterprise · Featured" badge with accent ring |
| **Image aspect** | 4:3                    | 16:9 (dashboard panorama)                             |

### 4.2 Data Change

```ts
// src/data/projects.ts - add to main projects array
{
  slug: "enterprise-erp",
  index: "00",
  name: "School Automation ERP",
  label: "Enterprise · Product Ecosystem",
  category: "Enterprise",
  featured: true, // NEW FLAG
  // ... rest of enterpriseProject data
}
```

### 4.3 Carousel Order

Enterprise (00) → Saints Paradise (01) → LoanLens (02) → VetBook (03) → PulseMetrics (04) → AI Content Studio (05)

---

## 5. Files to Create / Modify

### New Files

1. `src/lib/gsap.ts` -GSAP + ScrollTrigger registration
2. `src/components/motion/ScrollReveal.tsx` -GSAP-based reveal replacement
3. `src/components/sections/StickyStack.tsx` -Sticky stack pattern
4. `src/components/sections/EnterpriseModules.tsx` -Horizontal pan carousel
5. `src/components/layout/NavOverlay.tsx` -Full-screen overlay component

### Modified Files

1. `src/components/layout/Navbar.tsx` -Complete rewrite: floating pill + overlay trigger
2. `src/components/layout/MobileMenu.tsx` -**Delete** (overlay handles mobile)
3. `src/data/projects.ts` -Add enterprise project to main array with `featured: true`
4. `src/components/sections/SelectedWork.tsx` -Handle featured card (wider, distinct styling)
5. `src/components/sections/ProjectCardCarousel.tsx` -Accept `featured` prop for enterprise styling
6. `src/app/globals.css` -Add glass morphism tokens, hide scrollbar utilities
7. `src/app/page.tsx` -Replace `<Enterprise />` with `<EnterpriseModules />`, add `<StickyStack />` wrapper where needed

### Deleted Files

- `src/components/layout/MobileMenu.tsx`

---

## 6. Acceptance Criteria

### Navigation

- [ ] Floating pill renders at `mt-6`, centered, `max-w-[800px]`
- [ ] Pill shows/hides on scroll direction (300ms GSAP)
- [ ] Click pill → overlay expands with clipPath animation (600ms expo.out)
- [ ] Overlay contains: 4 nav links, CTA, theme toggle, social links (GitHub, LinkedIn, Twitter, Email), Resume download, email address, location
- [ ] Close on: Escape, click backdrop, click close, link click
- [ ] Focus trap in overlay; focus returns to pill on close
- [ ] Reduced motion: instant show/hide, no animations
- [ ] Dark mode: glass morphism works in both themes

### GSAP Integration

- [ ] `ScrollReveal` replaces `Reveal` + `Stagger` across all sections
- [ ] Section entry: fade + slide up, scrubbable, respects `prefers-reduced-motion`
- [ ] Sticky stack works on designated sections (e.g., Principles, WhyWorkWithMe)
- [ ] Enterprise Modules horizontal pan: smooth scrub, pin, momentum feel
- [ ] No Framer Motion `whileInView` or `staggerChildren` in sections
- [ ] Framer Motion retained for: hover, tap, page transitions, theme toggle

### Enterprise Card

- [ ] Appears first in carousel (index 00)
- [ ] 1.5× width (520px vs 340px)
- [ ] Distinct border, gradient background, persistent glow
- [ ] 16:9 dashboard image
- [ ] "Enterprise · Featured" badge with accent ring

### Performance & Quality

- [ ] `next build` succeeds; `next lint` clean; `tsc --noEmit` clean
- [ ] No console errors, no hydration warnings
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95
- [ ] CLS < 0.1; no layout shift on overlay open/close
- [ ] 60fps scroll animations on desktop and mobile

---

## 7. Dependencies

**Add to package.json:**

- `gsap` (v3.12+)
- `@gsap/react` (optional, for React integration helpers)

**Existing (verified):**

- `framer-motion` -retain for micro-interactions
- `next/image` -for optimized images
- `lucide-react` -icons
- `@/lib/utils` -`cn()` utility

---

## 8. Out of Scope

- Infinite loop carousel autoplay
- Magnetic center-lock carousel
- Custom cursor / cursor-following elements
- Parallax backgrounds beyond sticky stack
- Page transition animations (keep current Framer Motion approach)

---

## 9. Spec Self-Review

| Check                                                 | Status |
| ----------------------------------------------------- | ------ |
| No TBD / TODO / placeholder content                   | ✅     |
| Internal consistency (tokens match globals.css)       | ✅     |
| Scope focused (nav + GSAP + enterprise card)          | ✅     |
| No ambiguous requirements                             | ✅     |
| All animations motivated (hierarchy, feedback, state) | ✅     |
| Accessibility requirements explicit and testable      | ✅     |
| Responsive behavior declared per breakpoint           | ✅     |
| File list complete with paths                         | ✅     |

---

_Spec written. Ready for user review before implementation planning._
