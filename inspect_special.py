import pymupdf

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

pages_to_check = [17, 18, 19, 20, 22, 23, 24, 44, 48, 49, 50, 51, 60, 67, 71, 74, 78, 79, 80, 83, 84, 85, 86, 87, 88, 89, 90, 91, 94]

for p in pages_to_check:
    print(f"=== PAGE {p} ===")
    print(doc[p-1].get_text().strip())
    print()
