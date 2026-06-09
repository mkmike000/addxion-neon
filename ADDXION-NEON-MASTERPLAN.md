# ADDXION® Neon — Master Plan

**Version:** 1.4 (Juni 2026)  
**Produktname:** ADDXION® Neon  
**Repo:** `addxion-neon` — **markenneutrales** Design System  
**Docs:** `addxion-com` → addxion.com/docs/neon

---

## Wichtige Regel

**Nichts Markenspezifisches in ADDXION® Neon.**

| Gehört in Neon | Gehört beim Consumer (z. B. addxion-com) |
|----------------|------------------------------------------|
| Primitive Tokens (Farbskalen, Spacing) | addxion.com Farben (`ink`, `cream`, …) |
| Semantic Tokens (`primary`, `surface`) | Marketing-Fonts, Animationen |
| UI Primitives | Brand-CSS, `[data-brand]` Overrides |
| `[data-brand]` Mechanismus (Beispiel) | Konkrete Markenwerte |

---

## Repo-Aufteilung

| Repo | Rolle |
|------|-------|
| **addxion-neon** | ADDXION® Neon — generisches DS |
| **addxion-com** | addxion.com — Brand + Docs, konsumiert Neon |

---

## Struktur (addxion-neon)

```bash
packages/
  core/           # @addxion/core
  components/     # @addxion/components
```

---

## Instructions für Cursor

1. Anzeigename: **ADDXION® Neon**
2. Keine Marken-Tokens in `addxion-neon`
3. Brand-Layer beim jeweiligen Projekt (addxion-com, Kunden-Starter, …)
4. Prefix `tw:`, Bun, Lean-Agile

**Letztes Update:** 9. Juni 2026
