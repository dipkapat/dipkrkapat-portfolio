# Selected Work Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the "Selected Work" section into a premium hybrid showcase with an Enterprise ERP hero leading into an editorial bento grid of 5 demo projects, featuring sticky category filters, refined hover orchestration, and scroll-driven reveals.

**Architecture:** Hybrid approach -EnterpriseHero (cinematic 7/5 split) → ProjectFilter (sticky pills) → ProjectGrid (asymmetric bento) → ViewAllCTA. New components for each piece, enhanced ProjectCard with CategoryBadge, shared DualCTA and HeroImageFrame utilities.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion 11, Lucide React, Next.js Image

---

## File Map

### New Files

```
src/components/ui/CategoryBadge.tsx
src/components/ui/TechBadgeRow.tsx
src/components/ui/DualCTA.tsx
src/components/ui/HeroImageFrame.tsx
src/components/sections/EnterpriseHero.tsx
src/components/sections/ProjectFilter.tsx
src/components/sections/ProjectGrid.tsx
```

### Modified Files

```
src/types/index.ts                                    // Add category + featured to Project
src/data/projects.ts                                  // Add category/featured to projects, add enterpriseProject
src/components/sections/ProjectCard.tsx               // Add CategoryBadge, refine hover
src/components/sections/SelectedWork.tsx              // Refactor to orchestrate hero+filter+grid+CTA
opendesign/design-systems/portfolio/tokens/colors_and_type.css  // Add AI/FinTech accent tokens
public/work/enterprise-erp-dashboard.png              // Hero image (placeholder needed)
```

---

## Phase 1: Foundation (Tokens + Types + Data)

### Task 1: Add Category Accent Tokens

**Files:**

- Modify: `opendesign/design-systems/portfolio/tokens/colors_and_type.css:22-27` (after existing accent tokens)

- [ ] **Step 1: Add AI and FinTech accent tokens to light mode**

```css
/* Insert after line 27 (--accent-4) */
--accent-ai: #7c5cff; /* Violet */
--accent-ai-soft: #f0ebff; /* Violet soft */
--accent-fin: #10b981; /* Emerald */
--accent-fin-soft: #ecfdf5; /* Emerald soft */
```

- [ ] **Step 2: Add dark mode overrides**

```css
/* Insert inside @media (prefers-color-scheme: dark) block after line 59 */
--accent-ai: #a78bff;
--accent-ai-soft: #1e1833;
--accent-fin: #34d399;
--accent-fin-soft: #06281e;
```

- [ ] **Step 3: Add .light class overrides**

```css
/* Insert inside .light block after line 80 */
--accent-ai: #7c5cff;
--accent-ai-soft: #f0ebff;
--accent-fin: #10b981;
--accent-fin-soft: #ecfdf5;
```

- [ ] **Step 4: Add .dark class overrides**

```css
/* Insert inside .dark block after line 99 */
--accent-ai: #a78bff;
--accent-ai-soft: #1e1833;
--accent-fin: #34d399;
--accent-fin-soft: #06281e;
```

- [ ] **Step 5: Verify tokens compile**

Run: `npm run build` (should complete without CSS errors)

- [ ] **Step 6: Commit**

```bash
git add opendesign/design-systems/portfolio/tokens/colors_and_type.css
git commit -m "feat: add AI and FinTech category accent tokens"
```

---

### Task 2: Extend Project Type

**Files:**

- Modify: `src/types/index.ts`

- [ ] **Step 1: Add category and featured fields to Project interface**

```typescript
// Find the Project interface (around line 1-30)
export interface Project {
	// ... existing fields
	slug: string;
	index: string;
	name: string;
	label: string;
	category: "SaaS" | "AI" | "FinTech" | "Brand" | "Enterprise";
	filters: ProjectFilter[];
	title: string;
	description: string;
	role: string[];
	stack: string[];
	liveUrl?: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
	highlight: string;
	problem: string;
	users: string;
	productStructure: string[];
	uxDecisions: string[];
	uiSystem: string[];
	interaction: string[];
	frontend: string[];
	result: string;
	reflection: string;
	// New fields
	featured?: boolean;
}
```

- [ ] **Step 2: Verify typecheck passes**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/types/index.ts
git commit -m "feat: add category and featured fields to Project type"
```

---

### Task 3: Update Project Data

**Files:**

- Modify: `src/data/projects.ts`

- [ ] **Step 1: Add category and featured to each project object**

```typescript
// PulseMetrics (index 0, after line 46)
featured: true,
category: "SaaS",

// AI Content Studio (index 1, after line 180)
featured: false,
category: "AI",

// VetBook (index 2, after line 132)
featured: false,
category: "SaaS",

// LoanLens (index 3, after line 84)
featured: false,
category: "FinTech",

// Saint's Paradise (index 4, after line 58)
featured: false,
category: "Brand",
```

- [ ] **Step 2: Add enterpriseProject constant at end of file (before exports)**

```typescript
export const enterpriseProject = {
	slug: "enterprise-erp",
	name: "School Automation ERP",
	label: "Enterprise · Product Ecosystem",
	title: "25+ Modules. One Product Ecosystem.",
	description:
		"For a School Automation ERP platform, I designed and built 25+ interconnected modules -academics, attendance, fees, payroll, transport, library, hostel, admissions, and more -as a single coherent product on a continuous delivery cycle.",
	role: ["Product UI/UX", "Frontend Development", "Design Systems"],
	stack: [
		"React",
		"Next.js",
		"Tailwind CSS",
		"shadcn/ui",
		"Flowbite",
		"Framer Motion",
	],
	liveUrl: undefined,
	image: {
		src: "/work/enterprise-erp-dashboard.png",
		alt: "School Automation ERP dashboard showing multiple modules",
		width: 1280,
		height: 800,
	},
	highlight: "25+ modules. One cohesive product ecosystem.",
	problem:
		"A school automation platform needed to cover the full operational surface of a school -academics, attendance, fees, payroll, transport, library, hostel, admissions, and more -as a single coherent product, not a patchwork of disconnected tools.",
	users: "School administrators, teachers, parents, and students across a unified platform.",
	productStructure: [
		"25+ functional modules covering academic, admin, finance, HR, communication",
		"Unified design system (Flowbite + shadcn/ui) across all modules",
		"Role-based dashboards for admin, teacher, parent, student",
		"Real-time attendance, fees, payroll, transport tracking",
	],
	uxDecisions: [
		"Consistent component system so every module feels native",
		"Role-aware navigation and information hierarchy",
		"Optimized for daily operational workflows, not demos",
	],
	uiSystem: [
		"Flowbite + shadcn/ui as shared component foundation",
		"Tailwind CSS tokens for consistent theming",
		"Framer Motion for purposeful micro-interactions",
	],
	interaction: [
		"Real-time data updates across modules",
		"Keyboard-first navigation for high-frequency tasks",
		"Accessible form controls and validation",
	],
	frontend: [
		"React + Next.js with typed, component-driven architecture",
		"Shared design system across 25+ modules",
		"Continuous delivery pipeline",
	],
	result: "A production ERP serving real schools daily -25+ modules, one design system, zero redundant design work.",
	reflection:
		"Next: deeper analytics module, parent mobile app, and AI-assisted grading workflows.",
};
```

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/data/projects.ts
git commit -m "feat: add category/featured to projects, add enterpriseProject constant"
```

---

## Phase 2: New UI Components

### Task 4: Create CategoryBadge Component

**Files:**

- Create: `src/components/ui/CategoryBadge.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
	category: "SaaS" | "AI" | "FinTech" | "Brand" | "Enterprise";
	className?: string;
}

const CATEGORY_COLORS = {
	SaaS: "bg-accent-3 text-accent-0",
	AI: "bg-[--accent-ai-soft] text-[--accent-ai]",
	FinTech: "bg-[--accent-fin-soft] text-[--accent-fin]",
	Brand: "bg-accent-3 text-accent-0",
	Enterprise: "bg-fg-1 text-fg-0",
} as const;

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.1em]",
				CATEGORY_COLORS[category],
				className,
			)}
		>
			{category}
		</span>
	);
}
```

- [ ] **Step 2: Export from ui index (if exists) or verify import works**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/CategoryBadge.tsx
git commit -m "feat: create CategoryBadge component"
```

---

### Task 5: Create TechBadgeRow Component

**Files:**

- Create: `src/components/ui/TechBadgeRow.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { motion } from "framer-motion";

interface TechBadgeRowProps {
	badges: string[];
	className?: string;
}

export function TechBadgeRow({ badges, className }: TechBadgeRowProps) {
	return (
		<div className={cn("flex flex-wrap gap-2 mt-6", className)}>
			{badges.map((badge, index) => (
				<motion.span
					key={badge}
					initial={false}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.3,
						delay: index * 0.04,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="px-3 py-1.5 rounded-md bg-bg-2 text-fg-1 font-mono text-[11px] uppercase tracking-[0.08em] border border-bg-3 hover:border-accent-0 hover:text-accent-0 transition-all duration-200"
				>
					{badge}
				</motion.span>
			))}
		</div>
	);
}
```

- [ ] **Step 2: Add missing import**

```tsx
import { cn } from "@/lib/utils";
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/TechBadgeRow.tsx
git commit -m "feat: create TechBadgeRow component"
```

---

### Task 6: Create DualCTA Component

**Files:**

- Create: `src/components/ui/DualCTA.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
	label: string;
	href: string;
	variant?: "primary" | "text";
}

interface DualCTAProps {
	primary: CTAButtonProps;
	secondary: CTAButtonProps;
	className?: string;
}

function CTAButton({ label, href, variant = "primary" }: CTAButtonProps) {
	const isPrimary = variant === "primary";

	return (
		<motion.a
			href={href}
			className={cn(
				"inline-flex items-center gap-2 text-sm font-medium transition-all duration-200",
				isPrimary
					? "rounded-full bg-fg-0 px-6 py-3 text-bg-0 hover:bg-accent-0 hover:shadow-glow"
					: "text-fg-1 underline-offset-4 hover:text-accent-0 hover:underline",
			)}
			whileHover={{ x: isPrimary ? 0 : 4 }}
		>
			<span className="relative z-10">{label}</span>
			<motion.span className="relative z-10" whileHover={{ x: 4 }}>
				<ArrowUpRight
					className="size-4"
					strokeWidth={1.5}
					aria-hidden="true"
				/>
			</motion.span>
		</motion.a>
	);
}

export function DualCTA({ primary, secondary, className }: DualCTAProps) {
	return (
		<div
			className={cn("flex flex-wrap items-center gap-4 mt-8", className)}
		>
			<CTAButton {...primary} variant="primary" />
			<CTAButton {...secondary} variant="text" />
		</div>
	);
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/DualCTA.tsx
git commit -m "feat: create DualCTA component"
```

---

### Task 7: Create HeroImageFrame Component

**Files:**

- Create: `src/components/ui/HeroImageFrame.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroImageFrameProps {
	src: string;
	alt: string;
	className?: string;
	parallax?: number;
	priority?: boolean;
}

export function HeroImageFrame({
	src,
	alt,
	className,
	parallax = 0,
	priority = false,
}: HeroImageFrameProps) {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		if (parallax === 0) return;

		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [parallax]);

	const transform =
		parallax > 0 ? `translateY(${scrollY * parallax}px)` : "none";

	return (
		<div
			className={cn(
				"relative overflow-hidden rounded-2xl border border-bg-3 bg-bg-2 p-1.5",
				className,
			)}
		>
			<div className="relative overflow-hidden rounded-[20px] bg-surface-muted">
				<motion.div
					className="relative h-full w-full"
					style={{ transform }}
				>
					<Image
						src={src}
						alt={alt}
						fill
						priority={priority}
						className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
						sizes="(min-width: 1024px) 50vw, 100vw"
					/>
				</motion.div>
			</div>
		</div>
	);
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/HeroImageFrame.tsx
git commit -m "feat: create HeroImageFrame component"
```

---

### Task 8: Create EnterpriseHero Component

**Files:**

- Create: `src/components/sections/EnterpriseHero.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadgeRow } from "@/components/ui/TechBadgeRow";
import { DualCTA } from "@/components/ui/DualCTA";
import { HeroImageFrame } from "@/components/ui/HeroImageFrame";
import { enterpriseProject } from "@/data/projects";
import { cn } from "@/lib/utils";

export function EnterpriseHero() {
	const techStack = [
		"React",
		"Next.js",
		"Tailwind CSS",
		"shadcn/ui",
		"Flowbite",
		"Framer Motion",
	];

	return (
		<section
			id="enterprise"
			className="py-20 lg:py-28"
			aria-labelledby="enterprise-heading"
		>
			<div className="max-w-[1280px] mx-auto px-6 lg:px-8 lg:px-10">
				<div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
					{/* Content Column -7/12 */}
					<div className="lg:col-span-7">
						<motion.div
							className="pt-4 lg:pt-8"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<SectionHeading
								eyebrow="03 / Selected Work"
								title="25+ Modules. One Product Ecosystem."
								description="For a School Automation ERP platform, I designed and built 25+ interconnected modules -academics, attendance, fees, payroll, transport, library, hostel, admissions, and more -as a single coherent product on a continuous delivery cycle."
							/>

							<TechBadgeRow badges={techStack} />

							<DualCTA
								primary={{
									label: "Explore Enterprise ERP",
									href: "#enterprise",
								}}
								secondary={{
									label: "View Demo Projects",
									href: "#demo-projects",
								}}
							/>
						</motion.div>
					</div>

					{/* Visual Column -5/12 */}
					<motion.div
						className="lg:col-span-5 relative mt-10 lg:mt-0"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: 0.1,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						<HeroImageFrame
							src={enterpriseProject.image.src}
							alt={enterpriseProject.image.alt}
							className="relative h-[480px] lg:h-[560px]"
							parallax={0.15}
							priority={true}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
```

- [ ] **Step 2: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/EnterpriseHero.tsx
git commit -m "feat: create EnterpriseHero component"
```

---

### Task 9: Create ProjectFilter Component

**Files:**

- Create: `src/components/sections/ProjectFilter.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectFilter } from "@/types";

interface ProjectFilterProps {
	active: ProjectFilter;
	onChange: (filter: ProjectFilter) => void;
}

const FILTER_CONFIG = [
	{ key: "All" as ProjectFilter, label: "All", count: 5 },
	{ key: "UI/UX" as ProjectFilter, label: "SaaS", count: 2 },
	{ key: "Frontend" as ProjectFilter, label: "AI", count: 1 },
	{ key: "Web Applications" as ProjectFilter, label: "FinTech", count: 1 },
	{ key: "Websites" as ProjectFilter, label: "Brand", count: 1 },
] as const;

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
	const reduceMotion = useReducedMotion();

	return (
		<div
			role="group"
			aria-label="Filter projects by category"
			className="sticky top-24 z-10 flex flex-wrap gap-2 pb-8"
		>
			{FILTER_CONFIG.map(({ key, label, count }) => (
				<motion.button
					key={key}
					type="button"
					onClick={() => onChange(key)}
					aria-pressed={active === key}
					initial={false}
					animate={{
						scale: active === key ? 1 : 0.98,
						opacity: active === key ? 1 : 0.8,
					}}
					transition={{
						duration: reduceMotion ? 0 : 0.2,
						ease: [0.34, 1.56, 0.64, 1],
					}}
					whileTap={{ scale: 0.96 }}
					className={cn(
						"rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-all duration-200",
						active === key
							? "bg-fg-0 text-bg-0 shadow-sm"
							: "bg-bg-2 text-fg-1 border border-bg-3 hover:border-accent-0 hover:text-fg-0",
					)}
				>
					{label}
					{active !== key && (
						<span className="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full bg-accent-3 text-accent-0">
							{count}
						</span>
					)}
				</motion.button>
			))}
		</div>
	);
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ProjectFilter.tsx
git commit -m "feat: create ProjectFilter component"
```

---

### Task 10: Create ProjectGrid Component

**Files:**

- Create: `src/components/sections/ProjectGrid.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";
import type { ProjectFilter } from "@/types";

const GRID_LAYOUT = [
	{
		slug: "pulsemetrics",
		span: "lg:col-span-8 lg:row-span-2",
		featured: true,
	},
	{ slug: "ai-content-studio", span: "lg:col-span-4", featured: false },
	{ slug: "vetbook", span: "lg:col-span-6", featured: false },
	{ slug: "loanlens", span: "lg:col-span-6", featured: false },
	{ slug: "saints-paradise", span: "lg:col-span-12", featured: false },
] as const;

interface ProjectGridProps {
	activeFilter: ProjectFilter;
}

export function ProjectGrid({ activeFilter }: ProjectGridProps) {
	const reduceMotion = useReducedMotion();

	const filtered =
		activeFilter === "All"
			? projects
			: projects.filter((project) =>
					project.filters.includes(activeFilter),
				);

	return (
		<div id="demo-projects" className="mt-14">
			<motion.div
				className="grid gap-6 lg:grid-cols-12 lg:gap-8"
				initial={false}
				animate={{ opacity: 1 }}
				transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
			>
				{filtered.map((project, index) => {
					const layout = GRID_LAYOUT.find(
						(l) => l.slug === project.slug,
					);
					if (!layout) return null;

					return (
						<motion.div
							key={project.slug}
							className={cn(
								layout.span,
								layout.featured && "lg:row-span-2",
							)}
							initial={
								reduceMotion ? false : { opacity: 0, y: 30 }
							}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<ProjectCard
								project={project}
								reversed={index % 2 === 1}
							/>
						</motion.div>
					);
				})}
			</motion.div>

			{filtered.length === 0 && (
				<p className="text-center text-fg-2 mt-12">
					No projects match this filter.
				</p>
			)}
		</div>
	);
}
```

- [ ] **Step 2: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ProjectGrid.tsx
git commit -m "feat: create ProjectGrid component"
```

---

## Phase 3: Enhanced Components

### Task 11: Enhance ProjectCard -Add CategoryBadge

**Files:**

- Modify: `src/components/sections/ProjectCard.tsx`

- [ ] **Step 1: Add CategoryBadge import**

```tsx
import { CategoryBadge } from "@/components/ui/CategoryBadge";
```

- [ ] **Step 2: Add category prop to ProjectCardProps interface**

```typescript
interface ProjectCardProps {
	project: Project;
	reversed?: boolean;
}
```

- [ ] **Step 3: Insert CategoryBadge in content column (after index/name, before label)**

```tsx
// Find the content column div (around line 54-58)
// Change from:
<p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
  {project.index} / {project.name}
</p>
<p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent-0">
  {project.label}
</p>

// To:
<p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
  {project.index} / {project.name}
</p>
<CategoryBadge category={project.category} className="mt-3 inline-flex" />
<p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent-0">
  {project.label}
</p>
```

- [ ] **Step 4: Update inner core padding (line 53)**

```tsx
// Change from:
<div className="rounded-[20px] bg-bg-0 p-6 sm:p-8 lg:p-10">

// To:
<div className="rounded-[20px] bg-bg-0 p-6 sm:p-8 lg:p-10">
```

(Already correct per spec -verify no change needed)

- [ ] **Step 5: Verify hover orchestration includes CategoryBadge**

The CategoryBadge will automatically get hover scale via group-hover if placed inside the group. Add explicit group-hover:

```tsx
// In CategoryBadge component, add:
group-hover:scale-105 transition-transform duration-150 ease-out
```

Or handle via parent group in ProjectCard (preferred -already has group class).

- [ ] **Step 6: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: No errors

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/ProjectCard.tsx
git commit -m "feat: enhance ProjectCard with CategoryBadge and refined hover"
```

---

### Task 12: Refactor SelectedWork -Orchestrate Hero + Filter + Grid

**Files:**

- Modify: `src/components/sections/SelectedWork.tsx`

- [ ] **Step 1: Update imports**

```tsx
"use client";

import { useState } from "react";
import { EnterpriseHero } from "./EnterpriseHero";
import { ProjectFilter } from "./ProjectFilter";
import { ProjectGrid } from "./ProjectGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProjectFilter } from "@/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
```

- [ ] **Step 2: Replace entire component with new orchestration**

```tsx
export function SelectedWork() {
	const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

	return (
		<section id="work" className="py-20 lg:py-28">
			<Container>
				{/* Enterprise Hero -leads the section */}
				<EnterpriseHero />

				{/* Sticky Filter Pills */}
				<ProjectFilter
					active={activeFilter}
					onChange={setActiveFilter}
				/>

				{/* Bento Grid for Demo Projects */}
				<ProjectGrid activeFilter={activeFilter} />

				{/* View All CTA */}
				<div className="mt-16 text-center">
					<motion.a
						href="#contact"
						initial={false}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="inline-flex items-center gap-2 rounded-full bg-fg-0 px-8 py-3 text-sm font-medium text-bg-0 transition-all duration-200 hover:bg-accent-0 hover:shadow-glow group"
					>
						<span className="relative z-10">
							Let's Work Together
						</span>
						<motion.span
							className="relative z-10"
							whileHover={{ x: 4 }}
						>
							→
						</motion.span>
					</motion.a>
				</div>
			</Container>
		</section>
	);
}
```

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/SelectedWork.tsx
git commit -m "feat: refactor SelectedWork to orchestrate hero + filter + grid"
```

---

## Phase 4: Polish & Verification

### Task 13: Add Enterprise Hero Image Placeholder

**Files:**

- Create: `public/work/enterprise-erp-dashboard.png` (or .svg)

- [ ] **Step 1: Create placeholder image**

Use a 1280×800 placeholder (SVG preferred for sharpness):

```bash
# Create a simple SVG placeholder
cat > public/work/enterprise-erp-dashboard.svg << 'EOF'
<svg width="1280" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ebeae4"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="#6d6c66">Enterprise ERP Dashboard</text>
</svg>
EOF
```

- [ ] **Step 2: Update enterpriseProject image src to .svg**

```typescript
// In src/data/projects.ts
image: {
  src: "/work/enterprise-erp-dashboard.svg",
  alt: "School Automation ERP dashboard showing multiple modules",
  width: 1280,
  height: 800,
},
```

- [ ] **Step 3: Commit**

```bash
git add public/work/enterprise-erp-dashboard.svg src/data/projects.ts
git commit -m "feat: add enterprise ERP hero image placeholder"
```

---

### Task 14: Verify Responsive Behavior

- [ ] **Step 1: Test mobile (< 640px)**

Run: `npm run dev`
Open: `http://localhost:3000`
Resize to 375px width
Verify:

- Hero stacks (content → image)
- Grid single column
- Filter horizontal scroll with snap-x
- Card padding 24px

- [ ] **Step 2: Test tablet (640-1023px)**

Resize to 768px width
Verify:

- Hero 6/6 split
- Grid 2-col pairs (6/6), Saint's Paradise 12/12
- Filter sticky, 2-row wrap
- Card padding 32px

- [ ] **Step 3: Test desktop (≥ 1024px)**

Resize to 1440px width
Verify:

- Hero 7/5 split
- Full bento pattern (8/4, 6/6, 12)
- Filter sticky, single row
- Card padding 40px

- [ ] **Step 4: Commit (if adjustments needed)**

```bash
git add -A
git commit -m "fix: responsive adjustments for Selected Work section"
```

---

### Task 15: Verify Motion & Interaction

- [ ] **Step 1: Test scroll reveals**

Scroll to #work section
Verify:

- EnterpriseHero content reveals staggered (80ms each)
- EnterpriseHero image parallax 0.15x
- ProjectGrid items stagger (80ms each, 100ms delay)

- [ ] **Step 2: Test hover orchestration**

Hover each ProjectCard
Verify:

- Image scales 1.02x (700ms ease-out)
- Outer shell border → accent-0 (200ms)
- Outer shell glow appears (200ms)
- CategoryBadge scales 1.05x (150ms spring)
- Content text does NOT transform

- [ ] **Step 3: Test filter interactions**

Click each filter pill
Verify:

- Exit animation (150ms)
- Enter animation staggered (60ms delay)
- Count badges animate (spring)
- Active pill state correct

- [ ] **Step 4: Test reduced motion**

Enable "Reduce motion" in OS settings
Reload page
Verify:

- No animations (opacity/transform instant)
- No parallax
- No stagger delays
- Filter changes instant

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "fix: motion and interaction polish"
```

---

### Task 16: Accessibility Audit

- [ ] **Step 1: Run axe-core audit**

```bash
npx playwright install
# Add test or use browser devtools axe extension
```

- [ ] **Step 2: Manual checklist**

- [ ] Section has `aria-labelledby="work-heading"`
- [ ] EnterpriseHero has `<h2 id="enterprise-heading">` (or visually hidden)
- [ ] Each ProjectCard in `<article>` with `aria-labelledby`
- [ ] Filter group has `role="group" aria-label="Filter projects by category"`
- [ ] Filter pills use native `<button>` with `aria-pressed`
- [ ] Focus visible on all interactive elements (ring --ring-0)
- [ ] Images have descriptive alt text
- [ ] Color contrast ≥ 4.5:1 (badges, text)
- [ ] Touch targets ≥ 44×44px

- [ ] **Step 3: Fix any violations**

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "fix: accessibility compliance for Selected Work section"
```

---

### Task 17: Performance Verification

- [ ] **Step 1: Run Lighthouse CI or local Lighthouse**

```bash
npm run build && npm run start
# Run Lighthouse on http://localhost:3000
```

- [ ] **Step 2: Verify budgets**

- [ ] Section LCP contribution < 500ms
- [ ] Filter interaction < 100ms
- [ ] Hover response < 50ms
- [ ] CLS < 0.1
- [ ] Bundle size increase < 15KB gzipped

- [ ] **Step 3: Optimize if needed**

- Hero image: ensure `priority` + `sizes="50vw"`
- Grid images: `loading="lazy"` + proper `sizes`
- Consider dynamic imports for ProjectFilter/ProjectGrid if bundle large

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "perf: optimize Selected Work section performance"
```

---

### Task 18: Final Lint, Typecheck, Build

- [ ] **Step 1: Run lint**

Run: `npm run lint`
Expected: No errors

- [ ] **Step 2: Run typecheck**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Run build**

Run: `npm run build`
Expected: Successful production build

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "chore: final lint, typecheck, and build for Selected Work section"
```

---

## Spec Coverage Checklist

| Spec Section             | Task(s)                |
| ------------------------ | ---------------------- |
| 3.1 EnterpriseHero       | Task 8                 |
| 3.2 ProjectFilter        | Task 9                 |
| 3.3 ProjectGrid          | Task 10                |
| 3.4 ProjectCard enhanced | Task 11                |
| 3.5 CategoryBadge        | Task 4                 |
| 3.6 TechBadgeRow         | Task 5                 |
| 3.7 DualCTA              | Task 6                 |
| 3.8 HeroImageFrame       | Task 7                 |
| 3.9 ViewAllCTA           | Task 12                |
| 4.1 Project Type         | Task 2                 |
| 4.2 Project Data         | Task 3                 |
| 5.1-5.4 Motion           | Tasks 8, 9, 10, 11, 15 |
| 6 Responsive             | Task 14                |
| 7 Accessibility          | Task 16                |
| 8 Performance            | Task 17                |
| Tokens                   | Task 1                 |

---

## Execution Options

**Plan complete and saved to `docs/superpowers/plans/2026-08-22-selected-work-implementation.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
