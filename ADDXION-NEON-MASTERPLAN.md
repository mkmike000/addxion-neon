# ADDXION® Neon — Master Plan

**Version:** 1.5 (Juni 2026)  
**Produktname:** ADDXION® Neon  
**Repo:** `addxion-neon` — markenneutrales Design System  
**Docs:** `addxion-com` → addxion.com/docs/neon

---

## Wichtige Regel

**Nichts Markenspezifisches in ADDXION® Neon.** Brand-Layer beim jeweiligen Consumer.

---

## Consumer-Ökosystem

| Consumer | Repo | Design-Status | Docs / llms |
|----------|------|---------------|-------------|
| **addxion.com** | addxion-com | ✅ Tailwind v4 + Neon + `brand.css` | `/docs/neon/`, `llms.txt` |
| **addxion.ai** | addxion-ai | 🔜 Geplant — heute **UUI** | eigene `/style-guide` |
| **Kunden** | Starter Phase 2/3 | 🔜 | — |

---

## addxion.ai Adoption (UUI → ADDXION® Neon)

addxion.ai hat bereits eine **fertige UI** mit **Untitled UI (UUI)** — `src/components/base`, `style-guide`, TanStack Start. **Kein Big-Bang.**

### Strategie: Parallel → Converge

| Phase | Was | Wann |
|-------|-----|------|
| **A — Jetzt** | Neon stabilisieren; addxion.com als erster Consumer | Phase 0 ✓ |
| **B — Mapping** | Token-Mapping UUI ↔ Neon dokumentieren (Farben, Spacing, Radius) | Vor erster addxion.ai-Migration |
| **C — New surfaces** | Neue Screens in addxion.ai optional mit Neon-Primitives (`@addxion/components`) | Phase 1+ |
| **D — Gradual** | Bestehende UUI-Screens nur bei Touch refactoren | laufend |
| **E — Shared** | `@addxion/core` als `file:`-Dep; Brand in `addxion-ai/src/styles/brand.css` | Phase 1/2 |
| **F — Niemals** | UUI komplett ersetzen ohne Migrations-Guide + Style-Guide-Parität | — |

### Warum nicht sofort?

- UUI ist tief integriert (Auth-UI, Dashboard, Command Menu, Style Guide)
- addxion.ai = App-UI (React); Neon = primär Astro + CSS (`tw:`)
- **Auth** bleibt `@addxion/auth-core` — orthogonal zu Neon

### Entscheidungsregel

> Neue UI in addxion.ai: **Neon**, wenn Astro-kompatibel oder reines CSS. **UUI behalten**, wenn bestehendes Pattern/Component schon passt — bis Mapping-Phase abgeschlossen.

---

## Repo-Aufteilung

| Repo | Rolle |
|------|-------|
| **addxion-neon** | ADDXION® Neon — generisches DS |
| **addxion-com** | Marketing + Docs + Brand |
| **addxion-ai** | App — später Neon-Consumer, heute UUI |

---

## Phasen

| Phase | Inhalt | Status |
|-------|--------|--------|
| **0** | Core, Components, addxion.com-Anbindung, DESIGN/AGENTS | ✓ |
| **0b** | addxion-com commit, llms.txt, PR merge neon | In Arbeit |
| **1** | Sections, Primitives erweitern | Geplant |
| **2** | Shopify Adapter | Geplant |
| **3** | Astro Starter | Geplant |
| **4** | CI/CD, Changesets | Geplant |
| **5** | Launch, Kunden-Templates | Geplant |
| **ai-1** | addxion.ai Token-Mapping + Pilot-Screen | Nach Phase 1 |

---

## Struktur (addxion-neon)

```bash
packages/
  core/           # @addxion/core
  components/     # @addxion/components
DESIGN.md
AGENTS.md
```

---

## Instructions für Cursor

1. Anzeigename: **ADDXION® Neon**
2. Keine Marken-Tokens in `addxion-neon`
3. Docs nur in `addxion-com`
4. Prefix `tw:`, Bun, Lean-Agile
5. addxion.ai: UUI respektieren bis Mapping-Phase

**Letztes Update:** 9. Juni 2026
