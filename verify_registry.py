import json

questions = json.load(open("dataset_final.json", encoding="utf-8"))

for q in questions:
    p = q["page"]
    q_type = q["type"]
    if q_type == "multiple_choice":
        c_lets = q.get("correct_letters", [])
        if not c_lets:
            print(f"Warning: Page {p} has no correct letters!")
        print(f"P{p:02d} [MC{' Multi' if q.get('is_multiple_response') else ''}]: Ans={','.join(c_lets)} | {q['question'][:50]}...")
    elif q_type == "matching":
        print(f"P{p:02d} [MATCHING ({len(q['pairs'])} pairs)]: {q['question'][:50]}...")
    elif q_type == "true_false_group":
        print(f"P{p:02d} [TF GROUP ({len(q['items'])} items)]: {q['question'][:50]}...")
    elif q_type == "text_input":
        print(f"P{p:02d} [TEXT INPUT]: Ans={q.get('accepted_answers')} | {q['question'][:50]}...")
    elif q_type == "interactive_config":
        print(f"P{p:02d} [INTERACTIVE CONFIG]: {q['question'][:50]}...")
