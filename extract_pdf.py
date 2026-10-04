import pymupdf
import json
import os
import re

pdf_path = r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf"
doc = pymupdf.open(pdf_path)

output_img_dir = os.path.join(os.path.dirname(__file__), "images")
os.makedirs(output_img_dir, exist_ok=True)

pages_data = []

for i, page in enumerate(doc):
    page_num = i + 1
    text = page.get_text()
    
    # Save slide image if it contains an image or as slide preview
    # Check if page has embedded images or drawings
    image_list = page.get_images(full=True)
    has_image = len(image_list) > 0
    
    # Render page to image if it might be needed
    # We will render page image for visual questions
    pix = page.get_pixmap(dpi=150)
    img_filename = f"page_{page_num}.png"
    img_path = os.path.join(output_img_dir, img_filename)
    pix.save(img_path)
    
    pages_data.append({
        "page_num": page_num,
        "text": text,
        "image_file": f"images/{img_filename}",
        "raw_image_count": len(image_list)
    })

with open("pages_extracted.json", "w", encoding="utf-8") as f:
    json.dump(pages_data, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(pages_data)} pages.")
