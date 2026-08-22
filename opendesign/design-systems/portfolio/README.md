# Portfolio Design System

**Brand:** Dip Kumar Kapat — Senior UI/UX Designer & Frontend Product Builder
**Approach:** Editorial Minimalism (inspired by ashwingupta.dev, kunalrajelli.com, shaunscholtz.com)

## Sources Consulted
- Current codebase: `src/app/globals.css`, `src/components/**/*.tsx`, `src/data/*.ts`
- Reference sites: ashwingupta.dev, kunalrajelli.com, shaunscholtz.com, portfolioone.framer.ai, cohesion.framer.ai, re-birth.framer.website, portavia.framer.website, sevora.framer.website, bogdan.vision, ronaldrosales.com, savitasingh.vercel.app, ulrychkristian.cz, wallofportfolios.in

## Design Direction
Typography-first, warm neutral palette, generous whitespace, asymmetric bento grids, subtle scroll reveals. Serif display type (Instrument Serif) paired with sans UI (Instrument Sans). Mono for labels/data (JetBrains Mono).

## Folder Structure
```
opendesign/design-systems/portfolio/
├── README.md
├── SKILL.md
├── tokens/
│   └── colors_and_type.css
├── brand/
│   ├── voice-and-tone.md
│   └── style-notes.md
├── assets/
│   └── logos/
└── ui-kit/
    ├── components/
    └── index.html
```

## Key Decisions
- **Temperature:** Warm neutral (cream/beige bases, amber/copper accent)
- **Type:** Instrument Serif (display) + Instrument Sans (UI) + JetBrains Mono (code/labels)
- **Motion:** Subtle, purposeful — fade/slide reveals, gentle hover orchestrations, reduced-motion respect
- **Layout:** Asymmetric bento grids, 12-col with intentional breaks, generous padding
- **Dark mode:** Supported but light-first design