import json

questions = json.load(open("dataset_final.json", encoding="utf-8"))

for q in questions:
    p = q["page"]
    if p == 87:
        q["options"] = [
            "A. The two interfaces can communicate over Layer 2.",
            "B. The two interfaces are administratively shut down.",
            "C. The two interfaces have default IP address assigned."
        ]
        q["correct_letters"] = ["A"]
        q["correct_answers"] = ["A. The two interfaces can communicate over Layer 2."]
    elif p == 94:
        q["options"] = [
            "A. show cdp neighbors",
            "B. show ip interface brief",
            "C. show mac-address-table",
            "D. show running-config"
        ]
        q["correct_letters"] = ["A"]
        q["correct_answers"] = ["A. show cdp neighbors"]

with open("dataset_final.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print("Updated P87 and P94 successfully.")
