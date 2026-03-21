#!/usr/bin/env python3
"""
Merge diagnostic_tests.yaml + diagnostic_texts.yaml → js/tests-data.js
"""
import yaml, json, re, sys
from pathlib import Path

ROOT = Path(__file__).parent.parent / "tramitenglish"
DB   = ROOT / "database"

def load(name):
    with open(DB / name, encoding="utf-8") as f:
        return yaml.safe_load(f)

def build_texts_index(texts_data):
    """Index texts by (test_id, part_num)"""
    idx = {}
    for test in texts_data["tests"]:
        tid = test["test_id"]
        for part in test["parts"]:
            idx[(tid, part["part_num"])] = part
    return idx

def clean(s):
    """Strip leading whitespace / newlines from literal block scalars."""
    if s is None:
        return None
    return s.strip()

def merge_part(qpart, tpart):
    """Merge a questions-part dict with a texts-part dict."""
    p = {
        "num":   qpart["part_num"],
        "type":  qpart.get("type", ""),
        "title": qpart.get("passage_title") or tpart.get("passage_title", ""),
    }

    # Passage text (always from texts file)
    p["text"] = clean(tpart.get("passage_text")) if tpart else None

    pn = qpart["part_num"]

    if pn in (1, 2, 3, 5):
        qs = []
        for q in qpart.get("questions", []):
            qd = {"qnum": q["qnum"], "answer": q.get("answer")}
            if "options" in q:
                opts = q["options"]
                # normalise: could be dict {A:..} or list
                if isinstance(opts, dict):
                    qd["options"] = opts
                else:
                    qd["options"] = {chr(65+i): v for i,v in enumerate(opts)}
            if "stem" in q:
                qd["stem"] = q["stem"]
            if "question" in q:
                qd["question"] = q["question"]
            qs.append(qd)
        p["questions"] = qs

    elif pn == 4:
        qs = []
        for q in qpart.get("questions", []):
            qs.append({
                "qnum":    q["qnum"],
                "s1":      q.get("s1") or q.get("sentence", ""),
                "keyword": q.get("keyword"),
                "s2":      q.get("s2", ""),
                "answer":  q.get("answer", ""),
            })
        p["questions"] = qs

    elif pn == 6:
        # sentences: from texts file (full text); answers from questions file
        sents_t = tpart.get("sentences", {}) if tpart else {}
        sents_q = qpart.get("sentences", {})
        # prefer texts file sentences (they have the actual text)
        sents = {}
        for letter in "ABCDEFG":
            v = sents_t.get(letter) or sents_q.get(letter)
            sents[letter] = clean(v) if isinstance(v, str) else v
        p["sentences"] = sents

        # answers
        answers = {}
        # could be in "questions" list or "answers" dict
        if "answers" in tpart:
            for gnum, letter in tpart["answers"].items():
                answers[str(gnum)] = str(letter)
        for q in qpart.get("questions", []):
            answers[str(q["qnum"])] = str(q["answer"])
        p["answers"] = answers

    elif pn == 7:
        # sections from texts, questions from questions file
        sects_t = tpart.get("sections", {}) if tpart else {}
        sects_q = qpart.get("sections", {})

        sections = {}
        for letter, val in sects_t.items():
            if isinstance(val, str):
                sections[letter] = {"name": letter, "text": clean(val)}
            elif isinstance(val, dict):
                sections[letter] = {"name": val.get("name", letter), "text": clean(val.get("text"))}

        # fallback: if texts has no sections, try questions file
        if not sections:
            for letter, val in sects_q.items():
                if isinstance(val, dict):
                    sections[letter] = {"name": val.get("name", letter), "text": clean(val.get("text"))}

        p["sections"] = sections

        # question descriptions + answers
        qs = []
        qdesc_t = tpart.get("question_descriptions", {}) if tpart else {}
        qans_t  = tpart.get("answers", {}) if tpart else {}

        for q in qpart.get("questions", []):
            qn = q["qnum"]
            key = f"Q{qn}"
            desc = qdesc_t.get(key) or q.get("question", "")
            ans  = qans_t.get(key)  or q.get("answer", "")
            qs.append({"qnum": qn, "question": desc, "answer": str(ans)})
        p["questions"] = qs

    return p

def merge_part_from_texts(tpart):
    """Build a part dict from diagnostic_texts.yaml alone (for tests 9-10)."""
    pn = tpart["part_num"]
    p = {
        "num":   pn,
        "type":  {1:"multiple_choice_cloze",2:"open_cloze",3:"word_formation",
                  4:"key_word_transformation",5:"reading_multiple_choice",
                  6:"gapped_text",7:"multiple_matching"}.get(pn,""),
        "title": tpart.get("passage_title",""),
        "text":  clean(tpart.get("passage_text")),
    }
    if pn in (1, 2, 3, 5):
        qs = []
        for q in tpart.get("questions", []):
            qd = {"qnum": q["qnum"], "answer": q.get("answer")}
            if "options" in q:
                opts = q["options"]
                if isinstance(opts, list):
                    qd["options"] = {chr(65+i): v for i,v in enumerate(opts)}
                else:
                    qd["options"] = opts
            if "stem" in q:
                qd["stem"] = q["stem"]
            if "question" in q:
                qd["question"] = q["question"]
            qs.append(qd)
        p["questions"] = qs
    elif pn == 4:
        qs = []
        for q in tpart.get("questions", []):
            qs.append({
                "qnum":    q["qnum"],
                "s1":      q.get("sentence", ""),
                "keyword": q.get("keyword",""),
                "s2":      "",
                "answer":  q.get("answer",""),
            })
        p["questions"] = qs
    elif pn == 6:
        sents = {l: clean(v) for l, v in tpart.get("sentences", {}).items()}
        p["sentences"] = sents
        answers = {str(k): str(v) for k,v in tpart.get("answers", {}).items()}
        p["answers"] = answers
    elif pn == 7:
        sects = {}
        for letter, val in tpart.get("sections", {}).items():
            if isinstance(val, str):
                sects[letter] = {"name": letter, "text": clean(val)}
            elif isinstance(val, dict):
                sects[letter] = {"name": val.get("name", letter), "text": clean(val.get("text"))}
        p["sections"] = sects
        qs = []
        qdesc = tpart.get("question_descriptions", {})
        qans  = tpart.get("answers", {})
        for key, desc in qdesc.items():
            qn = int(key[1:])
            qs.append({"qnum": qn, "question": desc, "answer": str(qans.get(key,""))})
        p["questions"] = qs
    return p

def build():
    print("Loading YAMLs...", file=sys.stderr)
    tests_data = load("diagnostic_tests.yaml")
    texts_data  = load("diagnostic_texts.yaml")
    tidx = build_texts_index(texts_data)

    # Which test_ids are in diagnostic_tests.yaml
    q_ids = {t["test_id"] for t in tests_data["tests"]}

    out = []
    for test in tests_data["tests"]:
        tid = test["test_id"]
        merged_parts = []
        for qpart in test["parts"]:
            pn = qpart["part_num"]
            tpart = tidx.get((tid, pn), {})
            merged_parts.append(merge_part(qpart, tpart))
        out.append({
            "id":    tid,
            "title": test.get("title", f"Practice Test {tid}"),
            "parts": merged_parts,
        })
        print(f"  Test {tid} done ({len(merged_parts)} parts)", file=sys.stderr)

    # Tests only in texts (e.g. 9, 10)
    for test in texts_data["tests"]:
        tid = test["test_id"]
        if tid in q_ids:
            continue
        parts = [merge_part_from_texts(tp) for tp in test["parts"]]
        out.append({"id": tid, "title": f"Practice Test {tid}", "parts": parts})
        print(f"  Test {tid} (texts-only) done ({len(parts)} parts)", file=sys.stderr)

    out.sort(key=lambda t: t["id"])
    return out

def main():
    data = build()
    js_path = ROOT / "js" / "tests-data.js"
    json_str = json.dumps(data, ensure_ascii=False, indent=2)
    js = f"// AUTO-GENERATED by scripts/generate_test_data.py — do not edit manually\nconst DIAGNOSTIC_TESTS = {json_str};\n"
    js_path.write_text(js, encoding="utf-8")
    print(f"Written {js_path} ({js_path.stat().st_size // 1024} KB)", file=sys.stderr)

if __name__ == "__main__":
    main()
