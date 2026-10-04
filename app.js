// ============================================
// AUTH GATE — Change YOUR_PASSWORD_HERE below
// ============================================
// To set your own password:
//   1. Open browser console (F12 → Console)
//   2. Run: crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_PASSWORD')).then(h => console.log(Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2,'0')).join('')))
//   3. Copy the hash and replace PASS_HASH below
//
// Default password: ccst2026
const PASS_HASH = '9aeb1e0f2f78a09dbfd909fdf2cd1b16e0122c0253f3abac0b1d9183c32bb931';

async function sha256(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

(function setupAuth() {
  // Check if already authenticated this session
  if (sessionStorage.getItem('ccst_authenticated') === 'true') {
    document.body.classList.add('authenticated');
  }

  const loginBtn = document.getElementById('loginBtn');
  const loginInput = document.getElementById('loginPassword');
  const loginError = document.getElementById('loginError');
  const logoutBtn = document.getElementById('btnLogout');

  async function attemptLogin() {
    const password = loginInput.value.trim();
    if (!password) return;
    const hash = await sha256(password);
    if (hash === PASS_HASH) {
      sessionStorage.setItem('ccst_authenticated', 'true');
      document.body.classList.add('authenticated');
      loginError.classList.add('hidden');
    } else {
      loginError.classList.remove('hidden');
      loginInput.value = '';
      loginInput.focus();
    }
  }

  loginBtn.addEventListener('click', attemptLogin);
  loginInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') attemptLogin();
  });

  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('ccst_authenticated');
    document.body.classList.remove('authenticated');
    loginInput.value = '';
    loginError.classList.add('hidden');
  });
})();

// Cisco CCST Networking Review Certification Application Logic
(function() {
  const questions = window.CCST_QUESTIONS || [];
  let currentIndex = 0;
  let studyMode = true; // true = Study Mode (immediate feedback), false = Exam Mode
  let userResponses = {}; // { qId: { answers: [], isCorrect: bool, submitted: bool } }
  let flaggedQuestions = new Set();
  let currentFilter = 'all';
  let categoryFilter = 'ALL';
  let searchQuery = '';

  // DOM Elements
  const cardContainer = document.getElementById('cardContainer');
  const questionGrid = document.getElementById('questionGrid');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const qIndexText = document.getElementById('qIndexText');
  const pdfRefBadge = document.getElementById('pdfRefBadge');
  const progressVal = document.getElementById('progressVal');
  const accuracyVal = document.getElementById('accuracyVal');
  const bookmarksVal = document.getElementById('bookmarksVal');
  const progressBarFill = document.getElementById('progressBarFill');
  const btnStudyMode = document.getElementById('btnStudyMode');
  const btnExamMode = document.getElementById('btnExamMode');
  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const searchInput = document.getElementById('searchInput');
  const categoryFilterSelect = document.getElementById('categoryFilter');
  const filterChips = document.querySelectorAll('.chip');
  const btnResetQuiz = document.getElementById('btnResetQuiz');
  const btnRevealAll = document.getElementById('btnRevealAll');

  // Modal Elements
  const imageModal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const closeModal = document.getElementById('closeModal');

  // Initialize
  function init() {
    loadSavedState();
    setupEventListeners();
    renderGrid();
    renderQuestion(currentIndex);
    updateStats();
  }

  function setupEventListeners() {
    btnPrev.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderQuestion(currentIndex);
      }
    });

    btnNext.addEventListener('click', () => {
      if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion(currentIndex);
      }
    });

    btnStudyMode.addEventListener('click', () => {
      studyMode = true;
      btnStudyMode.classList.add('active');
      btnExamMode.classList.remove('active');
      renderQuestion(currentIndex);
    });

    btnExamMode.addEventListener('click', () => {
      studyMode = false;
      btnExamMode.classList.add('active');
      btnStudyMode.classList.remove('active');
      renderQuestion(currentIndex);
    });

    btnThemeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      saveState();
    });

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderGrid();
    });

    categoryFilterSelect.addEventListener('change', (e) => {
      categoryFilter = e.target.value;
      renderGrid();
    });

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.getAttribute('data-filter');
        renderGrid();
      });
    });

    btnResetQuiz.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all answers and progress?')) {
        userResponses = {};
        flaggedQuestions.clear();
        saveState();
        renderGrid();
        renderQuestion(currentIndex);
        updateStats();
      }
    });

    btnRevealAll.addEventListener('click', () => {
      if (confirm('Reveal correct answers for all questions in study mode?')) {
        questions.forEach(q => {
          if (!userResponses[q.id]) {
            userResponses[q.id] = { answers: [], isCorrect: true, submitted: true };
          } else {
            userResponses[q.id].submitted = true;
          }
        });
        saveState();
        renderGrid();
        renderQuestion(currentIndex);
        updateStats();
      }
    });

    // Modal Events
    closeModal.addEventListener('click', () => {
      imageModal.classList.add('hidden');
    });

    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        imageModal.classList.add('hidden');
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.key === 'ArrowRight' || e.key === 'n') {
        if (currentIndex < questions.length - 1) {
          currentIndex++;
          renderQuestion(currentIndex);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'p') {
        if (currentIndex > 0) {
          currentIndex--;
          renderQuestion(currentIndex);
        }
      }
    });
  }

  function renderGrid() {
    questionGrid.innerHTML = '';
    questions.forEach((q, idx) => {
      // Filtering check
      let matches = true;

      if (categoryFilter !== 'ALL' && q.category !== categoryFilter) {
        matches = false;
      }

      if (searchQuery) {
        const textToSearch = (q.question + ' ' + (q.explanation || '')).toLowerCase();
        if (!textToSearch.includes(searchQuery)) matches = false;
      }

      const res = userResponses[q.id];
      if (currentFilter === 'unanswered' && res && res.submitted) matches = false;
      if (currentFilter === 'incorrect' && (!res || !res.submitted || res.isCorrect)) matches = false;
      if (currentFilter === 'flagged' && !flaggedQuestions.has(q.id)) matches = false;
      if (currentFilter === 'diagrams' && !q.image) matches = false;

      if (!matches) return;

      const item = document.createElement('div');
      item.className = 'grid-item';
      item.textContent = idx + 1;
      item.title = `Question ${idx + 1} (Slide ${q.page}) - ${q.category}`;

      if (idx === currentIndex) item.classList.add('current');
      if (q.image) item.classList.add('has-img');
      if (flaggedQuestions.has(q.id)) item.classList.add('flagged');

      if (res && res.submitted) {
        if (res.isCorrect) item.classList.add('correct');
        else item.classList.add('incorrect');
      }

      item.addEventListener('click', () => {
        currentIndex = idx;
        renderQuestion(currentIndex);
      });

      questionGrid.appendChild(item);
    });
  }

  function renderQuestion(idx) {
    const q = questions[idx];
    if (!q) return;

    // Update bottom nav state
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === questions.length - 1;
    qIndexText.textContent = `Question ${idx + 1} of ${questions.length}`;
    pdfRefBadge.textContent = `Reviewer Slide #${q.page}`;

    // Update grid active state
    document.querySelectorAll('.grid-item').forEach(el => el.classList.remove('current'));
    const currentGridEl = Array.from(questionGrid.children).find(el => el.textContent == idx + 1);
    if (currentGridEl) currentGridEl.classList.add('current');

    const res = userResponses[q.id] || { answers: [], isCorrect: false, submitted: false };
    const isSubmitted = res.submitted;
    const isFlagged = flaggedQuestions.has(q.id);

    // Build Question HTML
    let html = `
      <div class="question-card">
        <div class="card-top">
          <span class="category-tag">${escapeHtml(q.category)}</span>
          <div class="card-actions">
            <button class="btn-flag ${isFlagged ? 'active' : ''}" id="flagBtn">
              ${isFlagged ? '★ Flagged' : '☆ Bookmark'}
            </button>
          </div>
        </div>

        <h2 class="question-text">${escapeHtml(q.question)}</h2>
    `;

    // Diagram / Image
    if (q.image) {
      html += `
        <div class="diagram-wrapper" id="diagramWrapper">
          <img src="${q.image}" alt="Topology / Diagram" />
          <span class="zoom-hint">🔍 Click to zoom full-size</span>
        </div>
      `;
    }

    // Question Body based on type
    if (q.type === 'multiple_choice') {
      html += renderMultipleChoice(q, res, isSubmitted);
    } else if (q.type === 'matching') {
      html += renderMatching(q, res, isSubmitted);
    } else if (q.type === 'true_false_group') {
      html += renderTrueFalseGroup(q, res, isSubmitted);
    } else if (q.type === 'text_input') {
      html += renderTextInput(q, res, isSubmitted);
    } else if (q.type === 'interactive_config') {
      html += renderInteractiveConfig(q, res, isSubmitted);
    }

    // Explanation Box (shown if submitted or study mode reveal)
    if (isSubmitted || (studyMode && res.submitted)) {
      html += `
        <div class="explanation-box">
          <div class="explanation-header">
            <span>💡 CCST Concept & Answer Explanation</span>
          </div>
          <div class="explanation-body">
            <p>${escapeHtml(q.explanation || 'Reviewed from Cisco Certified Support Technician Networking syllabus.')}</p>
          </div>
        </div>
      `;
    }

    // Card Footer Actions
    html += `
      <div class="card-bottom-actions">
        <div>
          ${q.is_multiple_response ? '<small style="color:var(--accent-cyan); font-weight:600;">(Select all correct options)</small>' : ''}
        </div>
        <div>
          ${!isSubmitted ? `<button id="btnSubmitAnswer" class="btn-primary">Check Answer</button>` : `<button id="btnTryAgain" class="btn-secondary">↺ Try Again</button>`}
        </div>
      </div>
    </div>`;

    cardContainer.innerHTML = html;

    // Attach Interactive Handlers for the Question Card
    bindCardEvents(q, res);
  }

  function renderMultipleChoice(q, res, isSubmitted) {
    let out = '<div class="options-list">';
    q.options.forEach(opt => {
      const isSelected = res.answers.includes(opt);
      const isCorrectOption = q.correct_answers.includes(opt) || (q.correct_letters && q.correct_letters.some(l => opt.startsWith(l + '.')));
      
      let extraClass = '';
      if (isSelected) extraClass += ' selected';
      if (isSubmitted) {
        if (isCorrectOption) extraClass += ' correct-revealed';
        else if (isSelected && !isCorrectOption) extraClass += ' incorrect-revealed';
      }

      out += `
        <div class="option-item ${extraClass}" data-option="${escapeHtml(opt)}">
          <span class="option-letter">${escapeHtml(opt.slice(0, 2))}</span>
          <span class="option-label">${escapeHtml(opt.slice(3) || opt)}</span>
        </div>
      `;
    });
    out += '</div>';
    return out;
  }

  function renderMatching(q, res, isSubmitted) {
    let out = '<div class="matching-container">';
    q.pairs.forEach((pair, pIdx) => {
      const selectedVal = (res.answers && res.answers[pIdx]) ? res.answers[pIdx] : '';
      const isPairCorrect = isSubmitted && selectedVal === pair.answer;
      const isPairWrong = isSubmitted && selectedVal && selectedVal !== pair.answer;

      out += `
        <div class="matching-row ${isPairCorrect ? 'is-correct' : ''} ${isPairWrong ? 'is-wrong' : ''}">
          <div class="matching-prompt">
            ${escapeHtml(pair.prompt)}
            ${isSubmitted ? `<div style="font-size:0.8rem; color:${isPairCorrect ? 'var(--accent-green)' : 'var(--accent-amber)'}; font-weight:700; margin-top:4px;">Target: ${escapeHtml(pair.answer)}</div>` : ''}
          </div>
          <select class="matching-select" data-pair-idx="${pIdx}" ${isSubmitted ? 'disabled' : ''}>
            <option value="">-- Choose Option --</option>
            ${q.options.map(opt => `<option value="${escapeHtml(opt)}" ${selectedVal === opt ? 'selected' : ''}>${escapeHtml(opt)}</option>`).join('')}
          </select>
        </div>
      `;
    });
    out += '</div>';
    return out;
  }

  function renderTrueFalseGroup(q, res, isSubmitted) {
    let out = '<div class="tf-group">';
    q.items.forEach((item, itIdx) => {
      const userChoice = (res.answers && res.answers[itIdx]) ? res.answers[itIdx] : '';
      const isTrueSelected = userChoice === 'True';
      const isFalseSelected = userChoice === 'False';

      let trueBtnClass = isTrueSelected ? 'selected' : '';
      let falseBtnClass = isFalseSelected ? 'selected' : '';

      if (isSubmitted) {
        if (item.answer === 'True') trueBtnClass += ' correct-choice';
        else if (isTrueSelected && item.answer !== 'True') trueBtnClass += ' wrong-choice';

        if (item.answer === 'False') falseBtnClass += ' correct-choice';
        else if (isFalseSelected && item.answer !== 'False') falseBtnClass += ' wrong-choice';
      }

      out += `
        <div class="tf-row">
          <div class="tf-statement">${escapeHtml(item.statement)}</div>
          <div class="tf-btns">
            <button class="tf-btn ${trueBtnClass}" data-tf-idx="${itIdx}" data-val="True" ${isSubmitted ? 'disabled' : ''}>True</button>
            <button class="tf-btn ${falseBtnClass}" data-tf-idx="${itIdx}" data-val="False" ${isSubmitted ? 'disabled' : ''}>False</button>
          </div>
        </div>
      `;
    });
    out += '</div>';
    return out;
  }

  function renderTextInput(q, res, isSubmitted) {
    const val = (res.answers && res.answers[0]) ? res.answers[0] : '';
    let out = `
      <div class="input-answer-container">
        <label style="font-size:0.85rem; color:var(--text-secondary); font-weight:600;">Type the exact command or syntax:</label>
        <input type="text" class="input-box" id="textAnswerInput" value="${escapeHtml(val)}" placeholder="e.g., ping 192.168.0.1" ${isSubmitted ? 'disabled' : ''} />
    `;
    if (isSubmitted) {
      out += `
        <div style="font-size:0.9rem; margin-top:0.5rem; padding:0.75rem; border-radius:6px; background:${res.isCorrect ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}; color:${res.isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}">
          ${res.isCorrect ? '✓ Correct command entered!' : `✗ Expected command: <strong>${escapeHtml(q.accepted_answers[0])}</strong>`}
        </div>
      `;
    }
    out += '</div>';
    return out;
  }

  function renderInteractiveConfig(q, res, isSubmitted) {
    let out = '<div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">';
    q.fields.forEach((fld, fIdx) => {
      const val = (res.answers && res.answers[fIdx]) ? res.answers[fIdx] : '';
      out += `
        <div style="background:var(--bg-primary); padding:0.75rem; border-radius:8px; border:1px solid var(--border-color);">
          <label style="font-size:0.8rem; font-weight:700; color:var(--accent-cyan); display:block; margin-bottom:4px;">${escapeHtml(fld.label)}</label>
          <input type="text" class="input-box config-input" data-cfg-idx="${fIdx}" value="${escapeHtml(val)}" placeholder="${escapeHtml(fld.example || fld.expected || '')}" ${isSubmitted ? 'disabled' : ''} style="font-size:0.9rem; padding:0.5rem;" />
          ${isSubmitted ? `<small style="display:block; margin-top:4px; color:var(--accent-green); font-weight:600;">Standard: ${escapeHtml(fld.description)}</small>` : ''}
        </div>
      `;
    });
    out += '</div>';
    return out;
  }

  function bindCardEvents(q, res) {
    // Flag Button
    const flagBtn = document.getElementById('flagBtn');
    if (flagBtn) {
      flagBtn.addEventListener('click', () => {
        if (flaggedQuestions.has(q.id)) flaggedQuestions.delete(q.id);
        else flaggedQuestions.add(q.id);
        saveState();
        renderQuestion(currentIndex);
        renderGrid();
        updateStats();
      });
    }

    // Diagram Zoom
    const diagramWrapper = document.getElementById('diagramWrapper');
    if (diagramWrapper) {
      diagramWrapper.addEventListener('click', () => {
        modalImage.src = q.image;
        modalTitle.textContent = `Reviewer Slide #${q.page} - Detailed Exhibit`;
        imageModal.classList.remove('hidden');
      });
    }

    // Submit Answer Button
    const btnSubmit = document.getElementById('btnSubmitAnswer');
    if (btnSubmit) {
      btnSubmit.addEventListener('click', () => {
        evaluateAnswer(q);
      });
    }

    // Try Again Button
    const btnTryAgain = document.getElementById('btnTryAgain');
    if (btnTryAgain) {
      btnTryAgain.addEventListener('click', () => {
        delete userResponses[q.id];
        saveState();
        renderQuestion(currentIndex);
        renderGrid();
        updateStats();
      });
    }

    // Option selections
    if (!res.submitted) {
      if (q.type === 'multiple_choice') {
        document.querySelectorAll('.option-item').forEach(el => {
          el.addEventListener('click', () => {
            const optVal = el.getAttribute('data-option');
            if (q.is_multiple_response) {
              if (!res.answers) res.answers = [];
              if (res.answers.includes(optVal)) {
                res.answers = res.answers.filter(a => a !== optVal);
                el.classList.remove('selected');
              } else {
                res.answers.push(optVal);
                el.classList.add('selected');
              }
            } else {
              res.answers = [optVal];
              document.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
              el.classList.add('selected');
              if (studyMode) {
                // In study mode with single choice, auto-check answer
                evaluateAnswer(q);
              }
            }
            userResponses[q.id] = res;
          });
        });
      } else if (q.type === 'matching') {
        document.querySelectorAll('.matching-select').forEach(sel => {
          sel.addEventListener('change', (e) => {
            const pIdx = parseInt(sel.getAttribute('data-pair-idx'));
            if (!res.answers) res.answers = [];
            res.answers[pIdx] = e.target.value;
            userResponses[q.id] = res;
          });
        });
      } else if (q.type === 'true_false_group') {
        document.querySelectorAll('.tf-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const itIdx = parseInt(btn.getAttribute('data-tf-idx'));
            const val = btn.getAttribute('data-val');
            if (!res.answers) res.answers = [];
            res.answers[itIdx] = val;
            userResponses[q.id] = res;
            // update visual style
            btn.parentElement.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
          });
        });
      } else if (q.type === 'text_input') {
        const textInput = document.getElementById('textAnswerInput');
        if (textInput) {
          textInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') evaluateAnswer(q);
          });
          textInput.addEventListener('input', (e) => {
            res.answers = [e.target.value.trim()];
            userResponses[q.id] = res;
          });
        }
      } else if (q.type === 'interactive_config') {
        document.querySelectorAll('.config-input').forEach(inp => {
          inp.addEventListener('input', (e) => {
            const cIdx = parseInt(inp.getAttribute('data-cfg-idx'));
            if (!res.answers) res.answers = [];
            res.answers[cIdx] = e.target.value.trim();
            userResponses[q.id] = res;
          });
        });
      }
    }
  }

  function evaluateAnswer(q) {
    const res = userResponses[q.id] || { answers: [] };
    let isCorrect = false;

    if (q.type === 'multiple_choice') {
      if (!res.answers || res.answers.length === 0) {
        // Find or create warning message
        let warnMsg = document.getElementById('selectionWarning');
        if (!warnMsg) {
          warnMsg = document.createElement('div');
          warnMsg.id = 'selectionWarning';
          warnMsg.style.color = 'var(--accent-amber)';
          warnMsg.style.marginTop = '10px';
          warnMsg.style.fontWeight = 'bold';
          const container = document.querySelector('.options-container');
          if (container) container.parentNode.insertBefore(warnMsg, container.nextSibling);
        }
        warnMsg.textContent = '⚠️ Please select an option first.';
        return;
      }
      // Check if user selected options match correct answers
      const correctTargets = q.correct_answers || [];
      const userSelected = res.answers || [];

      // Check letter match or string match
      const userLetters = userSelected.map(s => s.trim().charAt(0));
      const targetLetters = q.correct_letters || correctTargets.map(s => s.trim().charAt(0));

      const matchCount = userLetters.filter(l => targetLetters.includes(l)).length;
      isCorrect = matchCount === targetLetters.length && userLetters.length === targetLetters.length;
    } else if (q.type === 'matching') {
      const answers = res.answers || [];
      if (answers.length < q.pairs.length || answers.some(a => !a)) {
        let warnMsg = document.getElementById('selectionWarning');
        if (!warnMsg) {
          warnMsg = document.createElement('div');
          warnMsg.id = 'selectionWarning';
          warnMsg.style.color = 'var(--accent-amber)';
          warnMsg.style.marginTop = '10px';
          warnMsg.style.fontWeight = 'bold';
          const container = document.querySelector('.matching-container');
          if (container) container.parentNode.insertBefore(warnMsg, container.nextSibling);
        }
        warnMsg.textContent = '⚠️ Please complete all matches first.';
        return;
      }
      isCorrect = q.pairs.every((pair, idx) => answers[idx] === pair.answer);
    } else if (q.type === 'true_false_group') {
      const answers = res.answers || [];
      if (answers.length < q.items.length || answers.some(a => !a)) {
        let warnMsg = document.getElementById('selectionWarning');
        if (!warnMsg) {
          warnMsg = document.createElement('div');
          warnMsg.id = 'selectionWarning';
          warnMsg.style.color = 'var(--accent-amber)';
          warnMsg.style.marginTop = '10px';
          warnMsg.style.fontWeight = 'bold';
          const container = document.querySelector('.tf-group');
          if (container) container.parentNode.insertBefore(warnMsg, container.nextSibling);
        }
        warnMsg.textContent = '⚠️ Please answer True or False for all statements.';
        return;
      }
      isCorrect = q.items.every((it, idx) => answers[idx] === it.answer);
    } else if (q.type === 'text_input') {
      const text = (res.answers && res.answers[0]) ? res.answers[0].toLowerCase().trim() : '';
      if (!text) {
        let warnMsg = document.getElementById('selectionWarning');
        if (!warnMsg) {
          warnMsg = document.createElement('div');
          warnMsg.id = 'selectionWarning';
          warnMsg.style.color = 'var(--accent-amber)';
          warnMsg.style.marginTop = '10px';
          warnMsg.style.fontWeight = 'bold';
          const container = document.querySelector('.input-answer-container');
          if (container) container.parentNode.insertBefore(warnMsg, container.nextSibling);
        }
        warnMsg.textContent = '⚠️ Please type an answer first.';
        return;
      }
      isCorrect = q.accepted_answers.some(ans => text === ans.toLowerCase().trim() || text.includes(ans.toLowerCase().trim()));
    } else if (q.type === 'interactive_config') {
      const answers = res.answers || [];
      isCorrect = answers.length >= 3 && (answers[1] === '255.255.0.0') && (answers[2] === '172.100.0.1');
    }

    res.isCorrect = isCorrect;
    res.submitted = true;
    userResponses[q.id] = res;

    saveState();
    renderQuestion(currentIndex);
    renderGrid();
    updateStats();
  }

  function updateStats() {
    const total = questions.length;
    const answered = Object.values(userResponses).filter(r => r.submitted).length;
    const correctCount = Object.values(userResponses).filter(r => r.submitted && r.isCorrect).length;
    const accuracy = answered > 0 ? Math.round((correctCount / answered) * 100) : 0;

    progressVal.textContent = `${answered} / ${total}`;
    accuracyVal.textContent = `${accuracy}% (${correctCount} right)`;
    bookmarksVal.textContent = flaggedQuestions.size;
    progressBarFill.style.width = `${(answered / total) * 100}%`;
  }

  function saveState() {
    try {
      const data = {
        userResponses,
        flaggedQuestions: Array.from(flaggedQuestions),
        currentIndex
      };
      localStorage.setItem('ccst_quiz_state', JSON.stringify(data));
    } catch(e) {}
  }

  function loadSavedState() {
    try {
      const saved = localStorage.getItem('ccst_quiz_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        userResponses = parsed.userResponses || {};
        flaggedQuestions = new Set(parsed.flaggedQuestions || []);
        currentIndex = parsed.currentIndex || 0;
      }
    } catch(e) {}
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Start
  init();
})();
