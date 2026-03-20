/* ══════════════════════════════════════════
   TrainEnglish — Content: Theory & Exercises
   Add THEORY[day] and EXERCISES[day] entries
   to populate each study session.
══════════════════════════════════════════ */

'use strict';

const TOPIC_KEYS = {
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

function topicKeyForDay(day) {
  // Calibrated on real tag frequencies from 252 FCE exercises (2026-03-20)
  if (day <=  6) return 'verb_tenses';
  if (day <= 10) return 'collocations';
  if (day <= 14) return 'collocations2';
  if (day <= 18) return 'prepositions';
  if (day <= 22) return 'word_formation';
  if (day <= 26) return 'word_formation2';
  if (day <= 29) return 'present_perfect';
  if (day <= 33) return 'passive';
  if (day <= 36) return 'modals';
  if (day <= 39) return 'reported_speech';
  if (day <= 42) return 'wish';
  if (day <= 45) return 'gerund_infinitive';
  if (day <= 48) return 'linking_words';
  if (day <= 50) return 'comparatives';
  if (day <= 52) return 'relative_clauses';
  if (day <= 54) return 'conditionals';
  if (day <= 56) return 'quantifiers';
  if (day <= 58) return 'phrasal_verbs';
  return 'review';
}

function getTheoryFor(day) {
  return THEORY[day] || `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:32px;margin-bottom:12px">📖</div>
      <p style="color:var(--subtext);font-size:14px">Teoria per il giorno ${day} in preparazione...</p>
    </div>
  `;
}

function getExercisesFor(day) {
  return EXERCISES[day] || null;
}

// ══════════════════════════════════════════
// THEORY — HTML strings per day
// Add entries: THEORY[1] = '<h3>...</h3><p>...</p>'
// ══════════════════════════════════════════
const THEORY = {};

// Day 1 — Present Simple & Continuous
THEORY[1] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Present Simple & Continuous</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il <strong>Present Simple</strong> si usa per abitudini, fatti generali e stati permanenti.
    Il <strong>Present Continuous</strong> si usa per azioni in corso in questo momento o tendenze temporanee.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">She <strong>works</strong> in London. (abitudine)</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">She <strong>is working</strong> from home today. (temporaneo)</p>
    <p style="font-size:14px;color:var(--text2);">I <strong>don't understand</strong> this. (stato)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      I verbi di stato (<em>know, believe, love, hate, want, need, seem</em>) non si usano di norma al Continuous.
      Attenzione: <em>think, have, see</em> possono avere significati diversi con le due forme.
    </p>
  </div>
`;

// Day 2 — Past Simple & Continuous
THEORY[2] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Past Simple & Continuous</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il <strong>Past Simple</strong> descrive azioni completate nel passato, spesso con un riferimento temporale.
    Il <strong>Past Continuous</strong> descrive un'azione in corso a un momento preciso del passato, o un'azione di sfondo interrotta.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Struttura classica</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">While I <strong>was studying</strong>, the phone <strong>rang</strong>.</p>
    <p style="font-size:14px;color:var(--text2);">When she <strong>arrived</strong>, they <strong>were waiting</strong> for her.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel FCE Part 1 (MC Cloze) devi scegliere tra Past Simple e Past Continuous.
      Clue: <em>while</em> → Continuous; <em>when + azione breve</em> → Simple.
    </p>
  </div>
`;

// Day 8 — Modal verbs: ability & permission
THEORY[8] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Verbi Modali: Abilità & Permesso</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I modali <strong>can / could / be able to</strong> esprimono abilità;
    <strong>can / could / may / might</strong> esprimono permesso o possibilità.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Tabella rapida</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>can</strong> — abilità presente / permesso informale</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>could</strong> — abilità passata / richiesta educata</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>may / might</strong> — permesso formale / possibilità</p>
    <p style="font-size:13px;color:var(--text2)"><strong>be able to</strong> — abilità in tutti i tempi (es. futuro: <em>will be able to</em>)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4 (Key-Word Transformation) ti possono chiedere di trasformare
      <em>She was able to solve it</em> con keyword <strong>MANAGED</strong> → <em>She managed to solve it</em>.
    </p>
  </div>
`;

// Day 15 — Conditionals Type 1 & 2
THEORY[15] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Condizionali: Tipo 1 & 2</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il <strong>Tipo 1</strong> (reale) usa <em>If + Present Simple, will + infinito</em>.
    Il <strong>Tipo 2</strong> (ipotetico presente) usa <em>If + Past Simple, would + infinito</em>.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:6px"><strong>T1:</strong> If it <em>rains</em>, I <em>will take</em> an umbrella.</p>
    <p style="font-size:14px;color:var(--text2)"><strong>T2:</strong> If I <em>had</em> more time, I <em>would study</em> abroad.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Dopo <em>if</em> nel Tipo 1 NON si usa <em>will</em> — errore classico FCE.
      Nel Tipo 2 usa sempre <em>were</em> (non <em>was</em>) nella clausola <em>if</em> per tutti i soggetti.
    </p>
  </div>
`;

// ══════════════════════════════════════════
// EXERCISES — arrays per day
// Exercise object shape:
// {
//   type: 'multiple' | 'fill' | 'transform',
//   part: 'Part N',
//   question: '...',
//   options: [...], correct: 0,        // multiple only
//   answer: '...' | [...],             // fill / transform (array = accepted variants)
//   keyword: '...',                    // transform only
//   explanation: '...'
// }
// ══════════════════════════════════════════
const EXERCISES = {};

// Day 1 — Present Simple & Continuous
EXERCISES[1] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She usually _____ to work by bus, but today she _____ her car.',
    options: [
      'goes / is driving',
      'is going / drives',
      'goes / drives',
      'is going / is driving'
    ],
    correct: 0,
    explanation: 'Si usa Present Simple per l\'abitudine (usually goes) e Present Continuous per l\'eccezione odierna (is driving today).'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'I _____ what you mean — it _____ a lot of sense.',
    options: [
      'understand / makes',
      'am understanding / is making',
      'understand / is making',
      'am understanding / makes'
    ],
    correct: 0,
    explanation: '"Understand" e "make sense" sono verbi di stato: non si usano al Continuous.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The number of people who work from home _____ (increase) every year.',
    answer: ['is increasing', 'increases'],
    explanation: '"Is increasing" (tendenza in corso) è preferibile; "increases" è accettabile per un fatto generale.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It is not common for him to arrive late.',
    keyword: 'USUALLY',
    answer: ['he does not usually arrive late', 'he doesn\'t usually arrive late'],
    explanation: 'Con "usually" si usa il Present Simple nella negativa: doesn\'t usually arrive.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Look! The children _____ in the garden.',
    options: [
      'are playing',
      'play',
      'played',
      'have played'
    ],
    correct: 0,
    explanation: '"Look!" è un segnale che l\'azione è in corso proprio ora → Present Continuous.'
  }
];

// Day 2 — Past Simple & Continuous
EXERCISES[2] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'While she _____ the report, her manager _____ in.',
    options: [
      'was writing / walked',
      'wrote / was walking',
      'was writing / was walking',
      'wrote / walked'
    ],
    correct: 0,
    explanation: 'Azione di sfondo (was writing) + azione breve che la interrompe (walked in).'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'By the time we _____ (arrive) at the station, the train had already left.',
    answer: ['arrived'],
    explanation: 'Past Simple per l\'azione puntuale del passato; il treno era già partito (Past Perfect).'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It was raining when the match started.',
    keyword: 'WHEN',
    answer: ['when the match started, it was raining'],
    explanation: 'La struttura "when + Past Simple, Past Continuous" descrive l\'azione di sfondo al momento dell\'evento.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She _____ English for three years before she moved to London.',
    options: [
      'had been studying',
      'was studying',
      'studied',
      'has been studying'
    ],
    correct: 0,
    explanation: 'Past Perfect Continuous per un\'azione che durava prima di un evento passato (moved).'
  }
];

// Day 8 — Modals: ability & permission
EXERCISES[8] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She _____ speak three languages fluently by the time she was twelve.',
    options: [
      'could',
      'can',
      'may',
      'must'
    ],
    correct: 0,
    explanation: '"Could" indica abilità generale nel passato.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It was possible for her to solve the puzzle in minutes.',
    keyword: 'ABLE',
    answer: ['she was able to solve the puzzle in minutes'],
    explanation: '"Was able to" sostituisce "it was possible for her to" nella trasformazione.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'You _____ bring a dictionary — it\'s not allowed in the exam.',
    answer: ['cannot', "can't", 'may not'],
    explanation: 'Divieto: cannot / may not. "Mustn\'t" è altrettanto corretto ma non è tra le opzioni qui.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: '_____ I open the window? It\'s very hot in here.',
    options: [
      'May',
      'Must',
      'Should',
      'Will'
    ],
    correct: 0,
    explanation: '"May I...?" è la forma educata per chiedere permesso in contesti formali.'
  }
];

// Day 15 — Conditionals Type 1 & 2
EXERCISES[15] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'If she _____ harder, she would pass the exam.',
    options: [
      'studied',
      'will study',
      'studies',
      'had studied'
    ],
    correct: 0,
    explanation: 'Condizionale Tipo 2: If + Past Simple, would + infinito. Situazione ipotetica presente.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'If you _____ (not/leave) now, you will miss the train.',
    answer: ["don't leave", 'do not leave'],
    explanation: 'Tipo 1: If + Present Simple negativo, will + infinito. Situazione reale nel futuro.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'I don\'t have enough money, so I can\'t buy a new laptop.',
    keyword: 'IF',
    answer: [
      'if I had enough money, I could buy a new laptop',
      'if I had enough money I could buy a new laptop'
    ],
    explanation: 'Condizionale Tipo 2 con "could" invece di "would" per esprimere possibilità.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'If I _____ you, I would take the job offer.',
    options: [
      'were',
      'am',
      'was',
      'would be'
    ],
    correct: 0,
    explanation: 'Nel Tipo 2, dopo "if" si usa "were" per tutti i soggetti nel registro formale/FCE.'
  }
];
