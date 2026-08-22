# Visual Style Notes — Portfolio Design System

## Color Philosophy
**Warm neutral temperature** — cream/beige bases (#fafaf8, #f4f3ef) with copper/amber accent (#b87333). Avoids cold blue/purple defaults. Dark mode inverts with same chroma relationships.

### Color Roles
| Role | Light | Dark | Usage |
|------|-------|------|-------|
| Canvas | `--bg-0` | `--bg-0` | Page background |
| Section Alt | `--bg-1` | `--bg-1` | Alternating sections |
| Surface | `--bg-2` | `--bg-2` | Cards, inputs |
| Border | `--bg-3` | `--bg-3` | Dividers, card borders |
| Primary Text | `--fg-0` | `--fg-0` | Headlines, body |
| Secondary Text | `--fg-1` | `--fg-1` | Descriptions, meta |
| Muted Text | `--fg-2` | `--fg-2` | Labels, timestamps |
| Accent | `--accent-0` | `--accent-0` | Primary actions, links, focus |
| Accent Soft | `--accent-3` | `--accent-3` | Badge backgrounds, highlights |

### Accent Application Rules
- **Primary buttons:** Filled `--fg-0`, hover `--accent-0`
- **Secondary buttons:** Border `--bg-3`, hover border/text `--accent-0`
- **Text links:** Underline, hover `--accent-0`
- **Focus rings:** `--ring-0` (matches accent)
- **Never:** Gradient buttons, gradient text, accent on large areas

## Typography

### Font Stack
```css
--font-display: "Instrument Serif", Georgia, serif;     /* Headlines, display */
--font-ui: "Instrument Sans", system-ui, sans-serif;    /* UI, body, buttons */
--font-mono: "JetBrains Mono", ui-monospace, monospace; /* Code, labels, data */
```

### Pairing Rules
- **Display (Serif):** Hero headlines, section titles, pull quotes
- **UI (Sans):** Body copy, buttons, navigation, form labels, card titles
- **Mono:** Eyebrows, labels (Role/Stack), code snippets, numbers/stats

### Hierarchy
```
Hero:           Display 61px / 1.05 / tight
Section Title:  Display 39px / 1.05 / tight
H1:             Display 31px / 1.25 / tight
H2:             Display 25px / 1.25 / tight
H3:             UI 20px / 1.25 / tight
H4:             UI 16px / 1.25 / normal
Body LG:        UI 18px / 1.75 / normal
Body:           UI 16px / 1.75 / normal
Body SM:        UI 14px / 1.5 / normal
Label:          Mono 12px / 1.5 / wider (uppercase)
```

### Italic Usage
- **Display italic:** Accent phrases in headlines ("and build the interfaces that bring them to life")
- **UI italic:** Rare — only for captions or quoted text
- **Never:** Body copy in italic

## Spacing & Layout

### Container
- **Max-width:** 1280px
- **Padding:** 24px (mobile), 32px (tablet), 64px (desktop)
- **Grid:** 12 columns, 24px gap (32px lg)

### Section Rhythm
- **Standard:** `py-20 lg:py-28` (80px / 112px)
- **Compact:** `py-16 lg:py-20`
- **Hero:** `pt-32 lg:pt-48 pb-20 lg:pb-28`

### Asymmetric Grid Patterns
```
Hero:           7/5 split (content / stats)
Project Card:   5/7 split (content / image) — alternates
Bento Grid:     Mixed spans (4/4/4, 6/6, 8/4, etc.)
Stats Row:      2/2/2/2 or 3/3/3/3
```

### Whitespace Principles
- **Generous by default** — prefer more space
- **Group related** — tight spacing within, loose between groups
- **Optical alignment** — adjust for visual weight, not just math

## Motion & Interaction

### Reveal Animations (Staggered)
```css
/* Each item: */
opacity: 0 → 1
transform: translateY(24px) → 0
duration: 450ms
ease: cubic-bezier(0.22, 1, 0.36, 1)
delay: index * 80ms
```

### Hover Orchestration (Cards)
```
Image:      scale(1.02) — 700ms ease-out
Border:     color --bg-3 → --accent-0 — 200ms
Content:    No transform (text stays readable)
```

### Button States
```
Primary:    bg --fg-0 → --accent-0 (200ms)
Secondary:  border --bg-3 → --accent-0, text --fg-1 → --accent-0 (200ms)
Text:       text --fg-1 → --accent-0, underline (200ms)
Focus:      ring --ring-0, offset 2px
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  html { scroll-behavior: auto; }
}
```

## Component Patterns

### Cards
- **Border:** 1px `--bg-3`, no shadow
- **Radius:** 8px (`--radius-md`)
- **Padding:** 24px (mobile), 32px (desktop)
- **Hover:** Border `--accent-0`, image scale 1.02
- **No:** Left border accent, heavy shadows, gradient borders

### Buttons
| Variant | Base | Hover | Focus |
|---------|------|-------|-------|
| Primary | bg `--fg-0`, text `--bg-0` | bg `--accent-0` | ring `--ring-0` |
| Secondary | border `--bg-3`, text `--fg-0` | border/text `--accent-0` | ring `--ring-0` |
| Text | text `--fg-1`, underline | text `--accent-0` | ring `--ring-0` |

- **Padding:** 12px 24px (mobile), 12px 24px (desktop)
- **Radius:** 4px (`--radius-sm`) — sharp, editorial
- **Font:** UI, medium, 14px

### Badges / Tags
- **Background:** `--accent-3` (light) / `--accent-3` (dark)
- **Text:** `--accent-0` (light) / `--accent-0` (dark)
- **Font:** Mono, 11px, uppercase, tracking-wider
- **Radius:** 4px

### Form Inputs
- **Background:** `--bg-0`
- **Border:** `--bg-3` → `--accent-0` (focus)
- **Placeholder:** `--fg-2`
- **Radius:** 8px
- **Padding:** 12px 16px

### Navigation
- **Height:** 64px (h-16)
- **Background:** Transparent → `--bg-0/85` + blur (scrolled)
- **Border:** None → `--bg-3` (scrolled)
- **Links:** UI 14px medium, `--fg-1` → `--fg-0` (hover)

## Imagery

### Project Thumbnails
- **Aspect:** 4:5 (portrait) or 16:10 (landscape)
- **Object-fit:** cover
- **Hover:** Subtle zoom (1.02x, 700ms)
- **Placeholder:** `--bg-2` with subtle grid pattern

### Profile / Hero Images
- **Aspect:** 4:5
- **Border:** 1px `--accent-0/30` + inner `--accent-0/20`
- **Hover:** Scale 1.05 (700ms)

### Image Optimization
- **Next.js Image:** Always use with `sizes` and `priority` (above fold)
- **Formats:** WebP/AVIF auto
- **Widths:** 640, 1024, 1280, 1920

## Iconography
- **Set:** Lucide React (consistent 1.5 stroke width)
- **Sizes:** 16px (inline), 20px (button), 24px (standalone)
- **Color:** Current text color (inherit) or `--accent-0` (CTAs)

## Borders & Dividers
- **Standard:** 1px `--bg-3`
- **Strong:** 1px `--fg-3`
- **Accent:** 1px `--accent-0` (rare, intentional)
- **Divider component:** Horizontal rule with `--bg-3`

## Shadows
- **Avoid** as primary elevation
- **Only:** Subtle `shadow-sm` on dropdowns, modals, tooltips
- **Glow:** `--shadow-glow` for accent focus states only

## Dark Mode Specifics
- **Not inverted** — rebalanced for same hierarchy
- **Accent shifts:** Copper → lighter amber (`#d4a574`)
- **Borders:** More visible (`#2a2a2a` vs `#e0dfd9`)
- **Images:** Slight opacity reduction on thumbnails (0.9)

## Accessibility
- **Contrast:** All text ≥ 4.5:1 (AA), large text ≥ 3:1
- **Focus:** Visible ring on all interactive elements
- **Motion:** Respects `prefers-reduced-motion`
- **Color:** Never sole indicator (always + text/icon)
- **Type:** Minimum 16px body, scalable to 200%

## Anti-Patterns (Do Not Use)
- Bluish-purple gradients
- Rounded cards with colored left border
- Emoji as feature bullets
- Heavy drop shadows on cards
- Gradient text on headlines
- Animations without purpose
- Generic stock illustrations
- Carousels/sliders for primary content