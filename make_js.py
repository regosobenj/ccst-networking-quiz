import json

data = json.load(open("dataset_final.json", encoding="utf-8"))
js_content = f"window.CCST_QUESTIONS = {json.dumps(data, indent=2, ensure_ascii=False)};"

with open("questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated questions.js with {len(data)} questions.")
