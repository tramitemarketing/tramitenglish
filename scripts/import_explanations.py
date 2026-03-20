#!/usr/bin/env python3
"""
Import grammar_explanations.yaml → Supabase grammar_explanations table.

Usage:
    python3 scripts/import_explanations.py [--dry-run]

Requirements:
    pip install supabase pyyaml
"""

import sys
import yaml
import json
import os

SUPABASE_URL = 'https://zmnjoiuvmyyyrveooxzp.supabase.co'
# Use service role key for writes (set as env var or replace below)
SUPABASE_SERVICE_KEY = os.environ.get('SUPABASE_SERVICE_KEY', '')

DRY_RUN = '--dry-run' in sys.argv

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    yaml_path = os.path.join(script_dir, '..', 'database', 'grammar_explanations.yaml')

    with open(yaml_path, 'r', encoding='utf-8') as f:
        records = yaml.safe_load(f)

    print(f"Loaded {len(records)} explanations from YAML.")

    if DRY_RUN:
        for r in records:
            print(f"  [{r['display_order']:03d}] {r['slug']}  tags={r['tags']}")
        print("\nDry run complete — no data written.")
        return

    if not SUPABASE_SERVICE_KEY:
        print("ERROR: Set SUPABASE_SERVICE_KEY env var before running import.")
        sys.exit(1)

    from supabase import create_client
    sb = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

    for r in records:
        row = {
            'slug':            r['slug'],
            'tags':            r['tags'],
            'title_en':        r['title_en'],
            'title_it':        r['title_it'],
            'rule_en':         r['rule_en'].strip(),
            'rule_it':         r['rule_it'].strip(),
            'example_basic':   r.get('example_basic'),
            'example_complex': r.get('example_complex'),
            'vocabulary':      r.get('vocabulary', []),
            'story_it':        r.get('story_it', '').strip(),
            'display_order':   r.get('display_order', 0),
        }
        result = sb.table('grammar_explanations').upsert(row, on_conflict='slug').execute()
        if hasattr(result, 'error') and result.error:
            print(f"  ERROR {r['slug']}: {result.error}")
        else:
            print(f"  OK  {r['slug']}")

    print("\nImport complete.")

if __name__ == '__main__':
    main()
