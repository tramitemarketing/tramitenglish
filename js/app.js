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
    await State.syncFromCloud();   // pull errors saved on other devices
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
    // 1. Save locally immediately (fast, works offline)
    const s = this.load();
    s.sessionErrors = [errorObj, ...s.sessionErrors].slice(0, 500);
    this.save(s);
    // 2. Async push to Supabase (fire-and-forget — local copy is the fallback)
    this._pushErrorToCloud(errorObj);
  },

  async _pushErrorToCloud(e) {
    const user = Auth.getUser();
    if (!user) return;
    try {
      await _supabase.from('user_errors').insert({
        user_id:      user.id,
        exercise_id:  null,                              // not linked to exercises table yet
        wrong_answer: e.userAnswer  || null,             // existing column
        tags:         e.part ? [e.part] : [],            // existing column — store part tag
        reviewed:     false,
        error_count:  1,
        last_seen_at: e.date || new Date().toISOString(),
        source:       e.source      || 'session',        // new column (run ALTER TABLE)
        part:         e.part        || null,             // new column
        question:     e.question    || null,             // new column
        user_answer:  e.userAnswer  || null,             // new column
        correct:      e.correct     || null,             // new column
        explanation:  e.explanation || null              // new column
      });
    } catch (_) {
      // silent — localStorage already has it
    }
  },

  // Pull all errors for this user from Supabase into localStorage.
  // Called on login so errors are available across devices/browsers.
  async syncFromCloud() {
    const user = Auth.getUser();
    if (!user) return;
    try {
      const { data, error } = await _supabase
        .from('user_errors')
        .select('id, last_seen_at, source, part, question, user_answer, wrong_answer, correct, explanation, reviewed')
        .eq('user_id', user.id)
        .order('last_seen_at', { ascending: false })
        .limit(500);
      if (error || !data || data.length === 0) return;
      const errors = data.map(function (r) {
        return {
          _id:         r.id,
          date:        r.last_seen_at,
          source:      r.source,
          part:        r.part,
          question:    r.question,
          userAnswer:  r.user_answer || r.wrong_answer,  // support both old and new column
          correct:     r.correct,
          explanation: r.explanation,
          reviewed:    r.reviewed
        };
      });
      this.update({ sessionErrors: errors });
    } catch (_) {
      // silent — localStorage errors remain untouched
    }
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
    // 60-entry schedule calibrated on real tag frequencies from 252 exercises (Part 1–7)
    // Analysis: database/tag_frequency_analysis.md (2026-03-20)
    // Giorni ∝ frequenza tag reali, sequenza: base → complesso, spaced review integrata
    const entries = [];
    const topics = [
      // Gg 1–6   (6gg) — auxiliary_verbs, verb_tenses
      { key: 'verb_tenses',       label: 'Tempi Verbali',              part: 'Part 1+2', days: 6 },
      // Gg 7–10  (4gg) — coll_make/do/have/take (16.8% dei tag, topic #1)
      { key: 'collocations',      label: 'Collocazioni I',             part: 'Part 1',   days: 4 },
      // Gg 11–14 (4gg) — coll_adv_deeply/highly/widely, coll_adj_noun
      { key: 'collocations2',     label: 'Collocazioni II',            part: 'Part 1',   days: 4 },
      // Gg 15–18 (4gg) — vprep_*, prep_place_*, fixed_* (7.7%, topic #2 in P2)
      { key: 'prepositions',      label: 'Preposizioni',               part: 'Part 2',   days: 4 },
      // Gg 19–22 (4gg) — rule_verb_to_noun_tion/ness/ity/ment
      { key: 'word_formation',    label: 'Word Formation I',           part: 'Part 3',   days: 4 },
      // Gg 23–26 (4gg) — rule_prefix_un/dis/im, rule_noun_to_adj_ful/less/ive
      { key: 'word_formation2',   label: 'Word Formation II',          part: 'Part 3',   days: 4 },
      // Gg 27–29 (3gg) — pp_for_since, pp_yet_already_just, pp_never
      { key: 'present_perfect',   label: 'Present Perfect',            part: 'Part 4',   days: 3 },
      // Gg 30–33 (4gg) — causative_have/get, passive_reporting_said/believed
      { key: 'passive',           label: 'Forma Passiva & Causativo',  part: 'Part 4',   days: 4 },
      // Gg 34–36 (3gg) — modal_should_have, modal_must_have, modal_cant_have
      { key: 'modals',            label: 'Verbi Modali & Modal Perf.', part: 'Part 1+4', days: 3 },
      // Gg 37–39 (3gg) — reporting_verb_remind/advise/suggest/deny
      { key: 'reported_speech',   label: 'Discorso Indiretto',         part: 'Part 4',   days: 3 },
      // Gg 40–42 (3gg) — wish_past_regret, wish_would_annoyance, if_only
      { key: 'wish',              label: 'Wish / If only / Desideri',  part: 'Part 4',   days: 3 },
      // Gg 43–45 (3gg) — verb_gerund_mind/deny/suggest, be_used_to, worth_gerund
      { key: 'gerund_infinitive', label: 'Gerundio & Infinito',        part: 'Part 1+4', days: 3 },
      // Gg 46–48 (3gg) — link_contrast_although, link_add_furthermore, link_result
      { key: 'linking_words',     label: 'Connettori',                 part: 'Part 1+2', days: 3 },
      // Gg 49–50 (2gg) — comparative_as_as, superlative, comparative_fraction
      { key: 'comparatives',      label: 'Comparativi & Superlativi',  part: 'Part 4',   days: 2 },
      // Gg 51–52 (2gg) — rel_defining_vs_non_defining, which vs that (trappola virgola)
      { key: 'relative_clauses',  label: 'Relative Clauses',           part: 'Part 2',   days: 2 },
      // Gg 53–54 (2gg) — conditional_2/3, inversion_not_until/never/had
      { key: 'conditionals',      label: 'Condizionali & Inversione',  part: 'Part 4',   days: 2 },
      // Gg 55–56 (2gg) — quant_few/many/much/any, article_the_zero
      { key: 'quantifiers',       label: 'Quantificatori & Articoli',  part: 'Part 2',   days: 2 },
      // Gg 57–58 (2gg) — false_friend_italian (8 tag), pv_call_off/set_up
      { key: 'phrasal_verbs',     label: 'Phrasal Verbs & Confusables',part: 'Part 1+4', days: 2 },
      // Gg 59–60 (2gg) — ripasso adattivo su tutti i tag
      { key: 'review',            label: 'Ripasso & Simulazione',      part: 'Part 1–4', days: 2 },
    ];
    let day = 1;
    for (const t of topics) {
      for (let i = 0; i < t.days && day <= 60; i++, day++) {
        entries.push({
          day,
          topic:    t.label,
          topicKey: t.key,
          section:  `Giorno ${day} — ${t.label}`,
          part:     t.part
        });
      }
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
  collocations:      'Collocazioni I (make/do/have/take)',
  collocations2:     'Collocazioni II (avverbi/aggettivi)',
  prepositions:      'Preposizioni',
  word_formation:    'Word Formation I (suffissi)',
  word_formation2:   'Word Formation II (prefissi)',
  present_perfect:   'Present Perfect',
  passive:           'Forma Passiva & Causativo',
  modals:            'Verbi Modali & Modal Perfects',
  reported_speech:   'Discorso Indiretto',
  wish:              'Wish / If only',
  gerund_infinitive: 'Gerundio & Infinito',
  linking_words:     'Connettori',
  comparatives:      'Comparativi & Superlativi',
  relative_clauses:  'Relative Clauses',
  conditionals:      'Condizionali & Inversione',
  quantifiers:       'Quantificatori & Articoli',
  phrasal_verbs:     'Phrasal Verbs & Confusables',
  review:            'Ripasso & Simulazione',
};
