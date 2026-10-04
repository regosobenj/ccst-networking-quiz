import json

questions = json.load(open("dataset_final.json", encoding="utf-8"))

for q in questions:
    if q["page"] == 5:
        q["correct_letters"] = ["A"]
        q["correct_answers"] = ["A. 172.16.100.25/22"]
        q["explanation"] = "Subnet mask 255.255.252.0 has 22 bits (8 + 8 + 6 = 22 bits), represented as CIDR prefix /22."
        print(f"Fixed Q{q['id']} (Page 5): correct answer -> A. /22")
        break

with open("dataset_final.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

# Regenerate questions.js
js_content = f"window.CCST_QUESTIONS = {json.dumps(questions, indent=2, ensure_ascii=False)};"
with open("questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Fixed and regenerated questions.js")
