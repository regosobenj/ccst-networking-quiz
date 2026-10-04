import pymupdf
import json

doc = pymupdf.open(r"C:\Users\regos\Downloads\CCST-Networking-Reviewer_Corrected.pdf")

non_question_pages = [1, 2, 3, 4, 40, 41, 53, 54, 65, 66, 69, 70, 99]

questions = []
q_counter = 1

# Category tracking
current_category = "General"

for page_idx in range(len(doc)):
    page_num = page_idx + 1
    page = doc[page_idx]
    text = page.get_text().strip()
    
    if page_num in [3, 4]:
        current_category = "Standard Concepts"
    elif page_num in [40, 41]:
        current_category = "Security"
    elif page_num in [53, 54]:
        current_category = "Endpoints & Media Types"
    elif page_num in [65, 66]:
        current_category = "Infrastructure"
    elif page_num in [69, 70]:
        current_category = "Diagnosing Problems"
        
    if page_num in non_question_pages:
        continue
        
    # Check if page has images
    has_image = len(page.get_images()) > 0
    # Also some pages might have graphics like diagrams (e.g. page 60 has drawing or vector)
    
    questions.append({
        "q_id": q_counter,
        "page_num": page_num,
        "category": current_category,
        "has_embedded_image": has_image,
        "raw_text": text
    })
    q_counter += 1

print(f"Total question slides identified: {len(questions)}")
with open("raw_questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)
