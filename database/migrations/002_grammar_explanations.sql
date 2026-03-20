-- ══════════════════════════════════════════════════════════════
-- Migration 002 — Grammar Explanations table
-- Scopo: spiegazioni grammaticali per il piano 60 giorni
-- Una riga = un sotto-argomento (es. rule_adj_to_adv_ly)
-- Tag: [macro_topic, block_tag, rule_tag] → chiamabili individualmente
-- ══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS grammar_explanations (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Identificatori
  slug            text UNIQUE NOT NULL,
  -- Es.: 'present_simple_habits', 'rule_adj_to_adv_ly', 'causative_have'

  tags            text[] NOT NULL DEFAULT '{}',
  -- Livello 0 — macro topic:   'verb_tenses', 'word_formation', 'passive' …
  -- Livello 1 — blocco giorni: 'verb_tenses_block', 'word_formation_i' …
  -- Livello 2 — sotto-regola:  'present_simple', 'rule_adj_to_adv_ly' …
  -- Livello 3 — cross-tag:     'part2_open_cloze', 'false_friend_italian' …

  -- Titoli (brevi, per accordion library)
  title_en        text NOT NULL,
  title_it        text NOT NULL,

  -- Spiegazione della regola (Markdown/plain text)
  rule_en         text NOT NULL,
  rule_it         text NOT NULL,

  -- Esempi
  -- { "en": "...", "it": "..." }
  example_basic   jsonb,
  example_complex jsonb,

  -- Vocabolario per l'esempio complesso
  -- [{ "word": "...", "pos": "verb|noun|adj|adv", "ipa": "/…/", "meaning_it": "…" }]
  vocabulary      jsonb DEFAULT '[]'::jsonb,

  -- Storia mnemonica (in italiano, link method)
  story_it        text,

  -- Ordinamento nel catalogo library
  display_order   int NOT NULL DEFAULT 0,

  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

-- Indici
CREATE INDEX IF NOT EXISTS grammar_explanations_tags_gin
  ON grammar_explanations USING GIN(tags);

CREATE INDEX IF NOT EXISTS grammar_explanations_slug_idx
  ON grammar_explanations(slug);

CREATE INDEX IF NOT EXISTS grammar_explanations_order_idx
  ON grammar_explanations(display_order);

-- Trigger updated_at (riusa la funzione già esistente da migration 001)
CREATE TRIGGER grammar_explanations_updated_at
  BEFORE UPDATE ON grammar_explanations
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- RLS — lettura pubblica per utenti autenticati, scrittura solo service role
ALTER TABLE grammar_explanations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read grammar explanations"
  ON grammar_explanations FOR SELECT
  TO authenticated USING (true);

-- ══════════════════════════════════════════════════════════════
-- Query di esempio (da app.js)
-- ══════════════════════════════════════════════════════════════

-- Tutte le spiegazioni di un macro-topic (per library accordion):
--   SELECT * FROM grammar_explanations
--   WHERE tags @> ARRAY['word_formation']::text[]
--   ORDER BY display_order;

-- Spiegazione per una regola specifica (dopo errore utente):
--   SELECT * FROM grammar_explanations
--   WHERE tags @> ARRAY['rule_adj_to_adv_ly']::text[]
--   LIMIT 1;

-- Spiegazioni per un giorno (topicKey dall'app):
--   SELECT * FROM grammar_explanations
--   WHERE tags @> ARRAY[$topicKey]::text[]
--   ORDER BY display_order;
