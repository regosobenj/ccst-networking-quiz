import json
import re

slides = json.load(open("all_raw_slides.json", encoding="utf-8"))

for s in slides:
    text = s['text'].strip()
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    has_opts = any(re.match(r'^[A-E]\.', l) for l in lines)
    is_matching = "move" in text.lower() or "match" in text.lower()
    is_tf = "true or false" in text.lower()
    
    # print summary of those that don't match standard patterns
    if not has_opts and not is_matching and not is_tf:
        print(f"Page {s['page']} Non-standard:")
        print(text)
        print("-" * 50)
