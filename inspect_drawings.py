import pymupdf
import json

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

# Let's inspect drawing/rect elements or highlights in each page
for page_idx in range(len(doc)):
    page_num = page_idx + 1
    page = doc[page_idx]
    drawings = page.get_drawings()
    # Check drawings with yellow or green fill or stroke
    colored_drawings = []
    for d in drawings:
        fill = d.get("fill")
        color = d.get("color")
        rect = d.get("rect")
        # yellow highlight in RGB often around (1, 1, 0) or yellowish
        if fill or color:
            colored_drawings.append({"fill": fill, "color": color, "rect": list(rect) if rect else None})
    if colored_drawings:
        print(f"Page {page_num}: {len(colored_drawings)} colored drawings")
