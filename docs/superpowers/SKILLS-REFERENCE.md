# TrainEnglish — Skills & Tools Reference
**Aggiornato:** 2026-04-09  
**Scopo:** Guida rapida per Claude Code su quali skill usare, quando, e come. Risparmia tempo nelle sessioni future.

---

## Flowchart decisionale

```
Nuova richiesta utente
│
├── È una richiesta CREATIVA (feature, UI, componente, comportamento)?
│   └── → SEMPRE invocare superpowers:brainstorming PRIMA di toccare il codice
│
├── Ho già un piano scritto da eseguire?
│   ├── Task indipendenti (>2)? → superpowers:dispatching-parallel-agents
│   └── Task sequenziali?       → superpowers:executing-plans
│
├── Sto per dichiarare "è fatto"?
│   └── → superpowers:verification-before-completion (esegui test/verifica prima)
│
├── Ho ricevuto feedback su un PR?
│   └── → superpowers:receiving-code-review
│
├── Ho completato una feature significativa?
│   └── → superpowers:requesting-code-review
│
├── Cerco file o simboli noti nel codebase?
│   ├── Pattern/path noto → Glob direttamente
│   ├── Stringa/simbolo noto → Grep direttamente
│   └── Ricerca aperta → Agent(subagent_type="Explore")
│
└── Richiesta UI/design/interazione?
    └── → ui-ux-pro-max (poi brainstorming → writing-plans → dispatching)
```

---

## Skills per categoria

### Planning & Execution

| Skill | Quando usarla | Input | Output |
|-------|--------------|-------|--------|
| `superpowers:brainstorming` | **OBBLIGATORIO** prima di qualsiasi feature/UI/comportamento | Idea + contesto | Design doc approvato |
| `superpowers:writing-plans` | Dopo brainstorming approvato | Design doc | Piano in `docs/superpowers/plans/` |
| `superpowers:executing-plans` | Piano sequenziale, task dipendenti | Piano + file | Implementazione con checkpoint |
| `superpowers:dispatching-parallel-agents` | 2+ task indipendenti | Lista task | Agenti paralleli |
| `superpowers:subagent-driven-development` | Piano con task isolati | Piano | Agente per task + review |

### Quality & Review

| Skill | Quando usarla | Note |
|-------|--------------|------|
| `superpowers:verification-before-completion` | Prima di dire "è fatto" o creare PR | Esegui sempre |
| `superpowers:requesting-code-review` | Dopo feature significativa | Lancia code-reviewer agent |
| `superpowers:receiving-code-review` | Quando ricevi feedback PR | Analizza prima di implementare |
| `superpowers:systematic-debugging` | Qualsiasi bug/errore inatteso | Prima di proporre fix |
| `code-review:code-review` | Review PR specifico | Usa `gh pr list` per trovare PRs aperti |
| `simplify` | Dopo implementazione | Pulisce codice modificato |

### Design & UI

| Skill | Quando usarla | Note |
|-------|--------------|------|
| `ui-ux-pro-max` | Qualsiasi decisione UI/UX | Cerca design system con `--design-system` |
| `frontend-design:frontend-design` | Implementazione UI production-grade | Post-brainstorming |
| `superpowers:brainstorming` | Prima di ogni lavoro creativo | Con visual companion per mockup |

### Git & Deploy

| Skill | Quando usarla | Note |
|-------|--------------|------|
| `commit-commands:commit` | Commit singolo | Formatta messaggio automaticamente |
| `commit-commands:commit-push-pr` | Commit + push + apri PR | Per feature branch |
| `commit-commands:clean_gone` | Pulizia branch rimossi | Usa dopo merge PR |
| `superpowers:finishing-a-development-branch` | Fine feature, prima del merge | Guida integrazione |

### Agenti specializzati (subagent_type)

| Tipo | Usa per |
|------|---------|
| `Explore` | Esplorazione codebase multi-file, ricerche aperte |
| `Plan` | Progettazione architettura, trade-off |
| `general-purpose` | Task complessi multi-step, ricerca web+codice |
| `code-reviewer` | Review indipendente post-implementazione |
| `haiku` | Task veloci (check eligibilità, grep, conteggio) — più economico |
| `sonnet` | Task standard |
| `opus` | Task complessi di scrittura/pianificazione |

---

## Pattern frequenti per questo progetto

### Pattern 1: Aggiungere una nuova pagina HTML

```
1. brainstorming → design approvato
2. writing-plans → piano con file map
3. dispatching-parallel-agents (se >1 pagina indipendente)
4. Per ogni pagina:
   - Aggiungere Snippet A (page-bg) dopo <body>
   - Aggiungere Snippet B (particles) prima di </body>
   - Aggiungere Snippet D (theme toggle JS) nel <script>
   - Aggiungere themeBtn nel topbar
5. git add + commit + push (autorizzato senza conferma)
```

### Pattern 2: Fix bug/errore

```
1. superpowers:systematic-debugging
2. Leggere il file prima di editare (mai editare alla cieca)
3. Fix minimale — non toccare altro
4. superpowers:verification-before-completion
5. Commit
```

### Pattern 3: Redesign UI

```
1. ui-ux-pro-max → design system
2. superpowers:brainstorming → visual companion (localhost:PORT)
3. Approvazione utente → writing-plans
4. dispatching-parallel-agents (gruppi di pagine)
5. Ogni agente: legge file, fa solo aggiunte, commita
6. Commit pending + push dal coordinatore
```

### Pattern 4: Aggiungere contenuto giornaliero

```
Solo modificare js/content.js:
  THEORY[day] = '<html>'
  EXERCISES[day] = [{type, question, answer, explanation}]
Tipi validi: 'fill', 'mcq', 'reorder'
```

---

## Snippet riutilizzabili — Design System Dark/Amber

### Snippet A — Background dinamico (dopo `<body>`)
```html
<div class="page-bg" aria-hidden="true"></div>
<div class="page-glow page-glow-1" aria-hidden="true"></div>
<div class="page-glow page-glow-2" aria-hidden="true"></div>
```

### Snippet B — Particelle fluttuanti (prima di `</body>`)
```html
<script>
(function () {
  var pts = [{l:'10%',t:'22%',s:2,d:0,o:0.5},{l:'35%',t:'48%',s:1.5,d:0.7,o:0.3},
    {l:'60%',t:'15%',s:3,d:1.4,o:0.4},{l:'80%',t:'58%',s:2,d:0.3,o:0.35},
    {l:'22%',t:'72%',s:1.5,d:1.9,o:0.25},{l:'90%',t:'33%',s:2.5,d:1,o:0.3}];
  var f = document.createDocumentFragment();
  pts.forEach(function (p) {
    var el = document.createElement('div'); el.className = 'particle';
    el.setAttribute('aria-hidden','true');
    el.style.cssText='left:'+p.l+';top:'+p.t+';width:'+p.s+'px;height:'+p.s+'px;--op:'+p.o+';animation:float-up '+(3+p.d)+'s ease-in-out '+p.d+'s infinite;';
    f.appendChild(el);
  });
  document.body.appendChild(f);
})();
</script>
```

### Snippet C — Topbar con theme toggle + settings SVG
```html
<div style="display:flex;align-items:center;gap:4px;">
  <button class="topbar-icon" id="themeBtn" aria-label="Cambia tema"></button>
  <a href="settings.html" class="topbar-icon" aria-label="Impostazioni">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  </a>
</div>
```

### Snippet D — Theme toggle JS (dentro IIFE esistente)
```js
(function () {
  var SUN = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var MOON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  function isDark() { var t=localStorage.getItem('te_theme')||'auto'; if(t==='dark')return true; if(t==='light')return false; return window.matchMedia('(prefers-color-scheme:dark)').matches; }
  var btn = document.getElementById('themeBtn'); if(!btn)return;
  btn.innerHTML = isDark()?SUN:MOON;
  btn.addEventListener('click',function(){ var next=isDark()?'light':'dark'; localStorage.setItem('te_theme',next); document.documentElement.setAttribute('data-theme',next); btn.innerHTML=isDark()?SUN:MOON; });
})();
```

### Snippet E — Count-up JS
```js
function countUp(el, target, suffix) {
  if (!el || isNaN(target) || target === 0) return;
  var step = Math.max(0.5, target / 25); var cur = 0;
  (function tick() { cur=Math.min(cur+step,target); el.textContent=Math.round(cur)+(suffix||''); if(cur<target)requestAnimationFrame(tick); })();
}
```

---

## CSS Design Tokens (da `css/style.css`)

| Token | Dark | Light | Uso |
|-------|------|-------|-----|
| `--bg` | `#0c0c0c` | `#fafafa` | Sfondo pagina |
| `--surface` | `#141414` | `#ffffff` | Card, topbar |
| `--surface2` | `#1c1c1c` | `#f4f4f5` | Input bg, chip |
| `--border` | `#262626` | `#e4e4e7` | Bordi |
| `--accent` | `#f59e0b` | `#b45309` | Amber primario |
| `--accent-light` | `rgba(245,158,11,0.10)` | `rgba(180,83,9,0.08)` | Hover bg |
| `--accent-shadow` | `rgba(245,158,11,0.15)` | `rgba(180,83,9,0.18)` | Box-shadow glow |
| `--success` | `#34d399` | `#059669` | Successo |
| `--error` | `#f87171` | `#dc2626` | Errore |
| `--text` | `#f5f5f5` | `#09090b` | Testo primario |
| `--text2` | `#a3a3a3` | `#52525b` | Testo secondario |
| `--subtext` | `#737373` | `#a1a1aa` | Testo terziario |
| `--font-display` | `DM Serif Display` | — | Titoli grandi |
| `--font-ui` | `Plus Jakarta Sans` | — | UI generale |
| `--font-mono` | `JetBrains Mono` | — | Numeri, timer |

---

## Regole critiche per questo codebase

### ❌ Non fare mai
- Editare `js/tests-data.js` (auto-generato da YAML)
- Cambiare IDs/classi usati da `diagnostic.js`: `headerTimer`, `headerTitle`, `progressFill`, `diagFooter`, `prevBtn`, `nextBtn`, `reviewBtn`, `backBtn`, `headerSubmitBtn`, `timeWarning`, `strat-*`, `q-card`, `opt-btn`, `opt-selected`, `passage-box`, `review-part-*`, `results-*`, `errors-*`, `phase`
- Usare `location.href` per redirect (usare sempre `location.replace()`)
- Creare file di documentazione (`.md`) senza richiesta esplicita

### ✅ Sempre fare
- Leggere il file prima di editarlo
- Aggiungere `aria-hidden="true"` agli elementi decorativi
- Mantenere `position:relative;z-index:1` su tutti gli elementi di contenuto (sopra `.page-bg`)
- Auth check su pagine protette: `if (!Auth.requireAuth()) return;`
- Usare `State.load()` per leggere stato utente
- Push diretto su main (autorizzato)

---

## Architettura Visual companion

Per sessioni di brainstorming visivo:
```bash
# Avvia server (Windows — run_in_background: true)
bash "C:/Users/PC/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/brainstorming/scripts/start-server.sh" --project-dir "C:/Users/PC/Desktop/files/claude/tramitenglish"

# Leggi URL
cat "C:/Users/PC/Desktop/files/claude/tramitenglish/.superpowers/brainstorm/<SESSION>/state/server-info"

# Screen dir per scrivere mockup
# State dir per leggere selezioni utente
```

File mockup: scrivere con `Write` tool in `screen_dir/` — il server serve automaticamente il più recente.
