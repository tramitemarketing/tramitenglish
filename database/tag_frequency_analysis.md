# TrainEnglish — Analisi Frequenza Tag & Piano 60 Giorni Calibrato

> Generato: 2026-03-20
> Basato su: **252 esercizi reali** (Part 1–7, tutti i YAML del database)
> Scopo: calibrare il piano 60 giorni dell'app sulle strutture grammaticali realmente testate al FCE B2

---

## 1. Inventario esercizi per Part

| Part | Formato | Esercizi | Set |
|------|---------|----------|-----|
| Part 1 | Multiple Choice Cloze | 40 | 5 set × 8 domande |
| Part 2 | Open Cloze | 48 | 6 set × 8 gap |
| Part 3 | Word Formation | 48 | 6 set × 8 gap |
| Part 4 | Key Word Transformation | 60 | 10 set × 6 item |
| Part 5 | Reading Multiple Choice | 18 | 3 passaggi × 6 domande |
| Part 6 | Gapped Text | 18 | 3 passaggi × 6 gap |
| Part 7 | Multiple Matching | 20 | 2 set × 10 domande |
| **TOTALE** | | **252** | |

---

## 2. Frequenza topic macro — Part 1–4 (196 esercizi grammaticali)

> La Part 3 conta separatamente perché dedicata interamente a Word Formation.

| Rank | Topic | Totale | % | Part principale |
|------|-------|--------|---|-----------------|
| 1 | **Collocations** | 33 | 16.8% | P1 (29), P2 (4) |
| 2 | **Word Formation** | 48* | 24.5% | P3 (48) — separato |
| 3 | **Preposizioni** | 15 | 7.7% | P2 (11), P1 (4) |
| 4 | **Passive Voice** | 13 | 6.6% | P4 (13) |
| 5 | **Gerund & Infinitive** | 11 | 5.6% | P4 (6), P2 (4), P1 (1) |
| 6 | **Linkers & Connectors** | 9 | 4.6% | P1 (4), P2 (5) |
| 7 | **Quantifiers** | 8 | 4.1% | P2 (7), P1 (1) |
| 8 | **Auxiliary Verbs / Verb Tenses** | 8 | 4.1% | P2 (6+1), P1 (1) |
| 9 | **Comparatives** | 7 | 3.6% | P4 (6+1) |
| 10 | **Present Perfect** | 7 | 3.6% | P4 (7) |
| 11 | **Modal Perfects** | 7 | 3.6% | P4 (7) |
| 12 | **Wish / If only** | 6 | 3.1% | P4 (6) |
| 13 | **Reported Speech** | 6 | 3.1% | P4 (6) |
| 14 | **Relative Clauses** | 5 | 2.6% | P2 (5) |
| 15 | Conditionals | 2 | 1.0% | P4 (2) |
| 16 | Pronouns | 3 | 1.5% | P2 (3) |
| 17 | Articles | 1 | 0.5% | P2 (1) |
| 18 | Phrasal Verbs | 1 | 0.5% | P4 (1) |
| 19 | Inversion | 2 | 1.0% | P4 (1+1) |
| 20 | Confusables / Word Choice | 1 | 0.5% | P1 (1) |

---

## 3. Tag specifici più frequenti (cross-part)

| Tag specifico | Count | Significato didattico |
|---------------|-------|-----------------------|
| `false_friend_italian` | 8 | Trappole per parlanti italiani — **priorità massima** |
| `rule_double_transformation` | 10 | Word formation in 2 passi (es. verbo → agg → avv) |
| `rule_adj_to_adv_ly` | 8 | Suffisso -ly — regola più frequente di spelling |
| `rule_prefix_un` | 5 | Prefisso negativo più comune |
| `causative_have` | 5 | `have sth done` — struttura causativa |
| `coll_adj_noun_strong_powerful` | 4 | Intensificatori (deeply/highly/widely) |
| `register_formal` | 4 | Lingua formale — critico per FCE Writing |
| `rel_defining_vs_non_defining` | 3 | `which` vs `that` — la trappola della virgola |
| `wish_past_regret` | 3 | `wish + past perfect` — rimpianto passato |
| `passive_reporting_said/believed` | 2 | Passivo di reporting in Part 4 |

---

## 4. Distribuzione topic per Part

### Part 1 — Multiple Choice Cloze (40 domande)

| Topic | Count | % |
|-------|-------|---|
| Collocations | 29 | 72.5% |
| Linkers | 4 | 10.0% |
| Preposizioni | 4 | 10.0% |
| Quantifiers | 1 | 2.5% |
| Auxiliary Verbs | 1 | 2.5% |
| Word Choice / Confusables | 1 | 2.5% |

**Conclusione P1:** quasi tutto vocabolario + collocazioni. La grammatica è secondaria.

### Part 2 — Open Cloze (48 gap)

| Topic | Count | % |
|-------|-------|---|
| Preposizioni | 11 | 22.9% |
| Quantifiers | 7 | 14.6% |
| Auxiliary Verbs | 6 | 12.5% |
| Relative Clauses | 5 | 10.4% |
| Linkers | 5 | 10.4% |
| Gerund & Infinitive | 4 | 8.3% |
| Collocations | 4 | 8.3% |
| Pronouns | 3 | 6.3% |
| Articles | 1 | 2.1% |
| Comparatives | 1 | 2.1% |
| Verb Tenses | 1 | 2.1% |

**Conclusione P2:** grammatica pura — preposizioni e quantificatori dominano.

### Part 3 — Word Formation (48 gap)

Tutti i tag sono `word_formation` + `part3_word_formation`.

Tag rule_* più frequenti:

| Regola | Count |
|--------|-------|
| `rule_double_transformation` | 10 |
| `rule_adj_to_adv_ly` | 8 |
| `rule_prefix_un` | 5 |
| `rule_prefix_dis` | 4 |
| `rule_spelling_drop_e` | 4 |
| `rule_verb_to_adj_ive` | 3 |
| `rule_noun_to_adj_ful` | 3 |
| `rule_noun_to_adj_al` | 3 |
| `rule_noun_to_verb_ise_ize` | 3 |

### Part 4 — Key Word Transformation (60 item)

| Topic | Count | % |
|-------|-------|---|
| Passive Voice (incl. causativo) | 13 | 21.7% |
| Present Perfect | 7 | 11.7% |
| Modal Perfects | 7 | 11.7% |
| Gerund & Infinitive | 6 | 10.0% |
| Wish / If only | 6 | 10.0% |
| Reported Speech | 6 | 10.0% |
| Comparatives | 6 | 10.0% |
| Conditionals | 2 | 3.3% |
| Inversion | 1 | 1.7% |
| Phrasal Verbs | 1 | 1.7% |
| Altro (collocations, cleft, so-such) | 5 | 8.3% |

---

## 5. Confronto piano attuale vs piano calibrato

| Topic | Piano vecchio (app.js) | Piano calibrato | Delta | Nota |
|-------|------------------------|-----------------|-------|------|
| Verb Tenses | 7 gg | 6 gg | -1 | ok |
| **Collocations** | 7 gg | **8 gg** | +1 | 16.8% dei tag — era sottorappresentato |
| **Preposizioni** | **0 gg** | **4 gg** | +4 | 🔴 era assente — 7.7% dei tag reali! |
| Passive | 6 gg | 4 gg | -2 | ridotto, causativo integrato |
| **Conditionals** | **7 gg** | **2 gg** | -5 | 🔴 era sovrarappresentato — solo 2% |
| Reported Speech | 6 gg | 3 gg | -3 | ridotto proporzionalmente |
| Gerund & Infinitive | 6 gg | 3 gg | -3 | ridotto |
| Word Formation | 7 gg | 8 gg | +1 | diviso in I (suffissi) e II (prefissi) |
| Linkers | 7 gg | 3 gg | -4 | ridotto (4.6% dei tag) |
| Modals | 7 gg | 3 gg | -4 | integra modal perfects (P4) |
| **Wish / If only** | 0 gg | **3 gg** | +3 | 🔴 era assente — 3.1% dei tag, topic P4 |
| **Present Perfect** | 0 gg | **3 gg** | +3 | 🔴 era assente — 3.6%, 7 esercizi P4 |
| Comparatives | 0 gg | 2 gg | +2 | nuovo — 3.6% dei tag |
| Relative Clauses | 0 gg | 2 gg | +2 | nuovo — 2.6% |
| Quantifiers + Articles | 0 gg | 2 gg | +2 | nuovo — 4.1% |
| Phrasal Verbs + Confusables | 0 gg | 2 gg | +2 | nuovo — include false friends IT |
| Review / Simulazione | 0 gg | 2 gg | +2 | nuovo — gg 59–60 |

---

## 6. Piano 60 giorni calibrato (finale)

```
Gg 01–06  (6gg)  Verb Tenses: present/past/future           tag: auxiliary_verbs, verb_tenses
Gg 07–10  (4gg)  Collocations I: make/do/have/take          tag: coll_make/do/have/take
Gg 11–14  (4gg)  Collocations II: adj+verb, intensificatori tag: coll_adv_deeply/highly/widely
Gg 15–18  (4gg)  Preposizioni + Fixed Phrases               tag: vprep_*, prep_place_*, fixed_*
Gg 19–22  (4gg)  Word Formation I: suffissi noun/adj        tag: rule_verb_to_noun_tion/ness/ity
Gg 23–26  (4gg)  Word Formation II: prefissi + spelling     tag: rule_prefix_un/dis/im, rule_spelling_*
Gg 27–29  (3gg)  Present Perfect vs Past Simple             tag: pp_for_since, pp_yet_already
Gg 30–33  (4gg)  Passive Voice + Causativo have/get         tag: causative_have/get, passive_*
Gg 34–36  (3gg)  Modal Verbs + Modal Perfects               tag: modal_should_have, modal_must_have
Gg 37–39  (3gg)  Reported Speech                            tag: reporting_verb_*, reported_*
Gg 40–42  (3gg)  Wish / If only / Would rather              tag: wish_past_regret, wish_would_*
Gg 43–45  (3gg)  Gerund & Infinitive                        tag: verb_gerund_*, be_used_to, worth_*
Gg 46–48  (3gg)  Linkers & Connectors                       tag: link_contrast_*, link_add_*
Gg 49–50  (2gg)  Comparatives & Superlatives                tag: comparative_as_as, superlative
Gg 51–52  (2gg)  Relative Clauses                           tag: rel_defining_vs_non_defining
Gg 53–54  (2gg)  Conditionals + Inversione                  tag: conditional_2/3, inversion_*
Gg 55–56  (2gg)  Quantifiers + Articles                     tag: quant_few/many, article_the_zero
Gg 57–58  (2gg)  Phrasal Verbs + Confusables IT             tag: false_friend_italian, pv_*
Gg 59–60  (2gg)  Ripasso adattivo + Simulazione Part 1–4   tag: [tutti]
```

---

## 7. Tag system (riferimento per sviluppo app)

### Struttura tag per esercizio (6 livelli)

```
tags[0] = parte FCE       part1_mc_cloze | part2_open_cloze | part3_word_formation |
                          part4_transformation | part5_reading_mc | part6_gapped_text |
                          part7_multiple_matching
tags[1] = topic macro     collocations | prepositions | phrasal_verbs | linkers |
                          verb_patterns | word_formation | passive | reported_speech |
                          conditionals | wish_if_only | present_perfect | causative |
                          modal_perfects | inversion | comparatives | quantifiers |
                          relative_clauses | auxiliaries | articles | confusables
tags[2] = regola specifica coll_make | prep_in_at_on | link_contrast_although |
                          rule_prefix_un | rule_verb_to_noun_tion | etc.
tags[3] = cross-tag        collega strutture diverse (es. passive + reported_speech)
tags[4] = false friend IT  false_friend_italian
```

### Algoritmo adaptive review

```
Priorità esercizi di ripasso:
  1. Stesso tags[2] (regola specifica identica)
  2. Stesso tags[1] (topic macro)
  3. Stesso tags[0] (stessa parte FCE)
  4. Fallback: esercizi più vecchi non rivisti
```

### Query Supabase (PostgreSQL + GIN index)

```sql
-- Trova esercizi con stesso tag specifico
SELECT * FROM exercises
WHERE tags @> ARRAY['coll_make']::text[];

-- Trova errori utente raggruppati per topic macro
SELECT tags[2] as topic, COUNT(*) as errors
FROM user_errors
WHERE user_id = $1
GROUP BY topic
ORDER BY errors DESC;
```

---

## 8. False friends italiani identificati (priorità alta)

| Inglese | Falso amico IT | Significato reale |
|---------|---------------|-------------------|
| `actually` | attualmente | in realtà / di fatto |
| `eventually` | eventualmente | alla fine / infine |
| `historic` | storico (qualsiasi) | di grande importanza storica |
| `historical` | storico (qualsiasi) | relativo al passato / storico |
| `few` + noun | pochi (neutro) | quasi nessuno (negativo) |
| `a few` + noun | pochi | alcuni / qualcuno (positivo) |
| `reduced` (trans.) | si ridusse | richede oggetto — intransitivo = `fell/dropped` |
| `fewer` | meno (countable) | comparativo di `few` — solo contabili |

---

*File generato automaticamente dall'analisi dei tag YAML — aggiornare dopo ogni nuova aggiunta di esercizi.*
