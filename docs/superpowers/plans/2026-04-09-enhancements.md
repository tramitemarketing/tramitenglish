# TrainEnglish — Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Translate entire UI to English and add 8 UX enhancements (PWA, skeleton loading, keyboard shortcuts, page transitions, nav pill, toast, empty states, micro-feedback).

**Architecture:** Feature additions split into foundation (CSS/JS new files), translation (HTML edits), and wiring (adding script tags + PWA links). CSS edits are batched in one agent to avoid conflicts. New JS files are fully independent.

**Tech Stack:** Vanilla HTML/CSS/JS, no build step, Cloudflare Pages auto-deploy.

---

## Batch 0 — Already done
- [x] Nav bar CSS fix (committed 52fb37f)

---

## Batch 1 — Foundation files (parallel, no conflicts)

### Task A: PWA — manifest + service worker

**Files:**
- Create: `manifest.json`
- Create: `sw.js`
- Create: `icons/icon-192.png` (placeholder SVG-based)
- Create: `icons/icon-512.png` (placeholder SVG-based)

- [ ] Create `manifest.json`:
```json
{
  "name": "TrainEnglish",
  "short_name": "TrainEnglish",
  "description": "60-day FCE B2 English study plan",
  "start_url": "/dashboard.html",
  "display": "standalone",
  "background_color": "#0c0c0c",
  "theme_color": "#f59e0b",
  "orientation": "portrait",
  "icons": [
    { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

- [ ] Create `sw.js` (cache-first for assets, network-first for data):
```js
var CACHE = 'te-v1';
var ASSETS = [
  '/', '/index.html', '/dashboard.html', '/session.html',
  '/test.html', '/stats.html', '/library.html', '/review.html',
  '/settings.html', '/log.html', '/diagnostic.html',
  '/css/style.css', '/js/app.js', '/js/content.js', '/js/diagnostic.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(ASSETS); }));
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var net = fetch(e.request).then(function(res) {
        if (res.ok) caches.open(CACHE).then(function(c) { c.put(e.request, res.clone()); });
        return res;
      });
      return cached || net;
    })
  );
});
```

- [ ] Create `icons/` directory with SVG-based PNG placeholders using canvas technique in a small script, OR create minimal valid PNG files using base64.

  Instead: use inline SVG data URI in manifest (not supported) → create minimal 1-color PNG icons using a Node.js one-liner OR just reference a data URI icon. Best approach: create `icons/icon.svg` and reference it:

```json
// Update manifest icons to include SVG:
{ "src": "icons/icon.svg", "sizes": "any", "type": "image/svg+xml" }
```

  Create `icons/icon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <rect width="192" height="192" rx="32" fill="#0c0c0c"/>
  <text x="96" y="130" font-family="serif" font-size="100" font-weight="900" text-anchor="middle" fill="#f59e0b">T</text>
</svg>
```

---

### Task B: CSS additions — all new enhancement classes

**Files:**
- Modify: `css/style.css` (append only — no existing code changes)

All new CSS classes needed for: nav pill, improved toast, skeleton loading, page transitions, micro-feedback animations.

- [ ] Append to `css/style.css`:

```css
/* ═══════════════════════════════════════════════════════
   ENHANCEMENTS 2026-04-09
   ═══════════════════════════════════════════════════════ */

/* ── Page transitions ──────────────────────────────── */
body.page-exit {
  animation: page-out 0.15s ease forwards;
}
@keyframes page-out {
  to { opacity: 0; transform: translateY(4px); }
}

/* ── Nav active pill ───────────────────────────────── */
.bottom-nav {
  position: relative; /* already fixed via !important above */
}
.nav-pill {
  position: absolute;
  top: 6px;
  height: calc(100% - 12px);
  border-radius: 10px;
  background: var(--accent-light);
  transition: left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  z-index: 0;
}
.nav-item {
  position: relative;
  z-index: 1;
}

/* ── Toast notifications ───────────────────────────── */
#toast-container {
  position: fixed;
  bottom: calc(var(--nav-h) + 12px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;
}
.toast {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  pointer-events: all;
  animation: toast-in 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards;
  white-space: nowrap;
}
.toast.toast-out {
  animation: toast-out 0.2s ease forwards;
}
.toast-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.toast-success { border-left: 3px solid var(--success); }
.toast-error   { border-left: 3px solid var(--error); }
.toast-info    { border-left: 3px solid var(--accent); }
@keyframes toast-in {
  from { opacity: 0; transform: translateY(12px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes toast-out {
  to { opacity: 0; transform: translateY(8px) scale(0.95); }
}

/* ── Skeleton loading ──────────────────────────────── */
.skeleton {
  background: var(--surface2);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%);
  animation: shimmer 1.4s ease infinite;
}
@keyframes shimmer {
  from { transform: translateX(-100%); }
  to   { transform: translateX(100%); }
}
.skeleton-text { height: 14px; width: 70%; margin-bottom: 8px; }
.skeleton-text.wide { width: 100%; }
.skeleton-text.short { width: 40%; }
.skeleton-card { height: 80px; width: 100%; margin-bottom: 12px; border-radius: 12px; }
.skeleton-stat { height: 60px; border-radius: 10px; }

/* ── Empty states ──────────────────────────────────── */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  gap: 12px;
}
.empty-state-icon {
  width: 56px;
  height: 56px;
  color: var(--subtext);
  margin-bottom: 4px;
}
.empty-state-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text2);
}
.empty-state-text {
  font-size: 13px;
  color: var(--subtext);
  max-width: 240px;
  line-height: 1.5;
}

/* ── Micro-feedback ────────────────────────────────── */
@keyframes shake {
  0%,100% { transform: translateX(0); }
  15%      { transform: translateX(-6px); }
  30%      { transform: translateX(6px); }
  45%      { transform: translateX(-4px); }
  60%      { transform: translateX(4px); }
  75%      { transform: translateX(-2px); }
}
.shake {
  animation: shake 0.4s ease;
}
@keyframes confetti-pop {
  0%   { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
  100% { opacity: 0; transform: translateY(-60px) scale(0.5) rotate(180deg); }
}
.confetti-particle {
  position: fixed;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  pointer-events: none;
  z-index: 9998;
  animation: confetti-pop 0.6s ease forwards;
}

/* ── Keyboard shortcut hint ────────────────────────── */
.kbd-hint {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--subtext);
}
.kbd {
  display: inline-block;
  padding: 2px 5px;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  color: var(--text2);
  background: var(--surface2);
}
```

---

### Task C: New JS files — shortcuts + transitions + UI helpers

**Files:**
- Create: `js/shortcuts.js`
- Create: `js/transitions.js`
- Create: `js/toast.js`

- [ ] Create `js/toast.js`:
```js
// Toast notification system
(function(global) {
  var container;
  function getContainer() {
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  }
  function showToast(msg, type, duration) {
    type = type || 'info';
    duration = duration || 3000;
    var icons = {
      success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" color="#34d399"><polyline points="20 6 9 17 4 12"/></svg>',
      error:   '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" color="#f87171"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
      info:    '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" color="#f59e0b"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
    };
    var el = document.createElement('div');
    el.className = 'toast toast-' + type;
    el.innerHTML = (icons[type] || icons.info) + '<span>' + msg + '</span>';
    getContainer().appendChild(el);
    var t = setTimeout(function() { dismiss(el); }, duration);
    el.addEventListener('click', function() { clearTimeout(t); dismiss(el); });
    return el;
  }
  function dismiss(el) {
    el.classList.add('toast-out');
    setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, 200);
  }
  global.Toast = { show: showToast, success: function(m,d){return showToast(m,'success',d);}, error: function(m,d){return showToast(m,'error',d);}, info: function(m,d){return showToast(m,'info',d);} };
})(window);
```

- [ ] Create `js/transitions.js`:
```js
// Smooth page transitions — intercept internal links
(function() {
  function navigate(href) {
    document.body.classList.add('page-exit');
    setTimeout(function() { window.location.href = href; }, 150);
  }
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('//') || href.startsWith('#') || href.startsWith('javascript') || a.target === '_blank') return;
    // Skip if modifier key held
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(href);
  });
  // Also intercept location.replace and location.href calls? Too complex — leave those as-is.
})();
```

- [ ] Create `js/shortcuts.js`:
```js
// Global keyboard shortcuts
(function() {
  var PAGE = window.location.pathname.split('/').pop() || 'index.html';
  var NAV_SHORTCUTS = {
    'h': 'dashboard.html',
    's': 'session.html',
    't': 'test.html',
    'l': 'library.html',
    'p': 'stats.html'
  };
  document.addEventListener('keydown', function(e) {
    // Don't fire when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var key = e.key.toLowerCase();
    // Escape — go back (if not on dashboard)
    if (key === 'escape' && PAGE !== 'dashboard.html' && PAGE !== 'index.html') {
      e.preventDefault();
      window.location.href = 'dashboard.html';
      return;
    }
    // Nav shortcuts (only if not in a form)
    if (NAV_SHORTCUTS[key]) {
      e.preventDefault();
      window.location.href = NAV_SHORTCUTS[key];
    }
  });
})();
```

---

## Batch 2 — HTML Translation (parallel per group)

### Task D: Translate index.html + settings.html

**Files:**
- Modify: `index.html`
- Modify: `settings.html`

Translation key for `index.html`:
- Title: "TrainEnglish — Login"
- Email placeholder: "Email"
- Password placeholder: "Password"  
- Button: "Sign in"
- Error/validation messages: in English
- Add `<link rel="manifest" href="manifest.json">` in `<head>`
- Add `<script src="js/toast.js"></script><script src="js/transitions.js"></script><script src="js/shortcuts.js"></script>` before `</body>`
- Register service worker in inline script

Translation key for `settings.html`:
- Title: "Settings"
- "Impostazioni" → "Settings"
- "Account" → "Account"
- "Email" → "Email"
- "Stato account" → "Account status"
- "Attivo ✓" → "Active ✓"
- "Cambia Password" → "Change Password"
- "Password attuale" → "Current password"
- "Nuova password" → "New password"
- "Conferma nuova password" → "Confirm new password"
- "Aggiorna password" → "Update password"
- "Progresso" → "Progress"
- "Giorno corrente" → "Current day"
- "Giorni completati" → "Days completed"
- "Aspetto" → "Appearance"
- "Tema" → "Theme"
- "Automatico (sistema)" → "System default"
- "Sempre chiaro" → "Light"
- "Sempre scuro" → "Dark"
- "Chiaro/Auto/Scuro" buttons → "Light/Auto/Dark"
- "Notifiche" → "Notifications"
- "Promemoria giornaliero" → "Daily reminder"
- "Prossimamente disponibile" → "Coming soon"
- "Presto" → "Soon"
- "Sessione" → "Session"
- "Esci dall'account" → "Sign out"
- "Compila tutti i campi." → "Please fill in all fields."
- "Le nuove password non coincidono." → "New passwords do not match."
- "La password deve essere di almeno 8 caratteri." → "Password must be at least 8 characters."
- "Password aggiornata con successo. (stub)" → "Password updated successfully."
- Version tag: "TrainEnglish v0.1.0 — 60 days to FCE B2"
- THEME_LABELS: `{ light: 'Always light', auto: 'System default', dark: 'Always dark' }`
- Add manifest link + script tags

---

### Task E: Translate dashboard.html + add nav pill

**Files:**
- Modify: `dashboard.html`

Translations:
- Title: "TrainEnglish — Dashboard"
- Nav labels: "Home" | "Session" | "Tests" | "Library" | "Stats"
- Greeting: dynamically generated ("Good morning/Good afternoon/Good evening, [user]")
  - Change JS: `var hour = new Date().getHours(); var greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';`
- "Giorno" → "Day"
- "Streak" stays (international)
- "Piano 60 giorni" → "60-day plan"
- "Inizia sessione" → "Start session"
- "Durata sessione:" → "Session duration:"
- "Esercizi fatti" → "Exercises done"
- "Minuti studiati" → "Minutes studied"
- "% media" → "Avg. accuracy"
- Progress bar label "Giorno X di 60" → "Day X of 60"
- "Argomenti deboli" → "Weak areas"
- "Vai ai test" → "Go to tests"
- "Studia ora" → "Study now"
- Add manifest link + all 3 script tags
- Add nav pill JS (reads nav items, creates pill div, updates on page load):

```js
// Nav pill indicator
(function() {
  var nav = document.querySelector('.bottom-nav');
  if (!nav) return;
  var pill = document.createElement('div');
  pill.className = 'nav-pill';
  nav.insertBefore(pill, nav.firstChild);
  var page = window.location.pathname.split('/').pop() || 'dashboard.html';
  var items = nav.querySelectorAll('.nav-item');
  items.forEach(function(item) {
    var href = item.getAttribute('href') || '';
    if (href.includes(page) || (page === '' && href.includes('dashboard'))) {
      item.classList.add('active');
      var rect = item.getBoundingClientRect();
      var navRect = nav.getBoundingClientRect();
      pill.style.left = (rect.left - navRect.left) + 'px';
      pill.style.width = rect.width + 'px';
    }
  });
})();
```

---

### Task F: Translate session.html + add micro-feedback

**Files:**
- Modify: `session.html`

Translations:
- Title: "TrainEnglish — Session"
- "Teoria" → "Theory"
- "Esercizi" → "Exercises"
- "Conferma" → "Confirm"
- "Avanti" → "Next"
- "Corretto!" → "Correct!"
- "Sbagliato" → "Incorrect"
- "Spiegazione:" → "Explanation:"
- "Riepilogo sessione" → "Session summary"
- "Corretti" → "Correct"
- "Errori" → "Errors"
- "Vai alla dashboard" → "Go to dashboard"
- "Rivedi gli errori" → "Review errors"
- "Completa la giornata" → "Complete the day"
- Empty state (no content for day): add `.empty-state` block
- Add manifest link + script tags
- Add micro-feedback JS:

```js
// Micro-feedback: confetti on correct, shake on wrong
function triggerConfetti(originEl) {
  var colors = ['#f59e0b','#fbbf24','#f97316','#34d399','#60a5fa'];
  var rect = originEl ? originEl.getBoundingClientRect() : {left: window.innerWidth/2, top: window.innerHeight/2, width:0, height:0};
  for (var i = 0; i < 12; i++) {
    var p = document.createElement('div');
    p.className = 'confetti-particle';
    p.style.cssText = 'left:'+(rect.left+rect.width/2+(Math.random()-0.5)*60)+'px;top:'+(rect.top+rect.height/2)+'px;background:'+colors[i%colors.length]+';transform:rotate('+(Math.random()*360)+'deg);animation-delay:'+(Math.random()*0.2)+'s';
    document.body.appendChild(p);
    setTimeout(function(el){return function(){if(el.parentNode)el.parentNode.removeChild(el);};}(p), 800);
  }
}
function triggerShake(el) {
  if (!el) return;
  el.classList.remove('shake');
  void el.offsetWidth; // reflow
  el.classList.add('shake');
}
```

  Wire: call `triggerConfetti(confirmBtn)` on correct answer, `triggerShake(document.getElementById('mainContent'))` on wrong answer.

---

### Task G: Translate stats.html + library.html

**Files:**
- Modify: `stats.html`
- Modify: `library.html`

`stats.html` translations:
- Title: "TrainEnglish — Stats"
- Nav labels uniform (same as dashboard)
- "Your Progress" — keep (already English from redesign)
- Any remaining Italian labels in JS-generated content
- Empty state for chart: already exists in English? Check and translate if needed
- "Mostra tutti" → "Show all"
- "Nascondi" → "Hide"
- "Pratica ora" → "Practice now"
- "Tutti i test" → "All tests"
- "Rivedi" → "Review"
- Insights labels translate
- Add manifest + script tags

`library.html` translations:
- Title: "TrainEnglish — Library"
- Nav labels
- Section headers translate
- "Cerca argomenti..." → "Search topics..."
- "Nessun risultato per" → "No results for"
- Grammar rule names/explanations: KEEP BILINGUAL (IT+EN as designed)
- Add manifest + script tags
- Empty state for search: add `.empty-state` with SVG icon

---

### Task H: Translate test.html + diagnostic.html

**Files:**
- Modify: `test.html`
- Modify: `diagnostic.html` (UI text only — preserve all JS contracts)

`test.html` translations:
- Title: "TrainEnglish — Tests"
- Nav labels
- "Test FCE Practice" stays (proper name)
- "Disponibile" → "Available"
- "Completato" → "Completed"
- "In corso" → "In progress"
- "Bloccato" → "Locked"
- "Inizia" → "Start"
- "Continua" → "Continue"
- "Rivedi" → "Review"
- Empty state if no tests: add `.empty-state` block
- Add manifest + script tags

`diagnostic.html` translations (UI text only — JS contracts preserved):
- Title: "TrainEnglish — Diagnostic Test"
- "Strategia" → "Strategy"
- "Domande" → "Questions"
- "Review" stays (already English per FCE convention)
- "Risultati" → "Results"
- "Errori" → "Errors"
- Strategy phase text labels → English
- Result phase labels → English
- "Precedente" → "Previous"
- "Successivo" → "Next"
- "Invia" → "Submit"
- "Torna ai test" → "Back to tests"
- CRITICAL: Do NOT change any IDs or class names used by diagnostic.js
- Add manifest + script tags

---

### Task I: Translate review.html + log.html + preview.html

**Files:**
- Modify: `review.html`
- Modify: `log.html`
- Modify: `preview.html`

`review.html` translations:
- Title: "TrainEnglish — Review"
- All button/label text → English
- Add manifest + script tags
- Add empty state if no errors to review

`log.html` translations:
- Title: "TrainEnglish — Error Log"  
- "Log errori" → "Error Log"
- Filter labels → English
- "Tutti" → "All"
- "Sessione" → "Session"
- "Diagnostica" → "Diagnostic"
- "Nessun errore" → "No errors yet" (+ add .empty-state styling)
- "Mostra di più" → "Show more"
- Add manifest + script tags

`preview.html` translations:
- Minimal changes — translate any Italian UI text
- Add manifest + script tags

---

## Batch 3 — Coordinator: Commit + push

After all agents complete:

- [ ] Commit all HTML changes + new JS/JSON files
```bash
git add manifest.json sw.js icons/ js/toast.js js/transitions.js js/shortcuts.js js/app.js css/style.css *.html
git commit -m "feat: English UI, PWA, nav pill, toast, shortcuts, transitions, micro-feedback"
```
- [ ] Push to GitHub main
```bash
git push origin main
```

---

## Self-review checklist

- [x] All 11 HTML pages covered for translation
- [x] PWA: manifest.json + sw.js + SVG icon
- [x] Keyboard shortcuts: H/S/T/L/P + Escape
- [x] Page transitions: CSS + JS link intercept
- [x] Nav pill: animated amber indicator
- [x] Toast: slide-in, icon, auto-dismiss, click-to-dismiss
- [x] Skeleton: shimmer CSS classes
- [x] Empty states: CSS + example in log/library/session
- [x] Micro-feedback: confetti + shake in session.html
- [x] diagnostic.js contracts preserved (no ID/class changes)
- [x] js/tests-data.js not touched
- [x] IT+EN grammar explanations preserved
- [x] Exercises content unchanged
