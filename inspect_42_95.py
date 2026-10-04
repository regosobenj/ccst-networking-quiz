import pymupdf

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

for p in [42, 95]:
    print(f"=== PAGE {p} ===")
    print(doc[p-1].get_text())
