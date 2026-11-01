const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  if (!cursor || !ring) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  ring.style.left = e.clientX + 'px';
  ring.style.top = e.clientY + 'px';
});

document.querySelectorAll('a,button,textarea').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (!cursor || !ring) return;
    cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
    ring.style.transform = 'translate(-50%,-50%) scale(1.45)';
  });
  el.addEventListener('mouseleave', () => {
    if (!cursor || !ring) return;
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

const passages = {
  focus: [
    'Precision begins with attention. Every keystroke is a small decision, and every decision builds the signal.',
    'Stay calm, read ahead, and let your rhythm settle into the line. Speed follows control when the mind is clear.',
    'A clean interface is quiet because the work should be loud. Type with purpose and keep the flow stable.'
  ],
  system: [
    'The neon grid wakes as the protocol scans each input stream. Accuracy stabilizes the link and speed increases bandwidth.',
    'Signal integrity depends on steady hands, clean timing, and a focused operator. Complete the transmission before the clock fades.',
    'Kenth system online. Calibrate the neural keyboard, route the text through memory, and execute without hesitation.'
  ],
  code: [
    'const build = design.map(component => component.render()).join(""); return build.length > 0;',
    'function createFlow(input) { return input.trim().toLowerCase().split(" ").filter(Boolean); }',
    'if (user.focus && system.ready) { launchProtocol({ mode: "typing", status: "online" }); }'
  ]
};

const quoteDisplay = document.getElementById('quote-display');
const input = document.getElementById('typing-input');
const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');
const errorsEl = document.getElementById('errors');
const timerEl = document.getElementById('timer');
const progressFill = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');
const charCount = document.getElementById('char-count');
const resultOverlay = document.getElementById('result-overlay');
const resultWpm = document.getElementById('result-wpm');
const resultAccuracy = document.getElementById('result-accuracy');
const resultErrors = document.getElementById('result-errors');

let mode = 'focus';
let duration = 60;
let activeText = '';
let started = false;
let finished = false;
let remaining = duration;
let timerId = null;

function pickPassage() {
  const group = passages[mode];
  return group[Math.floor(Math.random() * group.length)];
}

function renderQuote() {
  quoteDisplay.innerHTML = activeText
    .split('')
    .map((char, idx) => `<span data-index="${idx}">${escapeHtml(char)}</span>`)
    .join('');
  updateHighlights();
}

function escapeHtml(char) {
  return char
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function startTimer() {
  started = true;
  timerId = setInterval(() => {
    remaining--;
    timerEl.textContent = String(remaining).padStart(2, '0');
    updateStats();
    if (remaining <= 0) finishTest();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function updateHighlights() {
  const typed = input.value;
  const chars = quoteDisplay.querySelectorAll('span');

  chars.forEach((span, idx) => {
    span.classList.remove('correct', 'wrong', 'current');
    if (idx < typed.length) {
      span.classList.add(typed[idx] === activeText[idx] ? 'correct' : 'wrong');
    } else if (idx === typed.length && !finished) {
      span.classList.add('current');
    }
  });
}

function getMetrics() {
  const typed = input.value;
  let correct = 0;
  let errors = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === activeText[i]) correct++;
    else errors++;
  }

  const elapsedSeconds = Math.max(1, duration - remaining);
  const minutes = elapsedSeconds / 60;
  const wpm = Math.max(0, Math.round((correct / 5) / minutes));
  const accuracy = typed.length === 0 ? 100 : Math.max(0, Math.round((correct / typed.length) * 100));
  const progress = Math.min(100, Math.round((typed.length / activeText.length) * 100));

  return { typed, correct, errors, wpm, accuracy, progress };
}

function updateStats() {
  const metrics = getMetrics();
  wpmEl.textContent = String(metrics.wpm).padStart(3, '0');
  accuracyEl.textContent = metrics.accuracy + '%';
  errorsEl.textContent = String(metrics.errors).padStart(3, '0');
  progressFill.style.width = metrics.progress + '%';
  progressLabel.textContent = `SYNC: ${metrics.progress}%`;
  charCount.textContent = `${Math.min(metrics.typed.length, activeText.length)} / ${activeText.length}`;
}

function finishTest() {
  if (finished) return;
  finished = true;
  stopTimer();
  input.disabled = true;
  updateHighlights();
  updateStats();

  const metrics = getMetrics();
  resultWpm.textContent = metrics.wpm;
  resultAccuracy.textContent = metrics.accuracy + '%';
  resultErrors.textContent = metrics.errors;
  resultOverlay.classList.add('visible');
}

function resetTest() {
  stopTimer();
  activeText = pickPassage();
  started = false;
  finished = false;
  remaining = duration;
  timerEl.textContent = String(remaining).padStart(2, '0');
  input.disabled = false;
  input.value = '';
  resultOverlay.classList.remove('visible');
  renderQuote();
  updateStats();
}

input.addEventListener('input', () => {
  if (finished) return;
  if (!started) startTimer();
  if (input.value.length > activeText.length) {
    input.value = input.value.slice(0, activeText.length);
  }
  updateHighlights();
  updateStats();
  if (input.value.length === activeText.length) finishTest();
});

document.querySelectorAll('[data-mode]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-mode]').forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    mode = btn.dataset.mode;
    resetTest();
    input.focus();
  });
});

document.querySelectorAll('[data-time]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-time]').forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    duration = parseInt(btn.dataset.time, 10);
    resetTest();
    input.focus();
  });
});

document.getElementById('restart-btn').addEventListener('click', () => {
  resetTest();
  input.focus();
});

document.getElementById('result-restart').addEventListener('click', () => {
  resetTest();
  input.focus();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') resultOverlay.classList.remove('visible');
});

resetTest();
