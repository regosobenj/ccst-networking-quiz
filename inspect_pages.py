import json
import pymupdf

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

# Inspect all 99 pages
for i, page in enumerate(doc):
    page_num = i + 1
    text = page.get_text().strip()
    first_line = text.split("\n")[0] if text else "EMPTY"
    img_list = page.get_images()
    print(f"P{page_num:02d} (imgs:{len(img_list)}): {first_line[:60]}")
