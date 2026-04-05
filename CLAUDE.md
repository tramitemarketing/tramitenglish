# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status (aggiornato 2026-04-05)

---

### Completato ✅ — Infrastruttura base

- **Supabase** — tabelle `user_state`, `exercises`, `user_errors` create con RLS policies e trigger `updated_at`. Auth reale con email/password funzionante.
- **js/app.js** — Auth/State/Plan/Adaptive con Supabase reale. Credenziali: `SUPABASE_URL = 'https://zmnjoiuvmyyyrveooxzp.supabase.co'`.
- **GitHub** — repo `tramitemarketing/tramitenglish`. MCP configurato. Cloudflare Pages collegato al repo (deploy automatico su push a `main`, no build command, output dir `/`).
- **YAML database** — `tramitenglish/database/`:
  - `exercises_part1-7.yaml` — esercizi completi con tag system 6 livelli
  - `grammar_explanations.yaml` — 53 regole grammaticali complete (IT+EN, con story)
  - `diagnostic_tests.yaml` — 8 test FCE Practice Tests Plus 2 (metadati + risposte)
  - `diagnostic_texts.yaml` — 10 test completi (8 PDF + 2 online) con tutti i testi
  - `scripts/generate_test_data.py` — genera `js/tests-data.js` dai YAML
  - `scripts/import_explanations.py` — importa grammar_explanations in Supabase
- **js/tests-data.js** — 219 KB, tutti e 10 i test convertiti da YAML a JS (auto-generato). NON editare manualmente.
- **Sistema test diagnostici**:
  - `test.html` — selezione test con unlock progressivo (Test N sblocca Test N+1)
  - `diagnostic.html` — motore test completo: guida strategia → domande → review → risultati → errori
  - `js/diagnostic.js` — logica completa: timer globale + per-parte, scoring, salvataggio errori con tag `diagnostic`
  - Tutti i tipi di Part supportati: MCQ (1,5), open cloze (2), word formation (3), key-word transformation (4), gapped text (6), multiple matching (7)
  - Risultati salvati in `localStorage('te_test_results_N')` con struttura `{testId, totalCorrect, totalQ, scoreByPart, completedAt, errors[]}`
  - Lista test completati in `localStorage('te_completed_tests')` come array di interi

---

### Completato ✅ — Design System Redesign (sessione precedente)

Redesign completo dell'UI su tutte le pagine principali. Approccio: brief React/Tailwind come specifiche, tradotto in vanilla HTML/CSS/JS.

#### Fonts (ogni pagina carica i propri via `<link>` inline)
```
DM Serif Display  → titoli grandi (h1 dashboard, "Your Progress" in stats)
Plus Jakarta Sans → UI generale (già era il font base)
JetBrains Mono    → numeri, timer, percentuali (classe .font-mono inline)
```
I font vengono caricati da Google Fonts nella `<head>` di ogni singola pagina ridisegnata. **Non sono nel css/style.css globale** — ogni pagina ha il proprio `<link>` + `<style>` inline per le varianti specifiche.

#### css/style.css — modifiche (commit 8100df2)
- Aggiunto `.nav-item:hover { color: var(--accent); background: var(--accent-light); }` 
- `transition` su `.nav-item` estesa a `color 0.15s, background 0.15s`
- Il file base mantiene i token Terra originali (light mode, nessun dark mode globale)
- Dark mode nei singoli HTML se presente, non nel CSS globale

#### dashboard.html — redesign completo
- `<h1>` in DM Serif Display con greeting dinamico (Buongiorno/Buonasera)
- Due colonne su desktop (≥1024px): sinistra = streak+day, destra = piano+azioni
- Griglia streak 60 giorni con animazione **staggered fillIn** (150ms/cella, cap 900ms):
  ```js
  cell.style.animationDelay = Math.min(doneIdx * 30, 900) + 'ms';
  ```
- Pill durata sessione (20/30/40 min) con persistenza `localStorage('te_session_duration')`
- Stats grid con animazione **fadeUp** (100ms stagger tra celle)
- Badge area deboli (`.badge-error`) mostrati solo se `topicScores` ha dati

#### session.html — redesign completo
- Tre tipi esercizio implementati:
  - **Type A (fill)**: input testuale libero
  - **Type B (MCQ)**: bottoni opzione con feedback colore
  - **Type C (word reorder)**: chip click-to-place tra word bank e answer zone (NO drag API — più affidabile mobile)
- Implementazione word reorder:
  ```js
  function moveChip(chip) {
    if (bank.contains(chip)) {
      bank.removeChild(chip); chip.classList.add('placed'); zone.appendChild(chip);
    } else {
      zone.removeChild(chip); chip.classList.remove('placed'); bank.appendChild(chip);
    }
    confirmBtn.disabled = zone.children.length === 0;
  }
  ```
- Icone feedback SVG (non emoji): ✓ = path verde, ✗ = path rosso
- Keyboard nav: `Escape` → exit dialog, `1-4` → selezione MC, `Enter` → conferma/next
- CTA sticky su mobile (fixed bottom), statica su desktop
- Recap: "Rivedi gli errori" → `stats.html` se ci sono errori, altrimenti "Completa la giornata" → `dashboard.html`

#### test.html — redesign completo
- Icone SVG lock/arrow al posto di emoji
- Badge stato: `status-available / completed / progress / locked` (no emoji)
- Strip info esame (border-left: 2px accent)
- Hover: solo border-color change, no shadow

#### diagnostic.html — redesign completo (senza toccare diagnostic.js)
- **Topbar a 3 colonne** (`grid-template-columns: 1fr auto 1fr`):
  - Sinistra: `← back` + titolo parte corrente (`#headerTitle`)
  - Centro: `#headerTimer` grande in JetBrains Mono + label "elapsed"
  - Destra: button "Review & Submit" → chiama `goToReview()`
- **Banner warning tempo** (`#timeWarning`): nascosto di default, appare a 60 min, pulsa a 70 min
  ```js
  if (!warningShown && secs >= 60 * 60) {
    warningShown = true;
    document.getElementById('timeWarning').classList.add('show');
  }
  ```
- **Tutti i contratti CSS/ID di diagnostic.js preservati intatti**:
  - ID: `headerTimer`, `headerTitle`, `progressFill`, `diagFooter`, `prevBtn`, `nextBtn`, `reviewBtn`
  - Classi: `strat-*`, `q-card`, `opt-btn`, `opt-selected`, `passage-box`, `review-part-*`, `results-*`, `errors-*`

---

### Completato ✅ — stats.html redesign (questa sessione, 2026-04-05)

Redesign completo. La pagina risponde alla domanda: "Sto migliorando davvero?"

#### Struttura
```
Page header → "Your Progress" (DM Serif Display) + date range + pills 7d/30d/All + Export PDF
Section 1   → 4 metric cards (2×2 mobile, 4-in-a-row ≥600px)
Section 2   → SVG line chart (test accuracy over time)
Section 3   → Grammar breakdown (da topicScores, worst-first)
Section 4   → 60-day journey grid (con tooltip per cella)
Section 5   → Test history (da te_test_results_N)
Section 6   → Insights (3 card auto-generate da dati reali)
---divider---
Error log   → preservato: filtri chip, preview 3+expand, filtro per parte/sorgente
Notes       → preservato: autosave, textarea
Data zone   → preservato: download CSV, download TXT, reset stats
```

#### Metric cards — dettagli tecnici
- **Overall Accuracy**: calcolato da `topicScores` aggregato (`Σcorrect / Σtotal`)
- **Exercises Done**: `Σtotal` di tutti i topicScores
- **Current Streak**: da `state.streak`
- **Estimated Level**: logica → ≥85% = B2+, ≥75% = B2, ≥62% = B1+, <62% = B1
- Count-up animation su mount: `requestAnimationFrame` con `easeOut(t) = 1 - (1-t)²`, durata 250–350ms

#### SVG line chart — dettagli tecnici
- Dati: test results da `localStorage('te_test_results_N')` filtrati per range date
- viewBox: `0 0 560 190`, padding: left=34, right=28, top=14, bottom=32
- Linea smooth con algoritmo **Catmull-Rom → Bézier**:
  ```js
  function smoothLinePath(pts) {
    // control points: cp1 = p1 + (p2-p0)/6, cp2 = p2 - (p3-p1)/6
  }
  ```
- Area fill: `<polygon>` con `opacity: 0.07`
- Linea B2 reference a 80%: dashed, labeled "B2"
- **Draw-in animation** su mount:
  ```js
  var len = pathEl.getTotalLength();
  pathEl.style.strokeDasharray = len;
  pathEl.style.strokeDashoffset = len;
  pathEl.style.transition = 'stroke-dashoffset 0.4s ease';
  pathEl.style.strokeDashoffset = '0';
  ```
- Tooltip: `position: fixed`, segue mouse via `mousemove`
- Empty state se <2 test: "No exam data yet" + CTA → test.html
- Labels X-axis sparse: solo indice 0, middle, last

#### Grammar breakdown — dettagli tecnici
- Fonte dati: `state.topicScores` (aggregato all-time, non filtrabile per range — nessun timestamp per-esercizio)
- Ordinamento: dal peggiore al migliore (`pct ASC`)
- Max 8 righe visibili, "Show all N areas" ghost button per espandere
- **Weak callout**: card con border-left accent, mostra 3 topic peggiori (<75%), CTA "Practice these now" → session.html
- Animazione: ogni riga ha `opacity: 0; animation: fadeUp 0.25s ease forwards` con `animation-delay: i*50ms`
- Progress bar: `width: 0%` iniziale, poi `transition: width 0.4s ease` → `width: pct%` via `requestAnimationFrame`
- Colori barre/badge: ≥75% = success (verde), 50–74% = warning (ambra), <50% = error (rosso)

#### 60-day journey grid — dettagli tecnici
- Ogni cella è un `.cal-day-wrap` con tooltip assoluto `.cal-day-tip` che appare su hover
- Tooltip mostra: "Day N — completed/today/upcoming/rest day"
- Stats row sotto griglia:
  - **Longest streak**: `longestConsecutive(completedDays[])` (massima sequenza consecutiva nei numeri dei giorni)
  - **Active / 60**: `completedDays.length`
  - **Tests taken**: `completedTestIds.length`

#### Test history — dettagli tecnici
- Fonte: `localStorage('te_completed_tests')` → array di ID → `localStorage('te_test_results_N')`
- Struttura risultato: `{testId, totalCorrect, totalQ, completedAt, scoreByPart, errors[]}`
- Mostra max 5 righe, "Show all N" per espandere
- Badge pass/fail: ≥60% = pass (badge-success), <60% = fail (badge-error)
- Link "Review" → `diagnostic.html?test=N&review=1`
- Empty state: "No exam simulations yet" + CTA → test.html

#### Insights — dettagli tecnici
- Generati al volo da dati reali, non statici
- Regole:
  1. Se streak ≥ 3 → "X consecutive days studied"
  2. Se topic con ≥5 esercizi esiste → "X is your strongest area at Y%"
  3. Se topic con <70% esiste → "X needs attention at Y%" + CTA practice
  4. Se ≥2 test → confronto last vs prev: "Last exam score up/down N points"
- Sezione nascosta (`display:none`) se nessun insight disponibile
- Tono: fattuale, no esclamativi, no emoji

#### Time range pills — comportamento
- Range: 7 giorni / 30 giorni / All time
- Filtrano: chart (test results per data), error log (errors per `e.date`)
- NON filtrano: grammar breakdown (topicScores non ha timestamp) — labeled "All time"
- `renderAll()` ri-renderizza tutto al cambio range

---

### Completato ✅ — Nav bar uniforme (questa sessione, 2026-04-05)

Problema: emoji nav + ordine inconsistente tra pagine + nessun hover state.

**Ordine canonico** (fisso su tutte le pagine):
```
Home | Sessione | Test | Libreria | Stats
```

**Icone SVG** (stroke="currentColor", fill="none", 22×22) su tutte le pagine:
| Tab | SVG |
|-----|-----|
| Home | Casa con porta |
| Sessione | Cerchio con triangolo play |
| Test | Documento con righe |
| Libreria | Libro aperto |
| Stats | 3 barre verticali |

**Hover state** aggiunto in `css/style.css`:
```css
.nav-item:hover {
  color: var(--accent);
  background: var(--accent-light); /* giallo ambra leggero = #fef3c7 */
}
```

**Pagine aggiornate**: `dashboard.html`, `library.html`, `test.html`, `log.html`, `stats.html`
**Problema risolto**: dashboard.html e library.html avevano Library prima di Test — corretto.
**Label italiane** uniformi: Sessione, Test, Libreria (stats.html era in inglese).

---

### Completato ✅ — Supabase sync errori (questa sessione, 2026-04-05)

Gli errori ora vengono salvati sull'account Supabase e sono disponibili su tutti i dispositivi/browser.

#### Flusso dati
```
Errore fatto dall'utente
  → State.recordError(errorObj)
      ├── 1. Salva in localStorage IMMEDIATAMENTE (veloce, funziona offline)
      └── 2. _pushErrorToCloud(errorObj) — async fire-and-forget

Login utente
  → Auth.login()
      └── await State.syncFromCloud() — scarica tutti gli errori da Supabase → localStorage
```

#### `State._pushErrorToCloud(e)` — dettaglio
```js
await _supabase.from('user_errors').insert({
  user_id:      user.id,
  exercise_id:  null,                  // non ancora linkato agli esercizi nel DB
  wrong_answer: e.userAnswer || null,  // colonna esistente
  tags:         e.part ? [e.part] : [],// colonna esistente (ARRAY)
  reviewed:     false,
  error_count:  1,
  last_seen_at: e.date || new Date().toISOString(),
  source:       e.source || 'session', // colonna AGGIUNTA via ALTER TABLE
  part:         e.part || null,        // colonna AGGIUNTA
  question:     e.question || null,    // colonna AGGIUNTA
  user_answer:  e.userAnswer || null,  // colonna AGGIUNTA
  correct:      e.correct || null,     // colonna AGGIUNTA
  explanation:  e.explanation || null  // colonna AGGIUNTA
});
```
Silent fail (try/catch vuoto) — localStorage è il fallback.

#### `State.syncFromCloud()` — dettaglio
```js
const { data } = await _supabase
  .from('user_errors')
  .select('id, last_seen_at, source, part, question, user_answer, wrong_answer, correct, explanation, reviewed')
  .eq('user_id', user.id)
  .order('last_seen_at', { ascending: false })
  .limit(500);
// Mappa colonne Supabase → struttura oggetto errore locale:
// last_seen_at → date, user_answer || wrong_answer → userAnswer
```

#### Schema attuale `user_errors` (verificato 2026-04-05)
| Colonna | Tipo | Note |
|---------|------|------|
| `id` | integer | PK auto-increment |
| `user_id` | uuid | FK auth.users |
| `exercise_id` | integer | NULL per errori free-form |
| `wrong_answer` | text | colonna originale |
| `tags` | ARRAY | colonna originale, contiene [part] |
| `reviewed` | boolean | se l'utente ha rivisto l'errore |
| `error_count` | smallint | quante volte ripetuto |
| `last_seen_at` | timestamptz | quando fatto l'ultimo errore |
| `created_at` | timestamptz | prima occorrenza |
| `source` | text | 'session' o 'diagnostic' — AGGIUNTA |
| `part` | text | 'Part 1'...'Part 7' — AGGIUNTA |
| `question` | text | testo domanda — AGGIUNTA |
| `user_answer` | text | risposta sbagliata estesa — AGGIUNTA |
| `correct` | text | risposta corretta — AGGIUNTA |
| `explanation` | text | spiegazione errore — AGGIUNTA |

---

### Supabase — tabella ancora da creare

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
CREATE POLICY "Users own their sessions" ON diagnostic_sessions
  FOR ALL USING (auth.uid() = user_id);
```
*(Risultati test salvati in localStorage per ora — Supabase sync è TODO)*

---

### Cosa vuole l'utente (obiettivi generali)
- App studio FCE B2: piano 60 giorni + esercizi adattativi per argomento debole
- Test diagnostici (10 test completi) con unlock progressivo, review errori con spiegazioni grammaticali
- Sessioni giornaliere: teoria + esercizi per ogni giorno del piano
- Review adattiva: mostra spiegazioni grammaticali degli argomenti sbagliati + link a esercizi per argomento
- Library: spiegazioni grammaticali consultabili (53 regole) — popup full-screen desktop, reveal IT ✅
- Errori salvati per account (non solo localStorage) ✅ FATTO

---

### Sistema esercizi grammaticali — decisioni prese (2026-04-05)

#### Separazione fondamentale
- `exercises_part1-7.yaml` → esercizi FCE format per i **test diagnostici** (già implementati)
- Esercizi grammaticali → contenuto **didattico per le sessioni 60 giorni** (da creare)
- Sono due sistemi distinti con scopi diversi

#### Tipi di esercizi confermati per sessioni grammaticali

| Tipo | Frequenza | Quando usarlo | Auto-correggibile |
|------|-----------|---------------|-------------------|
| **Fill-in / open cloze** | Alta | Core di ogni sessione | ✅ array risposte |
| **Error correction** | Alta | Trappole B2, falsi amici | ✅ |
| **Part 4 transformation** | Alta | Strutture equivalenti, riscrittura | ✅ array |
| **Traduzione IT→EN** | Bassa | Dove IT/EN divergono strutturalmente; ANCHE come esercizio finale misto per riconoscere quale tempo usare | ✅ array |
| **Scelta binaria** | Bassa | Coppie confuse (since/for, make/do, say/tell, still/yet/already) | ✅ |
| **Completion con contesto** | Media | Frasi con time marker, sequenze temporali | ✅ |
| **Error identification** (solo trova, non correggi) | Bassa | Adverb placement, agreement, doppia negazione | ✅ lettera A/B/C/D |
| **Sentence building da prompt** | Bassa | Solo strutture (passive, reported, relative, wish) | ✅ array |

Esclusi definitivamente: MCQ 4 opzioni, riordina parole, abbinamento.

##### Micro-topic per traduzione IT→EN
Present perfect vs passato prossimo · Passivo con "si" · Falsi amici strutturali (eventually/eventualmente) · Gerundio vs infinito · Discorso indiretto (backshift) · Condizionali tipo 2/3 · Articolo con nomi astratti

##### Micro-topic per scelta binaria
since/for · still/yet/already · make/do · say/tell · used to/would · by/until · during/while · in/at/on (tempo) · some/any · much/many/a lot of · a/the/Ø · raise/rise, lie/lay, bring/take

##### Micro-topic per sentence building
Domande indirette · Passive construction · Reported speech · Relative clauses · Frasi con wish

##### Micro-topic per error identification
Adverb placement · Subject-verb agreement (collective nouns) · Doppia negazione · Aggettivo/avverbio confusi · Articolo "the" con nomi geografici · Comparativi irregolari · Pronomi riflessivi superflui

Esclusi: MCQ 4 opzioni, riordina parole, abbinamento.

#### Distribuzione difficoltà (per ogni sessione/topic)
```
10%  Easy    → A2/B1 base, struttura chiara
20%  Medium  → B1/B2, qualche eccezione
50%  Hard    → B2 FCE-level, trappole comuni
20%  C1      → C1 super difficile, uso nativo
```
La difficoltà sale progressivamente dentro ogni sessione giornaliera.

#### Numero esercizi per sessione
Da definire — minimo 6, massimo ~15. Progressione giornaliera all'interno del topic.

#### Istruzioni degli esercizi
In **inglese** (come FCE reale).

#### Fonte degli esercizi
Creazione collaborativa: ricerca su internet (≥30 siti per macro-topic) → raccolta esercizi → selezione e adattamento insieme all'utente. Si procede un macro-topic alla volta, partendo dai **Tempi Verbali**.

#### Tag system (da definire dopo raccolta esercizi)
Ogni esercizio avrà tag multipli che coprono tutti gli aspetti grammaticali della frase.
Granularità da decidere: topic + pattern + difficoltà + tipo errore comune.
I tag saranno condivisi con `grammar_explanations.yaml` per permettere il collegamento errore→spiegazione→esercizi.

#### Storage esercizi grammaticali
Da decidere. Opzioni: `content.js` statico, YAML con script, Supabase.
**Decisione posticipata** a dopo la raccolta del materiale.

#### Padronanza / spaced repetition
TODO — da trattare dopo implementazione base esercizi.

---

### Flusso test → ripasso (da implementare)

#### UX decisa: "Struggled with" inline sotto i risultati completi

**Struttura schermata risultati di `diagnostic.html` dopo il test:**
```
[Score totale + breakdown per Part]          ← già esiste
        ↓
[Struggled with — sezione inline]            ← DA AGGIUNGERE
  Per ogni errore:
  - testo domanda + tua risposta + risposta corretta
  - [Study this rule →]  ← apre popup library con spiegazione grammaticale
  - [Practice similar exercises →]  ← porta a review.html filtrato
```

**Comportamento deciso:**
- La sezione "Struggled with" appare sempre sotto i risultati (nessuna soglia minima)
- Ogni errore mostra domanda, risposta sbagliata, risposta corretta + 2 bottoni
- Primo bottone "Study this rule" → apre popup library (teoria per quella regola)
- Secondo bottone "Practice similar exercises" → porta a review.html filtrato per topic
- Flusso ripasso: prima teoria (popup), poi esercizi
- Dopo ripasso completato → torna a dashboard

#### Mapping errore FCE → topic grammaticale (decisione PENDENTE)

Il sistema deve sapere che "She ___ in London since 2015 (has lived)" riguarda "present_perfect".
Attualmente questa info non esiste nel YAML.

**3 opzioni spiegate:**
- **Soluzione 1 — Tag manuale per domanda**: aggiungere `grammar: [present_perfect, for_since]` a ogni domanda nel YAML. Preciso, lavoro una volta sola su ~200 domande.
- **Soluzione 2 — Mappatura per Part**: `Part 2 → [verb_tenses, prepositions]` automatica. Zero lavoro, approssimativa.
- **Soluzione 3 — Ibrida**: Soluzione 2 ora come fallback + Soluzione 1 graduale.

**Decisione utente**: TBD (da chiarire nella prossima sessione)

---

### Prossimi step (in ordine di priorità)

1. **Raccolta esercizi grammaticali online** — ricerca ≥30 siti per macro-topic, partendo da **Tempi Verbali**. Creare file con tutti gli esercizi trovati. Poi selezione + adattamento collaborativo con l'utente.

2. **Redirect test → ripasso** — aggiungere bottone CTA in `diagnostic.html` (schermata risultati) che porta a `review.html` pre-filtrato per topic degli errori. Dettagli flusso da definire (vedi domande aperte sopra).

3. **Library wired** — `library.html` fa già fetch da Supabase (codice scritto) ma le 53 regole non sono ancora importate. Passi: (a) eseguire `scripts/import_explanations.py`, (b) eseguire migration SQL `003` e `004`.

4. **Dark mode toggle** ✅ FATTO in settings.html — tema chiaro/auto/scuro con persistenza localStorage.

5. **content.js popolato** — THEORY[] e EXERCISES[] esistono solo per Day 1/2/8/15. Riempire giorni 3–60 con esercizi grammaticali (dipende da step 1).

6. **Review adattiva wired** — `review.html` deve mostrare spiegazioni grammaticali errori + link esercizi. Dipende da step 1 (tag system) e step 2 (flusso).

7. **Supabase sync test results** — tabella `diagnostic_sessions` (SQL già scritto) + wiring in `diagnostic.js`.

8. **Padronanza / spaced repetition** — TODO dopo implementazione base esercizi.

9. **user_state sync** — streak, completedDays, topicScores su Supabase. Ultima priorità.

---

### Decisioni tecniche

- **Auth**: Supabase email/password (no OAuth)
- **Storage primario**: `localStorage('te_state')` — veloce, offline-first
- **Sync Supabase**: errori ora sincronizzati ✅; stato utente (streak, days) ancora TODO
- **Test diagnostici**: dati in `js/tests-data.js` (JS generato da YAML); risultati in localStorage; Supabase sync TODO
- **Errori**: tag `source: 'diagnostic'` per errori da test, `source: 'session'` per esercizi
- **Esercizi sessioni**: da `content.js` (hardcoded); futuro: Supabase per tag-based adaptive
- **Spiegazioni grammaticali**: Supabase `grammar_explanations` (53 voci, script import pronto)
- **Nav**: ordine fisso Home|Sessione|Test|Libreria|Stats, SVG icons, amber hover

---

## Running locally

No build step. Open `index.html` in a browser (`file://` works), or:

```bash
python3 -m http.server 8080
```

Deploy: push to GitHub → Cloudflare Pages auto-deploys (no build command, output dir `/`).

---

## Architecture

Pure vanilla HTML/CSS/JS, no framework. All state in `localStorage`.

### File roles

| File | Role |
|------|------|
| `js/app.js` | Core: Auth, State (+ Supabase sync), Plan, Adaptive, Theme, UI helpers |
| `js/content.js` | Theory HTML + exercise objects keyed by day number (solo Day 1 attivo) |
| `css/style.css` | Terra design system — tokens, components, layout, nav hover |
| `index.html` | Login (auto-redirect a dashboard se già loggato) |
| `dashboard.html` | Greeting DM Serif, streak grid animato, session pills, stats row |
| `session.html` | Study flow: theory → esercizi (fill/MCQ/word-reorder) → recap |
| `library.html` | Grammar accordion (statico — TODO: wiring Supabase) |
| `log.html` | Error log standalone (non nel nav principale) |
| `stats.html` | Progress dashboard: metrics, chart SVG, grammar breakdown, journey, test history, insights |
| `test.html` | Selezione test diagnostici (unlock progressivo) |
| `diagnostic.html` | Motore test FCE: strategia → domande → review → risultati → errori |
| `review.html` | Review adattiva (TODO: wiring spiegazioni grammaticali) |
| `settings.html` | Impostazioni account |
| `js/tests-data.js` | Dati 10 test (auto-generato da `scripts/generate_test_data.py`) — NON editare |
| `js/diagnostic.js` | Logica test: timer, scoring, navigazione parti, salvataggio errori |

### js/app.js — oggetti principali

- **`Auth`** — `login(email, pw)`, `logout()`, `getUser()`, `requireAuth()`.
  - `login()` chiama `State.syncFromCloud()` dopo il login per scaricare gli errori.
- **`State`** — singolo oggetto in `localStorage('te_state')`.
  - Campi: `currentDay`, `streak`, `lastStudied`, `totalMinutes`, `completedDays[]`, `topicScores{}`, `sessionErrors[]`, `notes[]`.
  - `load()` fa merge con `_defaults` — campi mancanti non crashano.
  - `recordError(obj)` — salva locale + chiama `_pushErrorToCloud()` async.
  - `_pushErrorToCloud(e)` — insert su `user_errors` Supabase, silent fail.
  - `syncFromCloud()` — fetch errori Supabase → sovrascrive `sessionErrors` in localStorage.
- **`Plan`** — schedule 60 giorni `{day, topic, section, part}`. `Plan.today()` legge `state.currentDay`.
- **`Adaptive`** — `weakTopics(n)` ordina `topicScores` per % più bassa. `todayPlan()` → `{main, review}`.
- **`Theme`** — persiste dark/light in `localStorage('te_theme')`.

### Error object shape

```js
{
  date:        ISO string,          // quando è avvenuto l'errore
  source:      'session'|'diagnostic',
  part:        'Part 1'|...|'Part 7',
  question:    string,              // testo domanda (può contenere HTML)
  userAnswer:  string,              // risposta sbagliata dell'utente
  correct:     string,              // risposta/e corretta/e
  explanation: string,              // spiegazione HTML
  // campi opzionali aggiunti da syncFromCloud:
  _id:         number,              // Supabase row id
  reviewed:    boolean              // se l'utente ha rivisto l'errore
}
```

### localStorage keys

| Key | Contenuto |
|-----|-----------|
| `te_state` | Oggetto State completo |
| `te_user` | Oggetto utente Supabase |
| `te_theme` | `'dark'` o `'light'` |
| `te_session_duration` | `20`, `30`, o `40` (minuti sessione) |
| `te_test_session_N` | Sessione test N in corso (risposte parziali) |
| `te_test_results_N` | Risultati test N completato |
| `te_completed_tests` | Array JSON di test ID completati |

---

## Critical patterns

### Auth redirect — sempre `location.replace()`, mai `location.href`

`location.href` crea loop nella history del browser (Back rimbalza tra login e dashboard).

```js
// index.html — già loggato
if (Auth.getUser()) { window.location.replace('dashboard.html'); return; }

// Pagine protette — tutto in IIFE così return ferma l'esecuzione
(function() {
  if (!Auth.getUser()) { window.location.replace('index.html'); return; }
  // ... init pagina
})();
```

### Aggiungere contenuto per un nuovo giorno

Modificare solo `js/content.js`:
1. `THEORY[day] = '<html string>'` — mostrato prima degli esercizi
2. `EXERCISES[day] = [...]` — array di esercizi

Giorni senza `EXERCISES` mostrano solo la teoria e vanno direttamente al recap.

### session.html — eccezione layout

`session.html` **NON usa** `.page-content`. Ha il proprio `.session-topbar` sticky e nessun bottom nav. Usa `padding: 16px` direttamente su `#mainContent`.

### diagnostic.js — contratti da non rompere

`diagnostic.html` può essere ridisegnato liberamente **tranne** questi ID e classi che `diagnostic.js` usa programmaticamente:

**ID obbligatori**: `headerTimer`, `headerTitle`, `progressFill`, `diagFooter`, `prevBtn`, `nextBtn`, `reviewBtn`, `backBtn`, `headerSubmitBtn`, `timeWarning`

**Classi obbligatorie**: `strat-*`, `q-card`, `opt-btn`, `opt-selected`, `passage-box`, `review-part-*`, `results-*`, `errors-*`, `phase` (con `display:none` di default)

### CSS design tokens

Variabili chiave in `css/style.css`:
```css
--bg:           #faf6f0   /* sfondo pagina */
--surface:      #fffcf8   /* card, topbar, nav */
--surface2:     #f5ece0   /* input bg, chip bg */
--border:       #e7ddd0
--accent:       #b45309   /* ambra/terra */
--accent-light: #fef3c7   /* hover nav, callout bg */
--success:      #065f46
--error:        #b91c1c
--warning:      #d97706
--subtext:      #a8887a
--topbar-h:     58px
--nav-h:        68px
```

`.page-content` = wrapper standard con padding corretto per topbar fissa + bottom nav.
Per pagine che necessitano larghezza maggiore: aggiungere classe locale con `max-width` override (es. `stats.html` usa `.stats-page { max-width: 720px }`).
