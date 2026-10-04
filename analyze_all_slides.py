import pymupdf
import json

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

non_question_pages = {1, 2, 3, 4, 40, 41, 53, 54, 65, 66, 69, 70, 99}

for i in range(len(doc)):
    p_num = i + 1
    if p_num in non_question_pages:
        continue
    text = doc[i].get_text()
    lines = [line.strip() for line in text.split("\n") if line.strip()]
    header = lines[0] if lines else "EMPTY"
    print(f"Slide {p_num:02d}: lines={len(lines)} | {header[:70]}")
