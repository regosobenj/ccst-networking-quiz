import pymupdf

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

non_q = [1, 2, 3, 4, 40, 41, 53, 54, 65, 66, 69, 70, 99]

for i in non_q:
    page = doc[i - 1]
    text = page.get_text().strip().replace("\n", " ")
    print(f"Page {i}: {text[:100]}")
