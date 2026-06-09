# ADDXION® Neon — Agent Guidelines

## Essentials

- **Produktname:** ADDXION® Neon (Anzeige). Repo: `addxion-neon`, Packages: `@addxion/*`
- **Package Manager:** Bun (`bun install`, `bun run build`)
- **Stack:** Tailwind v4 CSS-first, Prefix `tw:` (nicht `tw-`)
- **Regel:** Nichts Markenspezifisches in diesem Repo — Brand lebt beim Consumer

## Repo-Grenzen

| Hier (`addxion-neon`) | Dort (Consumer) |
|-----------------------|-----------------|
| `@addxion/core`, `@addxion/components` | `brand.css`, Marketing, Docs |
| Generische Tokens & Primitives | addxion.com, addxion.ai (später), Kunden |

**Dokumentation:** `addxion-com` → https://addxion.com/docs/neon/ — nicht in diesem Repo.

## Commands

```bash
bun install
bun run build          # packages/core/dist/neon.css
```

Docs lokal: `cd ../addxion-com && bun run dev` → `/docs/neon/`

## Konventionen

1. Sections versionieren (Shopify: `hero-v1.liquid`, nie überschreiben)
2. Lean-Agile: nur bauen, was gerade gebraucht wird
3. Semantic Tokens: `@theme inline` + `theme()`, nicht blind `var()`
4. `@source` in `packages/core/src/index.css` bei neuen Scan-Pfaden prüfen
5. Masterplan + DESIGN.md bei Architekturänderungen aktualisieren

## Phasen (Kurz)

- **0** ✓ Foundation
- **1** Sections (Hero, Features, …)
- **2** Shopify Adapter
- **3** Astro Starter
- **4** Tooling / CI/CD
- **5** Docs Launch

## addxion.ai (Hinweis)

addxion.ai ist **geplanter Consumer**, nutzt aktuell **UUI (Untitled UI)**. Kein Big-Bang-Migration — siehe Masterplan „addxion.ai Adoption“. Neon-Änderungen hier nicht an UUI-Code in addxion-ai anpassen.

## Learned Preferences

- Commit nur auf Anfrage
- Keine Marken-Tokens in `addxion-neon`
- `ADDXION® Neon` als Schreibweise in User-facing Text
