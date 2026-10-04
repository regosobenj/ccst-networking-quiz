import json
import pymupdf
import re

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

# Detect highlights across all pages
for p in range(len(doc)):
    page = doc[p]
    p_num = p + 1
    text_page = page.get_textpage()
    drawings = page.get_drawings()
    yellow_boxes = []
    for d in drawings:
        fill = d.get("fill")
        rect = d.get("rect")
        # Check if color is yellowish: typically fill is (1, 1, 0) or close to yellow (r>0.8, g>0.8, b<0.6)
        if fill and len(fill) == 3:
            r, g, b = fill
            if r > 0.8 and g > 0.7 and b < 0.6:
                yellow_boxes.append(rect)
    
    found_text = []
    for box in yellow_boxes:
        txt = page.get_textbox(box).strip().replace("\n", " ")
        if txt:
            found_text.append(txt)
            
    if found_text:
        print(f"P{p_num}: Highlighted -> {found_text}")
    elif p_num not in [1, 2, 3, 4, 40, 41, 53, 54, 65, 66, 69, 70, 99]:
        print(f"P{p_num}: [NO YELLOW HIGHLIGHT DETECTED]")
