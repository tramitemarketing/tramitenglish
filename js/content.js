/* ══════════════════════════════════════════
   TramitEnglish — Content: Theory & Exercises
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

// ══════════════════════════════════════════
// HOW TO ADD NEW CONTENT
// ══════════════════════════════════════════
// THEORY[N] = `<h3>...</h3><p>...</p>...`;
// EXERCISES[N] = [{type:'multiple',...}, {type:'fill',...}, ...];
// See Days 1-2 for full examples of each exercise type.
// ══════════════════════════════════════════

// Day 3 — Future Forms
THEORY[3] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Future Forms: will, going to, Present Continuous</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    <strong>Will</strong> si usa per decisioni spontanee, previsioni e promesse. <strong>Going to</strong> si usa per piani già decisi o per previsioni basate su prove visibili. Il <strong>Present Continuous</strong> si usa per appuntamenti e arrangiamenti futuri già confermati.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I <strong>will call</strong> you back. (decisione spontanea)</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">She <strong>is going to fail</strong> — she never studies. (prova visibile)</p>
    <p style="font-size:14px;color:var(--text2);">We <strong>are meeting</strong> the client at 3pm. (appuntamento confermato)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4 ti possono chiedere di trasformare "I have a dentist appointment tomorrow" con keyword <strong>SEEING</strong> → "I am seeing the dentist tomorrow." Non confondere "will" con decisioni già pianificate.
    </p>
  </div>
`;

EXERCISES[3] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Look at those clouds — it _____ rain any minute now.',
    options: ['is going to', 'will', 'is raining', 'rains'],
    correct: 0,
    explanation: 'Prova visibile (nuvole) → "going to" per previsioni basate su evidenza concreta.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'A: "We\'ve run out of coffee." B: "Don\'t worry, I _____ get some from the shop."',
    answer: ["will get", "I'll get"],
    explanation: 'Decisione presa nel momento della conversazione → "will" (non "going to").'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'I can\'t make it on Friday — I _____ dinner with my parents.',
    options: ['am having', 'will have', 'am going to have', 'have'],
    correct: 0,
    explanation: 'Arrangiamento già confermato → Present Continuous. "Am going to" è meno naturale per appuntamenti sociali fissi.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'Her plan is to study medicine at university.',
    keyword: 'GOING',
    answer: ['she is going to study medicine at university'],
    explanation: 'Piano già deciso → "be going to + infinito".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'By this time next year, she _____ (finish) her degree.',
    answer: ['will have finished'],
    explanation: 'Future Perfect per un\'azione che sarà completata prima di un momento futuro.'
  }
];

// Day 4 — Present Perfect Simple
THEORY[4] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Present Perfect Simple</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il <strong>Present Perfect</strong> collega il passato al presente: un'azione passata ha risultati o rilevanza ora. Si contrasta con il <strong>Past Simple</strong>, che si usa quando il momento passato è specificato o concluso.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi chiave</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I <strong>have lost</strong> my keys. (non li trovo ora)</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">She <strong>has never been</strong> to Japan.</p>
    <p style="font-size:14px;color:var(--text2);">I <strong>lost</strong> my keys yesterday. (Past Simple: tempo specificato)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Segnali del Present Perfect: <em>already, yet, just, ever, never, recently, so far, since, for</em>. Se vedi "ago", "last year", "in 2019" → Past Simple obbligatorio.
    </p>
  </div>
`;

EXERCISES[4] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'I _____ that film — it\'s brilliant. You should watch it.',
    options: ['have seen', 'saw', 'see', 'was seeing'],
    correct: 0,
    explanation: 'Esperienza passata con rilevanza presente (consiglio) → Present Perfect.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She _____ (just / finish) the report, so it\'s ready to send.',
    answer: ['has just finished'],
    explanation: '"Just" indica un\'azione molto recente → Present Perfect.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'When _____ you last _____ to your grandmother?',
    options: ['did / speak', 'have / spoken', 'do / speak', 'had / spoken'],
    correct: 0,
    explanation: '"When" con domanda sul passato → Past Simple. "When" non si usa con Present Perfect in inglese.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'This is the first time I have eaten sushi.',
    keyword: 'NEVER',
    answer: ['I have never eaten sushi before', 'I have never eaten sushi'],
    explanation: '"This is the first time" → "have never + past participle (before)".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Have you finished the assignment _____? The deadline is tomorrow.',
    answer: ['yet'],
    explanation: '"Yet" si usa nelle domande e negative del Present Perfect per indicare qualcosa atteso ma non ancora accaduto.'
  }
];

// Day 5 — Past Perfect
THEORY[5] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Past Perfect: had + participio passato</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il <strong>Past Perfect</strong> descrive un'azione avvenuta <em>prima</em> di un'altra azione nel passato. Si forma con <strong>had + past participle</strong> e si usa spesso insieme al Past Simple per stabilire una sequenza temporale.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">When I arrived, the film <strong>had already started</strong>.</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">She <strong>had never driven</strong> abroad before that trip.</p>
    <p style="font-size:14px;color:var(--text2);">He was tired because he <strong>had worked</strong> all night.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Segnali: <em>by the time, before, after, when, already, just, never… before</em>. Nel Part 4, trasformazioni con "HAVING" o "AFTER" richiedono spesso il Past Perfect o il participio perfetto.
    </p>
  </div>
`;

EXERCISES[5] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'By the time we reached the airport, the plane _____.',
    options: ['had already taken off', 'already took off', 'has already taken off', 'was already taking off'],
    correct: 0,
    explanation: '"By the time" + Past Simple → Past Perfect per l\'azione precedente.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She felt confident because she _____ (practise) the presentation several times.',
    answer: ['had practised', 'had practiced'],
    explanation: 'La pratica era avvenuta prima della sensazione di fiducia → Past Perfect.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'He ate all the pizza before she arrived.',
    keyword: 'WHEN',
    answer: ['when she arrived, he had already eaten all the pizza', 'when she arrived he had eaten all the pizza'],
    explanation: 'Sequenza: mangiare (prima) → arrivare (dopo). "When + Past Simple, Past Perfect".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'I didn\'t recognise her because she _____ her hair cut.',
    options: ['had had', 'has had', 'had', 'was having'],
    correct: 0,
    explanation: '"Had had" = Past Perfect di "have + object". Doppio "had" è corretto e comune al FCE.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'After they _____ (leave), we cleaned the flat.',
    answer: ['had left'],
    explanation: '"After" + Past Perfect per chiarire che la partenza è avvenuta prima della pulizia.'
  }
];

// Day 6 — Mixed Tenses
THEORY[6] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Tempi Verbali: Ripasso Misto</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il FCE testa la tua capacità di scegliere il tempo corretto in contesto. Le differenze chiave: <strong>Present Simple vs Continuous</strong> (stato vs azione temporanea), <strong>Past Simple vs Perfect</strong> (tempo specificato vs legame col presente), <strong>Past Perfect vs Past Simple</strong> (sequenza temporale).
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Schema rapido</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>ago / last / in [year]</strong> → Past Simple</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>since / for / yet / already / just</strong> → Present Perfect</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>by the time / before / after + passato</strong> → Past Perfect</p>
    <p style="font-size:13px;color:var(--text2)"><strong>tomorrow / next / by next year</strong> → Future (will / going to / Future Perfect)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 2 (Open Cloze) il verbo è già dato — devi solo scegliere il tempo giusto. Leggi sempre la frase intera cercando segnali temporali prima di rispondere.
    </p>
  </div>
`;

EXERCISES[6] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She _____ for this company since she _____ university in 2018.',
    options: ['has worked / left', 'worked / has left', 'has worked / has left', 'works / left'],
    correct: 0,
    explanation: '"Since" + punto nel passato → Present Perfect per l\'azione continuata; "left" = Past Simple per evento puntuale passato.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I _____ (never / try) Thai food until I visited Bangkok last summer.',
    answer: ['had never tried'],
    explanation: 'Prima della visita a Bangkok (evento passato) → Past Perfect.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It\'s two years since I last visited my hometown.',
    keyword: 'FOR',
    answer: ['I have not visited my hometown for two years', "I haven't visited my hometown for two years"],
    explanation: '"It\'s + time + since" → "have not + verb + for + time".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'While Tom _____ dinner, his sister _____ him a very long letter.',
    options: ['was cooking / wrote', 'cooked / was writing', 'was cooking / was writing', 'cooked / wrote'],
    correct: 0,
    explanation: 'Azione di sfondo lunga (was cooking) + azione puntuale che si svolge in quel momento (wrote).'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Don\'t worry — by the time they arrive, I _____ (prepare) everything.',
    answer: ['will have prepared'],
    explanation: 'Future Perfect: azione completata prima di un momento futuro (l\'arrivo degli ospiti).'
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

// Day 7 — make/do Collocations
THEORY[7] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Collocazioni: make & do</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    <strong>Make</strong> si usa generalmente per creare, produrre o causare qualcosa. <strong>Do</strong> si usa per attività, lavoro o compiti. Non esiste una regola assoluta — queste collocazioni vanno memorizzate.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Le più frequenti al FCE</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>make:</strong> a decision, a mistake, a suggestion, progress, an effort, a noise, friends, an appointment</p>
    <p style="font-size:13px;color:var(--text2)"><strong>do:</strong> homework, research, damage, harm, a favour, business, your best, the washing-up, exercise</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 1 e Part 4 le collocazioni make/do sono frequentissime. Trappole classiche: <em>make</em> homework (❌ do), <em>do</em> a mistake (❌ make), <em>do</em> progress (❌ make progress ✓).
    </p>
  </div>
`;

EXERCISES[7] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'It\'s important to _____ a good impression at your first job interview.',
    options: ['make', 'do', 'have', 'take'],
    correct: 0,
    explanation: '"Make an impression" è una collocazione fissa — non si usa "do".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Could you _____ me a favour and post this letter on your way out?',
    answer: ['do'],
    explanation: '"Do someone a favour" — collocazione fissa con "do".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The factory fire _____ considerable damage to the surrounding area.',
    options: ['did', 'made', 'caused', 'brought'],
    correct: 0,
    explanation: '"Do damage" è la collocazione corretta, anche se "cause damage" è accettabile in contesto.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She apologised for the error she made.',
    keyword: 'MISTAKE',
    answer: ['she apologised for making a mistake', 'she apologised for the mistake she made'],
    explanation: '"Make a mistake" — trasformazione con la collocazione corretta.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The students have been _____ a lot of progress with their speaking skills recently.',
    answer: ['making'],
    explanation: '"Make progress" — mai "do progress". Collocazione da memorizzare.'
  }
];

// Day 9 — have/take/give/get Collocations
THEORY[9] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Collocazioni: have, take, give, get</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Questi verbi formano collocazioni fisse che bisogna imparare a memoria. Spesso sostituiscono verbi più specifici e sono molto frequenti nel linguaggio naturale.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>have:</strong> a rest, a look, a chat, a go, a shower, a meeting, difficulty, a good time</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>take:</strong> a break, a risk, part in, an exam, a photo, charge, advantage of, turns</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>give:</strong> a speech, advice, a hand, permission, a lift, way, birth to</p>
    <p style="font-size:13px;color:var(--text2)"><strong>get:</strong> permission, a chance, rid of, in touch, better, lost, ready</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Attenzione: "take an exam" (non "make" o "do"), "give advice" (non "make advice"), "have difficulty" + -ing (non "to").
    </p>
  </div>
`;

EXERCISES[9] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She _____ great pride in her work and never submits anything without checking it.',
    options: ['takes', 'makes', 'does', 'gets'],
    correct: 0,
    explanation: '"Take pride in" è una collocazione fissa.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Could you _____ me a lift to the station? My car is being repaired.',
    answer: ['give'],
    explanation: '"Give someone a lift" = portare qualcuno in macchina. Collocazione fissa.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'All the students will _____ part in the science fair next month.',
    options: ['take', 'do', 'make', 'have'],
    correct: 0,
    explanation: '"Take part in" = partecipare a. Collocazione fissa con "take".'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She found it difficult to concentrate with all the noise.',
    keyword: 'DIFFICULTY',
    answer: ['she had difficulty concentrating with all the noise', 'she had difficulty in concentrating with all the noise'],
    explanation: '"Have difficulty + -ing" — collocazione fissa. "Difficulty" è seguito da gerundio.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Let\'s _____ a break — we\'ve been working for three hours straight.',
    answer: ['have', 'take'],
    explanation: '"Have/take a break" — entrambe le collocazioni sono accettabili e comuni.'
  }
];

// Day 10 — Fixed Collocations
THEORY[10] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Collocazioni fisse: pay, miss, catch & altri</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Molte collocazioni in inglese usano verbi specifici che non si possono sostituire. Questi abbinamenti vanno memorizzati come unità lessicali, non tradotti parola per parola dall'italiano.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Collocazioni frequenti al FCE</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>pay:</strong> attention to, a compliment, a fine, a visit, respect</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>miss:</strong> an opportunity, the point, a deadline, a train, out on</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>catch:</strong> someone's eye, a cold, fire, a glimpse of, someone off guard</p>
    <p style="font-size:13px;color:var(--text2)"><strong>keep:</strong> a promise, in touch, a secret, calm, track of</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4 potresti dover trasformare "He didn't keep his word" con keyword PROMISE → "He didn't keep his promise." Impara i sinonimi collocazionali, non solo il significato.
    </p>
  </div>
`;

EXERCISES[10] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Please _____ attention to the safety instructions before takeoff.',
    options: ['pay', 'give', 'make', 'take'],
    correct: 0,
    explanation: '"Pay attention to" — collocazione fissa. Non si usa "give" o "make" con "attention" in questo senso.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Don\'t _____ the opportunity to practise your English while you\'re abroad.',
    answer: ['miss'],
    explanation: '"Miss an opportunity" = perdere un\'opportunità. Collocazione fissa.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'He promised he would call, but he didn\'t.',
    keyword: 'WORD',
    answer: ["he didn't keep his word", 'he did not keep his word'],
    explanation: '"Keep one\'s word" = mantenere la promessa. Sinonimo di "keep a promise".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The painting _____ her eye the moment she walked into the gallery.',
    options: ['caught', 'took', 'made', 'got'],
    correct: 0,
    explanation: '"Catch someone\'s eye" = attirare l\'attenzione di qualcuno. Collocazione fissa.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'We need to _____ in touch after the conference — here\'s my card.',
    answer: ['keep', 'stay'],
    explanation: '"Keep/stay in touch" = mantenersi in contatto. Entrambi i verbi sono accettabili.'
  }
];

// Day 11 — Phrasal Verb Collocations
THEORY[11] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Collocazioni con Phrasal Verbs</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I <strong>phrasal verbs</strong> sono combinazioni di verbo + particella (preposizione o avverbio) con significato spesso idiomatico. Sono fondamentali al FCE B2 e compaiono in quasi tutte le parti dell'esame.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Phrasal verbs chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>come across</strong> = incontrare per caso / dare un'impressione</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>bring up</strong> = menzionare (un argomento) / allevare (un figlio)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>put off</strong> = rimandare / scoraggiare</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>set up</strong> = fondare, organizzare</p>
    <p style="font-size:13px;color:var(--text2)"><strong>turn down</strong> = rifiutare / abbassare (volume)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4 potresti dover sostituire un verbo con il suo phrasal verb equivalente: "She rejected the offer" → "She <strong>turned down</strong> the offer." Impara sia il significato sia il sinonimo formale.
    </p>
  </div>
`;

EXERCISES[11] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She _____ an interesting article about climate change while browsing the internet.',
    options: ['came across', 'came up with', 'came round', 'came along'],
    correct: 0,
    explanation: '"Come across" = trovare per caso, imbattersi in qualcosa.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The meeting has been _____ until next Thursday due to the director\'s illness.',
    answer: ['put off', 'postponed'],
    explanation: '"Put off" = posticipare. Sinonimo formale: "postpone".'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'They rejected our proposal without even considering it.',
    keyword: 'DOWN',
    answer: ['they turned down our proposal without even considering it', 'they turned our proposal down without even considering it'],
    explanation: '"Turn down" = rifiutare. Phrasal verb separabile: il complemento può andare in mezzo o dopo.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'He _____ a brilliant solution to the problem during the brainstorming session.',
    options: ['came up with', 'came across', 'came out with', 'came into'],
    correct: 0,
    explanation: '"Come up with" = ideare, trovare (una soluzione, un\'idea).'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She was _____ in a small village but moved to the city when she was eighteen.',
    answer: ['brought up', 'raised'],
    explanation: '"Bring up" = allevare. Sinonimo formale: "raise".'
  }
];

// Day 12 — Adjective + Noun Collocations
THEORY[12] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Collocazioni: Aggettivo + Sostantivo</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Certe coppie aggettivo+sostantivo sono collocazioni fisse in inglese. Non puoi sempre tradurre dall'italiano — ad esempio "strong coffee" (non "hard coffee"), "heavy rain" (non "strong rain").
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Coppie frequenti FCE</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>strong:</strong> coffee, accent, argument, evidence, feeling, influence</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>heavy:</strong> rain, traffic, smoker, drinker, penalty, workload</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>high:</strong> speed, risk, temperature, standard, priority, quality</p>
    <p style="font-size:13px;color:var(--text2)"><strong>deep:</strong> sleep, breath, thought, trouble, understanding</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 1 (MC Cloze) ti danno 4 aggettivi simili e devi scegliere quello che "collocates" col sostantivo. Quando dubiti, pensa alla collocazione più naturale in inglese, non alla traduzione.
    </p>
  </div>
`;

EXERCISES[12] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The police found _____ evidence linking him to the crime scene.',
    options: ['strong', 'powerful', 'heavy', 'deep'],
    correct: 0,
    explanation: '"Strong evidence" è la collocazione corretta. "Powerful" si usa con "argument" o "tool", non "evidence".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'There was _____ traffic on the motorway this morning, so I was half an hour late.',
    answer: ['heavy'],
    explanation: '"Heavy traffic" — in italiano diciamo "traffico intenso/pesante", ma in inglese solo "heavy".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She takes _____ pride in maintaining such _____ standards in her work.',
    options: ['great / high', 'big / tall', 'large / strong', 'deep / heavy'],
    correct: 0,
    explanation: '"Great pride" e "high standards" sono entrambe collocazioni fisse e naturali.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'The rain was very heavy during the whole journey.',
    keyword: 'HEAVILY',
    answer: ['it rained heavily during the whole journey', 'it rained heavily throughout the whole journey'],
    explanation: '"Rain heavily" — l\'avverbio "heavily" corrisponde all\'aggettivo "heavy" nella collocazione.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'He was in _____ trouble after crashing the company car.',
    answer: ['deep', 'serious', 'big'],
    explanation: '"Deep/serious/big trouble" — tutte e tre le collocazioni sono accettabili in questo contesto.'
  }
];

// Day 13 — Adverb + Adjective Collocations
THEORY[13] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Collocazioni: Avverbio + Aggettivo</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Gli avverbi intensificatori si collocano con aggettivi specifici. Non tutti gli avverbi funzionano con tutti gli aggettivi — ad esempio "deeply concerned" (sì), "deeply happy" (no; si usa "really/very happy").
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Collocazioni chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>deeply:</strong> concerned, affected, involved, committed, troubled</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>highly:</strong> recommended, unlikely, successful, competitive, skilled</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>widely:</strong> known, used, available, accepted, read</p>
    <p style="font-size:13px;color:var(--text2)"><strong>bitterly:</strong> disappointed, cold, regret, complained</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 3 (Word Formation) potresti dover formare l'avverbio corretto. Ricorda: "deep → deeply", "wide → widely", "high → highly". Alcune forme sembrano identiche ma cambiano significato (high = posizione; highly = grado).
    </p>
  </div>
`;

EXERCISES[13] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The new treatment is _____ recommended by leading specialists worldwide.',
    options: ['highly', 'deeply', 'widely', 'greatly'],
    correct: 0,
    explanation: '"Highly recommended" è la collocazione standard per raccomandazioni formali/professionali.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She was _____ disappointed by the outcome of the negotiations.',
    answer: ['bitterly', 'deeply', 'extremely'],
    explanation: '"Bitterly disappointed" è la collocazione più forte e naturale; "deeply disappointed" è anch\'essa molto comune.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Smartphones are now _____ available even in remote parts of the world.',
    options: ['widely', 'broadly', 'largely', 'highly'],
    correct: 0,
    explanation: '"Widely available" = disponibile su larga scala. "Broadly" e "largely" non si usano con "available".'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'Everyone knows this author throughout the country.',
    keyword: 'WIDELY',
    answer: ['this author is widely known throughout the country'],
    explanation: '"Widely known" — passivo con avverbio collocativo.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'He was _____ affected by the documentary — he didn\'t sleep for days.',
    answer: ['deeply', 'profoundly', 'greatly'],
    explanation: '"Deeply/profoundly affected" sono le collocazioni più naturali con "affected" in senso emotivo.'
  }
];

// Day 14 — Collocations Review
THEORY[14] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Collocazioni: Ripasso Generale</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il FCE testa le collocazioni in tutti i tipi di esercizio. La strategia migliore è imparare le parole in "clusters" (gruppi collocazionali) invece che in isolamento: non solo "do", ma "do homework / do research / do damage".
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Errori tipici italofoni</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">✗ <em>make</em> a research → ✓ <strong>do</strong> research</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">✗ <em>do</em> a suggestion → ✓ <strong>make</strong> a suggestion</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">✗ <em>strong</em> rain → ✓ <strong>heavy</strong> rain</p>
    <p style="font-size:13px;color:var(--text2)">✗ <em>do</em> a mistake → ✓ <strong>make</strong> a mistake</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Quando fai un test FCE, per ogni risposta chiediti: "Ho già sentito questa combinazione in inglese?" Se non sei sicuro, scegli la collocazione più comune, non la traduzione letterale.
    </p>
  </div>
`;

EXERCISES[14] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The government is planning to _____ research into renewable energy sources.',
    options: ['carry out', 'make', 'do', 'perform'],
    correct: 0,
    explanation: '"Carry out research" è la collocazione più formale e comune nel linguaggio accademico/FCE.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She _____ a speech at the conference that left the audience speechless.',
    answer: ['gave', 'delivered', 'made'],
    explanation: '"Give/deliver/make a speech" — tutte accettabili, ma "give a speech" è la più comune.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It was raining so hard that we couldn\'t see the road.',
    keyword: 'HEAVILY',
    answer: ['it was raining so heavily that we couldn\'t see the road', "it was raining so heavily that we couldn't see the road"],
    explanation: '"Rain heavily" — aggettivo → avverbio nella trasformazione.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The company has _____ great lengths to ensure customer satisfaction.',
    options: ['gone to', 'made', 'done', 'taken'],
    correct: 0,
    explanation: '"Go to great lengths" = fare di tutto, sforzarsi molto. Espressione fissa.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Please _____ your time — there\'s no rush to finish the test.',
    answer: ['take'],
    explanation: '"Take your time" = non avere fretta. Collocazione fissa.'
  }
];

// Day 16 — Prepositions of Time
THEORY[16] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Preposizioni di Tempo: in, on, at</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    <strong>At</strong> si usa per orari e momenti precisi. <strong>On</strong> si usa per giorni e date specifiche. <strong>In</strong> si usa per periodi più lunghi (mesi, stagioni, anni, secoli).
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Schema</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>at:</strong> at 5pm, at midnight, at the weekend (BrE), at Christmas, at noon</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>on:</strong> on Monday, on 3rd April, on my birthday, on New Year's Day</p>
    <p style="font-size:13px;color:var(--text2)"><strong>in:</strong> in January, in 2025, in the morning, in summer, in the 19th century</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nessuna preposizione con: "last Monday", "next year", "this morning", "every day". Attenzione: "at night" ma "in the morning/afternoon/evening".
    </p>
  </div>
`;

EXERCISES[16] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The exhibition opens _____ the 15th of May and closes _____ the end of August.',
    answer: ['on / at'],
    explanation: '"On" per date specifiche; "at" per espressioni come "at the end/beginning".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She was born _____ a cold winter morning _____ 1998.',
    options: ['on / in', 'in / in', 'at / in', 'on / on'],
    correct: 0,
    explanation: '"On a morning" (giorno/momento specifico) + "in 1998" (anno).'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I always feel more productive _____ the morning than _____ night.',
    answer: ['in / at'],
    explanation: '"In the morning" ma "at night" — eccezione da memorizzare.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'The meeting is scheduled for next Friday at three in the afternoon.',
    keyword: 'ON',
    answer: ['the meeting is scheduled on next Friday at three in the afternoon', 'the meeting is on next Friday at 3pm'],
    explanation: '"On Friday" per giorni specifici della settimana.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'He arrived _____ midnight after driving for eight hours non-stop.',
    options: ['at', 'in', 'on', 'by'],
    correct: 0,
    explanation: '"At midnight/noon/dawn/dusk" — orari/momenti precisi del giorno richiedono "at".'
  }
];

// Day 17 — Prepositions of Place & Movement
THEORY[17] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Preposizioni di Luogo e Movimento</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Le preposizioni di luogo (<strong>in, on, at</strong>) indicano posizione statica. Le preposizioni di movimento (<strong>to, into, onto, through, across, along, past</strong>) indicano direzione o percorso.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Distinzioni chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>in</strong> (interno) → in the box, in London, in the car</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>on</strong> (superficie) → on the table, on the bus, on the wall</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>at</strong> (punto/luogo) → at the station, at home, at the corner</p>
    <p style="font-size:13px;color:var(--text2)"><strong>into vs in:</strong> She walked <em>into</em> the room (movimento) / She is <em>in</em> the room (stato)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Arrive at" per luoghi specifici (at the airport, at the station); "arrive in" per città/paesi (arrive in Rome). Non si dice "arrive to".
    </p>
  </div>
`;

EXERCISES[17] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She jumped _____ the pool without testing the water temperature first.',
    options: ['into', 'in', 'to', 'onto'],
    correct: 0,
    explanation: '"Jump into" indica movimento verso l\'interno. "In" indicherebbe solo posizione.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'We arrived _____ Paris late _____ night and went straight to the hotel.',
    answer: ['in / at'],
    explanation: '"Arrive in" per città; "at night" per il momento della giornata.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The cat was sleeping _____ the sofa when I came home.',
    options: ['on', 'in', 'at', 'onto'],
    correct: 0,
    explanation: '"On the sofa" — superficie orizzontale. "In" si userebbe per qualcosa che contiene (in a bag).'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'They walked until they were on the other side of the bridge.',
    keyword: 'ACROSS',
    answer: ['they walked across the bridge'],
    explanation: '"Walk across" = attraversare (movimento da un lato all\'altro).'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The bus stop is just _____ the corner from the library.',
    answer: ['around', 'round'],
    explanation: '"Around/round the corner" = dietro l\'angolo. Entrambe le forme sono accettabili.'
  }
];

// Day 18 — Prepositional Phrases
THEORY[18] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Frasi Preposizionali Fisse</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Le <strong>prepositional phrases</strong> sono espressioni fisse formate da preposizione + sostantivo che funzionano come avverbi o aggettivi. Vanno memorizzate come unità: non si possono costruire per analogia con l'italiano.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Le più testate al FCE</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>by accident / on purpose</strong> (per caso / di proposito)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>in charge of / in favour of / in spite of</strong></p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>on behalf of / on condition that / on average</strong></p>
    <p style="font-size:13px;color:var(--text2)"><strong>at risk / at fault / at last / at least / at once</strong></p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 2 (Open Cloze) spesso manca la preposizione di una di queste espressioni. Impara le espressioni complete, non solo le preposizioni.
    </p>
  </div>
`;

EXERCISES[18] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I knocked the vase over _____ accident — I didn\'t do it on purpose.',
    answer: ['by'],
    explanation: '"By accident" = per sbaglio; "on purpose" = deliberatamente. Preposizioni opposte.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The managing director was speaking _____ behalf of the entire company.',
    options: ['on', 'in', 'at', 'by'],
    correct: 0,
    explanation: '"On behalf of" = a nome di, per conto di. Espressione fissa.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'Despite the bad weather, they continued with the outdoor concert.',
    keyword: 'SPITE',
    answer: ['in spite of the bad weather, they continued with the outdoor concert'],
    explanation: '"In spite of" è sinonimo di "despite". Entrambi seguiti da sostantivo/gerundio.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Children under five are _____ risk of developing complications from the virus.',
    answer: ['at'],
    explanation: '"At risk (of)" = in pericolo, a rischio. Espressione fissa con "at".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She is _____ charge of all marketing activities in the northern region.',
    options: ['in', 'on', 'at', 'by'],
    correct: 0,
    explanation: '"In charge of" = responsabile di. Espressione fissa.'
  }
];

// Day 19 — Word Formation: Suffixes -tion/-ment/-ness
THEORY[19] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Word Formation: Suffissi -tion, -ment, -ness</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il Part 3 del FCE (Word Formation) richiede di trasformare una parola base usando prefissi e suffissi. I suffissi <strong>-tion/-sion, -ment, -ness</strong> trasformano verbi e aggettivi in sostantivi.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Regole e esempi</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-tion/-sion:</strong> educate→education, decide→decision, discuss→discussion</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-ment:</strong> develop→development, achieve→achievement, govern→government</p>
    <p style="font-size:13px;color:var(--text2)"><strong>-ness:</strong> happy→happiness, aware→awareness, dark→darkness, kind→kindness</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Attenzione ai cambiamenti ortografici: "happy → happiness" (y→i), "achieve → achievement" (e cade), "discuss → discussion" (doppia consonante). Controlla sempre spelling e categoria grammaticale richiesta.
    </p>
  </div>
`;

EXERCISES[19] = [
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The government announced a major _____ (DEVELOP) plan for the region.',
    answer: ['development'],
    explanation: 'DEVELOP + -ment → development (sostantivo). Nessun cambiamento ortografico.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'Public _____ (AWARE) of climate change has increased significantly.',
    answer: ['awareness'],
    explanation: 'AWARE + -ness → awareness. La parola base è un aggettivo che diventa sostantivo.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The _____ of the new policy was delayed by months of debate.',
    options: ['introduction', 'introduce', 'introductory', 'introducing'],
    correct: 0,
    explanation: 'Serve un sostantivo come soggetto della frase → "introduction" (introduce + -tion).'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'Her _____ (HAPPY) at the news was clear from her expression.',
    answer: ['happiness'],
    explanation: 'HAPPY → happiness (y diventa i prima di -ness).'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The _____ (ACHIEVE) of this goal required years of hard work.',
    answer: ['achievement'],
    explanation: 'ACHIEVE + -ment → achievement. La "e" finale cade prima del suffisso.'
  }
];

// Day 20 — Word Formation: Prefixes un-/dis-/mis-
THEORY[20] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Word Formation: Prefissi un-, dis-, mis-, over-, under-</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I prefissi negativi e modificativi cambiano il significato di una parola. <strong>un-/dis-</strong> esprimono negazione o inversione; <strong>mis-</strong> esprime errore; <strong>over-/under-</strong> esprimono eccesso o difetto.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi FCE</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>un-:</strong> unhappy, unlikely, unusual, unavoidable, unfair</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>dis-:</strong> disagree, disappear, dishonest, discomfort, disadvantage</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>mis-:</strong> misunderstand, misuse, mislead, misbehave, misspell</p>
    <p style="font-size:13px;color:var(--text2)"><strong>over-/under-:</strong> overestimate, underestimate, overworked, underpaid</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Non tutti i prefissi funzionano con tutte le parole — "unhappy" ✓ ma "disunhappy" ✗. Nel Part 3 leggi sempre il contesto: se la frase ha un senso negativo, probabilmente serve un prefisso negativo.
    </p>
  </div>
`;

EXERCISES[20] = [
  {
    type: 'fill',
    part: 'Part 3',
    question: 'It would be _____ (HONEST) to claim all the credit when others helped.',
    answer: ['dishonest'],
    explanation: 'DIS + HONEST → dishonest. Prefisso negativo — "not honest".'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'She completely _____ (UNDERSTAND) the instructions and did the task wrong.',
    answer: ['misunderstood'],
    explanation: 'MIS + UNDERSTAND → misunderstand (fare male). Poi Past Simple: misunderstood.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The report was _____ — it contained several serious factual errors.',
    options: ['misleading', 'misbehaving', 'disleading', 'misleading'],
    correct: 0,
    explanation: '"Misleading" = che porta in errore. "Lead → mislead → misleading". Solo "mis-" è corretto.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'Many junior doctors feel _____ (PAY) given the hours they work.',
    answer: ['underpaid'],
    explanation: 'UNDER + PAID → underpaid = pagato meno del giusto.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'Don\'t _____ (ESTIMATE) the difficulty of the exam — prepare thoroughly.',
    answer: ['underestimate'],
    explanation: 'UNDER + ESTIMATE → underestimate = sottovalutare.'
  }
];

// Day 21 — Word Formation: Suffixes for Adjectives
THEORY[21] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Word Formation: Suffissi per Aggettivi</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I suffissi <strong>-ful, -less, -ous, -ive, -al, -able/-ible, -ic</strong> trasformano sostantivi e verbi in aggettivi. Conoscerli ti permette di riconoscere la categoria grammaticale e formare la parola corretta.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Suffissi chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-ful:</strong> careful, successful, powerful, harmful, useful</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-less:</strong> careless, useless, hopeless, harmless, wireless</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-ous:</strong> dangerous, famous, nervous, various, generous</p>
    <p style="font-size:13px;color:var(--text2)"><strong>-able/-ible:</strong> comfortable, reliable, flexible, responsible, visible</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nota l'opposizione -ful/-less: "careful/careless", "useful/useless", "harmful/harmless". Nel Part 3 il contesto ti dirà quale forma positiva o negativa serve.
    </p>
  </div>
`;

EXERCISES[21] = [
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The company is looking for a _____ (RELY) employee who can work independently.',
    answer: ['reliable'],
    explanation: 'RELY + -able → reliable (y→i). Significa "di cui ci si può fidare".'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'It would be _____ (CARE) to drive in these conditions without winter tyres.',
    answer: ['careless'],
    explanation: 'CARE + -less → careless = imprudente, negligente.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The new medicine has proved _____ in treating the most severe cases.',
    options: ['effective', 'effect', 'effecting', 'effectiveness'],
    correct: 0,
    explanation: 'Serve un aggettivo che descriva "medicine" → "effective" (effect + -ive).'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'She gave a _____ (POWER) performance that moved the entire audience to tears.',
    answer: ['powerful'],
    explanation: 'POWER + -ful → powerful = potente, di grande impatto.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The instructions were so _____ (CONFUSE) that nobody knew what to do.',
    answer: ['confusing'],
    explanation: 'CONFUSE + -ing → confusing = che crea confusione (forma aggettivale attiva).'
  }
];

// Day 22 — Word Formation: Mixed
THEORY[22] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Word Formation: Ripasso Misto</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Nel Part 3 FCE devi identificare la categoria grammaticale richiesta (sostantivo, aggettivo, avverbio, verbo) e poi applicare il suffisso o prefisso corretto. Spesso sono necessari più cambiamenti: prefisso + suffisso + ortografia.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Strategia in 3 passi</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">1. Leggi la frase e identifica la categoria grammaticale mancante</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">2. Applica il suffisso corretto alla parola base</p>
    <p style="font-size:13px;color:var(--text2)">3. Controlla se serve un prefisso negativo (contesto negativo della frase)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Forme avverbiali: aggettivo + -ly. Attenzione alle eccezioni: "good → well", "hard → hard" (non "hardly"), "fast → fast" (non "fastly"). "Hardly" = quasi per niente (diverso da "hard").
    </p>
  </div>
`;

EXERCISES[22] = [
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The documentary was filmed with _____ (REMARK) attention to detail.',
    answer: ['remarkable'],
    explanation: 'REMARK + -able → remarkable = straordinario, degno di nota.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'She handled the crisis with great _____ (EFFICIENT).',
    answer: ['efficiency'],
    explanation: 'EFFICIENT → efficiency (suffisso -cy). Forma sostantivale.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The new policy has been widely _____ (CRITIC) by environmental groups.',
    answer: ['criticised', 'criticized'],
    explanation: 'CRITIC → criticise/criticize (verbo). Passivo → "has been criticised".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The audience listened _____ as the speaker outlined the plan.',
    options: ['attentively', 'attentive', 'attention', 'attentiveness'],
    correct: 0,
    explanation: 'Modifica il verbo "listened" → serve un avverbio → "attentively" (attentive + -ly).'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'His _____ (REFUSE) to cooperate caused significant delays to the project.',
    answer: ['refusal'],
    explanation: 'REFUSE → refusal (suffisso -al per formare sostantivi da verbi).'
  }
];

// Day 23 — Word Formation: Adjective to Noun
THEORY[23] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Word Formation: da Aggettivo a Sostantivo</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Molti sostantivi si formano da aggettivi con suffissi come <strong>-ity, -ty, -cy, -ance/-ence, -ness</strong>. Conoscere queste trasformazioni è essenziale per il Part 3 e per ampliare il vocabolario.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-ity/-ty:</strong> creative→creativity, equal→equality, safe→safety, curious→curiosity</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-cy:</strong> fluent→fluency, accurate→accuracy, urgent→urgency, private→privacy</p>
    <p style="font-size:13px;color:var(--text2)"><strong>-ance/-ence:</strong> important→importance, different→difference, patient→patience</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Attenzione all'ortografia: "accurate → accuracy" (rimuovi -ate, aggiungi -acy), "fluent → fluency" (rimuovi -t, aggiungi -cy). Controlla sempre la spelling finale.
    </p>
  </div>
`;

EXERCISES[23] = [
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The _____ (CREATIVE) of the design team impressed the entire board.',
    answer: ['creativity'],
    explanation: 'CREATIVE → creativity (-ive → -ivity). Forma sostantivale.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'Her _____ (FLUENT) in four languages made her the ideal candidate.',
    answer: ['fluency'],
    explanation: 'FLUENT → fluency (-ent → -ency). Sostantivo che indica qualità.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The _____ between the two candidates\' proposals was striking.',
    options: ['difference', 'different', 'differently', 'differ'],
    correct: 0,
    explanation: 'Serve un sostantivo come soggetto → "difference" (different + -ence → cambia -ent in -ence).'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'Online _____ (PRIVATE) is becoming an increasingly important issue.',
    answer: ['privacy'],
    explanation: 'PRIVATE → privacy (-ate → -acy). Forma sostantivale.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The _____ (PATIENT) required during a long-term project should not be underestimated.',
    answer: ['patience'],
    explanation: 'PATIENT → patience (-ent → -ence). Attenzione: "patience" (pazienza) ≠ "patient" (paziente/aggettivo).'
  }
];

// Day 24 — Word Formation: Verb to Noun
THEORY[24] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Word Formation: da Verbo a Sostantivo</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I verbi possono diventare sostantivi con suffissi come <strong>-tion/-sion, -ment, -al, -ance/-ence, -ing, -(e)r</strong>. Alcune forme sono identiche al verbo (a "run", "change"), altre cambiano completamente ("describe → description").
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Pattern frequenti</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-tion/-sion:</strong> explain→explanation, decide→decision, revise→revision</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-ment:</strong> employ→employment, argue→argument, manage→management</p>
    <p style="font-size:13px;color:var(--text2)"><strong>-al:</strong> arrive→arrival, survive→survival, refuse→refusal, approve→approval</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Argue → argument" (si perde la "e"); "manage → management" (si mantiene). Le irregolarità si imparano a memoria. Crea una lista personale delle forme irregolari.
    </p>
  </div>
`;

EXERCISES[24] = [
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The _____ (EXPLAIN) given by the witness was not entirely convincing.',
    answer: ['explanation'],
    explanation: 'EXPLAIN → explanation (-ain → -anation). Cambiamento ortografico irregolare.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The manager gave her _____ (APPROVE) for the new budget proposal.',
    answer: ['approval'],
    explanation: 'APPROVE → approval (-ove → -oval). Suffisso -al per nominali verbali.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The _____ of the new CEO was announced at the shareholders\' meeting.',
    options: ['appointment', 'appoint', 'appointed', 'appointing'],
    correct: 0,
    explanation: 'Serve un sostantivo → "appointment" (appoint + -ment).'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The safe _____ (ARRIVE) of the shipment was confirmed by the port authority.',
    answer: ['arrival'],
    explanation: 'ARRIVE → arrival (-ive → -ival). Sostantivo verbale con suffisso -al.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'There has been a significant _____ (IMPROVE) in air quality since the factory closed.',
    answer: ['improvement'],
    explanation: 'IMPROVE → improvement (-ove + -ment). La "e" si mantiene prima di -ment.'
  }
];

// Day 25 — Word Formation: Noun to Adjective
THEORY[25] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Word Formation: da Sostantivo ad Aggettivo</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I sostantivi diventano aggettivi con suffissi come <strong>-al, -ic, -ous, -ful, -ish, -ly, -en, -ary</strong>. Alcune parole possono avere più forme aggettivali con significati leggermente diversi.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-al:</strong> nation→national, profession→professional, origin→original</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-ic:</strong> drama→dramatic, athlete→athletic, realist→realistic</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>-ous:</strong> danger→dangerous, mystery→mysterious, ambition→ambitious</p>
    <p style="font-size:13px;color:var(--text2)"><strong>-ary:</strong> revolution→revolutionary, vision→visionary, moment→momentary</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Economy → economic" (relativo all'economia) ≠ "economical" (= che fa risparmiare). "History → historic" (famoso nella storia) ≠ "historical" (appartenente al passato). Le differenze di significato tra forme simili sono testabili al FCE.
    </p>
  </div>
`;

EXERCISES[25] = [
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The play had a very _____ (DRAMA) ending that shocked the audience.',
    answer: ['dramatic'],
    explanation: 'DRAMA → dramatic (-a → -atic). "Dramatical" non esiste in inglese standard.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'She has a very _____ (AMBITION) nature — she always wants to succeed.',
    answer: ['ambitious'],
    explanation: 'AMBITION → ambitious (-ion → -ious). Cambiamento ortografico: rimuovi -ion, aggiungi -ious.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'It\'s more _____ to use public transport than to drive into the city centre.',
    options: ['economical', 'economic', 'economics', 'economically'],
    correct: 0,
    explanation: '"Economical" = che fa risparmiare denaro. "Economic" = relativo all\'economia (es. "economic growth").'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The new film is set in _____ (MYSTERY) surroundings that create a sense of unease.',
    answer: ['mysterious'],
    explanation: 'MYSTERY → mysterious (-y → -ious). Forma aggettivale di "mystery".'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'She took a _____ (PROFESSION) approach to solving the conflict.',
    answer: ['professional'],
    explanation: 'PROFESSION → professional (-ion → -ional). Forma aggettivale standard.'
  }
];

// Day 26 — Word Formation: Compound Words & Review
THEORY[26] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Word Formation: Parole Composte e Ripasso</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Le <strong>compound words</strong> combinano due o più parole in un'unica unità lessicale. Possono essere scritte unite, con trattino o separate. Al FCE il Part 3 può richiedere la forma composta corretta.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Tipi comuni</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Noun + Noun:</strong> sunlight, football, bedroom, smartphone, deadline</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Adj + Noun:</strong> blackboard, greenhouse, software, hardware</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Verb + Noun:</strong> breakfast, drawback, takeaway, feedback</p>
    <p style="font-size:13px;color:var(--text2)"><strong>Noun + Verb+er:</strong> bookkeeper, filmmaker, caregiving, fundraising</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      La strategia generale per il Part 3: (1) identifica la categoria grammaticale, (2) applica suffisso/prefisso, (3) verifica il contesto semantico. Se la frase è negativa, probabilmente serve un prefisso negativo.
    </p>
  </div>
`;

EXERCISES[26] = [
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The main _____ (DRAW) of living in the city is the high cost of rent.',
    answer: ['drawback'],
    explanation: 'DRAW + BACK → drawback = svantaggio, punto negativo. Parola composta fissa.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'We received very positive _____ (FEED) from customers about the new product.',
    answer: ['feedback'],
    explanation: 'FEED + BACK → feedback = riscontro, opinione. Parola composta insolubilmente unita.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The conference will be _____ (STREAM) live on the organisation\'s website.',
    answer: ['livestreamed', 'streamed', 'live-streamed'],
    explanation: 'LIVE + STREAM → livestream (verbo). Parola composta moderna.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The _____ of the project was its innovative approach to sustainability.',
    options: ['highlight', 'high point', 'high light', 'highlighting'],
    correct: 0,
    explanation: '"Highlight" (parola composta) = punto salienti, aspetto più interessante di qualcosa.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The new manager gave a very _____ (THOUGHT) response to the team\'s concerns.',
    answer: ['thoughtful'],
    explanation: 'THOUGHT + -ful → thoughtful = attento, premuroso, riflessivo.'
  }
];

// Day 27 — Present Perfect: since/for, already/yet/just
THEORY[27] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Present Perfect: since, for, already, yet, just</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il Present Perfect usa segnali specifici: <strong>since</strong> (da un punto nel tempo), <strong>for</strong> (per un periodo di tempo), <strong>already</strong> (già — affermativa), <strong>yet</strong> (ancora/già — negativa/domanda), <strong>just</strong> (appena).
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Schema since vs for</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I have lived here <strong>for</strong> ten years. (durata)</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I have lived here <strong>since</strong> 2015. (punto di inizio)</p>
    <p style="font-size:14px;color:var(--text2);">She has <strong>just</strong> left / has <strong>already</strong> left / hasn't left <strong>yet</strong>.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4: "It's ten years since I last saw her" → "I haven't seen her <strong>for</strong> ten years." Questa trasformazione è classica al FCE.
    </p>
  </div>
`;

EXERCISES[27] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She has been working at this company _____ she graduated from university.',
    answer: ['since'],
    explanation: '"Since" + punto preciso nel tempo (l\'anno di laurea).'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It\'s five years since they last spoke to each other.',
    keyword: 'FOR',
    answer: ["they haven't spoken to each other for five years", 'they have not spoken to each other for five years'],
    explanation: '"It\'s + time + since" → "haven\'t + pp + for + period".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Have you finished the assignment _____? I need it by 5pm.',
    answer: ['yet'],
    explanation: '"Yet" nelle domande = "già/ancora?" — indica aspettativa di completamento.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Don\'t worry about making dinner — I\'ve _____ ordered a pizza.',
    options: ['already', 'yet', 'just', 'still'],
    correct: 0,
    explanation: '"Already" nelle frasi affermative = azione completata prima del previsto.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Good news — the parcel has _____ arrived! It\'s at the reception desk.',
    answer: ['just'],
    explanation: '"Just" = molto recentemente, appena. Posizione: tra "have" e il participio.'
  }
];

// Day 28 — Present Perfect: ever/never, experiences
THEORY[28] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Present Perfect: ever, never ed Esperienze</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    <strong>Ever</strong> si usa nelle domande per chiedere di esperienze di vita ("mai nella vita"); <strong>never</strong> equivale a "not ever" e si usa nelle affermative con significato negativo. Il Present Perfect per esperienze non specifica quando è avvenuto l'evento.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Pattern chiave</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">Have you <strong>ever</strong> been to Australia?</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I've <strong>never</strong> tried sushi. (= I haven't ever tried…)</p>
    <p style="font-size:14px;color:var(--text2);">This is the best film I have <strong>ever</strong> seen.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "This is the first time I have done this" → "I have <strong>never</strong> done this before." Questa trasformazione con "never…before" è testata nel Part 4.
    </p>
  </div>
`;

EXERCISES[28] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Have you _____ considered moving abroad for work?',
    answer: ['ever'],
    explanation: '"Ever" nelle domande = in qualsiasi momento della tua vita.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'This is the first time she has performed in front of such a large audience.',
    keyword: 'NEVER',
    answer: ['she has never performed in front of such a large audience before'],
    explanation: '"This is the first time" → "have never + pp + before".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'It was the most breathtaking view I had _____ seen in my entire life.',
    options: ['ever', 'never', 'already', 'just'],
    correct: 0,
    explanation: '"The most + adj + I had ever seen" — superlativo + ever con Past Perfect.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I\'ve _____ understood why people enjoy extreme sports — it seems so dangerous.',
    answer: ['never'],
    explanation: '"Never" in frase affermativa = "not ever". Posizione: tra "have" e il participio.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Have you _____ tasted anything as delicious as this?',
    answer: ['ever'],
    explanation: '"Ever" nelle domande comparative/superlative = in tutta la tua esperienza.'
  }
];

// Day 29 — Present Perfect Continuous
THEORY[29] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Present Perfect Continuous: have been + -ing</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il <strong>Present Perfect Continuous</strong> (have/has been + -ing) enfatizza la continuità o la durata di un'azione che è iniziata nel passato e continua o si è appena conclusa. Contrasta col Present Perfect Simple che enfatizza il risultato o il completamento.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Continuous vs Simple</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I <strong>have been reading</strong> this book for two hours. (processo in corso)</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I <strong>have read</strong> three books this month. (risultato, numero)</p>
    <p style="font-size:14px;color:var(--text2);">She looks tired — she <strong>has been working</strong> all night. (causa visibile)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      I verbi di stato (know, believe, want, love) non si usano al Continuous. "I have known him for years" ✓ — mai "I have been knowing him".
    </p>
  </div>
`;

EXERCISES[29] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She _____ (study) for the exam all week and feels exhausted.',
    answer: ['has been studying'],
    explanation: 'Azione continuata fino ad ora con risultato visibile (è esausta) → Present Perfect Continuous.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'How long _____ you _____ for this company?',
    options: ['have / been working', 'are / working', 'have / worked', 'were / working'],
    correct: 0,
    explanation: '"How long + have + subject + been + -ing" — domanda sul processo continuo dalla durata.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'They started renovating the house three months ago and haven\'t finished yet.',
    keyword: 'BEEN',
    answer: ['they have been renovating the house for three months'],
    explanation: '"Have been + -ing + for" per indicare un\'azione in corso dalla sua durata.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I _____ (know) her since we were at school together.',
    answer: ['have known'],
    explanation: '"Know" è un verbo di stato — non si usa al Continuous. Present Perfect Simple obbligatorio.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Your eyes are red. _____ you _____ crying?',
    options: ['Have / been', 'Are / been', 'Were / been', 'Have / being'],
    correct: 0,
    explanation: '"Have you been + -ing?" — domanda al Present Perfect Continuous. Segno visibile (occhi rossi) → causa recente.'
  }
];

// Day 30 — Passive Voice: Present & Past
THEORY[30] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Forma Passiva: Present & Past</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    La <strong>forma passiva</strong> si forma con <strong>be + past participle</strong>. Si usa quando l'azione è più importante dell'agente, o quando l'agente è sconosciuto/ovvio. L'agente si introduce con <strong>by</strong>.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Forme principali</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Present Simple:</strong> The report <em>is written</em> by the team.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Past Simple:</strong> The bridge <em>was built</em> in 1890.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Present Perfect:</strong> The window <em>has been broken</em>.</p>
    <p style="font-size:13px;color:var(--text2)"><strong>Future:</strong> The results <em>will be announced</em> tomorrow.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4 trasformazioni attivo → passivo sono frequentissime. L'oggetto dell'attiva diventa soggetto della passiva. Attenzione al tempo verbale: deve restare identico.
    </p>
  </div>
`;

EXERCISES[30] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: 'Scientists discovered the new planet last year.',
    keyword: 'WAS',
    answer: ['the new planet was discovered by scientists last year', 'the new planet was discovered last year'],
    explanation: 'Attiva → passiva: oggetto diventa soggetto. Past Simple → "was discovered".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The ancient temple _____ (visit) by thousands of tourists every year.',
    answer: ['is visited'],
    explanation: 'Present Simple passivo: "is + past participle". Azione ripetuta (ogni anno).'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The stolen paintings _____ by police after a two-year investigation.',
    options: ['were recovered', 'recovered', 'have recovered', 'are recovered'],
    correct: 0,
    explanation: 'Past Simple passivo (investigazione conclusa): "were recovered".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'A decision _____ (make) yet about the venue for the conference.',
    answer: ["hasn't been made", 'has not been made'],
    explanation: 'Present Perfect passivo negativo: "hasn\'t been + past participle".'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'They will announce the winner at the ceremony next Friday.',
    keyword: 'ANNOUNCED',
    answer: ['the winner will be announced at the ceremony next Friday'],
    explanation: 'Futuro passivo: "will be + past participle".'
  }
];

// Day 31 — Passive with Modals
THEORY[31] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Passivo con Verbi Modali</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il passivo si combina con i modali nella struttura <strong>modal + be + past participle</strong>. Questa forma esprime obbligo, possibilità, permesso o necessità riguardo a qualcosa che viene fatto a qualcuno/qualcosa.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Strutture</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">This must <strong>be done</strong> immediately. (obbligo)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">The form should <strong>be filled in</strong> online. (consiglio)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">The results might <strong>be delayed</strong>. (possibilità)</p>
    <p style="font-size:13px;color:var(--text2)">It can <strong>be seen</strong> from miles away. (possibilità/capacità)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Passivo con modal perfetto: "This should have been done sooner" (sarebbe dovuto essere fatto prima). Testa nel Part 4 con keywords come SHOULD o OUGHT.
    </p>
  </div>
`;

EXERCISES[31] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'All passengers must _____ (seat-belt) before the plane takes off.',
    answer: ['be seat-belted', 'wear seat belts', 'be seated'],
    explanation: 'Modal passivo: "must + be + past participle". Obbligo per i passeggeri.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'Someone should repair this road immediately — it\'s dangerous.',
    keyword: 'REPAIRED',
    answer: ['this road should be repaired immediately'],
    explanation: '"Should be repaired" — modal passivo. L\'agente ("someone") viene omesso.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The documents _____ before being sent to the head office.',
    options: ['should be checked', 'should check', 'should have checked', 'should be checking'],
    correct: 0,
    explanation: 'Passivo con modal: "should be + past participle". I documenti sono l\'oggetto dell\'azione.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The concert might _____ (cancel) due to the heavy storm.',
    answer: ['be cancelled', 'be canceled'],
    explanation: '"Might be + past participle" — passivo con modal per possibilità futura.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'This issue could _____ (avoid) if we had planned more carefully.',
    answer: ['have been avoided'],
    explanation: 'Modal perfect passivo: "could have been + past participle" — possibilità nel passato non realizzata.'
  }
];

// Day 32 — Impersonal Passive
THEORY[32] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Passivo Impersonale: It is said / believed / reported</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il <strong>passivo impersonale</strong> si usa per riferire credenze, opinioni o voci senza specificare la fonte. Si costruisce con <strong>It is + verb + that</strong> o <strong>Subject + is + verb + to infinitive</strong>.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Due strutture equivalenti</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px"><em>It is said that he is a genius.</em></p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:8px"><em>He is said to be a genius.</em></p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px"><em>It is believed that the treasure is buried here.</em></p>
    <p style="font-size:14px;color:var(--text2)"><em>The treasure is believed to be buried here.</em></p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Verbi comuni: <em>say, believe, report, think, know, consider, claim, expect, suppose</em>. Nel Part 4 ti chiederanno di trasformare tra le due strutture — impara entrambe.
    </p>
  </div>
`;

EXERCISES[32] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: 'People say that the new mayor is very effective.',
    keyword: 'SAID',
    answer: ['the new mayor is said to be very effective', 'it is said that the new mayor is very effective'],
    explanation: 'Due forme del passivo impersonale — entrambe accettabili al FCE.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'It _____ (report) that hundreds of people were injured in the earthquake.',
    answer: ['was reported', 'is reported'],
    explanation: '"It is/was reported that" — passivo impersonale del verbo "report".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The abandoned building _____ to have been built in the early 1900s.',
    options: ['is believed', 'believes', 'is believing', 'was believing'],
    correct: 0,
    explanation: '"Is believed to + infinitive" — struttura 2 del passivo impersonale.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It is thought that the suspect fled the country.',
    keyword: 'THOUGHT',
    answer: ['the suspect is thought to have fled the country'],
    explanation: '"Is thought to have + past participle" — infinito perfetto per azione passata.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Scientists _____ (know) to have been studying this phenomenon for decades.',
    answer: ['are known'],
    explanation: '"Are known to + infinitive" — struttura 2 del passivo impersonale con "know".'
  }
];

// Day 33 — Passive: Mixed Practice
THEORY[33] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Forma Passiva: Ripasso Completo</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il passivo inglese copre tutti i tempi verbali e può combinarsi con modali e forme continue. La chiave è identificare il tempo richiesto dal contesto e ricordare che la struttura è sempre <strong>be (coniugato) + past participle</strong>.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Tutte le forme</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Continuous:</strong> The bridge is being repaired. / was being repaired.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Perfect:</strong> It has been confirmed. / had been warned.</p>
    <p style="font-size:13px;color:var(--text2)"><strong>Modal perf:</strong> It should have been done. / might have been taken.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Il passivo Continuous ("is being built") è spesso dimenticato. Usalo quando vuoi enfatizzare che un'azione è in corso + forma passiva: "The road is being dug up" = stanno scavando la strada (in questo momento).
    </p>
  </div>
`;

EXERCISES[33] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The new library _____ (build) at the moment — it should open next year.',
    answer: ['is being built'],
    explanation: 'Passive Continuous: "is being + past participle" per azione in corso.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'They had already cleaned the office before the clients arrived.',
    keyword: 'BEEN',
    answer: ['the office had already been cleaned before the clients arrived'],
    explanation: 'Past Perfect passivo: "had been + past participle".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The ancient manuscripts _____ carefully for the past six months.',
    options: ['have been restored', 'are restored', 'were restoring', 'restored'],
    correct: 0,
    explanation: '"For the past six months" → Present Perfect passivo: "have been + past participle".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The meeting room _____ (clean) when the guests arrived unexpectedly.',
    answer: ['was being cleaned'],
    explanation: 'Past Continuous passivo: "was being + past participle" per azione in corso nel passato.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'He should _____ (warn) about the risks before he signed the contract.',
    answer: ['have been warned'],
    explanation: 'Modal perfect passivo: "should have been + past participle" — critica per omissione passata.'
  }
];

// Day 34 — Modals: must/have to/should/ought to
THEORY[34] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Modali: must, have to, should, ought to</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    <strong>Must</strong> esprime obbligo interno/soggettivo o deduzione logica forte. <strong>Have to</strong> esprime obbligo esterno (regole, circostanze). <strong>Should/ought to</strong> danno consigli o aspettative.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Distinzioni chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>must:</strong> You must see this film! (convinzione personale) / She must be tired. (deduzione)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>have to:</strong> I have to wear a uniform at work. (regola esterna)</p>
    <p style="font-size:13px;color:var(--text2)"><strong>should:</strong> You should eat more vegetables. (consiglio)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Negativi opposti: "mustn't" = divieto (non devi); "don't have to" = non è necessario (puoi scegliere). Questa distinzione è testata regolarmente al FCE Part 1 e Part 4.
    </p>
  </div>
`;

EXERCISES[34] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'You _____ bring your ID to the exam — it\'s compulsory.',
    options: ['must', 'should', 'might', 'could'],
    correct: 0,
    explanation: 'Obbligo forte (compulsory) → "must". "Should" esprime solo consiglio.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'You _____ wear a suit to the interview — smart casual is perfectly acceptable.',
    answer: ["don't have to", 'do not have to'],
    explanation: '"Don\'t have to" = non è necessario. Non confondere con "mustn\'t" (= vietato).'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It isn\'t necessary for you to arrive early.',
    keyword: 'HAVE',
    answer: ["you don't have to arrive early", 'you do not have to arrive early'],
    explanation: '"Don\'t have to" = it isn\'t necessary. Trasformazione classica FCE.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She looks very pale — she _____ be feeling well.',
    options: ["can't", 'mustn\'t', 'shouldn\'t', 'won\'t'],
    correct: 0,
    explanation: '"Can\'t" per deduzione negativa = impossibilità logica. "She can\'t be well" = deduco che non stia bene.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'If you want to improve, you _____ (ought) practise every day.',
    answer: ['ought to'],
    explanation: '"Ought to" = should. Seguito da "to + infinito" (a differenza di "should").'
  }
];

// Day 35 — Modals: would/could/might (probability & speculation)
THEORY[35] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Modali: would, could, might — Probabilità e Speculazione</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    <strong>Would</strong> indica certezza condizionale o aspettativa. <strong>Could</strong> indica possibilità teorica o capacità. <strong>Might</strong> indica possibilità debole o incertezza. Questi modali si usano anche per speculare sul presente o futuro.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Scala di probabilità</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>must be</strong> (95%+) → She must be at home.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>should be</strong> (80%) → The parcel should arrive tomorrow.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>could / might be</strong> (50%) → He might be in a meeting.</p>
    <p style="font-size:13px;color:var(--text2)"><strong>can't be</strong> (0%) → That can't be true!</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Could" può confondersi con "was able to" (abilità passata). Per un'azione specifica nel passato: "I managed to / was able to" (non "could"). "Could" va bene per abilità generale passata.
    </p>
  </div>
`;

EXERCISES[35] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She\'s been studying for twelve hours — she _____ be exhausted.',
    options: ['must', 'might', 'could', 'would'],
    correct: 0,
    explanation: 'Deduzione forte basata su evidenza → "must be". Non è una possibilità ma una conclusione logica.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I\'m not sure where Tom is. He _____ be at the library — he mentioned going there.',
    answer: ['might', 'could', 'may'],
    explanation: '"Might/could/may be" — possibilità presente incerta. Tutte e tre sono accettabili.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'I\'m sure that\'s not the right answer — it\'s impossible.',
    keyword: 'CANNOT',
    answer: ['that cannot be the right answer', "that can't be the right answer"],
    explanation: '"Can\'t/cannot be" — deduzione negativa (impossibilità logica).'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'It _____ rain later — the forecast said there was a 40% chance.',
    options: ['might', 'must', "can't", 'would'],
    correct: 0,
    explanation: '40% di probabilità → "might" (possibilità debole). "Must" indicherebbe quasi certezza.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The package _____ arrive tomorrow if it was sent by express delivery.',
    answer: ['should', 'ought to'],
    explanation: '"Should" per aspettativa ragionevole (80% probabilità). "Ought to" è sinonimo.'
  }
];

// Day 36 — Perfect Modals
THEORY[36] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Modali Perfetti: modal + have + past participle</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I <strong>modali perfetti</strong> si usano per fare deduzioni o critiche riguardo al passato. Si formano con <strong>modal + have + past participle</strong> e non si riferiscono al presente.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Usi principali</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>must have:</strong> She must have forgotten. (deduzione passata)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>can't have:</strong> He can't have said that. (impossibilità passata)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>should have:</strong> You should have called. (critica — non lo hai fatto)</p>
    <p style="font-size:13px;color:var(--text2)"><strong>might/could have:</strong> She might have taken the wrong bus. (possibilità passata)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Should have done" implica sempre che l'azione NON è avvenuta. "Needn't have done" = hai fatto qualcosa che non era necessario. Distinzione testata nel Part 1 e 4.
    </p>
  </div>
`;

EXERCISES[36] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She looks upset. Something _____ happened during the meeting.',
    options: ['must have', 'should have', 'could have', 'would have'],
    correct: 0,
    explanation: 'Deduzione forte basata su evidenza visibile (sembra turbata) → "must have happened".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'You _____ (should) told me you were coming — I would have prepared something.',
    answer: ['should have told'],
    explanation: '"Should have + past participle" = critica per un\'azione non compiuta nel passato.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It was impossible for him to have known about the plan.',
    keyword: 'KNOWN',
    answer: ["he can't have known about the plan", 'he could not have known about the plan'],
    explanation: '"Can\'t have known" = impossibilità nel passato.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I _____ (need) bought so much food — half of it went to waste.',
    answer: ["needn't have bought", 'need not have bought'],
    explanation: '"Needn\'t have + past participle" = azione fatta ma non necessaria. Diverso da "didn\'t need to".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She _____ taken a different route — the motorway was jammed.',
    options: ['could have', 'must have', 'should', 'will have'],
    correct: 0,
    explanation: '"Could have taken" = possibilità passata non sfruttata. Rimpianto o alternativa non scelta.'
  }
];

// Day 37 — Reported Speech: say/tell, tense backshift
THEORY[37] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Discorso Indiretto: say/tell e Backshift</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Nel <strong>discorso indiretto</strong> i tempi verbali "slittano" indietro (<em>backshift</em>) quando il verbo introduttivo è al passato. <strong>Say</strong> non ha complemento oggetto; <strong>tell</strong> richiede sempre un complemento oggetto (tell me, tell him…).
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Backshift dei tempi</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">Present Simple → Past Simple: "I <em>work</em>" → She said she <em>worked</em>.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">Past Simple → Past Perfect: "I <em>went</em>" → He said he <em>had gone</em>.</p>
    <p style="font-size:13px;color:var(--text2)">will → would: "I <em>will call</em>" → She said she <em>would call</em>.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Cambiamenti di espressioni temporali: "today → that day", "yesterday → the day before", "tomorrow → the following day", "here → there", "this → that". Controlla sempre queste trasformazioni nel Part 4.
    </p>
  </div>
`;

EXERCISES[37] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: '"I will help you with the project," she said.',
    keyword: 'SAID',
    answer: ['she said she would help me with the project', 'she said that she would help me with the project'],
    explanation: 'will → would. "Me" invece di "you" (cambio di prospettiva).'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'He _____ me that he had already submitted the report.',
    answer: ['told'],
    explanation: '"Tell" richiede complemento oggetto ("told me"). "Say" non lo richiede ("said that").'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She told the interviewer that she _____ working for the company for five years.',
    options: ['had been', 'has been', 'was', 'is'],
    correct: 0,
    explanation: 'Backshift: Present Perfect Continuous → Past Perfect Continuous nel discorso indiretto.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: '"Don\'t touch that!" the guard said to the tourists.',
    keyword: 'WARNED',
    answer: ['the guard warned the tourists not to touch that'],
    explanation: '"Warn + object + not to + infinitive" — reporting verb per avvertimenti.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The doctor said she _____ (feel) much better if she rested for a week.',
    answer: ['would feel'],
    explanation: 'Backshift: will → would nel discorso indiretto.'
  }
];

// Day 38 — Reported Questions & Commands
THEORY[38] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Discorso Indiretto: Domande e Comandi</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Le <strong>domande indirette</strong> usano ordine affermativo (non inversione) e perdono il punto interrogativo. I <strong>comandi indiretti</strong> usano <em>told/asked/ordered + object + (not) to + infinitive</em>.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Strutture chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><em>"Where are you going?"</em> → He asked where <strong>I was going</strong>.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><em>"Do you know him?"</em> → She asked <strong>if/whether</strong> I knew him.</p>
    <p style="font-size:13px;color:var(--text2)"><em>"Sit down!"</em> → She told him <strong>to sit down</strong>.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Per domande Yes/No usa "if" o "whether". Per domande Wh- usa la stessa parola interrogativa. Ricorda: nessuna inversione soggetto-verbo nella domanda indiretta.
    </p>
  </div>
`;

EXERCISES[38] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: '"Are you coming to the party?" she asked him.',
    keyword: 'WHETHER',
    answer: ['she asked him whether he was coming to the party'],
    explanation: 'Domanda Yes/No indiretta → "asked + whether + affirmative order + backshift".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The police officer asked the driver where _____ (go) in such a hurry.',
    answer: ['he was going', 'she was going'],
    explanation: 'Domanda indiretta Wh- → ordine affermativo (was going, non was he going).'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The teacher told the students _____ talking during the examination.',
    options: ['to stop', 'stop', 'stopping', 'they stop'],
    correct: 0,
    explanation: '"Tell + object + to + infinitive" per comandi indiretti. "Stop" è il verbo di azione.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: '"Please don\'t leave without telling me," she said to him.',
    keyword: 'ASKED',
    answer: ['she asked him not to leave without telling her'],
    explanation: '"Ask + object + not to + infinitive" per richieste negative indirette.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'He wanted to know _____ I had finished reading the report.',
    answer: ['if', 'whether'],
    explanation: 'Domanda indiretta Yes/No → "if" o "whether". Entrambi accettabili.'
  }
];

// Day 39 — Reported Speech: Reporting Verbs
THEORY[39] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Discorso Indiretto: Verbi di Riporto</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Invece di usare sempre "say" o "tell", inglese usa <strong>verbi di riporto specifici</strong> che trasmettono l'intenzione comunicativa originale: <em>admit, deny, suggest, warn, offer, refuse, promise, agree, insist, explain</em>.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Pattern dopo i verbi di riporto</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>+ -ing:</strong> admit, deny, suggest, recommend</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>+ to-inf:</strong> offer, refuse, promise, agree, threaten</p>
    <p style="font-size:13px;color:var(--text2)"><strong>+ obj + to-inf:</strong> warn, advise, encourage, remind, invite</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4 il keyword è spesso il verbo di riporto (ADMITTED, OFFERED, DENIED). Identifica la struttura richiesta da quel verbo prima di scrivere la risposta.
    </p>
  </div>
`;

EXERCISES[39] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: '"I didn\'t break the window," he said.',
    keyword: 'DENIED',
    answer: ['he denied breaking the window'],
    explanation: '"Deny + -ing" — il verbo "deny" è sempre seguito dal gerundio.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She _____ (offer) to drive us to the airport, which was very kind.',
    answer: ['offered'],
    explanation: '"Offer + to-infinitive" — il verbo "offer" è seguito dall\'infinito con "to".'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: '"Why don\'t we go for a walk?" he said.',
    keyword: 'SUGGESTED',
    answer: ['he suggested going for a walk', 'he suggested that we go for a walk', 'he suggested that we should go for a walk'],
    explanation: '"Suggest + -ing" o "suggest + that + should". Tutte le forme sono accettabili.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She admitted _____ a mistake in the financial report.',
    options: ['making', 'to make', 'make', 'to making'],
    correct: 0,
    explanation: '"Admit + -ing" — sempre gerundio dopo "admit".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The doctor advised him _____ (give up) smoking immediately.',
    answer: ['to give up'],
    explanation: '"Advise + object + to + infinitive" — struttura con complemento oggetto.'
  }
];

// Day 40 — Wish: wish + past simple
THEORY[40] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Wish: desideri sul presente</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    <strong>Wish + Past Simple</strong> esprime un rimpianto o desiderio riguardo a una situazione presente che non corrisponde alla realtà. Il soggetto "I" può usare "were" o "was" dopo "wish", ma "were" è preferito nel registro formale/FCE.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I wish I <strong>had</strong> more time. (ma non ce l'ho)</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">She wishes she <strong>lived</strong> closer to work.</p>
    <p style="font-size:14px;color:var(--text2);">I wish I <strong>were</strong> taller. (were = formale, was = informale)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "If only" è più enfatico di "wish" ma ha la stessa struttura. Nel Part 4 keyword IF ONLY o WISH richiedono la stessa forma verbale: Past Simple per il presente, Past Perfect per il passato.
    </p>
  </div>
`;

EXERCISES[40] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I wish I _____ (speak) Spanish — it would be so useful for my job.',
    answer: ['spoke', 'could speak'],
    explanation: '"Wish + Past Simple" per desiderio presente irreale. "Could speak" è anche accettabile.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It\'s a pity she doesn\'t have a driving licence.',
    keyword: 'WISH',
    answer: ['she wishes she had a driving licence'],
    explanation: '"Wish + subject + Past Simple" — desiderio su situazione presente.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'I wish I _____ in a more exciting city — this place is so quiet.',
    options: ['lived', 'live', 'would live', 'had lived'],
    correct: 0,
    explanation: '"Wish + Past Simple" per situazione presente. "Would live" non si usa per il soggetto principale.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'If only he _____ (be) more patient — he always gives up too quickly.',
    answer: ['were', 'was'],
    explanation: '"If only + were/was" — "were" è preferito al FCE (formale). Desiderio sul carattere attuale.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'Unfortunately, I don\'t earn enough money to travel.',
    keyword: 'ONLY',
    answer: ['if only I earned enough money to travel'],
    explanation: '"If only + Past Simple" — versione enfatica di "wish". "If only I earned…"'
  }
];

// Day 41 — Wish + would / past perfect
THEORY[41] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Wish + would e Wish + Past Perfect</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    <strong>Wish + would</strong> esprime fastidio o desiderio che qualcun altro cambi comportamento (non si usa per il soggetto principale). <strong>Wish + Past Perfect</strong> esprime rimpianto per qualcosa avvenuto o non avvenuto nel passato.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Distinzioni</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I wish you <strong>would stop</strong> interrupting. (fastidio → qualcun altro)</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">I wish I <strong>had studied</strong> harder. (rimpianto passato)</p>
    <p style="font-size:14px;color:var(--text2);">If only she <strong>hadn't said</strong> that. (rimpianto su parole passate)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      ❌ "I wish I would have done it" — errore classico! Per rimpianti passati: "I wish I <strong>had done</strong> it." "Would" dopo "wish" si usa SOLO per riferirsi ad altri o a situazioni esterne.
    </p>
  </div>
`;

EXERCISES[41] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'I wish my neighbours _____ making so much noise every night.',
    options: ['would stop', 'stopped', 'had stopped', 'stop'],
    correct: 0,
    explanation: '"Wish + would" per esprimere fastidio verso il comportamento di altri.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She wishes she _____ (take) that job offer in Paris last year.',
    answer: ['had taken'],
    explanation: '"Wish + Past Perfect" — rimpianto per decisione passata non presa.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It\'s a pity I didn\'t save more money when I was younger.',
    keyword: 'WISH',
    answer: ['I wish I had saved more money when I was younger'],
    explanation: '"Wish + Past Perfect" per rimpianto del passato.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'If only he _____ (not tell) everyone about the surprise — he ruined it.',
    answer: ["hadn't told", 'had not told'],
    explanation: '"If only + Past Perfect negativo" — rimpianto su azione passata compiuta.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'I wish the government _____ more attention to environmental issues.',
    options: ['would pay', 'paid', 'had paid', 'pays'],
    correct: 0,
    explanation: '"Wish + would" — desiderio che qualcosa/qualcun altro cambi. Soggetto diverso da "I".'
  }
];

// Day 42 — Wish: Mixed & If Only
THEORY[42] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Wish e If Only: Ripasso e Confronto</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Ricapitolando: <strong>wish/if only + Past Simple</strong> → presente irreale; <strong>wish/if only + Past Perfect</strong> → rimpianto passato; <strong>wish + would</strong> → fastidio/desiderio verso altri. "If only" è più emotivo di "wish".
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Schema riassuntivo</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">Presente irreale → <strong>wish + Past Simple</strong></p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">Rimpianto passato → <strong>wish/if only + Past Perfect</strong></p>
    <p style="font-size:13px;color:var(--text2)">Fastidio/cambiamento altrui → <strong>wish + would</strong></p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Espressioni simili: "It's time + Past Simple" (It's time you went to bed), "I'd rather + Past Simple" (I'd rather you didn't smoke here). Stessa logica di distanza temporale per l'irreale.
    </p>
  </div>
`;

EXERCISES[42] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'It\'s time the government _____ (act) on the housing crisis.',
    answer: ['acted'],
    explanation: '"It\'s time + Past Simple" — struttura parallela a "wish + Past Simple" per l\'irreale.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'I\'d rather you _____ tell anyone about this — it\'s confidential.',
    options: ["didn't", "don't", "hadn't", 'wouldn\'t'],
    correct: 0,
    explanation: '"I\'d rather + subject + Past Simple" per esprimere preferenza su azioni altrui.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'I regret not applying for that scholarship.',
    keyword: 'WISH',
    answer: ['I wish I had applied for that scholarship'],
    explanation: '"Wish + Past Perfect" — rimpianto per opportunità mancata nel passato.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'If only I _____ (can) remember where I put my passport!',
    answer: ['could'],
    explanation: '"If only + could" — "could" funziona come Past Simple di "can" nelle strutture con wish/if only.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She wishes she _____ the courage to tell him how she really felt.',
    options: ['had had', 'had', 'would have', 'has had'],
    correct: 0,
    explanation: 'Rimpianto passato + verbo "have" → "had had" (Past Perfect di "have").'
  }
];

// Day 43 — Gerund & Infinitive: verb + -ing
THEORY[43] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Gerundio e Infinito: verbi + -ing</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Alcuni verbi sono seguiti obbligatoriamente dal <strong>gerundio (-ing)</strong>. Questi verbi vanno memorizzati come liste. Il gerundio si usa anche dopo preposizioni e come soggetto di frase.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Verbi + -ing (lista FCE)</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>enjoy, avoid, finish, mind, suggest, deny, miss, admit, consider, risk, imagine, practise</strong></p>
    <p style="font-size:13px;color:var(--text2)"><strong>+ preposizione:</strong> good at, interested in, used to, instead of, look forward to, give up</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Look forward to <strong>meeting</strong> you" — il "to" qui è una preposizione, non parte dell'infinito! Errore molto comune: "look forward to meet" ✗.
    </p>
  </div>
`;

EXERCISES[43] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I really enjoy _____ (cook) Italian food at weekends.',
    answer: ['cooking'],
    explanation: '"Enjoy" + gerundio. Mai "enjoy to cook".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She admitted _____ the money from the office safe.',
    options: ['taking', 'to take', 'take', 'to taking'],
    correct: 0,
    explanation: '"Admit" + gerundio. Confessione di un\'azione → sempre -ing.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I look forward to _____ (hear) from you soon.',
    answer: ['hearing'],
    explanation: '"Look forward to + -ing" — "to" è preposizione, non parte dell\'infinito.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'He doesn\'t want to give up smoking — he\'s tried before.',
    keyword: 'MIND',
    answer: ["he doesn't mind smoking", 'he does not mind smoking'],
    explanation: '"Mind" + gerundio. "Don\'t mind" = non importarsi di qualcosa.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'You should consider _____ (apply) for the scholarship before the deadline.',
    answer: ['applying'],
    explanation: '"Consider" + gerundio = riflettere su qualcosa. Mai "consider to apply".'
  }
];

// Day 44 — Gerund & Infinitive: verb + to-infinitive
THEORY[44] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Gerundio e Infinito: verbi + to-infinitive</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Molti verbi richiedono il <strong>to-infinitive</strong>. Questi esprimono spesso intenzioni, decisioni, aspettative o tentativi. Anche "too + adj + to" e "adj + enough + to" usano il to-infinitive.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Verbi + to-infinitive</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>want, need, hope, plan, decide, agree, manage, refuse, offer, promise, expect, seem, appear, tend</strong></p>
    <p style="font-size:13px;color:var(--text2)"><strong>too + adj + to:</strong> too tired to work / <strong>adj + enough + to:</strong> old enough to vote</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Manage to do" = riuscire a fare (implica difficoltà). Non confondere con "can" o "be able to" — "managed to" si usa per successi specifici. Part 4 con keyword MANAGED è frequente.
    </p>
  </div>
`;

EXERCISES[44] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She managed _____ (finish) the report despite the interruptions.',
    answer: ['to finish'],
    explanation: '"Manage" + to-infinitive = riuscire a. Implica superamento di difficoltà.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'He decided _____ for the job even though he was underqualified.',
    options: ['to apply', 'applying', 'apply', 'applied'],
    correct: 0,
    explanation: '"Decide" + to-infinitive. Mai "decide applying".'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She was so tired that she couldn\'t concentrate.',
    keyword: 'TOO',
    answer: ['she was too tired to concentrate'],
    explanation: '"Too + adjective + to-infinitive" — struttura di conseguenza.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The results seem _____ (be) better than expected.',
    answer: ['to be'],
    explanation: '"Seem" + to-infinitive. "Seem to be" = sembrare essere.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'He is old enough — he can vote in this election.',
    keyword: 'ENOUGH',
    answer: ['he is old enough to vote in this election'],
    explanation: '"Adjective + enough + to-infinitive" — struttura di sufficienza.'
  }
];

// Day 45 — Verbs that take both -ing and to-infinitive
THEORY[45] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Verbi con -ing e to-inf: remember, stop, try, forget</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Alcuni verbi cambiano significato a seconda che siano seguiti dal gerundio o dall'infinito. Questi sono i più testati al FCE: <strong>remember, forget, stop, try, regret, mean</strong>.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Differenze chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>remember + -ing:</strong> ricordare qualcosa accaduto → I remember meeting her.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>remember + to-inf:</strong> non dimenticare di fare → Remember to call!</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>stop + -ing:</strong> smettere → He stopped smoking.</p>
    <p style="font-size:13px;color:var(--text2)"><strong>stop + to-inf:</strong> fermarsi per fare → He stopped to smoke.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Try + -ing" = sperimentare come soluzione; "try + to-inf" = fare del proprio meglio. "I tried opening the window" (ho provato ad aprirla come soluzione) vs "I tried to open it" (ho fatto del mio meglio ma forse non ci sono riuscito).
    </p>
  </div>
`;

EXERCISES[45] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'I remember _____ him at the conference — he had a very distinctive laugh.',
    options: ['meeting', 'to meet', 'met', 'to meeting'],
    correct: 0,
    explanation: '"Remember + -ing" = ricordare un\'azione passata. "Meeting" indica un ricordo.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Don\'t forget _____ (lock) the door when you leave — it\'s been happening a lot.',
    answer: ['to lock'],
    explanation: '"Forget + to-inf" = dimenticare di fare qualcosa (futuro/abitudine).'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She was walking, and then she stopped to look at the shop window.',
    keyword: 'STOPPED',
    answer: ['she stopped to look at the shop window'],
    explanation: '"Stop + to-inf" = fermarsi per fare qualcosa (scopo della fermata).'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Have you tried _____ the router off and on again? It usually fixes the problem.',
    options: ['turning', 'to turn', 'turn', 'turned'],
    correct: 0,
    explanation: '"Try + -ing" = sperimentare come soluzione pratica.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'I regret _____ (tell) you that your application has been unsuccessful.',
    answer: ['to tell'],
    explanation: '"Regret + to-inf" = essere spiacente di comunicare qualcosa (formale). "Regret + -ing" = pentirsi di qualcosa fatto in passato.'
  }
];

// Day 46 — Linking Words: contrast & concession
THEORY[46] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Connettori: Contrasto e Concessione</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I connettori di contrasto mettono in opposizione due idee. È fondamentale sapere quale struttura grammaticale seguono: alcuni precedono una frase (+ soggetto + verbo), altri precedono un sostantivo o gerundio.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Strutture</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>+ clause:</strong> although, even though, while, whereas, however (+ virgola)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>+ noun/-ing:</strong> despite, in spite of, regardless of</p>
    <p style="font-size:13px;color:var(--text2)"><strong>+ adj/adv:</strong> yet, still, nevertheless, on the other hand</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Despite" e "in spite of" NON sono seguiti da una frase con soggetto+verbo. Usali con un sostantivo o gerundio: "Despite <strong>working</strong> hard" ✓ / "Despite <strong>she worked</strong> hard" ✗.
    </p>
  </div>
`;

EXERCISES[46] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: '_____ the heavy rain, the outdoor concert went ahead as planned.',
    options: ['Despite', 'Although', 'However', 'Even though'],
    correct: 0,
    explanation: '"Despite" + noun phrase (the heavy rain). "Although/even though" richiedono una frase completa.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'Although she studied hard, she didn\'t pass the exam.',
    keyword: 'SPITE',
    answer: ['in spite of studying hard, she didn\'t pass the exam', 'in spite of her hard studying, she didn\'t pass the exam'],
    explanation: '"In spite of + -ing" — equivalente di "although + clause".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The film received mixed reviews. _____, it became a box office hit.',
    answer: ['Nevertheless', 'However', 'Nonetheless'],
    explanation: '"Nevertheless/however" = tuttavia — connettore di contrasto a inizio frase, segue punto o punto e virgola.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She loves spicy food, _____ her husband prefers very mild dishes.',
    options: ['whereas', 'despite', 'although', 'even if'],
    correct: 0,
    explanation: '"Whereas" esprime contrasto diretto tra due situazioni parallele — simile a "while" ma più formale.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She got the promotion _____ the fact that she had only been with the company for a year.',
    answer: ['despite', 'in spite of'],
    explanation: '"Despite/in spite of + the fact that" — usato quando si vuole seguire una frase completa.'
  }
];

// Day 47 — Linking Words: cause/effect & addition
THEORY[47] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Connettori: Causa, Effetto e Aggiunta</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I connettori di causa (<strong>because, since, as, due to, owing to</strong>) e di effetto (<strong>therefore, as a result, consequently, so</strong>) mostrano relazioni logiche. I connettori di aggiunta (<strong>in addition, furthermore, moreover, besides</strong>) arricchiscono il testo.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Strutture chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>due to / owing to</strong> + noun: "Due to the storm, flights were cancelled."</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>because of</strong> + noun: "Because of the noise, I couldn't sleep."</p>
    <p style="font-size:13px;color:var(--text2)"><strong>therefore / as a result</strong> + virgola: "She was late; therefore, she missed the start."</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "So" è informale — nelle composizioni scritte FCE usa "therefore", "as a result" o "consequently". "Due to" è più formale di "because of" ma entrambi sono seguiti da un sostantivo o gerundio, non da una frase.
    </p>
  </div>
`;

EXERCISES[47] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The event was cancelled _____ a lack of funding from the local authorities.',
    options: ['due to', 'because', 'as a result', 'therefore'],
    correct: 0,
    explanation: '"Due to" + noun phrase. "Because" richiede una frase completa con soggetto e verbo.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'Because the traffic was so heavy, we arrived late.',
    keyword: 'OWING',
    answer: ['owing to the heavy traffic, we arrived late'],
    explanation: '"Owing to + noun phrase" — connettore di causa formale equivalente a "due to".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The team worked extremely hard. _____, they managed to complete the project on time.',
    answer: ['As a result', 'Therefore', 'Consequently'],
    explanation: 'Connettore di effetto a inizio frase. "As a result" / "Therefore" / "Consequently" — tutti accettabili.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: '_____ its high cost, the new treatment is not available on the public health system.',
    options: ['Owing to', 'Although', 'Despite', 'In spite'],
    correct: 0,
    explanation: '"Owing to" + noun phrase di causa. "Despite" sarebbe per contrasto, non causa.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The restaurant has excellent food. _____, the service is outstanding and prices are reasonable.',
    answer: ['Furthermore', 'Moreover', 'In addition', 'Besides'],
    explanation: 'Connettore di aggiunta per rafforzare un argomento. Tutti i quattro sono accettabili e appropriati nel registro formale.'
  }
];

// Day 48 — Linking Words: Mixed
THEORY[48] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Connettori: Ripasso e Connettori di Scopo</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I connettori di scopo (<strong>so that, in order to, in order that, so as to</strong>) esprimono intenzione. Quelli di esempio (<strong>for example, for instance, such as, in particular</strong>) illustrano punti generali.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Scopo: strutture</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>so that + clause:</strong> She left early so that she wouldn't be late.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>in order to + inf:</strong> She left early in order to avoid traffic.</p>
    <p style="font-size:13px;color:var(--text2)"><strong>so as (not) to + inf:</strong> She drove carefully so as not to scratch the car.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4 "in order to" e "so that" si trasformano spesso l'uno nell'altro. "In order to" richiede lo stesso soggetto nelle due frasi; "so that" permette soggetti diversi.
    </p>
  </div>
`;

EXERCISES[48] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She took an umbrella because she didn\'t want to get wet.',
    keyword: 'ORDER',
    answer: ['she took an umbrella in order not to get wet'],
    explanation: '"In order not to + infinitive" per scopo negativo. Stessa struttura di "so as not to".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'He practised every day _____ that he would be ready for the audition.',
    answer: ['so'],
    explanation: '"So that + clause" per esprimere scopo con soggetti potenzialmente diversi.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Many animals, _____ the snow leopard and the mountain gorilla, are endangered.',
    options: ['such as', 'for example', 'for instance', 'in particular'],
    correct: 0,
    explanation: '"Such as" introduce esempi direttamente nel mezzo di una frase (senza virgola prima in questo uso).'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She whispered _____ as not to disturb the sleeping baby.',
    answer: ['so'],
    explanation: '"So as not to + infinitive" — connettore di scopo negativo formale.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'He saved money because he wanted to buy a new computer.',
    keyword: 'SO',
    answer: ['he saved money so that he could buy a new computer'],
    explanation: '"So that + could" per esprimere scopo (spesso con "could" o "would" nella proposizione di scopo).'
  }
];

// Day 49 — Comparatives & Superlatives
THEORY[49] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Comparativi e Superlativi</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Comparativi: <strong>-er than / more … than / as … as / not as … as</strong>. Superlativi: <strong>the -est / the most</strong>. I doppi comparativi (<em>the more… the more…</em>) e le strutture con "as…as" sono frequenti al FCE.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Strutture chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>as … as:</strong> She's as talented as her sister.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>not as … as / less … than:</strong> This film is not as good as the original.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Doppio comparativo:</strong> The harder you work, the better the results.</p>
    <p style="font-size:13px;color:var(--text2)"><strong>Irregolari:</strong> good→better→best; bad→worse→worst; far→farther/further→farthest/furthest</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Much/far/a lot + comparativo" intensifica: "much better", "far worse", "a lot more expensive". Nel Part 4 trasformazioni tra "not as … as" e "less … than" sono molto frequenti.
    </p>
  </div>
`;

EXERCISES[49] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: 'No other mountain in the world is as high as Everest.',
    keyword: 'HIGHEST',
    answer: ['Everest is the highest mountain in the world'],
    explanation: '"No other … as … as" → superlativo. "The highest mountain in the world".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The _____ you practise, the _____ your pronunciation will become.',
    answer: ['more / better'],
    explanation: 'Doppio comparativo: "the more… the better/worse/bigger etc." Struttura parallela.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'This laptop is _____ expensive than the other model, but has better specifications.',
    options: ['slightly more', 'a little bit most', 'more slightly', 'much most'],
    correct: 0,
    explanation: '"Slightly more + adj" = un po\' più. "Much more" sarebbe per differenza grande.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'The new office is less spacious than the old one.',
    keyword: 'AS',
    answer: ['the new office is not as spacious as the old one'],
    explanation: '"Less + adj + than" → "not as + adj + as". Struttura equivalente.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Her second novel is by _____ the best thing she has ever written.',
    answer: ['far'],
    explanation: '"By far the best" = di gran lunga il migliore. Intensificatore fisso con i superlativi.'
  }
];

// Day 50 — Comparatives: as…as, double comparatives review
THEORY[50] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Comparativi: Ripasso e Strutture Avanzate</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Alcune strutture comparative avanzate appaiono regolarmente nel FCE: <strong>the same … as, similar to, different from, prefer … to, would rather … than</strong>. Queste vanno memorizzate con le preposizioni corrette.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Strutture con preposizioni fisse</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">the <strong>same</strong> … <strong>as</strong>: Her bag is the same colour as mine.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>similar to</strong>: This style is similar to Art Deco.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>different from/to</strong>: The result was different from what I expected.</p>
    <p style="font-size:13px;color:var(--text2)"><strong>prefer … to</strong>: She prefers tea to coffee.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Different from" è la forma più standard in inglese britannico (FCE). "Different than" è americano. "Different to" è accettabile nel parlato britannico. Nel Part 4 usa "different from".
    </p>
  </div>
`;

EXERCISES[50] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The two buildings are not identical — this one is slightly different _____ the other.',
    answer: ['from', 'to'],
    explanation: '"Different from" (BrE formale) o "different to" (BrE informale) — entrambi accettabili al FCE.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She likes reading more than watching TV.',
    keyword: 'PREFERS',
    answer: ['she prefers reading to watching TV'],
    explanation: '"Prefer + -ing + to + -ing" — struttura con preposizione "to". Mai "prefer reading than".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'This year\'s results are exactly the same _____ last year\'s.',
    options: ['as', 'to', 'than', 'from'],
    correct: 0,
    explanation: '"The same + noun + as" — sempre "as" con "same". Mai "same than".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The climate here is _____ to that of the Mediterranean — warm and dry.',
    answer: ['similar'],
    explanation: '"Similar to" — preposizione fissa. Mai "similar as" o "similar than".'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'I think cycling to work is much better than driving.',
    keyword: 'RATHER',
    answer: ['I would rather cycle to work than drive', "I'd rather cycle to work than drive"],
    explanation: '"Would rather + bare infinitive + than + bare infinitive" — preferenza forte.'
  }
];

// Day 51 — Relative Clauses: defining
THEORY[51] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Proposizioni Relative: Defining</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Le <strong>relative clauses defining</strong> (senza virgole) identificano o specificano il sostantivo — sono essenziali per il significato della frase. Si usano <strong>who</strong> (persone), <strong>which/that</strong> (cose), <strong>whose</strong> (possesso), <strong>where</strong> (luoghi), <strong>when</strong> (tempi).
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">The woman <strong>who</strong> called was my manager.</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">The book <strong>that/which</strong> I recommended is out of print.</p>
    <p style="font-size:14px;color:var(--text2);">The house <strong>whose</strong> roof was damaged was sold cheaply.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nelle defining clauses il pronome relativo può essere omesso quando è oggetto: "The book (that) I read was great." Non può essere omesso quando è soggetto: "The woman who called" (non puoi omettere "who").
    </p>
  </div>
`;

EXERCISES[51] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The scientist _____ discovered the vaccine received the Nobel Prize.',
    answer: ['who', 'that'],
    explanation: 'Pronome relativo soggetto per persona → "who" o "that". Non può essere omesso.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'The company _____ shares rose by 40% was founded just five years ago.',
    options: ['whose', 'which', 'that', 'who'],
    correct: 0,
    explanation: '"Whose" per possesso (the company\'s shares). Non si può usare "which" o "that" per il possesso.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'The restaurant is on the corner. We had our first date there.',
    keyword: 'WHERE',
    answer: ['the restaurant where we had our first date is on the corner'],
    explanation: '"Where" sostituisce "there" nelle relative clauses di luogo.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Is this the jacket _____ you wanted to buy last week?',
    answer: ['that', 'which', ''],
    explanation: 'Pronome relativo oggetto per cosa → "that", "which" o omesso (zero relative).'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Do you remember the year _____ the company was founded?',
    options: ['when', 'where', 'which', 'that'],
    correct: 0,
    explanation: '"When" nelle relative clauses di tempo (the year, the day, the moment).'
  }
];

// Day 52 — Relative Clauses: non-defining & reduction
THEORY[52] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Proposizioni Relative: Non-defining e Riduzione</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Le <strong>non-defining relative clauses</strong> (tra virgole) aggiungono informazione non essenziale. Usano <strong>who/which</strong> (mai "that") e non possono omettere il pronome relativo. Le <strong>reduced relative clauses</strong> usano il participio (present o past) come alternativa compatta.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Non-defining vs Reduced</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">My sister, <strong>who lives in Paris</strong>, is visiting next week. (non-defining)</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">The report, <strong>which was written by the CEO</strong>, caused controversy. (non-defining)</p>
    <p style="font-size:14px;color:var(--text2);">The man <strong>sitting by the window</strong> is my boss. (reduced: who is sitting)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 5 (Reading) le non-defining clauses aggiungono dettagli ma non cambiano il significato essenziale — riconosci questa differenza per capire la struttura del testo. Nel Part 4 potresti dover unire due frasi con una relative clause.
    </p>
  </div>
`;

EXERCISES[52] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: 'The Eiffel Tower was designed by Gustave Eiffel. It is 330 metres tall.',
    keyword: 'WHICH',
    answer: ['the Eiffel Tower, which was designed by Gustave Eiffel, is 330 metres tall', 'the Eiffel Tower, which is 330 metres tall, was designed by Gustave Eiffel'],
    explanation: 'Non-defining relative clause con "which" (tra virgole). "That" non si usa nelle non-defining.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The woman _____ next to the director at the ceremony was his wife.',
    answer: ['sitting', 'seated'],
    explanation: 'Reduced relative clause (= who was sitting). Participio presente sostituisce "who is/was + -ing".'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'Professor Williams, _____ has written over thirty books, will be giving the keynote speech.',
    options: ['who', 'that', 'which', 'whose'],
    correct: 0,
    explanation: 'Non-defining relative clause per persona → "who". "That" non si usa nelle non-defining.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The documents _____ (sign) by the minister are now legally binding.',
    answer: ['signed'],
    explanation: 'Reduced relative clause passiva: "signed" sostituisce "which were signed". Past participle per passivo.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'A man was injured in the accident. He is now in hospital.',
    keyword: 'WHO',
    answer: ['the man who was injured in the accident is now in hospital', 'a man who was injured in the accident is now in hospital'],
    explanation: 'Defining relative clause — "who" come soggetto. Unisce le due frasi.'
  }
];

// Day 53 — Conditionals: Type 3
THEORY[53] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Condizionale Tipo 3: If + Past Perfect, would have + pp</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Il <strong>Tipo 3</strong> esprime rimpianto o situazioni irreali nel passato — qualcosa che non è avvenuto. Struttura: <strong>If + had + past participle, would have + past participle</strong>. Si usa anche "could have" e "might have" al posto di "would have".
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Esempi</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">If she <strong>had studied</strong> harder, she <strong>would have passed</strong>.</p>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px">If we <strong>hadn't missed</strong> the train, we <strong>would have arrived</strong> on time.</p>
    <p style="font-size:14px;color:var(--text2);">She <strong>could have become</strong> a doctor if she <strong>had gone</strong> to medical school.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Inversione formale: "Had she studied harder, she would have passed" = "If she had studied harder…". Nel Part 4 potresti dover usare questa forma con keywords come "HAD" all'inizio.
    </p>
  </div>
`;

EXERCISES[53] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'If he _____ (listen) to the advice, he wouldn\'t have made such a costly mistake.',
    answer: ['had listened'],
    explanation: 'Tipo 3: "If + had + past participle" nella proposizione condizionale.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She didn\'t apply for the grant, so she didn\'t receive the funding.',
    keyword: 'WOULD',
    answer: ['if she had applied for the grant, she would have received the funding', 'she would have received the funding if she had applied for the grant'],
    explanation: 'Tipo 3: rimpianto passato. "Would have received" nella proposizione principale.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'If you _____ told me earlier, I _____ been able to help you.',
    options: ['had / would have', 'would have / had', 'have / would have', 'had / would be'],
    correct: 0,
    explanation: '"If + had + pp, would have + pp" — struttura completa del Tipo 3.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: '_____ she been more careful, the accident would never have happened. (inversion formale)',
    answer: ['Had'],
    explanation: 'Inversione formale del Tipo 3: "Had + subject + pp" invece di "If + subject + had + pp".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'He might _____ (get) the job if he had prepared better for the interview.',
    answer: ['have got', 'have gotten'],
    explanation: '"Might have + past participle" — possibilità nel passato non realizzata (Tipo 3).'
  }
];

// Day 54 — Mixed Conditionals
THEORY[54] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Condizionali Misti</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I <strong>condizionali misti</strong> combinano tempi diversi nelle due clausole: una si riferisce al passato, l'altra al presente. Tipo più comune: <strong>If + Past Perfect (passato) → would + infinito (presente)</strong>.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Due tipi di misto</div>
    <p style="font-size:14px;color:var(--text2);margin-bottom:4px"><strong>Passato → Presente:</strong> If she <em>had studied</em> medicine, she <em>would be</em> a doctor now.</p>
    <p style="font-size:14px;color:var(--text2)"><strong>Presente → Passato:</strong> If he <em>were</em> more organised, he <em>would have finished</em> the project by now.</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      La parola chiave "NOW" nella frase principale segnala spesso un condizionale misto — la condizione è nel passato ma il risultato è nel presente. Riconosci questo pattern nel Part 4.
    </p>
  </div>
`;

EXERCISES[54] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'If she _____ the scholarship, she _____ at Oxford right now.',
    options: ['had won / would be studying', 'won / would have studied', 'had won / would have studied', 'won / would be studying'],
    correct: 0,
    explanation: 'Misto passato→presente: condizione nel passato (had won) + risultato presente (would be studying).'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'If he _____ (be) more punctual, he would have been promoted by now.',
    answer: ['were'],
    explanation: 'Misto presente→passato: caratteristica presente (were = is not punctual) → risultato passato mancato.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She didn\'t take the job in New York. She isn\'t rich now.',
    keyword: 'TAKEN',
    answer: ['if she had taken the job in New York, she would be rich now'],
    explanation: 'Condizionale misto: "had taken" (passato) → "would be" (presente). "Now" è il segnale.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'If I _____ (know) about the traffic, I would have left much earlier.',
    answer: ['had known'],
    explanation: 'Tipo 3 (non misto qui): condizione e risultato entrambi passati. "Had known" nella condizione.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'If he _____ more ambitious, he _____ a different career path.',
    options: ['were / would have chosen', 'had been / would choose', 'was / would have chose', 'is / would choose'],
    correct: 0,
    explanation: 'Misto presente→passato: "were" (carattere attuale) → "would have chosen" (percorso professionale nel passato).'
  }
];

// Day 55 — Quantifiers
THEORY[55] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Quantifiers: much, many, few, little, several, plenty of</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I quantificatori indicano quantità. La scelta dipende dal tipo di sostantivo: <strong>contabile</strong> (plurale) o <strong>non-contabile</strong> (singolare). Alcuni si usano solo con uno dei due tipi; altri (come "a lot of", "some", "any") si usano con entrambi.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Schema</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Solo contabile:</strong> many, few, a few, several, a number of</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Solo non-contabile:</strong> much, little, a little, a great deal of</p>
    <p style="font-size:13px;color:var(--text2)"><strong>Entrambi:</strong> a lot of / lots of, some, any, enough, plenty of, most, no</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Few" (quasi nessuno, negativo) ≠ "a few" (alcuni, positivo). "Little" (quasi niente) ≠ "a little" (un po\', positivo). Questa distinzione è testata nel Part 1 — attenzione al contesto positivo o negativo della frase.
    </p>
  </div>
`;

EXERCISES[55] = [
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'There was _____ information available on the topic, so research was difficult.',
    options: ['little', 'few', 'a few', 'several'],
    correct: 0,
    explanation: '"Information" è non-contabile → "little" (quasi nessuna). "Few" è per sostantivi contabili.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Only _____ students managed to complete all the tasks within the time limit.',
    answer: ['a few', 'few'],
    explanation: '"A few" = alcuni (neutro/positivo); "few" = pochissimi (quasi nessuno, negativo). Il contesto suggerisce "a few" = alcuni ce l\'hanno fatta.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'There are not enough chairs for all the guests.',
    keyword: 'SUFFICIENT',
    answer: ['there are not sufficient chairs for all the guests', 'there are insufficient chairs for all the guests'],
    explanation: '"Not sufficient/insufficient" è equivalente formale di "not enough".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She had _____ time to prepare, but she still delivered an excellent speech.',
    answer: ['little', 'limited'],
    explanation: '"Little time" = pochissimo tempo. "Limited time" è anche accettabile in questo contesto.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'There are _____ of opportunities for young professionals in the technology sector.',
    options: ['plenty', 'much', 'a great deal', 'little'],
    correct: 0,
    explanation: '"Plenty of" si usa con sostantivi sia contabili che non-contabili. "Opportunities" è contabile → "plenty of" ✓, "much" ✗.'
  }
];

// Day 56 — Quantifiers: Review & Determiners
THEORY[56] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Quantifiers: Ripasso e Determiners</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I <strong>determiners</strong> includono articoli (a, an, the, zero article), quantificatori e possessivi. L'uso dell'articolo "the" con nomi astratti, geografici o unici è un'area di frequente errore per italofoni.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Articolo zero vs "the"</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Zero article:</strong> Life is short. / I love music. / She studies medicine.</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>"The":</strong> the Internet, the environment, the police, the elderly</p>
    <p style="font-size:13px;color:var(--text2)"><strong>Geografici:</strong> the UK / the Alps / the Pacific (ma: Italy, Europe, Mount Everest)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Every", "each", "either", "neither" → singolare + verbo singolare. "Both" → plurale. "None of" → può usare verbo singolare o plurale. Nel Part 2 questi dettagli fanno la differenza.
    </p>
  </div>
`;

EXERCISES[56] = [
  {
    type: 'fill',
    part: 'Part 2',
    question: 'She has very _____ patience with people who don\'t listen — she gets frustrated easily.',
    answer: ['little'],
    explanation: '"Little patience" = pochissima pazienza. "Patience" è non-contabile.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: '_____ student in the class passed the exam — it was a record achievement.',
    options: ['Every', 'All', 'Each of the', 'Both'],
    correct: 0,
    explanation: '"Every + singular noun + singular verb" = tutti senza eccezione.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Neither of the candidates _____ (seem) fully prepared for the role.',
    answer: ['seems', 'seemed'],
    explanation: '"Neither of + plural noun" può usare verbo singolare (formale) o plurale. "Seems" è la forma più comune.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'All the team members agreed with the decision.',
    keyword: 'EVERY',
    answer: ['every member of the team agreed with the decision', 'every team member agreed with the decision'],
    explanation: '"Every + singular noun" equivale a "all the + plural noun".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'There is _____ of food left — help yourself to whatever you want.',
    answer: ['plenty'],
    explanation: '"Plenty of" = molta/molti — quantità abbondante. Si usa con non-contabili e contabili.'
  }
];

// Day 57 — Phrasal Verbs: look, get, take
THEORY[57] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Phrasal Verbs: look, get, take</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    I phrasal verbs con <strong>look, get, take</strong> sono tra i più frequenti al FCE. Ogni verbo può avere 5–10 significati diversi a seconda della particella. Vanno memorizzati per cluster.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Phrasal verbs chiave</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>look:</strong> look up (cercare), look after (badare a), look forward to (attendere con gioia), look into (indagare), look down on (guardare dall'alto in basso)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>get:</strong> get over (superare), get on with (andare d'accordo), get away with (farla franca), get rid of (liberarsi di), get through (superare/passare)</p>
    <p style="font-size:13px;color:var(--text2)"><strong>take:</strong> take off (decollare/togliersi), take up (iniziare un hobby), take after (assomigliare a), take over (assumere il controllo), take in (ingannare/capire)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4 potresti dover sostituire un'espressione formale con il suo phrasal verb equivalente. "Investigate" → "look into", "recover from" → "get over", "resemble" → "take after".
    </p>
  </div>
`;

EXERCISES[57] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She is still recovering from the shock of losing her job.',
    keyword: 'OVER',
    answer: ['she is still getting over the shock of losing her job'],
    explanation: '"Get over" = riprendersi da, superare un trauma. Sinonimo di "recover from".'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Could you _____ after the children this afternoon while I go to the dentist?',
    answer: ['look'],
    explanation: '"Look after" = badare a, prendersi cura di. Phrasal verb inseparabile.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She _____ her mother — they have the same eyes and the same laugh.',
    options: ['takes after', 'takes over', 'takes up', 'takes off'],
    correct: 0,
    explanation: '"Take after" = assomigliare a (un genitore o parente). Non separabile.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'The police are _____ into the cause of the fire at the warehouse.',
    answer: ['looking'],
    explanation: '"Look into" = indagare, esaminare. Sinonimo formale: "investigate".'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'He started playing golf last year and now he\'s obsessed with it.',
    keyword: 'TOOK',
    answer: ['he took up golf last year and now he is obsessed with it', "he took up golf last year and now he's obsessed with it"],
    explanation: '"Take up" = iniziare una nuova attività o hobby. Separabile.'
  }
];

// Day 58 — Phrasal Verbs: come, run, go, put
THEORY[58] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Phrasal Verbs: come, run, go, put</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Un secondo cluster di phrasal verbs fondamentali per il FCE. "Put" in particolare ha molte combinazioni con significati molto diversi — non si può prevedere il significato dalla traduzione letterale.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Cluster da memorizzare</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>come:</strong> come across (trovare per caso), come up with (ideare), come round (riprendere conoscenza), come about (avvenire), come up (presentarsi — un problema)</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>run:</strong> run out of (esaurire), run into (incontrare per caso), run over (investire/rileggere), run away (scappare)</p>
    <p style="font-size:13px;color:var(--text2)"><strong>put:</strong> put off (rimandare), put up with (sopportare), put across (comunicare un\'idea), put forward (proporre), put out (spegnere)</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      "Run out of" è inseparabile — non puoi mettere l'oggetto in mezzo. "Put up with" = tolerate/stand — usato spesso nel Part 4 con keyword TOLERATE o STAND.
    </p>
  </div>
`;

EXERCISES[58] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She can\'t tolerate his rude behaviour any longer.',
    keyword: 'PUT',
    answer: ["she can't put up with his rude behaviour any longer", 'she cannot put up with his rude behaviour any longer'],
    explanation: '"Put up with" = tolerate/stand. Inseparabile.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'We\'ve completely _____ out of sugar — could you buy some on your way home?',
    answer: ['run'],
    explanation: '"Run out of" = esaurire le scorte di qualcosa. Phrasal verb inseparabile.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'A serious problem has _____ up that needs our immediate attention.',
    options: ['come', 'run', 'put', 'gone'],
    correct: 0,
    explanation: '"Come up" = presentarsi, emergere (di un problema o opportunità inaspettata).'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'Please _____ out the fire before you leave the campsite.',
    answer: ['put'],
    explanation: '"Put out" = spegnere (un incendio, una sigaretta, una luce). Separabile.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'She postponed the meeting until the following week.',
    keyword: 'OFF',
    answer: ['she put off the meeting until the following week', 'she put the meeting off until the following week'],
    explanation: '"Put off" = postpone/delay. Separabile: il complemento può andare prima o dopo "off".'
  }
];

// Day 59 — FCE Review: Mixed Practice
THEORY[59] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Ripasso FCE: Strategie e Pattern Chiave</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Stai arrivando alla fine del piano da 60 giorni. Oggi riviediamo le strategie per ogni parte del FCE Use of English e i pattern grammaticali più frequentemente testati.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Strategie per Part</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Part 1 (MC Cloze):</strong> leggi la frase completa, cerca segnali, elimina le distrazioni</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Part 2 (Open Cloze):</strong> cerca preposizioni, articoli, congiunzioni, ausiliari, pronomi</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px"><strong>Part 3 (Word Form):</strong> identifica categoria grammaticale → applica suffisso/prefisso</p>
    <p style="font-size:13px;color:var(--text2)"><strong>Part 4 (Key-Word):</strong> mantieni il significato, usa esattamente 2-5 parole, non cambiare la keyword</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">FCE Tip</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      Nel Part 4 le contrazioni (it's, don't, I've) contano come due parole. Se la risposta richiede una negazione con contrazione, assicurati di non superare le 5 parole totali.
    </p>
  </div>
`;

EXERCISES[59] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: 'Despite the fact that she was exhausted, she finished the race.',
    keyword: 'THOUGH',
    answer: ['even though she was exhausted, she finished the race'],
    explanation: '"Even though" = concessione con soggetto+verbo. Equivalente di "despite the fact that".'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'His _____ (DETERMINE) to succeed was clear from the very first interview.',
    answer: ['determination'],
    explanation: 'DETERMINE → determination (-e + -ation). Forma sostantivale.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'By the time the rescue team _____, the hikers had already found shelter.',
    options: ['arrived', 'had arrived', 'were arriving', 'have arrived'],
    correct: 0,
    explanation: '"By the time" + Past Simple nella temporale → Past Perfect nella principale. Qui l\'ordine è inverso: Past Simple nella temporale, Past Perfect nella principale.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'It\'s high time the authorities _____ (take) action on air pollution.',
    answer: ['took'],
    explanation: '"It\'s high time + Past Simple" — struttura parallela a "wish + Past Simple" per urgenza.'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: 'People say that learning a language requires daily practice.',
    keyword: 'SAID',
    answer: ['learning a language is said to require daily practice', 'it is said that learning a language requires daily practice'],
    explanation: 'Passivo impersonale: "is said to + infinitive" o "it is said that + clause".'
  }
];

// Day 60 — Final Review: FCE Exam Practice
THEORY[60] = `
  <h3 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:12px">Giorno 60: Preparazione Finale FCE</h3>
  <p style="color:var(--text2);font-size:14px;line-height:1.7;margin-bottom:14px">
    Hai completato il piano da 60 giorni. Oggi eseguiamo una simulazione mista di alto livello che copre tutti i punti grammaticali studiati. Mantieni la calma, leggi attentamente ogni frase e fidati di ciò che hai imparato.
  </p>
  <div style="background:var(--surface2);border-radius:10px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--subtext);margin-bottom:8px">Checklist pre-esame</div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">✓ Collocazioni make/do/have/take — memorizzate</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">✓ Tempi verbali — tutti i pattern con segnali</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">✓ Passive, reported speech, conditionals, wish</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:4px">✓ Gerund vs infinitive — verbi critici</p>
    <p style="font-size:13px;color:var(--text2)">✓ Word formation — suffissi e prefissi</p>
  </div>
  <div style="background:var(--accent-light);border-radius:10px;padding:14px;border-left:3px solid var(--accent)">
    <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">Motivazione</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.6">
      60 giorni di studio sistematico. Hai affrontato ogni area grammaticale richiesta dall'esame FCE B2. Ora è il momento di mettere in pratica tutto ciò che hai imparato. You've got this.
    </p>
  </div>
`;

EXERCISES[60] = [
  {
    type: 'transform',
    part: 'Part 4',
    question: 'It was wrong of him not to inform us about the changes.',
    keyword: 'SHOULD',
    answer: ['he should have informed us about the changes'],
    explanation: '"Should have + pp" — critica per un\'azione non compiuta nel passato.'
  },
  {
    type: 'fill',
    part: 'Part 3',
    question: 'The _____ (APPROVE) of the new building plans was announced last week.',
    answer: ['approval'],
    explanation: 'APPROVE → approval. Forma sostantivale verbale con suffisso -al.'
  },
  {
    type: 'multiple',
    part: 'Part 1',
    question: 'She _____ working on this novel for three years before it was finally published.',
    options: ['had been', 'has been', 'was', 'had'],
    correct: 0,
    explanation: 'Past Perfect Continuous per azione durata fino a un punto nel passato (publication).'
  },
  {
    type: 'transform',
    part: 'Part 4',
    question: '"I didn\'t steal the documents," the employee said.',
    keyword: 'DENIED',
    answer: ['the employee denied stealing the documents'],
    explanation: '"Deny + -ing" — reporting verb sempre seguito dal gerundio.'
  },
  {
    type: 'fill',
    part: 'Part 2',
    question: 'If only she _____ (accept) the job offer — she\'d be so much happier now.',
    answer: ['had accepted'],
    explanation: '"If only + Past Perfect" — rimpianto per decisione passata con conseguenze nel presente.'
  }
];
