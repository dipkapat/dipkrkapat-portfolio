# Recommended Design Kit

## **“Editorial Product” — Portfolio Design System v1.0**

The visual idea:

> **Swiss editorial discipline + modern SaaS interface + subtle creative motion.**

It should feel:

**Senior · Intelligent · Precise · Modern · Confident · Technical · Human**

Not:

**Template-like · Over-animated · Neon · Cyberpunk · Generic SaaS**

---

# 01. DESIGN DIRECTION

### Core principle

**Typography does the talking.**

Your portfolio should have relatively few visual tricks. The quality should come from:

- typography

- spacing

- grid

- image composition

- UI detail

- restrained motion

- strong project storytelling

This is especially appropriate because your actual differentiator is your combination of **UI/UX + frontend implementation**, not visual gimmicks.

---

# 02. COLOR SYSTEM

I recommend a **warm off-white + near-black + electric blue accent** system.

### Light Theme — Primary

| Token          | Value     | Usage                     |
| -------------- | --------- | ------------------------- |
| Background     | `#F5F5F2` | Main page                 |
| Surface        | `#FFFFFF` | Cards / panels            |
| Surface Muted  | `#ECECE8` | Secondary areas           |
| Text Primary   | `#111111` | Headlines                 |
| Text Secondary | `#5F5F5A` | Supporting text           |
| Text Tertiary  | `#898985` | Metadata                  |
| Border         | `#D9D9D4` | Dividers                  |
| Accent         | `#2563EB` | Links / CTA / interaction |
| Accent Soft    | `#E8F0FF` | Accent backgrounds        |
| Success        | `#16803C` | Positive states           |
| Warning        | `#B7791F` | Warning states            |
| Error          | `#C53030` | Error states              |

### Dark Theme — Secondary

| Token            | Value     |
| ---------------- | --------- |
| Background       | `#0D0D0D` |
| Surface          | `#151515` |
| Surface Elevated | `#1C1C1C` |
| Text Primary     | `#F5F5F0` |
| Text Secondary   | `#A5A5A0` |
| Border           | `#292929` |
| Accent           | `#4D7CFE` |

### Important

Do **not** use 5–6 accent colors.

Your project screenshots already provide visual variety. The portfolio itself should remain disciplined.

---

# 03. TYPOGRAPHY

This is where I would make the strongest visual statement.

## Primary recommendation

### **Instrument Sans**

Use it for:

- navigation

- body

- buttons

- metadata

- project descriptions

- UI

### Display recommendation

### **Instrument Serif**

Use very selectively for emphasis.

For example:

> **I design complex digital products**  
> *and build the interfaces that bring them to life.*

The serif can appear on only a few key moments.

This gives you an editorial character without making the site look like a magazine.

### Alternative

If you want a more technical appearance:

**Geist + Geist Mono**

That would make the portfolio feel much more product/engineering-oriented.

### My preference for you

**Instrument Sans + Instrument Serif**

---

# 04. TYPE SCALE

Use a deliberately large hierarchy.

### Desktop

| Style        | Size | Weight |
| ------------ | ---- | ------ |
| Hero Display | 80px | 500    |
| H1           | 64px | 500    |
| H2           | 48px | 500    |
| H3           | 32px | 600    |
| H4           | 24px | 600    |
| Body Large   | 20px | 400    |
| Body         | 17px | 400    |
| Small        | 14px | 400    |
| Metadata     | 12px | 600    |
| Navigation   | 14px | 500    |

### Mobile

Hero:

**48px**

H1:

**40px**

H2:

**34px**

Body:

**16px**

Do not make everything huge. The contrast between large headlines and compact metadata is what creates the premium feel.

---

# 05. TYPOGRAPHIC DETAIL

Use **tight tracking for headlines**.

### Display

`letter-spacing: -0.045em`

### H1/H2

`letter-spacing: -0.035em`

### Body

`letter-spacing: -0.01em`

### Uppercase labels

`letter-spacing: 0.08em`

Example:

**SELECTED WORK**

Small uppercase label → large headline.

That pattern should repeat throughout the site.

---

# 06. GRID SYSTEM

Use a **12-column desktop grid**.

### Desktop

Max width:

**1440px**

Content width:

**1280px**

Side padding:

**64px**

Column gap:

**24px**

### Tablet

Side padding:

**32px**

### Mobile

Side padding:

**20px**

---

# 07. SECTION SPACING

Don't cram sections together.

Recommended desktop rhythm:

### Major section

**160px – 200px**

### Standard section

**120px**

### Small section

**72px**

### Internal component spacing

**24px / 32px / 48px**

Your site should feel like it has room to breathe.

---

# 08. NAVIGATION

Keep it extremely clean.

### Left

**DIP KUMAR KAPAT**

small role underneath:

**UI/UX · FRONTEND · AI**

### Center

**Work · Capabilities · About · Experience**

### Right

**Let's Talk ↗**

### Behavior

On scroll:

- reduce height

- subtle backdrop blur

- thin bottom border

- slightly stronger background

No giant sticky navigation.

---

# 09. HERO DESIGN

I recommend an asymmetric layout.

### Left: 7 columns

Massive headline.

### Right: 5 columns

Short positioning statement + CTA + small proof statistics.

Example:

**18+**  
Years

**25+**  
Enterprise Modules

**React**  
Frontend

Then below:

**Design → Build → Refine**

This will feel much more like a senior product portfolio than a personal-brand landing page.

---

# 10. PROJECT CARD SYSTEM

Do **not** use generic 3-column cards.

Your projects deserve editorial presentation.

### Featured project

Use a large horizontal composition:

**40% text / 60% visual**

Example:

```text
PULSEMETRICS
B2B SaaS · Analytics

Making complex business data
easier to understand.

[Project description]

React · Next.js · Tailwind
                         →
                [Large UI Visual]
```

Then alternate:

Project 2:

**60% visual / 40% text**

Project 3:

**40% text / 60% visual**

This creates rhythm while maintaining a consistent system.

---

# 11. PROJECT IMAGE TREATMENT

This is extremely important.

Do not simply place screenshots inside browser mockups.

Instead:

### Primary project visual

**Full-width UI composition**

with:

- cropped interface

- subtle depth

- realistic browser frame only where necessary

- carefully controlled background

- minimal shadow

### Recommended

Use a subtle:

`1px border`

`16px–24px radius`

`0 20px 60px rgba(...)`

But keep the shadow extremely soft.

Your projects themselves should be the visual assets.

---

# 12. PROJECT LABELS

Use compact metadata.

Example:

**01 / PULSEMETRICS**

`B2B SaaS · Analytics · Product UI`

Then:

**Role**  
Product UI/UX · Frontend

**Stack**  
React · Next.js · Tailwind · shadcn/ui

This makes the portfolio feel curated rather than promotional.

---

# 13. BUTTON SYSTEM

Only three button styles.

### Primary

Black background:

**View Selected Work →**

### Secondary

Transparent with border:

**View Case Study →**

### Text button

No container:

**Explore Project ↗**

Avoid pill-shaped buttons everywhere.

Use:

**6px–8px radius**

rather than the ubiquitous 999px pill.

---

# 14. CARDS

Do not make every section card-based.

Use cards only when they communicate something.

### Card style

Background:

`#FFFFFF`

Border:

`#D9D9D4`

Radius:

**16px**

Padding:

**24px**

No heavy shadows.

For dark theme:

`#151515`

with a subtle `#292929` border.

---

# 15. 25+ MODULES SECTION

This should NOT be a boring text list.

Create a large editorial visual.

### Left

Huge:

**25+**

**enterprise product modules**

### Right

A dense but elegant module matrix:

```text
ACADEMIC        ATTENDANCE       ANALYTICS
ADMISSIONS      FEES             PAYROLL
TRANSPORT       LIBRARY          ACCOUNTS
HOSTEL          CALENDAR         ASSIGNMENTS
REPORTS         HR               CERTIFICATES
...
```

On hover:

Module becomes highlighted.

The point is to visually communicate **scale**.

Your resume makes this one of your strongest pieces of evidence.

---

# 16. DESIGN → CODE SECTION

This should have a more technical visual language.

Create a horizontal pipeline:

**FIGMA**

↓

**UI SYSTEM**

↓

**REACT**

↓

**TAILWIND**

↓

**PRODUCTION**

Then underneath:

**Design decisions · Component structure · Responsive behavior · Interaction · Refinement**

Use thin connecting lines and subtle animated progress.

This is one of the places where motion actually adds meaning.

---

# 17. AI SECTION

Don't make this look like an “AI neon website.”

Avoid:

- glowing purple blobs

- holographic graphics

- neural-network illustrations

- excessive gradients

Instead:

### Visual concept

A calm interface diagram:

**Idea**

→

**Design**

→

**Claude Code**

→

**Frontend**

→

**Iteration**

Use monospace labels and subtle system-style details.

This visually communicates your AI-assisted workflow without looking like an AI gimmick.

Your resume specifically establishes Claude Code and LLM plugins as part of your development workflow.

---

# 18. MONOSPACE ACCENT

Introduce one monospace font.

### Recommendation

**JetBrains Mono**

Use it only for:

- project numbers

- technology tags

- dates

- metadata

- coordinates

- small technical labels

- process diagrams

Example:

`PROJECT / 01`

`ROLE / UIUX + FRONTEND`

`STACK / NEXT.JS`

This gives the site subtle technical credibility.

---

# 19. ICON SYSTEM

Use **Lucide Icons**.

Style:

- 1.5px stroke

- 18–20px

- minimal

- monochrome

Do not mix icon libraries.

---

# 20. BORDER LANGUAGE

Borders should be visible but quiet.

### Default

`#D9D9D4`

### Strong divider

`#BDBDB7`

### Dark

`#292929`

Use borders to establish structure rather than shadows.

This will give the portfolio a sophisticated editorial feel.

---

# 21. BORDER RADIUS SYSTEM

Keep it restrained.

### Small

**6px**

Buttons / inputs

### Medium

**12px**

Cards / UI components

### Large

**20px**

Project visuals

### Avoid

Huge:

**40px / 48px / 999px**

unless specifically used for a visual element.

---

# 22. MOTION SYSTEM

Motion should communicate **polish**, not “look what I can animate.”

Use **Framer Motion**.

### Page entrance

Opacity:

`0 → 1`

Y:

`20px → 0`

Duration:

**500–700ms**

### Project image

Scale:

`0.97 → 1`

Duration:

**700ms**

### Hover

Transform:

`translateY(-4px)`

Duration:

**200ms**

### Navigation

Subtle width/opacity transition.

### Section reveal

Use stagger:

**80–120ms**

---

# 23. CURSOR

I recommend **not** using a giant custom cursor.

Instead:

Normal cursor.

On interactive elements:

- subtle scale

- underline

- arrow transformation

For your level of portfolio, restraint is better than gimmicks.

---

# 24. IMAGE STYLE

Your portfolio should contain three image types.

### 01 — Product UI

Large screenshots and detailed UI crops.

### 02 — Process

Occasional Figma frames, wireframes, system diagrams.

### 03 — Personal

One strong professional portrait.

Not five photographs.

### Portrait direction

Simple:

**black/dark clothing + neutral background + directional lighting**

No generic corporate headshot.

---

# 25. BACKGROUND GRAPHICS

Keep backgrounds mostly flat.

You can occasionally use:

- thin grid

- subtle noise

- fine lines

- oversized typographic numbers

- faint geometric elements

### Example

Hero background:

Very subtle 12-column grid at **3–5% opacity**.

This quietly reinforces your design-system identity.

---

# 26. SPECIAL VISUAL DEVICE

I recommend one signature device for your portfolio:

## **The “01 / 02 / 03” system**

Every major section begins with:

`01`

`02`

`03`

Example:

**01 / INTRODUCTION**

**02 / SELECTED WORK**

**03 / PRODUCT EXPERIENCE**

**04 / DESIGN SYSTEM**

**05 / EXPERIENCE**

It gives the whole site a controlled editorial structure.

---

# 27. LIGHT / DARK MODE

I recommend supporting both.

### Default

**Light mode**

Because your work needs to remain highly readable and visually accessible.

### Dark mode

Optional toggle:

`◐`

Dark mode should not simply invert everything.

Keep:

**off-black background + soft white + blue accent.**

This will make the portfolio feel like a serious product-design system.

---

# 28. DESIGN TOKENS

For implementation, I would establish these tokens from day one.

```text
PRIMARY
#111111

BACKGROUND
#F5F5F2

SURFACE
#FFFFFF

TEXT-SECONDARY
#5F5F5A

BORDER
#D9D9D4

ACCENT
#2563EB

ACCENT-SOFT
#E8F0FF

RADIUS-SM
6px

RADIUS-MD
12px

RADIUS-LG
20px

SECTION
120–200px

GRID-GAP
24px
```

---

# 29. DESIGN SYSTEM COMPONENTS

Build your portfolio itself like a product.

### Core components

**Navigation**

**Button**

**Link**

**Badge**

**Project Card**

**Project Meta**

**Section Header**

**Stat**

**Timeline Item**

**Technology Tag**

**Case Study Block**

**Image Frame**

**Quote**

**CTA**

**Footer**

### States

Every interactive component should have:

**Default · Hover · Focus · Active · Disabled**

That is a subtle but important opportunity to demonstrate that you are actually a UI/UX + frontend practitioner.

---

# 30. WHAT I WOULD AVOID

This is important.

### Don't use

❌ Purple AI gradients everywhere  
❌ Glassmorphism everywhere  
❌ Giant 3D objects  
❌ Excessive rounded cards  
❌ Animated blobs  
❌ Infinite scrolling gimmicks  
❌ Custom cursor animations  
❌ Skill percentage bars  
❌ “HTML 95% / React 90%”  
❌ Huge technology logos  
❌ Generic developer terminal graphics  
❌ Stock business imagery  
❌ Excessive text animation

Your experience is strong enough that the site shouldn't need tricks to appear impressive.

---

# Final Visual Formula

Your portfolio should visually land somewhere around:

### **70%**

Editorial / typography / whitespace

### **20%**

Product UI / screenshots / systems

### **10%**

Motion / interaction / technical details

That balance is right for your profile.

The current reference landscape also supports this broader direction: Ashwin Gupta's portfolio, for example, strongly integrates typography, structured information, proof, project detail, and technical storytelling rather than treating the homepage as a conventional visual showcase. ([Ashwin Gupta](https://www.ashwingupta.dev/ "Ashwin Gupta - AI Systems Engineer"))

## My recommended final stack for the visual system

**Typography:** Instrument Sans + Instrument Serif + JetBrains Mono  
**Icons:** Lucide  
**Grid:** 12-column / 1280px content  
**Primary palette:** Warm White + Near Black + Electric Blue  
**UI:** shadcn/ui  
**CSS:** Tailwind CSS  
**Motion:** Framer Motion  
**Images:** Large editorial product compositions  
**Radius:** 6 / 12 / 20px  
**Motion:** Slow, subtle, purposeful  
**Theme:** Light first + optional dark mode

### The resulting visual personality:

> **“Senior product designer who understands code.”**

That is exactly the perception I would optimize for with your portfolio, rather than **“frontend developer who can design.”**
