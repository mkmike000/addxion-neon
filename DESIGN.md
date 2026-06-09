# ADDXION® Neon — Design

Markenneutrales Design System für ADDXION Kundenprojekte und interne Produkte.

## Was ist ADDXION® Neon?

| Begriff | Bedeutung |
|---------|-----------|
| **Design System** | Tokens + Components + Regeln + Docs (nicht nur „UI“) |
| **Consumer** | Website/App, die Neon importiert und eigene Brand-Layer setzt |
| **Primitive** | Generische Werte (Farbskalen, Spacing, Radius) |
| **Semantic** | Intent-Tokens (`primary`, `surface`, `text`) |
| **Brand** | Markenspezifisch — **nie** in diesem Repo |

## Architektur

```
addxion-neon/                    Consumer (z. B. addxion.com)
├── @addxion/core                ├── brand.css      (markenspezifisch)
│   ├── tokens/                  ├── site.css       (Marketing)
│   ├── tw: Prefix               └── neon.css       (@addxion/core/styles)
│   └── dist/neon.css
└── @addxion/components
    └── .astro Primitives
```

## Tailwind v4

- CSS-first: `@import "tailwindcss" prefix(tw);`
- Klassen: `tw:bg-primary` (Doppelpunkt, **nicht** `tw-`)
- Build: `bun run build` → `packages/core/dist/neon.css` (Shopify, statische Targets)

## Token-Schichten

1. **primitives.css** — `@theme` Farben, Fluid Typography, Spacing
2. **semantic.css** — `@theme inline` mit `theme()` für Intent
3. **brand.css** — nur `[data-brand]`-Mechanismus + generisches Demo-Beispiel

## Components

- Source of Truth: `.astro` mit Variant-Maps (`button.variants.ts`)
- HTML-Referenz: in Consumer-Docs (Starlight), keine `.html`-Duplikate im Repo
- Shopify (Phase 2): versionierte `.liquid` Sections

## Consumer-Regeln

1. Marken-Tokens beim Consumer (`addxion-com/src/styles/brand.css`)
2. Neon importieren: `@import "@addxion/core/styles"`
3. Docs leben beim Consumer (`addxion.com/docs/neon/`), nicht in `addxion-neon`

## Geplante Consumer

| Produkt | Status | UI-Stack heute |
|---------|--------|----------------|
| **addxion.com** | Aktiv | Tailwind v4 + Neon + eigene Brand |
| **addxion.ai** | Geplant | UUI (Untitled UI) — schrittweise, siehe Masterplan |
| **Kunden (Astro/Shopify)** | Phase 2/3 | Starter Templates |

## Referenzen

- [ADDXION-NEON-MASTERPLAN.md](./ADDXION-NEON-MASTERPLAN.md)
- [AGENTS.md](./AGENTS.md)
- Docs: https://addxion.com/docs/neon/
