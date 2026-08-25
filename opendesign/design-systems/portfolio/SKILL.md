# Portfolio Design System Skill

**Name:** portfolio
**Version:** 1.0.0
**Description:** Editorial minimalism design system for Dip Kumar Kapat's portfolio -typography-first, warm neutrals, asymmetric bento grids, subtle motion.

## Token Reference

Import tokens via CSS:

```css
@import "./opendesign/design-systems/portfolio/tokens/colors_and_type.css";
```

Or use Tailwind v4 theme extension in `globals.css`:

```css
@theme inline {
	--color-bg-0: var(--bg-0);
	--color-bg-1: var(--bg-1);
	--color-fg-0: var(--fg-0);
	--color-fg-1: var(--fg-1);
	--color-accent: var(--accent-0);
	--font-display: var(--font-display);
	--font-ui: var(--font-ui);
	--font-mono: var(--font-mono);
	/* ...etc */
}
```

## Semantic Color Roles

| Token        | Role              | Light   | Dark    |
| ------------ | ----------------- | ------- | ------- |
| `--bg-0`     | Canvas background | #fafaf8 | #0a0a0a |
| `--bg-1`     | Section alternate | #f4f3ef | #121212 |
| `--bg-2`     | Card/surface      | #ebeae4 | #1a1a1a |
| `--bg-3`     | Borders/dividers  | #e0dfd9 | #2a2a2a |
| `--fg-0`     | Primary text      | #0d0d0d | #fafaf8 |
| `--fg-1`     | Secondary text    | #3a3934 | #c8c7c0 |
| `--fg-2`     | Tertiary/muted    | #6d6c66 | #9d9c94 |
| `--accent-0` | Primary action    | #b87333 | #d4a574 |
| `--accent-3` | Accent soft bg    | #fdf3eb | #2d1f12 |

## Type Scale

- Display: 61px/1.05 (hero), 39px/1.05 (section hero)
- H1: 31px/1.25, H2: 25px/1.25, H3: 20px/1.25, H4: 16px/1.25
- Body LG: 18px/1.75, Body: 16px/1.75, Body SM: 14px/1.5
- Label: 12px/1.5 (mono, uppercase, tracking-wide)

## Spacing Scale

4px base unit: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

## Motion

- Ease: cubic-bezier(0.22, 1, 0.36, 1) (out-expo)
- Durations: 150ms (fast), 250ms (base), 400ms (slow), 600ms (slower)
- Reduced motion: all animations disabled via prefers-reduced-motion

## Component Patterns

- **Cards:** Border only (no shadow), hover = border accent + subtle scale
- **Buttons:** Primary = filled fg-0, hover accent; Secondary = border, hover accent; Text = underline
- **Grids:** 12-col, asymmetric spans, intentional whitespace
- **Reveals:** Staggered fade+slide (y: 24px), delay 80ms per item
- **Images:** Object-cover, subtle zoom on hover (1.02x)

## Usage in This Project

1. Replace `globals.css` imports with `@import` of tokens file
2. Migrate component classes to use semantic tokens
3. Update Tailwind config to reference CSS variables
4. Build UI kit components in `ui-kit/components/`
