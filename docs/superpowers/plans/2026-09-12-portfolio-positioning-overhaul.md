# Portfolio Positioning Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the portfolio’s homepage, navigation, and service messaging around a clear senior frontend engineer identity while preserving the design-to-build differentiator and improving conversion paths for both employers and freelance clients.

**Architecture:** Update the source-of-truth content in the site config and section data, then revise the hero, nav, and service copy to present a consistent product UI/UX + frontend engineering value proposition. Keep the portfolio’s existing visual system and structure intact while tightening the messaging.

**Tech Stack:** Next.js, TypeScript, React, Tailwind CSS, existing portfolio sections.

---

### Task 1: Update site metadata and navigation positioning

**Files:**

- Modify: `src/data/site.ts`
- Modify: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Update role and positioning metadata**

```ts
export const siteConfig = {
	name: "Dip Kumar Kapat",
	role: "Senior Frontend Engineer & Product UI/UX Specialist",
	roleShort: "Frontend · UI/UX · React",
	email: "dipkrkapat@protonmail.com",
	phone: ["+91 99033 59927", "+91 74396 55501"],
	location: "Kolkata, West Bengal, India",
	url: "https://dipkumarkapat.com",
	status: "Available for remote full-time, contract, and freelance work",
	description:
		"Senior Frontend Engineer and Product UI/UX Specialist with 18+ years of experience designing and building production-ready product interfaces across SaaS, dashboards, and enterprise web applications.",
	resumeUrl: "/resume/Dip-Kumar-Kapat-Resume.pdf",
};
```

- [ ] **Step 2: Update main navigation labels and CTA**

```ts
export const navLinks: NavLink[] = [
	{ label: "Work", href: "/#work" },
	{ label: "Services", href: "/#capabilities" },
	{ label: "Experience", href: "/#experience" },
	{ label: "About", href: "/#about" },
	{ label: "Contact", href: "/#contact" },
];
```

```tsx
<Link href="#contact" className="...">
	<span className="relative z-10">Hire Me</span>
</Link>
```

- [ ] **Step 3: Validate the navigation change matches the new conversion-oriented structure**

Run: `npm run lint`
Expected: Lint passes without errors after the content-only change.

---

### Task 2: Rework the homepage hero and proof points

**Files:**

- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Replace the hero label and headline with the senior frontend engineer positioning**

```tsx
<p className="mb-6 inline-flex items-center gap-2 ...">
	<span className="..." />
	Senior Frontend Engineer & Product UI/UX Specialist
</p>
```

```tsx
<h1 className="...">
	I design and build production-ready SaaS, dashboards, and complex web
	applications.
	<span className="font-serif font-normal italic text-fg-1 block mt-2">
		with React, Next.js and TypeScript.
	</span>
</h1>
```

- [ ] **Step 2: Update supporting paragraph to emphasize product delivery and production experience**

```tsx
<p className="mt-8 ...">
	18+ years across web design, product UI/UX, and frontend engineering —
	building clear, responsive, production-ready experiences from Figma and UX
	flows through React and Next.js implementation.
</p>
```

- [ ] **Step 3: Refresh CTAs to match the new conversion path**

```tsx
<Button href="/#work">View My Work</Button>
<Button href="#contact">Hire Me</Button>
<Button href={siteConfig.resumeUrl} download>Download Resume</Button>
```

- [ ] **Step 4: Update proof points to emphasize the engineering + product story**

```ts
const proofPoints = [
	{ value: "18+", label: "Years in web/UI" },
	{ value: "25+", label: "Enterprise modules" },
	{ value: "5+", label: "Years React / Next.js" },
	{ value: "5K–8K", label: "Users supported" },
];
```

- [ ] **Step 5: Re-run frontend checks**

Run: `npm run lint`
Expected: No lint errors caused by updated copy or component structure.

---

### Task 3: Reframe services into hireable offerings

**Files:**

- Modify: `src/data/services.ts`
- Modify: `src/components/sections/WhatIDo.tsx`

- [ ] **Step 1: Replace generic disciplines with hireable capability blocks**

```ts
export const services: Service[] = [
	{
		index: "01",
		title: "React / Next.js Development",
		description:
			"Build responsive, production-ready interfaces for SaaS products, dashboards, and business applications using React, Next.js, TypeScript, and modern UI systems.",
	},
	{
		index: "02",
		title: "Figma → React",
		description:
			"Turn product designs, flows, and prototypes into accurate, scalable frontend components and responsive interfaces that are ready for production.",
	},
	{
		index: "03",
		title: "Product UI/UX for SaaS",
		description:
			"Design clearer dashboards, workflows, forms, and enterprise interfaces that improve usability, reduce friction, and support product growth.",
	},
	{
		index: "04",
		title: "Frontend UI Modernization",
		description:
			"Improve an existing product’s visual quality, responsiveness, accessibility, consistency, and frontend architecture without losing product intent.",
	},
	{
		index: "05",
		title: "AI-Assisted Frontend Delivery",
		description:
			"Use AI-assisted workflows to accelerate prototyping, component development, refactoring, and iteration while keeping human product judgment at the center.",
	},
];
```

- [ ] **Step 2: Update section heading to align with the commercial positioning**

```tsx
<SectionHeading
	eyebrow="02 / How I Can Help"
	title="Frontend execution with product thinking"
	description="I help teams turn complex product ideas, interfaces, and design systems into clear, production-ready experiences."
/>
```

- [ ] **Step 3: Confirm the grid still renders correctly and the copy reads as a service offering**

Run: `npm run lint`
Expected: successful validation with no type or lint errors.

---

### Task 4: Strengthen the About copy and enterprise positioning

**Files:**

- Modify: `src/components/sections/About.tsx`
- Modify: `src/components/sections/Enterprise.tsx`

- [ ] **Step 1: Align the About section with senior frontend positioning**

```tsx
<p>
  I have spent more than 18 years designing and building for the web. What started with interface design evolved into UI/UX, product design, and modern frontend engineering.
</p>
<p>
  Over the years, I have worked across visual design, wireframing, prototyping, design systems, frontend implementation, and production-grade enterprise applications.
</p>
<p>
  Today, I bring those disciplines together: designing product experiences and building the interfaces that make them real in React and Next.js.
</p>
```

- [ ] **Step 2: Strengthen enterprise section headline to emphasize production ownership**

```tsx
title={
  <>
    25+ product modules. <span className="italic ...">Built for real users.</span>
  </>
}
```

- [ ] **Step 3: Validate the updated copy still preserves the project story and does not overstate claims**

Run: `npm run lint`
Expected: pass without errors.

---

### Task 5: Final QA and verification

**Files:**

- No new production files beyond the content updates above.

- [ ] **Step 1: Run project-level validation**

Run: `npm run lint`
Expected: exit code 0 with no lint violations.

- [ ] **Step 2: Review the changed sections in context**

Check the homepage render for:

- consistent identity
- stronger senior frontend message
- conversion-focused CTA flow
- service offerings that match the proposed positioning

- [ ] **Step 3: Commit the portfolio position update**

```bash
git add src/data/site.ts src/components/layout/Navbar.tsx src/components/sections/Hero.tsx src/data/services.ts src/components/sections/WhatIDo.tsx src/components/sections/About.tsx src/components/sections/Enterprise.tsx
git commit -m "feat: align portfolio positioning with senior frontend brand"
```
