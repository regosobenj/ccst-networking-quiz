import json
import pymupdf
import re
import os

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

non_question_pages = {1, 2, 3, 4, 40, 41, 53, 54, 65, 66, 69, 70, 99}

# Visual question slides (where the slide figure/diagram/CLI output is essential)
visual_pages = {59, 60, 67, 71, 74, 78, 79, 80, 83, 84, 85, 86, 87, 88, 90, 94}

# Categories
def get_category(p):
    if p < 40:
        return "Standard Concepts"
    elif p < 53:
        return "Security"
    elif p < 65:
        return "Endpoints & Media Types"
    elif p < 69:
        return "Infrastructure"
    else:
        return "Diagnosing Problems"

# Detect highlights
highlight_map = {}
for p in range(len(doc)):
    p_num = p + 1
    if p_num in non_question_pages:
        continue
    page = doc[p]
    drawings = page.get_drawings()
    yellow_boxes = []
    for d in drawings:
        fill = d.get("fill")
        rect = d.get("rect")
        if fill and len(fill) == 3:
            r, g, b = fill
            if r > 0.8 and g > 0.7 and b < 0.6:
                yellow_boxes.append(rect)
    found_text = []
    for box in yellow_boxes:
        txt = page.get_textbox(box).strip().replace("\n", " ")
        if txt:
            found_text.append(txt)
    highlight_map[p_num] = found_text

questions = []
q_counter = 1

for p_num in range(1, 100):
    if p_num in non_question_pages:
        continue
    
    page = doc[p_num - 1]
    raw_text = page.get_text()
    category = get_category(p_num)
    has_img = p_num in visual_pages
    img_src = f"images/page_{p_num}.png" if has_img else None
    
    q_data = {
        "id": q_counter,
        "page": p_num,
        "category": category,
        "image": img_src,
        "raw_text": raw_text.strip(),
        "highlights": highlight_map.get(p_num, [])
    }
    questions.append(q_data)
    q_counter += 1

with open("dataset_preliminary.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Exported {len(questions)} preliminary questions.")
