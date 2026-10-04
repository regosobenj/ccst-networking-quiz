import json

slides = json.load(open("all_raw_slides.json", encoding="utf-8"))

for s in slides:
    text = s['text']
    # Check if page has answers or questions
    print(f"=== PAGE {s['page']} ===")
    print(text.strip())
    print("\n" + "="*40 + "\n")
