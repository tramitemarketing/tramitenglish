# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status (aggiornato 2026-03-21)

### Completato ✅
- **Supabase** — tabelle `user_state`, `exercises`, `user_errors` create con RLS policies e trigger `updated_at`. Auth reale con email/password funzionante.
- **js/app.js** — Auth/State/Plan/Adaptive con Supabase reale. Credenziali: `SUPABASE_URL = 'https://zmnjoiuvmyyyrveooxzp.supabase.co'`.
- **GitHub** — repo `tramitemarketing/tramitenglish`. MCP configurato. Cloudflare Pages collegato al repo.
- **YAML database** — `tramitenglish/database/`:
  - `exercises_part1-7.yaml` — esercizi completi con tag system 6 livelli
  - `grammar_explanations.yaml` — 53 regole grammaticali complete (IT+EN, con story)
  - `diagnostic_tests.yaml` — 8 test FCE Practice Tests Plus 2 (metadati + risposte)
  - `diagnostic_texts.yaml` — 10 test completi (8 PDF + 2 online) con tutti i testi
  - `scripts/generate_test_data.py` — genera `js/tests-data.js` dai YAML
  - `scripts/import_explanations.py` — importa grammar_explanations in Supabase
- **js/tests-data.js** — 219 KB, tutti e 10 i test convertiti da YAML a JS (auto-generato)
- **Sistema test diagnostici** (NUOVO):
  - `test.html` — selezione test con unlock progressivo (Test N sblocca Test N+1)
  - `diagnostic.html` — motore test completo: guida strategia → domande → review → risultati → errori
  - `js/diagnostic.js` — logica completa: timer globale + per-parte, scoring, salvataggio errori con tag `diagnostic`
  - Tutti i tipi di Part supportati: MCQ (1,5), open cloze (2), word formation (3), key-word transformation (4), gapped text (6), multiple matching (7)
  - Guida strategia PDF embedded per ogni Part (skippable)
  - Timer visibile, confronto con tempi FCE attesi (Part 1-3: 10min, Part 4-7: 12min)
  - Score totale e per parte, analisi errori con spiegazioni
  - Errori salvati in `State.sessionErrors` con tag `source: 'diagnostic'`
- **Navigazione aggiornata** (NUOVO):
  - Nav: Home | Sessione | **Test** (nuovo) | Libreria | Stats
  - `log.html` rimosso dal nav (mantiene funzionalità ma non è nav principale)
  - `stats.html` ora include log errori collassabile: sempre visibili ultimi 3, espandibile per vedere tutti; filtri per parte/sorgente

### Supabase — tabella da creare per test diagnostici
Eseguire in Supabase SQL editor:
```sql
CREATE TABLE diagnostic_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  test_id INTEGER NOT NULL,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  submitted_at TIMESTAMPTZ,
  answers JSONB DEFAULT '{}',
  time_by_part JSONB DEFAULT '{}',
  score_by_part JSONB DEFAULT '{}',
  total_score INTEGER,
  total_questions INTEGER,
  completed BOOLEAN DEFAULT FALSE,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE diagnostic_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users own their sessions" ON diagnostic_sessions FOR ALL USING (auth.uid() = user_id);
```
(Per ora i risultati sono salvati in localStorage — Supabase sync è TODO)

### Cosa vuole l'utente (obiettivi generali)
- App studio FCE B2: piano 60 giorni + esercizi adattativi per argomento debole
- Test diagnostici (10 test completi) con unlock progressivo, review errori con spiegazioni grammaticali
- Sessioni giornaliere: teoria + esercizi per ogni giorno del piano
- Review adattiva: mostra spiegazioni grammaticali degli argomenti sbagliati (NON esercizi — prima le spiegazioni, poi l'utente sceglie se fare esercizi)
- Library: spiegazioni grammaticali consultabili (53 regole)

### Prossimi step (in ordine di priorità)
1. **Push GitHub** — `tramitemarketing/tramitenglish` via MCP
2. **Supabase: tabella `diagnostic_sessions`** — SQL sopra
3. **Script import exercises YAML→Supabase** — esercizi Parts 1-7 in tabella `exercises` (tabella esiste ma va verificata struttura colonne)
4. **content.js popolato** — piano 60 giorni con teoria + esercizi per ogni giorno (attualmente solo Day 1)
5. **Library wired** — `library.html` fetch da Supabase `grammar_explanations` (script import già pronto)
6. **Review adattiva wired** — `review.html` mostra spiegazioni grammaticali degli errori + link a esercizi per argomento
7. **Supabase sync test results** — `diagnostic_sessions` table + sync errori in `user_errors`

### Decisioni tecniche già prese
- Auth: Supabase email/password (no OAuth per ora)
- Storage stato utente: `localStorage('te_state')` per sessione + sync Supabase `user_state` (TODO)
- Test diagnostici: dati in `js/tests-data.js` (generato da YAML); risultati in localStorage; Supabase sync TODO
- Errori diagnostici: tag `source: 'diagnostic'` in `sessionErrors[]`, stessa struttura degli errori da sessione
- Esercizi sessioni giornaliere: attualmente da `content.js` (hardcoded); futuro: Supabase per tag-based adaptive
- Spiegazioni grammaticali: Supabase tabella `grammar_explanations` (53 voci pronte, script import già scritto)

## Running locally

No build step. Open `index.html` in a browser (file:// works), or:

```bash
python3 -m http.server 8080
```

Deploy: push to GitHub → Cloudflare Pages picks it up automatically (no build command, output dir = `/`).

## Architecture

Pure vanilla HTML/CSS/JS, no framework. All state in `localStorage`.

### File roles

| File | Role |
|------|------|
| `js/app.js` | Core: Auth, State, Plan, Adaptive, Theme, helper functions |
| `js/content.js` | All theory HTML and exercise objects, keyed by day number |
| `css/style.css` | Terra design system — all variables, components, layout |
| `index.html` | Login (auto-redirects to dashboard if already logged in) |
| `dashboard.html` | Day counter, streak, 60-day calendar, weak topics |
| `session.html` | Study flow: theory card → exercises → recap |
| `library.html` | Grammar accordion reference with text search |
| `log.html` | Error log (standalone, non più nel nav principale) |
| `stats.html` | Accuracy bars, error log collassabile, personal notes |
| `test.html` | Selezione test diagnostici (unlock progressivo) |
| `diagnostic.html` | Motore test FCE completo (strategia → domande → review → risultati → errori) |
| `js/tests-data.js` | Dati dei 10 test (auto-generato da generate_test_data.py) — NON editare manualmente |
| `js/diagnostic.js` | Logica test diagnostici: timer, scoring, navigazione parti |

### js/app.js objects

- **`Auth`** — `login()`, `logout()`, `getUser()`, `requireAuth()`. Mock localStorage auth; Supabase is a future TODO.
- **`State`** — single `localStorage('te_state')` object. Fields: `currentDay`, `streak`, `totalMinutes`, `completedDays[]`, `topicScores{}`, `sessionErrors[]`, `notes[]`. `load()` always merges with defaults so missing fields from old schema versions don't crash.
- **`Plan`** — 60-entry schedule array `{day, topic, section, part}`. `Plan.today()` reads `state.currentDay`.
- **`Adaptive`** — `weakTopics(n)` sorts `topicScores` by lowest %. `todayPlan()` returns `{main, review}`.
- **`Theme`** — persists dark/light to `localStorage('te_theme')`.

### js/content.js functions

- **`topicKeyForDay(day)`** — maps day → topic key string (days 1–7 → `'verb_tenses'`, 8–14 → `'modals'`, etc.)
- **`getTheoryFor(day)`** — returns HTML string from `THEORY[day]`, falls back to a generic card
- **`getExercisesFor(day)`** — returns exercise array from `EXERCISES[day]`, or `null` (session skips to recap)

Exercise object shape:
```js
{ type: 'multiple'|'fill'|'transform',
  part: 'Part N',
  question: '...',
  options: [...], correct: 0,   // multiple only
  answer: '...'|[...],          // fill/transform — array = multiple accepted answers
  keyword: '...',               // transform only
  explanation: '...' }
```

## Critical patterns

### Auth redirect — always use `location.replace()`, never `location.href`

Using `location.href` for automatic redirects creates a browser-history loop (Back button bounces between login and dashboard forever).

```js
// index.html — already logged in
if (Auth.getUser()) { window.location.replace('dashboard.html'); return; }

// Protected pages — wrap ALL code in an IIFE so return stops execution
(function() {
  if (!Auth.getUser()) { window.location.replace('index.html'); return; }
  // ... all page init here
})();
```

### Adding content for a new day

Edit only `js/content.js`:
1. `THEORY[day] = '<html string>'` — shown before exercises
2. `EXERCISES[day] = [...]` — array of exercise objects

Days without an entry in `EXERCISES` show theory only and go straight to recap.

### session.html layout exception

`session.html` does **not** use `.page-content` (which assumes a fixed topbar + bottom nav). It has its own sticky `.session-topbar` and no bottom nav, so it sets `padding: 16px` directly on `#mainContent`.

### CSS design tokens

Key variables in `style.css`:
- `--accent`: #b45309 (amber/terra, dark mode: #d97706)
- `--topbar-h`: 58px, `--nav-h`: 68px (used in `.page-content` padding calculations)
- `.page-content` = standard page wrapper with correct top/bottom padding for fixed topbar + bottom nav
