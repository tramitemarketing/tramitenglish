/* ══════════════════════════════════════════
   TrainEnglish — Core Application JS
   No framework, no build step, localStorage state
   Supabase: wire up after adding supabase-js script
══════════════════════════════════════════ */

'use strict';

// ── Supabase ──
const SUPABASE_URL      = 'https://zmnjoiuvmyyyrveooxzp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_qq2eXeCz5uDe63WTELIWrQ_mj4E-GH6';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ══════════════════════════════════════════
// Auth
// ══════════════════════════════════════════
const Auth = {
  getUser() {
    return JSON.parse(localStorage.getItem('te_user') || 'null');
  },

  async login(email, password) {
    const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    localStorage.setItem('te_user', JSON.stringify(data.user));
    return data.user;
  },

  async logout() {
    await _supabase.auth.signOut();
    localStorage.removeItem('te_user');
    localStorage.removeItem('te_state');
    window.location.replace('index.html');
  },

  requireAuth() {
    if (!this.getUser()) {
      window.location.replace('index.html');
      return false;
    }
    return true;
  }
};

// ══════════════════════════════════════════
// State
// ══════════════════════════════════════════
const State = {
  _defaults: {
    currentDay:    1,
    streak:        0,
    lastStudied:   null,
    totalMinutes:  0,
    completedDays: [],
    topicScores:   {},
    sessionErrors: [],
    notes:         []
  },

  load() {
    const saved = JSON.parse(localStorage.getItem('te_state') || '{}');
    return { ...this._defaults, ...saved };
  },

  save(data) {
    localStorage.setItem('te_state', JSON.stringify(data));
  },

  update(patch) {
    const current = this.load();
    this.save({ ...current, ...patch });
  },

  markDayComplete(day, minutesSpent) {
    const s = this.load();
    if (!s.completedDays.includes(day)) {
      s.completedDays.push(day);
    }
    // Update streak
    const today = new Date().toISOString().slice(0, 10);
    if (s.lastStudied !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      s.streak = s.lastStudied === yesterday ? s.streak + 1 : 1;
      s.lastStudied = today;
    }
    s.totalMinutes  = (s.totalMinutes || 0) + (minutesSpent || 0);
    s.currentDay    = Math.min(60, day + 1);
    this.save(s);
  },

  recordError(errorObj) {
    const s = this.load();
    s.sessionErrors = [errorObj, ...s.sessionErrors].slice(0, 500);
    this.save(s);
  },

  updateTopicScore(topicKey, correct) {
    const s = this.load();
    if (!s.topicScores[topicKey]) {
      s.topicScores[topicKey] = { correct: 0, wrong: 0, total: 0 };
    }
    s.topicScores[topicKey].total++;
    if (correct) {
      s.topicScores[topicKey].correct++;
    } else {
      s.topicScores[topicKey].wrong++;
    }
    this.save(s);
  }
};

// ══════════════════════════════════════════
// Plan — 60-day schedule
// ══════════════════════════════════════════
const Plan = {
  schedule: (function () {
    // 60-entry schedule: {day, topic, section, part}
    // Groups of days per topic (to be expanded with real FCE content)
    const entries = [];
    const topics = [
      { key: 'verb_tenses',       label: 'Tempi Verbali',                   part: 'Part 1', days: 7  },
      { key: 'modals',            label: 'Verbi Modali',                    part: 'Part 2', days: 7  },
      { key: 'conditionals',      label: 'Condizionali & Wish',             part: 'Part 4', days: 7  },
      { key: 'passive',           label: 'Forma Passiva',                   part: 'Part 1', days: 6  },
      { key: 'reported_speech',   label: 'Discorso Indiretto',              part: 'Part 4', days: 6  },
      { key: 'gerund_infinitive', label: 'Gerundio & Infinito',             part: 'Part 1', days: 6  },
      { key: 'word_formation',    label: 'Word Formation',                  part: 'Part 3', days: 7  },
      { key: 'collocations',      label: 'Collocazioni & Phrasal Verbs',    part: 'Part 1', days: 7  },
      { key: 'linking_words',     label: 'Connettori',                      part: 'Part 2', days: 7  },
      { key: 'prepositions',      label: 'Preposizioni',                    part: 'Part 2', days: 0  },
    ];
    let day = 1;
    for (const t of topics) {
      const count = t.key === 'prepositions' ? 60 - day + 1 : t.days;
      for (let i = 0; i < count && day <= 60; i++, day++) {
        entries.push({
          day,
          topic:   t.label,
          topicKey: t.key,
          section: `Giorno ${day} — ${t.label}`,
          part:    t.part
        });
      }
    }
    // Pad to 60 if needed
    while (entries.length < 60) {
      entries.push({
        day:     entries.length + 1,
        topic:   'Ripasso Generale',
        topicKey: 'prepositions',
        section: `Giorno ${entries.length + 1} — Ripasso`,
        part:    'Part 1'
      });
    }
    return entries;
  })(),

  today() {
    const s = State.load();
    return this.schedule[(s.currentDay || 1) - 1] || this.schedule[0];
  },

  getDay(n) {
    return this.schedule[(n || 1) - 1] || null;
  }
};

// ══════════════════════════════════════════
// Adaptive
// ══════════════════════════════════════════
const Adaptive = {
  weakTopics(n = 3) {
    const s = State.load();
    return Object.entries(s.topicScores)
      .filter(([, v]) => v.total > 0)
      .map(([k, v]) => ({
        key: k,
        label: TOPIC_LABELS[k] || k,
        pct: Math.round((v.correct / v.total) * 100),
        total: v.total
      }))
      .sort((a, b) => a.pct - b.pct)
      .slice(0, n);
  },

  todayPlan() {
    return {
      main:   Plan.today(),
      review: this.weakTopics(2)
    };
  }
};

// ══════════════════════════════════════════
// Timer
// ══════════════════════════════════════════
const Timer = {
  _start:    null,
  _el:       null,
  _interval: null,

  start(el) {
    this._start    = Date.now();
    this._el       = el;
    clearInterval(this._interval);
    this._interval = setInterval(() => this._tick(), 1000);
    this._tick();
  },

  _tick() {
    if (!this._start) return;
    const s   = Math.floor((Date.now() - this._start) / 1000);
    const m   = Math.floor(s / 60);
    const sec = s % 60;
    if (this._el) {
      this._el.textContent = m + ':' + String(sec).padStart(2, '0');
    }
  },

  stop() {
    clearInterval(this._interval);
    const mins   = this._start ? Math.floor((Date.now() - this._start) / 60000) : 0;
    this._start  = null;
    this._el     = null;
    return mins;
  },

  reset(el) {
    this.stop();
    this.start(el);
  }
};

// ══════════════════════════════════════════
// UI helpers
// ══════════════════════════════════════════
const UI = {
  _toastEl: null,
  _toastTimeout: null,

  toast(msg, type = 'info') {
    if (!this._toastEl) {
      this._toastEl = document.createElement('div');
      this._toastEl.className = 'toast';
      document.body.appendChild(this._toastEl);
    }
    this._toastEl.textContent = msg;
    this._toastEl.className   = 'toast show';
    if (type === 'success') this._toastEl.style.background = '#065f46';
    else if (type === 'error') this._toastEl.style.background = '#b91c1c';
    else this._toastEl.style.background = '#1c1917';

    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      if (this._toastEl) this._toastEl.className = 'toast';
    }, 2500);
  },

  show(el) {
    if (el) el.style.display = '';
  },

  hide(el) {
    if (el) el.style.display = 'none';
  },

  pctClass(pct) {
    if (pct >= 75) return 'pct-good';
    if (pct >= 50) return 'pct-mid';
    return 'pct-bad';
  },

  // Build a .cal-grid for days 1–60 given completedDays and currentDay
  buildCalendar(containerEl, completedDays, currentDay, offset, count) {
    containerEl.innerHTML = '';
    for (let d = offset; d < offset + count && d <= 60; d++) {
      const div = document.createElement('div');
      div.className = 'cal-day';
      div.textContent = d;
      if (completedDays.includes(d)) div.classList.add('done');
      else if (d === currentDay)      div.classList.add('today');
      else if (d > currentDay)        div.classList.add('future');
      containerEl.appendChild(div);
    }
  }
};

// Topic label map (used by Adaptive)
const TOPIC_LABELS = {
  verb_tenses:       'Tempi Verbali',
  modals:            'Verbi Modali',
  conditionals:      'Condizionali & Wish',
  passive:           'Forma Passiva',
  reported_speech:   'Discorso Indiretto',
  gerund_infinitive: 'Gerundio & Infinito',
  word_formation:    'Word Formation',
  collocations:      'Collocazioni & Phrasal Verbs',
  linking_words:     'Connettori',
  prepositions:      'Preposizioni',
};
