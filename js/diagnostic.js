// ── diagnostic.js ────────────────────────────────────────────
// FCE B2 Practice Test engine
// Depends on: tests-data.js, app.js
// ─────────────────────────────────────────────────────────────

// ── Strategy guide (from FCE_1_Strategie.pdf) ────────────────
const STRATEGY = {
  overview: {
    time: 75,
    note: 'Do Parts 1–3 quickly in sequence, then Part 4, then Parts 5–7 in order. Leave 5 min at the end to review uncertain answers.'
  },
  1: {
    title: 'Part 1 — Multiple-Choice Cloze',
    subtitle: 'Vocabulary, collocations, phrasal verbs, linking words',
    estimated: '10 min',
    tips: [
      'Read the WHOLE text first (ignore gaps) to understand the general meaning.',
      'Look at the word AFTER the gap — a preposition often "locks in" only one option. E.g. "(7) ___ as" → only "regarded" goes with "as".',
      'Phrasal verbs: the particle after the gap is the key. E.g. "broke ___" → broke DOWN, not broke UP.',
      'Collocations — trust your ear: MAKE (decision, effort, mistake, progress), DO (damage, homework, research), TAKE (a photo, a risk, notice of), HAVE (a discussion, difficulty, an impact).',
      'Linking words: check whether the gap is followed by a clause (subj+verb) or noun/gerund. "Although/Even though + clause" vs "Despite/In spite of + noun/-ing".',
      'Eliminate the 2 most clearly wrong options, then choose between the remaining 2.',
      'Do NOT leave blank — no points are lost for wrong answers.',
      'Re-read the complete text with your answers to verify the logic.'
    ]
  },
  2: {
    title: 'Part 2 — Open Cloze',
    subtitle: 'Grammar: articles, pronouns, prepositions, auxiliaries, conjunctions',
    estimated: '10 min',
    tips: [
      'GOLDEN RULE: the answer is ALWAYS a grammar/function word — pronoun, preposition, article, conjunction, auxiliary, quantifier. If you think of a content word, you\'re wrong.',
      'Look at BOTH the word before AND after the gap.',
      'Relative clauses: look for commas or end of a clause → who / which / that / whose / where.',
      'Fixed prepositions: interested IN, good/bad AT, responsible FOR, depend ON, result IN, aware OF, consist OF, cope WITH, similar TO, different FROM, keen ON.',
      'Auxiliary verbs: have/has/had (perfect), was/were/been (passive/progressive), do/does/did.',
      'Fixed phrases: "This is WHY…" | "such AS…" | "IN other words" | "up to A point".',
      'Single-word conjunctions: although, unless, until, while, since, whether, once.',
      'Re-read the complete sentence after writing the word.'
    ]
  },
  3: {
    title: 'Part 3 — Word Formation',
    subtitle: 'Prefixes, suffixes, grammatical category changes',
    estimated: '10 min',
    tips: [
      'First: determine the required GRAMMATICAL CATEGORY. Article/nothing before gap → NOUN | Manner word → ADVERB (-LY) | Before a noun → ADJECTIVE.',
      'Noun suffixes: -tion / -ment / -ness / -ity / -ance / -ence / -al / -er / -or.',
      'Adjective suffixes: -ful / -less / -ous / -ive / -able / -ible / -ic / -ish.',
      'Adverb: adjective + -LY (careful → carefully, true → truly).',
      'Negative prefixes: un- / dis- / in- / im- / ir- / il- / mis- / over- / under-.',
      'Some words need TWO changes (prefix + suffix). E.g. RESPONSIBLE → irresponsibility.',
      'Watch spelling: happy → happiness, write → writing.',
      'Is the noun SINGULAR or PLURAL? "Many ___" → plural form needed.',
      'Re-read the sentence to verify the word is grammatically correct in context.'
    ]
  },
  4: {
    title: 'Part 4 — Key-Word Transformations',
    subtitle: 'Equivalent structures, grammatical paraphrase',
    estimated: '12 min',
    tips: [
      'The two sentences MUST have the same meaning. Never add or remove information.',
      'Word count: MINIMUM 2, MAXIMUM 5 words (including the key word). Contractions count as 2 words.',
      'NEVER change the key word — not its form, number, or spelling.',
      'Key structures to know: passive (been/being), apologised (to sb FOR -ing), supposed (be supposed to + inf), used (be/get used to -ing OR used to + infinitive), wish (+ past simple/would), had/got (causative), unless (= if…not), provided (= if, positive).',
      'If an adjective becomes a noun: e.g. "disappointed" → "came as a disappointment".',
      'Use contractions to stay within the limit: "haven\'t" = 2 words.',
      'If stuck, write something — partial answers can earn partial credit.'
    ]
  },
  5: {
    title: 'Part 5 — Multiple-Choice Reading',
    subtitle: 'Detail, inference, attitude, vocabulary in context',
    estimated: '12 min',
    tips: [
      'READ THE QUESTIONS FIRST (only the stem, not the options). Underline key words in each question.',
      'Skim the text: understand the topic and general structure.',
      'Questions FOLLOW the order of the text — don\'t search everywhere.',
      'For each question: find the exact paragraph, re-read only that section.',
      'Before looking at A/B/C/D: mentally formulate YOUR OWN answer.',
      'Look for the option that expresses the same idea with DIFFERENT WORDS (synonyms/paraphrase).',
      'TRAPS: same words but distorted meaning | "almost right" (one wrong word) | true info but answering a different question | too generic.',
      '"Attitude/implication" questions: look for emotional words or judgments — not always stated explicitly.',
      'If undecided between 2 options: re-read the text — one will be more faithful.',
      'Time guide: ~4 min reading the text, ~3 min per question. Don\'t spend too long on one question.'
    ]
  },
  6: {
    title: 'Part 6 — Gapped Text',
    subtitle: 'Text coherence, pronoun references, logical flow',
    estimated: '12 min',
    tips: [
      'Read the WHOLE base text first (gaps empty): understand the topic and structure.',
      'Read all paragraphs A–G: note what each one is about.',
      'Before each gap: what is the last IDEA/TOPIC covered? The inserted paragraph must continue that thread.',
      'After each gap: the inserted paragraph must connect to the one that follows.',
      'LINGUISTIC HOOKS: pronouns (he/she/it/they/this/these) → who/what do they refer to? | Synonyms → same idea, different word | Connectors (However/Therefore/As a result) → what contrast/consequence? | Repeated names, numbers, places.',
      'The EXTRA paragraph (one of A–G is unused) is the distractor — same topic but doesn\'t connect well.',
      'If stuck on a gap: skip it, complete the others, then come back. Elimination helps.',
      'Final check: re-read the complete text with your inserted paragraphs. Is there logical continuity?',
      'NEVER choose just because the topic is similar — it must work BEFORE and AFTER the gap.'
    ]
  },
  7: {
    title: 'Part 7 — Multiple Matching',
    subtitle: 'Finding specific information across multiple texts',
    estimated: '12 min',
    tips: [
      'READ THE QUESTIONS FIRST: underline the key word or phrase in each. E.g. "feeling of surprise" → key word: surprise.',
      'Quick skim of the sections: understand the main theme of each (30 sec per section).',
      'Go question by question: search for the KEY WORD in the sections (or synonyms/paraphrases).',
      'The same section can be the answer to MULTIPLE questions.',
      'Main TRAP: same topic but different meaning. E.g. section mentions "surprised" positively but the question asks for negative surprise → wrong match.',
      'Always look for PARAPHRASES: question "finds the experience tiring" / text "left me completely exhausted" → match!',
      'If no answer found in 60 sec: mark the most probable and move on.',
      'Each question has ONE correct answer only.',
      'Time guide: ~1 min per question. Don\'t get stuck on the last 2–3 difficult ones.',
      'Do NOT leave blank — guess from the least-used sections if needed.'
    ]
  }
};

const PART_TIMES = { 1: 10, 2: 10, 3: 10, 4: 12, 5: 12, 6: 12, 7: 12 }; // expected minutes
const PART_TOTALS = { 1: 8, 2: 8, 3: 8, 4: 6, 5: 6, 6: 6, 7: 10 };

// ── State ─────────────────────────────────────────────────────
let _test    = null;   // test object from DIAGNOSTIC_TESTS
let _session = null;   /* {
  testId, partIdx, phase,  // phase: 'strategy'|'questions'|'review'|'results'|'errors'
  answers: { partNum: { qnum: value } },
  timeByPart: { partNum: seconds },
  totalElapsed: seconds,
  partStartTs: Date.ms or null,
  globalStartTs: Date.ms,
  submittedAt: iso or null
} */
let _timerInterval  = null;
let _partTimerStart = null;   // ms timestamp when current part started

function sessionKey(id)  { return `te_test_session_${id}`; }
function resultsKey(id)  { return `te_test_results_${id}`; }
function completedTests() {
  return JSON.parse(localStorage.getItem('te_completed_tests') || '[]');
}
function markCompleted(id) {
  var done = completedTests();
  if (!done.includes(id)) { done.push(id); localStorage.setItem('te_completed_tests', JSON.stringify(done)); }
}
function isUnlocked(id) {
  if (id === 1) return true;
  return completedTests().includes(id - 1);
}

// ── Init ──────────────────────────────────────────────────────
function diagInit() {
  var params = new URLSearchParams(window.location.search);
  var testId = parseInt(params.get('test') || '1', 10);
  _test = DIAGNOSTIC_TESTS.find(function(t){ return t.id === testId; });
  if (!_test) { window.location.replace('test.html'); return; }
  if (!isUnlocked(testId)) { window.location.replace('test.html'); return; }

  // Restore or create session
  var saved = localStorage.getItem(sessionKey(testId));
  if (saved) {
    _session = JSON.parse(saved);
  } else {
    _session = {
      testId:       testId,
      partIdx:      0,
      phase:        'strategy',
      answers:      {},
      timeByPart:   {},
      totalElapsed: 0,
      globalStartTs: Date.now(),
      partStartTs:  null,
      submittedAt:  null
    };
  }

  // If already submitted, go to results
  if (_session.submittedAt) {
    _session.phase = 'results';
  }

  startGlobalTimer();
  startPartTimer();
  renderPage();
}

// ── Timer ─────────────────────────────────────────────────────
function startGlobalTimer() {
  clearInterval(_timerInterval);
  _timerInterval = setInterval(function() {
    var elapsed = Math.floor((Date.now() - _session.globalStartTs) / 1000) + (_session.totalElapsed || 0);
    var el = document.getElementById('headerTimer');
    if (el) el.textContent = formatTime(elapsed);
  }, 1000);
}

function startPartTimer() {
  _partTimerStart = Date.now();
}

function stopPartTimer() {
  if (!_partTimerStart) return;
  var partNum = _test.parts[_session.partIdx].num;
  var elapsed = Math.floor((Date.now() - _partTimerStart) / 1000);
  _session.timeByPart[partNum] = (_session.timeByPart[partNum] || 0) + elapsed;
  _partTimerStart = null;
}

function formatTime(seconds) {
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = seconds % 60;
  return (h > 0 ? pad(h) + ':' : '') + pad(m) + ':' + pad(s);
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

// ── Save / Answers ────────────────────────────────────────────
function saveSession() {
  localStorage.setItem(sessionKey(_session.testId), JSON.stringify(_session));
}

function setAnswer(partNum, qnum, value) {
  if (!_session.answers[partNum]) _session.answers[partNum] = {};
  _session.answers[partNum][qnum] = value;
  saveSession();
  updateAnsweredCount();
}

function getAnswer(partNum, qnum) {
  return (_session.answers[partNum] || {})[qnum] || '';
}

function updateAnsweredCount() {
  var part = _test.parts[_session.partIdx];
  if (!part) return;
  var pn    = part.num;
  var total = (part.questions || []).length;
  if (pn === 6) total = Object.keys(part.answers || {}).length;
  var done  = Object.keys((_session.answers[pn] || {})).length;
  var el    = document.getElementById('answeredCount');
  if (el) el.textContent = done + '/' + total + ' answered';
}

// ── Navigation ────────────────────────────────────────────────
function renderPage() {
  updateHeader();
  updateProgress();
  var ph = _session.phase;
  ['strategy','questions','review','results','errors'].forEach(function(p) {
    var el = document.getElementById('phase-' + p);
    if (el) el.style.display = (p === ph) ? '' : 'none';
  });
  var footer = document.getElementById('diagFooter');
  if (footer) footer.style.display = (ph === 'results' || ph === 'errors') ? 'none' : '';

  if (ph === 'strategy')  renderStrategy();
  if (ph === 'questions') renderQuestions();
  if (ph === 'review')    renderReview();
  if (ph === 'results')   renderResults();
  if (ph === 'errors')    renderErrors();

  updateNavButtons();
  updateAnsweredCount();
}

function updateHeader() {
  var el = document.getElementById('headerTitle');
  if (!el) return;
  var part = _test.parts[_session.partIdx];
  var partNum = part ? part.num : '?';
  el.textContent = 'Test ' + _test.id + '  ·  Part ' + partNum + ' of 7';
}

function updateProgress() {
  var pct = ((_session.partIdx) / 7) * 100;
  var el  = document.getElementById('progressFill');
  if (el) el.style.width = pct + '%';
}

function updateNavButtons() {
  var prev   = document.getElementById('prevBtn');
  var next   = document.getElementById('nextBtn');
  var review = document.getElementById('reviewBtn');
  if (!prev) return;

  var ph     = _session.phase;
  var isLast = _session.partIdx === _test.parts.length - 1;

  if (ph === 'strategy') {
    prev.style.display   = 'none';
    review.style.display = 'none';
    next.textContent     = 'Start Part →';
    next.style.display   = '';
  } else if (ph === 'questions') {
    prev.style.display   = _session.partIdx > 0 ? '' : 'none';
    prev.textContent     = '← Part ' + (_test.parts[_session.partIdx - 1] ? _test.parts[_session.partIdx - 1].num : '');
    review.style.display = '';
    if (isLast) {
      next.textContent = 'Review All →';
      next.onclick = goToReview;
    } else {
      next.textContent = 'Part ' + (_test.parts[_session.partIdx + 1] ? _test.parts[_session.partIdx + 1].num : '') + ' →';
      next.onclick = nextPart;
    }
    next.style.display = '';
  } else if (ph === 'review') {
    prev.style.display   = '';
    prev.textContent     = '← Back';
    prev.onclick         = function(){ stopPartTimer(); _session.phase='questions'; saveSession(); renderPage(); };
    review.style.display = 'none';
    next.textContent     = 'Submit Test';
    next.onclick         = submitTest;
    next.style.display   = '';
  }
}

function nextPart() {
  stopPartTimer();
  _session.partIdx++;
  _session.phase = 'strategy';
  startPartTimer();
  saveSession();
  window.scrollTo(0, 0);
  renderPage();
}

function prevPart() {
  if (_session.partIdx === 0) return;
  stopPartTimer();
  _session.partIdx--;
  _session.phase = 'questions';
  startPartTimer();
  saveSession();
  window.scrollTo(0, 0);
  renderPage();
}

function goToReview() {
  stopPartTimer();
  _session.phase = 'review';
  saveSession();
  window.scrollTo(0, 0);
  renderPage();
}

// ── Render: Strategy ─────────────────────────────────────────
function renderStrategy() {
  var part = _test.parts[_session.partIdx];
  if (!part) return;
  var s    = STRATEGY[part.num];
  var el   = document.getElementById('phase-strategy');
  if (!el || !s) { _session.phase = 'questions'; renderPage(); return; }

  var html = '<div class="strat-header">'
    + '<div class="strat-part-label">Part ' + part.num + ' — Estimated time: <strong>' + s.estimated + '</strong></div>'
    + '<h2 class="strat-title">' + s.title + '</h2>'
    + '<p class="strat-subtitle">' + s.subtitle + '</p>'
    + '</div>'
    + '<div class="strat-tips">';
  s.tips.forEach(function(tip, i) {
    html += '<div class="strat-tip"><span class="strat-num">' + (i+1) + '</span><span>' + tip + '</span></div>';
  });
  html += '</div>'
    + '<div class="strat-overview"><strong>General overview:</strong> ' + STRATEGY.overview.note + '</div>';

  el.innerHTML = html;

  // next button for strategy = start part
  var next = document.getElementById('nextBtn');
  if (next) {
    next.onclick = function() {
      _session.phase = 'questions';
      saveSession();
      renderPage();
    };
  }
  var prev = document.getElementById('prevBtn');
  if (prev) prev.onclick = prevPart;
}

// ── Render: Questions ────────────────────────────────────────
function renderQuestions() {
  var part = _test.parts[_session.partIdx];
  if (!part) return;
  var el   = document.getElementById('phase-questions');
  var pn   = part.num;

  var html = '<div class="part-header"><h2 class="part-title">Part ' + pn + '</h2>';
  if (part.title) html += '<p class="part-passage-title">' + part.title + '</p>';
  html += '<span id="answeredCount" class="answered-count"></span></div>';

  if (pn === 1) html += renderPart1(part);
  else if (pn === 2) html += renderPart2(part);
  else if (pn === 3) html += renderPart3(part);
  else if (pn === 4) html += renderPart4(part);
  else if (pn === 5) html += renderPart5(part);
  else if (pn === 6) html += renderPart6(part);
  else if (pn === 7) html += renderPart7(part);

  el.innerHTML = html;
  attachQuestionListeners(part);
  updateAnsweredCount();

  var prev = document.getElementById('prevBtn');
  if (prev) prev.onclick = prevPart;
}

// Part 1 — Multiple-Choice Cloze
function renderPart1(part) {
  var html = '';
  if (part.text) html += '<div class="passage-box">' + renderPassageWithGaps(part.text, 1) + '</div>';
  html += '<div class="questions-list">';
  (part.questions || []).forEach(function(q) {
    var ans = getAnswer(1, q.qnum);
    html += '<div class="q-card" id="qcard-' + q.qnum + '">'
      + '<div class="q-label">Gap <strong>(' + q.qnum + ')</strong></div>'
      + '<div class="options-grid">';
    ['A','B','C','D'].forEach(function(letter) {
      var val  = (q.options || {})[letter] || '';
      var sel  = ans === letter ? ' opt-selected' : '';
      html += '<button class="opt-btn' + sel + '" data-part="1" data-qnum="' + q.qnum + '" data-answer="' + letter + '">'
        + '<span class="opt-letter">' + letter + '</span> ' + val + '</button>';
    });
    html += '</div></div>';
  });
  html += '</div>';
  return html;
}

// Part 2 — Open Cloze
function renderPart2(part) {
  var html = '';
  if (part.text) html += '<div class="passage-box">' + renderPassageWithGaps(part.text, 2) + '</div>';
  html += '<div class="questions-list">';
  (part.questions || []).forEach(function(q) {
    var ans = getAnswer(2, q.qnum);
    html += '<div class="q-card">'
      + '<label class="q-label">Gap <strong>(' + q.qnum + ')</strong></label>'
      + '<input class="fill-input open-input" type="text" data-part="2" data-qnum="' + q.qnum + '" value="' + esc(ans) + '" placeholder="Your answer" autocomplete="off" autocorrect="off" spellcheck="false">'
      + '</div>';
  });
  html += '</div>';
  return html;
}

// Part 3 — Word Formation
function renderPart3(part) {
  var html = '';
  if (part.text) html += '<div class="passage-box">' + renderPassageWithGaps(part.text, 3) + '</div>';
  html += '<div class="questions-list">';
  (part.questions || []).forEach(function(q) {
    var ans = getAnswer(3, q.qnum);
    html += '<div class="q-card">'
      + '<div class="q-label">Gap <strong>(' + q.qnum + ')</strong> — stem: <span class="stem-word">' + (q.stem || '') + '</span></div>'
      + '<input class="fill-input open-input" type="text" data-part="3" data-qnum="' + q.qnum + '" value="' + esc(ans) + '" placeholder="Your answer" autocomplete="off" autocorrect="off" spellcheck="false">'
      + '</div>';
  });
  html += '</div>';
  return html;
}

// Part 4 — Key-Word Transformation
function renderPart4(part) {
  var html = '<div class="questions-list">';
  (part.questions || []).forEach(function(q) {
    var ans = getAnswer(4, q.qnum);
    html += '<div class="q-card q-transform">'
      + '<div class="q-num">25' + (q.qnum - 25) + ' — Question ' + q.qnum + '</div>'  // subtle
      + '<div class="transform-s1">' + esc(q.s1 || '') + '</div>'
      + '<div class="keyword-row"><span class="keyword-badge">' + esc(q.keyword || '') + '</span></div>';
    if (q.s2) {
      // show s2 with blank marker
      var s2 = esc(q.s2).replace('_____', '<span class="blank-marker">___________</span>');
      html += '<div class="transform-s2">' + s2 + '</div>';
    }
    html += '<input class="fill-input open-input transform-input" type="text" data-part="4" data-qnum="' + q.qnum + '" value="' + esc(ans) + '" placeholder="2–5 words including the key word" autocomplete="off" autocorrect="off" spellcheck="false">'
      + '</div>';
  });
  html += '</div>';
  return html;
}

// Part 5 — Reading Multiple Choice
function renderPart5(part) {
  var html = '';
  if (part.text) html += '<div class="passage-box passage-long">' + renderPlainText(part.text) + '</div>';
  html += '<div class="questions-list">';
  (part.questions || []).forEach(function(q) {
    var ans = getAnswer(5, q.qnum);
    html += '<div class="q-card" id="qcard-' + q.qnum + '">'
      + '<div class="q-label"><strong>Q' + q.qnum + '.</strong> ' + esc(q.question || '') + '</div>'
      + '<div class="options-list">';
    ['A','B','C','D'].forEach(function(letter) {
      var val = (q.options || {})[letter] || '';
      var sel = ans === letter ? ' opt-selected' : '';
      html += '<button class="opt-btn opt-full' + sel + '" data-part="5" data-qnum="' + q.qnum + '" data-answer="' + letter + '">'
        + '<span class="opt-letter">' + letter + '</span> ' + esc(val) + '</button>';
    });
    html += '</div></div>';
  });
  html += '</div>';
  return html;
}

// Part 6 — Gapped Text
function renderPart6(part) {
  var html = '<div class="p6-instructions">Select the correct sentence (A–G) for each numbered gap. One sentence is not used.</div>';
  // Sentences A-G
  html += '<div class="p6-sentences">';
  var letters = ['A','B','C','D','E','F','G'];
  letters.forEach(function(l) {
    var txt = (part.sentences || {})[l];
    if (!txt) return;
    html += '<div class="p6-sentence"><span class="sent-label">' + l + '</span><span>' + esc(txt) + '</span></div>';
  });
  html += '</div>';

  // Passage with gap dropdowns
  if (part.text) {
    var passageHtml = esc(part.text).replace(/\[(\d+)\]/g, function(_, num) {
      var ans = getAnswer(6, parseInt(num));
      var sel = function(l){ return ans === l ? ' selected' : ''; };
      var opts = '<option value="">—</option>' + letters.map(function(l){ return '<option value="' + l + '"' + sel(l) + '>' + l + '</option>'; }).join('');
      return '<select class="gap-select" data-part="6" data-qnum="' + num + '">' + opts + '</select>';
    });
    html += '<div class="passage-box">' + passageHtml + '</div>';
  }
  return html;
}

// Part 7 — Multiple Matching
function renderPart7(part) {
  var sections  = part.sections || {};
  var sLetters  = Object.keys(sections).sort();
  var html = '';

  // Accordion: sections
  html += '<div class="p7-sections">';
  sLetters.forEach(function(l) {
    var sec = sections[l];
    html += '<details class="p7-section">'
      + '<summary class="p7-section-title">Section ' + l + (sec.name ? ' — ' + esc(sec.name) : '') + '</summary>'
      + '<div class="p7-section-text">' + renderPlainText(sec.text || '') + '</div>'
      + '</details>';
  });
  html += '</div>';

  // Questions
  html += '<div class="questions-list">';
  (part.questions || []).forEach(function(q) {
    var ans = getAnswer(7, q.qnum);
    html += '<div class="q-card q-matching" id="qcard-' + q.qnum + '">'
      + '<div class="q-label"><strong>Q' + q.qnum + '.</strong> ' + esc(q.question || '') + '</div>'
      + '<div class="section-btns">';
    sLetters.forEach(function(l) {
      var sel = ans === l ? ' opt-selected' : '';
      html += '<button class="sect-btn' + sel + '" data-part="7" data-qnum="' + q.qnum + '" data-answer="' + l + '">' + l + '</button>';
    });
    html += '</div></div>';
  });
  html += '</div>';
  return html;
}

// ── Passage helpers ──────────────────────────────────────────
function renderPassageWithGaps(text, partNum) {
  var escaped = esc(text);
  // Highlight gap markers (N) where N is 1-24
  return escaped.replace(/\((\d+)\)/g, function(_, num) {
    return '<span class="gap-marker">(' + num + ')</span>';
  });
}

function renderPlainText(text) {
  if (!text) return '';
  return esc(text).replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
}

function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Event listeners ──────────────────────────────────────────
function attachQuestionListeners(part) {
  var el = document.getElementById('phase-questions');
  if (!el) return;

  // MCQ buttons (Part 1, 5, 7)
  el.querySelectorAll('.opt-btn, .sect-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var pn    = parseInt(btn.dataset.part);
      var qnum  = parseInt(btn.dataset.qnum);
      var ans   = btn.dataset.answer;
      setAnswer(pn, qnum, ans);

      // Update UI: deselect siblings
      var card = document.getElementById('qcard-' + qnum);
      if (card) {
        card.querySelectorAll('.opt-btn, .sect-btn').forEach(function(b){ b.classList.remove('opt-selected'); });
      }
      btn.classList.add('opt-selected');
    });
  });

  // Text inputs (Part 2, 3, 4)
  el.querySelectorAll('.open-input').forEach(function(inp) {
    inp.addEventListener('input', function() {
      var pn   = parseInt(inp.dataset.part);
      var qnum = parseInt(inp.dataset.qnum);
      setAnswer(pn, qnum, inp.value.trim());
    });
  });

  // Gap selects (Part 6)
  el.querySelectorAll('.gap-select').forEach(function(sel) {
    sel.addEventListener('change', function() {
      var pn   = parseInt(sel.dataset.part);
      var qnum = parseInt(sel.dataset.qnum);
      setAnswer(pn, qnum, sel.value);
    });
  });
}

// ── Review ────────────────────────────────────────────────────
function renderReview() {
  var el   = document.getElementById('phase-review');
  var html = '<h2 class="review-title">Review Your Answers</h2>'
    + '<p class="review-sub">Check all your answers before submitting. You can go back to any part to make changes.</p>'
    + '<div class="review-parts">';

  _test.parts.forEach(function(part) {
    var pn    = part.num;
    var qs    = part.questions || [];
    var total = qs.length;
    if (pn === 6) total = Object.keys(part.answers || {}).length;
    var done  = Object.keys(_session.answers[pn] || {}).length;
    var pct   = total > 0 ? Math.round(done / total * 100) : 0;
    var cls   = pct === 100 ? 'review-part-complete' : (pct > 0 ? 'review-part-partial' : 'review-part-empty');

    html += '<div class="review-part ' + cls + '" data-partidx="' + (pn - 1) + '">'
      + '<div class="review-part-head">'
      + '<span class="review-part-label">Part ' + pn + '</span>'
      + '<span class="review-part-title">' + esc(part.title || '') + '</span>'
      + '<span class="review-part-count">' + done + '/' + total + '</span>'
      + '</div>'
      + '<div class="review-answers">';

    if (pn === 6) {
      for (var gn = 37; gn <= 42; gn++) {
        var ans = getAnswer(6, gn);
        html += '<span class="review-ans ' + (ans ? 'ans-set' : 'ans-empty') + '">[' + gn + '] ' + (ans || '—') + '</span>';
      }
    } else {
      qs.forEach(function(q) {
        var ans = getAnswer(pn, q.qnum);
        html += '<span class="review-ans ' + (ans ? 'ans-set' : 'ans-empty') + '">' + q.qnum + ': ' + (ans || '—') + '</span>';
      });
    }
    html += '</div>'
      + '<button class="review-edit-btn" data-partnum="' + pn + '">Edit Part ' + pn + '</button>'
      + '</div>';
  });

  html += '</div>';
  el.innerHTML = html;

  // Click to edit a part
  el.querySelectorAll('.review-edit-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var pn = parseInt(btn.dataset.partnum);
      _session.partIdx = pn - 1;
      _session.phase   = 'questions';
      saveSession();
      window.scrollTo(0, 0);
      renderPage();
    });
  });

  var prev = document.getElementById('prevBtn');
  if (prev) {
    prev.style.display = '';
    prev.textContent   = '← Back to Part 7';
    prev.onclick       = function() { _session.partIdx = 6; _session.phase = 'questions'; saveSession(); renderPage(); };
  }
  var next = document.getElementById('nextBtn');
  if (next) {
    next.textContent = 'Submit Test';
    next.onclick     = submitTest;
    next.style.display = '';
  }
  var revBtn = document.getElementById('reviewBtn');
  if (revBtn) revBtn.style.display = 'none';
}

// ── Submit ────────────────────────────────────────────────────
function submitTest() {
  if (!confirm('Submit your test? You can still view your answers and errors afterwards.')) return;

  stopPartTimer();
  clearInterval(_timerInterval);

  _session.submittedAt  = new Date().toISOString();
  _session.totalElapsed = Math.floor((Date.now() - _session.globalStartTs) / 1000);
  _session.phase        = 'results';
  saveSession();

  // Calculate results
  var results = calculateResults();
  localStorage.setItem(resultsKey(_session.testId), JSON.stringify(results));
  markCompleted(_session.testId);

  // Save errors to user_errors
  saveErrorsToState(results.errors);

  renderPage();
}

function calculateResults() {
  var scoreByPart = {};
  var errors      = [];

  _test.parts.forEach(function(part) {
    var pn      = part.num;
    var correct = 0;
    var total   = 0;

    if (pn === 1 || pn === 5) {
      (part.questions || []).forEach(function(q) {
        total++;
        var given   = (getAnswer(pn, q.qnum) || '').toUpperCase().trim();
        var expected = String(q.answer || '').toUpperCase().trim();
        if (given === expected) {
          correct++;
        } else {
          var optText = function(l){ return (q.options || {})[l] || l; };
          errors.push({
            testId:       _session.testId,
            part:         'Part ' + pn,
            qnum:         q.qnum,
            question:     q.question || ('Part ' + pn + ' Gap ' + q.qnum),
            userAnswer:   given ? given + (pn === 1 ? ' — ' + optText(given) : '') : '(blank)',
            correct:      expected + (pn === 1 ? ' — ' + optText(expected) : ''),
            explanation:  buildExplanation(part, q, given, expected),
            source:       'diagnostic',
            date:         new Date().toISOString()
          });
        }
      });
    } else if (pn === 2 || pn === 3) {
      (part.questions || []).forEach(function(q) {
        total++;
        var given    = (getAnswer(pn, q.qnum) || '').toLowerCase().trim();
        var expected = String(q.answer || '').toLowerCase().trim();
        // allow slash-separated alternatives
        var alts     = expected.split('/').map(function(a){ return a.trim(); });
        if (alts.indexOf(given) !== -1) {
          correct++;
        } else {
          errors.push({
            testId:      _session.testId,
            part:        'Part ' + pn,
            qnum:        q.qnum,
            question:    'Part ' + pn + ' Gap ' + q.qnum + (q.stem ? '  [' + q.stem + ']' : ''),
            userAnswer:  getAnswer(pn, q.qnum) || '(blank)',
            correct:     q.answer,
            explanation: buildExplanation(part, q, given, expected),
            source:      'diagnostic',
            date:        new Date().toISOString()
          });
        }
      });
    } else if (pn === 4) {
      (part.questions || []).forEach(function(q) {
        total++;
        var given = (getAnswer(4, q.qnum) || '').toLowerCase().trim();
        // Partial credit not implemented — just flag if blank or obviously wrong
        var expected = (q.answer || '').toLowerCase().trim();
        // Check if key word is present
        var kw = (q.keyword || '').toLowerCase();
        if (given.indexOf(kw) !== -1 && given.length >= 3) {
          correct++;  // approximation; real FCE gives 0/1/2
        } else {
          errors.push({
            testId:      _session.testId,
            part:        'Part 4',
            qnum:        q.qnum,
            question:    (q.s1 || '') + ' [KEY: ' + q.keyword + ']',
            userAnswer:  getAnswer(4, q.qnum) || '(blank)',
            correct:     q.answer,
            explanation: buildExplanation(part, q, given, expected),
            source:      'diagnostic',
            date:        new Date().toISOString()
          });
        }
      });
    } else if (pn === 6) {
      var correctAnswers = part.answers || {};
      for (var gn = 37; gn <= 42; gn++) {
        total++;
        var given    = (getAnswer(6, gn) || '').toUpperCase().trim();
        var expected = String(correctAnswers[gn] || '').toUpperCase().trim();
        if (given === expected) {
          correct++;
        } else {
          var sentText = (part.sentences || {})[expected] || '';
          errors.push({
            testId:      _session.testId,
            part:        'Part 6',
            qnum:        gn,
            question:    'Gap [' + gn + '] in "' + (part.title || '') + '"',
            userAnswer:  given || '(blank)',
            correct:     expected + (sentText ? ' — "' + sentText + '"' : ''),
            explanation: 'Sentence ' + expected + ' fits gap [' + gn + '] because of the logical and grammatical connection with the surrounding text.',
            source:      'diagnostic',
            date:        new Date().toISOString()
          });
        }
      }
    } else if (pn === 7) {
      (part.questions || []).forEach(function(q) {
        total++;
        var given    = (getAnswer(7, q.qnum) || '').toUpperCase().trim();
        var expected = String(q.answer || '').toUpperCase().trim();
        if (given === expected) {
          correct++;
        } else {
          var secText = (part.sections || {})[expected];
          errors.push({
            testId:      _session.testId,
            part:        'Part 7',
            qnum:        q.qnum,
            question:    'Q' + q.qnum + '. ' + (q.question || ''),
            userAnswer:  given || '(blank)',
            correct:     'Section ' + expected + (secText && secText.name ? ' (' + secText.name + ')' : ''),
            explanation: 'The answer is section ' + expected + '. Look for the paraphrase of "' + (q.question || '') + '" in that section.',
            source:      'diagnostic',
            date:        new Date().toISOString()
          });
        }
      });
    }

    scoreByPart[pn] = { correct: correct, total: total };
  });

  var totalCorrect = Object.values(scoreByPart).reduce(function(s, v){ return s + v.correct; }, 0);
  var totalQ       = Object.values(scoreByPart).reduce(function(s, v){ return s + v.total; }, 0);

  return {
    testId:       _session.testId,
    scoreByPart:  scoreByPart,
    totalCorrect: totalCorrect,
    totalQ:       totalQ,
    timeByPart:   _session.timeByPart,
    totalElapsed: _session.totalElapsed,
    errors:       errors,
    completedAt:  _session.submittedAt
  };
}

function buildExplanation(part, q, given, expected) {
  var pn = part.num;
  if (pn === 1) {
    var opts = q.options || {};
    var givenWord    = opts[given]    || given;
    var expectedWord = opts[expected] || expected;
    return 'The correct answer is <strong>' + expected + '</strong> (' + expectedWord + '). '
      + (given ? '"' + givenWord + '" does not fit here. ' : '')
      + 'Review vocabulary, collocations, and phrasal verbs for this context.';
  }
  if (pn === 2) {
    return 'The correct word is <strong>' + expected + '</strong>. '
      + 'This is a grammar/function word. Check prepositions, conjunctions, and relative pronouns.';
  }
  if (pn === 3) {
    return 'The correct form of <strong>' + (q.stem || '') + '</strong> is <strong>' + expected + '</strong>. '
      + 'Check the grammatical category needed (noun/adjective/adverb) and apply the correct suffix/prefix.';
  }
  if (pn === 4) {
    return 'A correct answer is: <strong>' + q.answer + '</strong>. '
      + 'The key word is <strong>' + q.keyword + '</strong> — it must appear unchanged. Remember: 2–5 words total.';
  }
  if (pn === 5) {
    return 'The correct answer is <strong>' + expected + '</strong>. '
      + 'Re-read the relevant paragraph of the passage carefully, looking for paraphrases of the question.';
  }
  return '';
}

function saveErrorsToState(errors) {
  if (!errors || errors.length === 0) return;
  var state  = State.load();
  var existing = state.sessionErrors || [];
  // add diagnostic tag to each error
  var tagged = errors.map(function(e){ return Object.assign({}, e, { source: 'diagnostic' }); });
  var updated = tagged.concat(existing).slice(0, 500);
  State.update({ sessionErrors: updated });
}

// ── Results ────────────────────────────────────────────────────
function renderResults() {
  var resultsData = JSON.parse(localStorage.getItem(resultsKey(_session.testId)) || 'null');
  if (!resultsData) { _session.phase = 'review'; renderPage(); return; }

  var el    = document.getElementById('phase-results');
  var total = resultsData.totalCorrect;
  var out   = resultsData.totalQ;
  var pct   = Math.round(total / out * 100);
  var grade = pct >= 80 ? 'C1 level' : pct >= 60 ? 'B2 level' : pct >= 40 ? 'B1 level' : 'A2/B1 level';

  var html = '<div class="results-hero">'
    + '<div class="results-circle"><div class="results-score">' + total + '/' + out + '</div><div class="results-pct">' + pct + '%</div></div>'
    + '<div class="results-grade">' + grade + '</div>'
    + '<div class="results-time">Total time: <strong>' + formatTime(resultsData.totalElapsed) + '</strong> (FCE standard: 1h 15m)</div>'
    + '</div>';

  // Per-part breakdown
  html += '<div class="results-breakdown">';
  [1,2,3,4,5,6,7].forEach(function(pn) {
    var sc      = (resultsData.scoreByPart || {})[pn] || { correct: 0, total: PART_TOTALS[pn] };
    var ppct    = sc.total > 0 ? Math.round(sc.correct / sc.total * 100) : 0;
    var t       = (resultsData.timeByPart || {})[pn] || 0;
    var exp     = PART_TIMES[pn] * 60;
    var timeDif = t - exp;
    var timeStr = formatTime(t) + ' (expected ' + PART_TIMES[pn] + ' min' + (timeDif > 0 ? ', +' + Math.round(timeDif/60) + 'm' : timeDif < 0 ? ', -' + Math.round(-timeDif/60) + 'm' : '') + ')';
    var cls     = ppct >= 75 ? 'res-good' : ppct >= 50 ? 'res-mid' : 'res-bad';
    html += '<div class="result-part-row ' + cls + '">'
      + '<span class="rp-label">Part ' + pn + '</span>'
      + '<span class="rp-score">' + sc.correct + '/' + sc.total + ' (' + ppct + '%)</span>'
      + '<span class="rp-time">' + timeStr + '</span>'
      + '</div>';
  });
  html += '</div>';

  var errCount = (resultsData.errors || []).length;
  html += '<div class="results-actions">';
  if (errCount > 0) {
    html += '<button class="btn btn-primary" id="showErrorsBtn">Review ' + errCount + ' mistake' + (errCount > 1 ? 's' : '') + '</button>';
  } else {
    html += '<div class="perfect-score">Perfect score on this test!</div>';
  }

  // Next test button
  var nextTestId = _session.testId + 1;
  var nextTest   = DIAGNOSTIC_TESTS.find(function(t){ return t.id === nextTestId; });
  if (nextTest) {
    html += '<a href="diagnostic.html?test=' + nextTestId + '" class="btn btn-secondary">Start Test ' + nextTestId + ' →</a>';
  }
  html += '<a href="test.html" class="btn btn-secondary">Back to Tests</a>';
  html += '</div>';

  el.innerHTML = html;

  var showErrors = document.getElementById('showErrorsBtn');
  if (showErrors) {
    showErrors.addEventListener('click', function() {
      _session.phase = 'errors';
      renderPage();
    });
  }
}

// ── Errors ────────────────────────────────────────────────────
function renderErrors() {
  var resultsData = JSON.parse(localStorage.getItem(resultsKey(_session.testId)) || 'null');
  var el          = document.getElementById('phase-errors');
  var errors      = (resultsData && resultsData.errors) || [];

  var html = '<button class="btn btn-secondary" id="backToResultsBtn" style="margin-bottom:16px">← Back to results</button>'
    + '<h2 class="errors-title">Mistakes — ' + errors.length + ' error' + (errors.length !== 1 ? 's' : '') + '</h2>';

  // Group by part
  var byPart = {};
  errors.forEach(function(e) {
    if (!byPart[e.part]) byPart[e.part] = [];
    byPart[e.part].push(e);
  });

  Object.keys(byPart).sort().forEach(function(partLabel) {
    html += '<div class="error-group"><div class="error-group-title">' + partLabel + '</div>';
    byPart[partLabel].forEach(function(e) {
      html += '<div class="card error-card diag-error">'
        + '<div class="err-question">' + esc(e.question) + '</div>'
        + '<div class="err-answers">'
        + '<div class="err-row"><span class="err-label">Your answer:</span> <span class="err-wrong">' + esc(e.userAnswer) + '</span></div>'
        + '<div class="err-row"><span class="err-label">Correct:</span> <span class="err-correct">' + esc(e.correct) + '</span></div>'
        + '</div>'
        + '<div class="err-explanation">' + (e.explanation || '') + '</div>'
        + '</div>';
    });
    html += '</div>';
  });

  el.innerHTML = html;

  document.getElementById('backToResultsBtn').addEventListener('click', function() {
    _session.phase = 'results';
    renderPage();
  });
}

// ── Expose ────────────────────────────────────────────────────
window.diagInit = diagInit;
