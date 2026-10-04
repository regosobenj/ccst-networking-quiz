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
      document.getElementById('btnFinishExam').style.display = 'none';
      renderQuestion(currentIndex);
    });

    btnExamMode.addEventListener('click', () => {
      studyMode = false;
      btnExamMode.classList.add('active');
      btnStudyMode.classList.remove('active');
      document.getElementById('btnFinishExam').style.display = 'block';
      
      // Notify user about exam mode start
      alert("Exam Mode Started! Check Answer buttons are disabled. Click 'Submit Exam' when finished.");
      renderQuestion(currentIndex);
    });

    btnThemeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      saveState();
    });

    // Event listener for Submit Exam
    const btnFinishExam = document.getElementById('btnFinishExam');
    if (btnFinishExam) {
      btnFinishExam.addEventListener('click', () => {
        const total = questions.length;
        let answered = 0;
        
        questions.forEach(q => {
          const res = userResponses[q.id];
          if (res && res.answers && res.answers.length > 0) {
            answered++;
          }
        });
        
        if (answered < total) {
          if (!confirm(`You have only answered ${answered} out of ${total} questions.\nAre you sure you want to submit your exam now?`)) {
            return;
          }
        }
        
        // Calculate score
        let correctCount = 0;
        let wrongQuestions = [];
        let domainFails = {};
        
        questions.forEach(q => {
          if (!domainFails[q.category]) {
            domainFails[q.category] = { total: 0, wrong: 0 };
          }
          domainFails[q.category].total++;
          
          const res = userResponses[q.id] || { answers: [] };
          let isCorrect = false;
          
          if (res.answers.length > 0) {
            if (q.type === 'multiple_choice') {
              if (q.is_multiple_response) {
                const expected = q.correct_answers || [];
                isCorrect = (expected.length === res.answers.length) && expected.every(a => res.answers.includes(a));
              } else {
                isCorrect = q.correct_answers.includes(res.answers[0]) || (q.correct_letters && q.correct_letters.some(l => res.answers[0].startsWith(l + '.')));
              }
            } else if (q.type === 'matching') {
              isCorrect = q.pairs.every((p, idx) => res.answers[idx] === p.answer);
            } else if (q.type === 'true_false_group') {
              isCorrect = q.items.every((it, idx) => res.answers[idx] === it.answer);
            } else if (q.type === 'text_input') {
              isCorrect = q.accepted_answers.some(a => a.toLowerCase() === (res.answers[0] || '').toLowerCase().trim());
            } else if (q.type === 'interactive_config') {
              isCorrect = q.fields.every((f, idx) => (res.answers[idx] || '').trim() === f.expected);
            }
          }
          
          if (isCorrect) correctCount++;
          else {
            domainFails[q.category].wrong++;
            wrongQuestions.push({ q, userChoice: res.answers });
          }
          
          if (!userResponses[q.id]) userResponses[q.id] = { answers: [] };
          userResponses[q.id].submitted = true;
          userResponses[q.id].isCorrect = isCorrect;
        });
        
        const percentage = Math.round((correctCount / total) * 100);
        
        // Build Result HTML
        let resultHtml = `
          <div style="text-align:center; padding: 1rem 0;">
            <h2 style="color:var(--accent-cyan); margin-bottom:0.5rem; font-size:1.8rem;">Exam Completed!</h2>
            <div style="font-size:3rem; font-weight:800; color:${percentage >= 70 ? 'var(--accent-green)' : 'var(--accent-red)'}">
              ${percentage}%
            </div>
            <p style="color:var(--text-secondary); margin-bottom:1.5rem;">Score: ${correctCount} / ${total} Correct</p>
          </div>
          
          <h3 style="margin-top:1rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">Domain Breakdown</h3>
          <ul style="list-style:none; margin-top:0.5rem; padding:0; display:flex; flex-direction:column; gap:0.5rem;">
        `;
        
        for (const [domain, stats] of Object.entries(domainFails)) {
          const correctInDomain = stats.total - stats.wrong;
          const domPerc = Math.round((correctInDomain / stats.total) * 100);
          resultHtml += `
            <li style="display:flex; justify-content:space-between; background:var(--bg-card-hover); padding:0.5rem 1rem; border-radius:4px;">
              <span>${escapeHtml(domain)}</span>
              <span style="color:${domPerc >= 70 ? 'var(--accent-green)' : 'var(--accent-red)'}; font-weight:bold;">${domPerc}% (${correctInDomain}/${stats.total})</span>
            </li>
          `;
        }
        
        resultHtml += `</ul>
          <h3 style="margin-top:1.5rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">Incorrect Questions (Review)</h3>
          <div style="max-height: 250px; overflow-y:auto; margin-top:0.5rem; display:flex; flex-direction:column; gap:0.75rem;">
        `;
        
        if (wrongQuestions.length === 0) {
          resultHtml += `<p style="color:var(--accent-green);">Perfect score! No mistakes.</p>`;
        } else {
          wrongQuestions.forEach(item => {
            resultHtml += `
              <div style="background:var(--bg-card-hover); padding:0.75rem; border-radius:4px; font-size:0.85rem; border-left:3px solid var(--accent-red);">
                <div style="font-weight:600; margin-bottom:4px;">Q: ${escapeHtml(item.q.question)}</div>
                <div style="color:var(--accent-red); margin-bottom:2px;">Your Answer: ${item.userChoice.length > 0 ? escapeHtml(item.userChoice.join(', ')) : '<i>Blank</i>'}</div>
                <div style="color:var(--accent-green);">Correct Answer: 
                  ${item.q.type === 'multiple_choice' ? escapeHtml((item.q.correct_answers || []).join(', ')) : 'Check specific question box'}
                </div>
              </div>
            `;
          });
        }
        
        resultHtml += `</div>`;
        
        // Hijack the modal
        modalTitle.textContent = "Exam Results";
        document.getElementById('modalImage').style.display = 'none'; // hide image
        
        let resultsContainer = document.getElementById('examResultsContainer');
        if (!resultsContainer) {
          resultsContainer = document.createElement('div');
          resultsContainer.id = 'examResultsContainer';
          document.querySelector('.modal-body').appendChild(resultsContainer);
        }
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = resultHtml;
        
        imageModal.classList.remove('hidden');
        
        saveState();
        renderGrid();
        renderQuestion(currentIndex);
        updateStats();
      });
    }

    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.getElementById('sidebar');
    if (sidebarToggleBtn && sidebar) {
      sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
      });
    }

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
      document.getElementById('modalImage').style.display = 'block';
      const resultsContainer = document.getElementById('examResultsContainer');
      if (resultsContainer) resultsContainer.style.display = 'none';
    });

    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        imageModal.classList.add('hidden');
        document.getElementById('modalImage').style.display = 'block';
        const resultsContainer = document.getElementById('examResultsContainer');
        if (resultsContainer) resultsContainer.style.display = 'none';
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
        saveState();
        renderQuestion(currentIndex);
        
        // On mobile/tablet, collapse the sidebar dropdown after picking a question
        if (window.innerWidth <= 1000) {
          const sidebar = document.getElementById('sidebar');
          if (sidebar) sidebar.classList.remove('expanded');
        }
      });

      questionGrid.appendChild(item);
    });
  }

  function renderQuestion(idx) {
    const q = questions[idx];
    if (!q) return;

    // Save index in case page reloads
    currentIndex = idx;
    saveState();

    // Update bottom nav state
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === questions.length - 1;
    qIndexText.textContent = `Question ${idx + 1} of ${questions.length}`;
    pdfRefBadge.textContent = `Reviewer Slide #${q.page}`;

    // Update grid active state
    document.querySelectorAll('.grid-item').forEach(el => el.classList.remove('current'));
    const currentGridEl = Array.from(questionGrid.children).find(el => el.textContent == idx + 1);
    if (currentGridEl) {
      currentGridEl.classList.add('current');
      // On mobile (when grid is horizontal), scroll the active item into view
      if (window.innerWidth <= 600) {
        currentGridEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

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
    `;
    
    if (studyMode) {
      if (!isSubmitted) {
        html += `<button id="btnSubmitAnswer" class="btn-primary">Check Answer</button>`;
      } else {
        html += `<button id="btnTryAgain" class="btn-secondary">↺ Try Again</button>`;
      }
    } else {
      // In Exam mode, individual questions don't have Check/Try Again.
      // We rely on the global 'Next' button to navigate, and a global 'Finish Exam' button to score.
    }
    
    html += `
        </div>
      </div>
    </div>`;

    cardContainer.innerHTML = html;

    // Attach Interactive Handlers for the Question Card
    bindCardEvents(q, res);
  }

  function renderMultipleChoice(q, res, isSubmitted) {
    let out = '<div class="options-list">';
    
    // Shuffle options if not already shuffled for this session/attempt
    if (!res.shuffledOptions) {
      // Copy array and shuffle using Fisher-Yates
      res.shuffledOptions = [...q.options];
      for (let i = res.shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [res.shuffledOptions[i], res.shuffledOptions[j]] = [res.shuffledOptions[j], res.shuffledOptions[i]];
      }
    }

    res.shuffledOptions.forEach(opt => {
      const isSelected = res.answers.includes(opt);
      const isCorrectOption = q.correct_answers.includes(opt) || (q.correct_letters && q.correct_letters.some(l => opt.startsWith(l + '.')));
      
      let extraClass = '';
      if (isSelected) extraClass += ' selected';
      if (isSubmitted) {
        if (isCorrectOption) extraClass += ' correct-revealed';
        else if (isSelected && !isCorrectOption) extraClass += ' incorrect-revealed';
      }

      // Hide the hardcoded letter prefix (e.g. "A. ") since they are shuffled,
      // and let css/flex layout handle the new visual
      const contentWithoutLetter = opt.match(/^[A-E]\.\s*(.*)/) ? opt.replace(/^[A-E]\.\s*/, '') : opt;

      out += `
        <div class="option-item ${extraClass}" data-option="${escapeHtml(opt)}">
          <span class="option-label" style="padding-left:10px;">${escapeHtml(contentWithoutLetter)}</span>
        </div>
      `;
    });
    out += '</div>';
    return out;
  }

  function renderMatching(q, res, isSubmitted) {
    let out = '<div class="matching-container">';
    
    // Create the draggable options pool
    out += '<div class="matching-pool" id="matchingPool">';
    q.options.forEach(opt => {
      // Options always stay in the pool so they can be reused
      out += `
        <div class="draggable-option" draggable="${!isSubmitted}" data-opt="${escapeHtml(opt)}">
          ${escapeHtml(opt)}
        </div>
      `;
    });
    out += '</div>';

    // Create the target rows
    out += '<div class="matching-rows">';
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
          <div class="matching-target" data-pair-idx="${pIdx}">
            ${selectedVal ? `<div class="draggable-option" draggable="${!isSubmitted}" data-opt="${escapeHtml(selectedVal)}">${escapeHtml(selectedVal)}</div>` : '<span class="placeholder-text">Drop answer here</span>'}
          </div>
        </div>
      `;
    });
    out += '</div></div>';
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
        delete res.shuffledOptions;
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
            }
            userResponses[q.id] = res;
          });
        });
      } else if (q.type === 'matching') {
        let draggedOpt = null;
        
        // Setup draggables
        document.querySelectorAll('.draggable-option').forEach(el => {
          el.addEventListener('dragstart', (e) => {
            draggedOpt = el.getAttribute('data-opt');
            e.dataTransfer.setData('text/plain', draggedOpt);
            setTimeout(() => el.classList.add('dragging'), 0);
          });
          el.addEventListener('dragend', () => {
            el.classList.remove('dragging');
          });
        });

        // Setup drop targets
        document.querySelectorAll('.matching-target').forEach(target => {
          target.addEventListener('dragover', (e) => {
            e.preventDefault();
            target.classList.add('drag-over');
          });
          target.addEventListener('dragleave', () => {
            target.classList.remove('drag-over');
          });
          target.addEventListener('drop', (e) => {
            e.preventDefault();
            target.classList.remove('drag-over');
            const optVal = e.dataTransfer.getData('text/plain');
            if (optVal) {
              const pIdx = parseInt(target.getAttribute('data-pair-idx'));
              if (!res.answers) res.answers = [];
              res.answers[pIdx] = optVal;
              userResponses[q.id] = res;
              renderQuestion(currentIndex); // Re-render to update UI
            }
          });
        });

        // Setup pool as a drop target to remove answers
        const pool = document.getElementById('matchingPool');
        if (pool) {
          pool.addEventListener('dragover', (e) => e.preventDefault());
          pool.addEventListener('drop', (e) => {
            e.preventDefault();
            const optVal = e.dataTransfer.getData('text/plain');
            if (optVal && res.answers) {
              const idx = res.answers.indexOf(optVal);
              if (idx !== -1) {
                res.answers[idx] = null;
                userResponses[q.id] = res;
                renderQuestion(currentIndex);
              }
            }
          });
        }
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
