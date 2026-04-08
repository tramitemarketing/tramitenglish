# TrainEnglish — UI Redesign Spec
**Date:** 2026-04-08  
**Status:** Approved by user

---

## Design Direction: Dark Editorial + Amber/Gold

### Core Style
- **Theme:** Dark-first (#0a0a0a bg, #141414 surface) with full light mode toggle
- **Accent:** Amber/gold (#f59e0b dark, #b45309 light)
- **Typography:** Plus Jakarta Sans (UI), DM Serif Display (display headings), JetBrains Mono (numbers/mono)
- **Aesthetic:** Vercel/Linear-inspired — high contrast, bold typography, precise micro-animations

### Background Treatment (combined B + C + A elements)
- **Grid lines** (B): `rgba(245,158,11,0.04)` 32×32px grid, fades out toward bottom
- **Floating particles** (C): small amber dots at varied opacities, slow float animation (3–6s)
- **Progress bar** (A): animated horizontal bar showing day completion (67% = day 40/60)

### Animations
- Count-up on stat numbers at page load (250–350ms, easeOut)
- Glow blobs breathing slowly (4–6s ease-in-out)
- Staggered card entrance (fadeUp, 50ms delay per item)
- Hover: translateY(-2px) + border-color accent on cards
- CTA button: subtle scale(1.02) + glow on hover
- Page load: fade-in body (150ms)
- All durations 150–400ms; respect prefers-reduced-motion

### Layout Principles
- **Not always centered** — left-aligned headings, asymmetric grids on desktop
- Stats: large bold numbers (font-weight: 900, tabular-nums)
- Cards: border-radius 12px, 1px border #1e1e1e, hover lifts
- Nav: bottom on mobile, stays bottom on desktop too (consistent)
- Max content width: 1100px on dashboard, 720px on stats/session

### Theme Toggle
- Persisted in `localStorage('te_theme')` — already implemented in app.js
- Toggle accessible from every page via nav or topbar icon
- Light mode: #fafafa bg, #09090b text, #b45309 accent (existing)
- Dark mode: #0a0a0a bg, #f5f5f5 text, #f59e0b accent (existing)

---

## Scope: All Pages

| Page | Key changes |
|------|-------------|
| `index.html` | Login card with grid bg, glow blob, animated submit |
| `dashboard.html` | Grid+particles bg, left-aligned greeting, animated streak, count-up stats |
| `session.html` | Dark topbar, animated exercise transitions, answer feedback |
| `test.html` | Card grid with lock/unlock animations, status badges |
| `diagnostic.html` | Preserve all JS contracts (IDs/classes) — restyle only |
| `library.html` | Accordion with smooth expand, search highlight |
| `stats.html` | SVG chart polish, metric card count-up, dark chart colors |
| `review.html` | Error cards with grammar tag chips |
| `settings.html` | Theme toggle prominent, clean form layout |
| `log.html` | Error list with filter animations |
| `preview.html` | Minimal changes |

## Constraints
- Zero functionality changes — only visual layer
- `diagnostic.js` JS contracts must be preserved (ID/class names)
- `js/tests-data.js` — do not touch (auto-generated)
- No new dependencies — pure CSS/JS
- All pages must work in both light and dark mode
