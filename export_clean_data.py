import pymupdf
import json
import re

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

non_question_pages = {1, 2, 3, 4, 40, 41, 53, 54, 65, 66, 69, 70, 99}

slides = []

for i in range(len(doc)):
    p = i + 1
    if p in non_question_pages:
        continue
    page = doc[i]
    text = page.get_text()
    slides.append({
        "page": p,
        "text": text
    })

with open("all_raw_slides.json", "w", encoding="utf-8") as f:
    json.dump(slides, f, indent=2, ensure_ascii=False)

print(f"Saved {len(slides)} raw slides.")
