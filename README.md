# ADDXION® Neon

Markenneutrales Design System — Tokens, UI Primitives, kompiliertes CSS.

**Dokumentation:** [addxion.com/docs/neon](https://addxion.com/docs/neon) — im [addxion-com](https://github.com/mkmike000/addxion-com) Repo.

**Regel:** Nichts Markenspezifisches in diesem Repo. Brand-Tokens leben beim Consumer (z. B. `addxion-com/src/styles/brand.css`).

## Quick Start

```bash
bun install
bun run build        # → packages/core/dist/neon.css
```

## Packages

| Package | Beschreibung |
|---------|--------------|
| `@addxion/core` | Generische Tokens, Tailwind v4 (`tw:`), `dist/neon.css` |
| `@addxion/components` | UI Primitives (Button, Card, Container, Badge) |

## Consumer: addxion.com

```css
/* addxion-com — markenspezifisch */
@import "./brand.css";

/* ADDXION® Neon — generisch */
@import "@addxion/core/styles";
```

## Tailwind Prefix

**`tw:`** (v4) — nicht `tw-` (v3).

## Docs lokal

```bash
cd ../addxion-com && bun run dev   # /docs/neon/
```

## Architektur

[ADDXION-NEON-MASTERPLAN.md](./ADDXION-NEON-MASTERPLAN.md)
