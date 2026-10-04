# 🌐 CCST Networking Exam Practice Hub

An interactive, password-protected web-based reviewer for the **Cisco Certified Support Technician (CCST) Networking** certification exam.

## Features

- **86 practice questions** across all 5 CCST domains
- Multiple question types: Multiple choice, Matching/Drag-drop, True/False, Command input
- **Diagram & topology zoom** for visual questions
- **Study Mode** (instant feedback) and **Exam Mode** (no spoilers)
- Progress tracking with localStorage persistence
- Question bookmarking and filtering
- Dark/Light theme toggle
- 🔒 Password-protected access

## How to Deploy on GitHub Pages

1. Create a new GitHub repository
2. Push these files to the `main` branch:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repository
4. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`
5. Click **Save** — your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Changing the Password

The default access code is `ccst2026`.

To change it:
1. Open browser DevTools Console (F12 → Console)
2. Run this (replace `YOUR_NEW_PASSWORD`):
   ```js
   crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_NEW_PASSWORD'))
     .then(h => console.log(Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2,'0')).join('')))
   ```
3. Copy the output hash
4. Open `app.js` and replace the value of `PASS_HASH` on line 10

## Project Structure

```
├── index.html       # Main HTML page
├── style.css        # All styles (dark/light themes, login, quiz UI)
├── app.js           # Quiz engine + auth logic
├── questions.js     # All 86 questions data
└── images/          # Slide diagrams & topology images
```

## Domains Covered

| Domain | Questions |
|--------|-----------|
| 1.0 Standard Concepts | 35 |
| 2.0 Security | 11 |
| 3.0 Endpoints & Media Types | 10 |
| 4.0 Infrastructure | 2 |
| 5.0 Diagnosing Problems | 28 |
