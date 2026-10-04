import pymupdf
import json
import re

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

non_question_pages = {1, 2, 3, 4, 40, 41, 53, 54, 65, 66, 69, 70, 99}

slides_info = []

for page_idx in range(len(doc)):
    page_num = page_idx + 1
    if page_num in non_question_pages:
        continue
    page = doc[page_idx]
    text = page.get_text()
    slides_info.append({
        "page_num": page_num,
        "text": text
    })

with open("slides_text.json", "w", encoding="utf-8") as f:
    json.dump(slides_info, f, indent=2, ensure_ascii=False)

print(f"Dumped {len(slides_info)} question slides.")
