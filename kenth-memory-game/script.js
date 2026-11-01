// ── KENTH.SYS — Memory Protocol ──────────────────────────────────
// Icon set: design & tech themed (fits Kenth's UI/UX + AI identity)
const ICON_POOL = [
  '⬡', '◈', '⟁', '⬟', '◉', '⬠', '⟐', '⬢',
  '◇', '⬦', '◈', '⟟', '⬡', '◬', '⟢', '⬧',
  '✦', '⟣', '⊹', '⟤'
];

// Futuristic emoji pool as fallback + mix
const EMOJI_POOL = [
  '🔷','🔹','💠','🔵','🟦','⬛','🔲','🔳',
  '🌐','💾','🖥️','⌨️','🔌','📡','🛰️','🤖',
  '💡','🔬','⚡','🧬'
];

// State
let firstCard  = null;
let secondCard = null;
let locked     = false;
let moves      = 0;
let matched    = 0;
let totalPairs = 6;
let timerID    = null;
let seconds    = 0;

// DOM
const grid         = document.getElementById('grid');
const movesEl      = document.getElementById('moves');
const pairsEl      = document.getElementById('pairs-found');
const timerEl      = document.getElementById('timer');
const progressFill = document.getElementById('progress-fill');
const progressLbl  = document.getElementById('progress-label');
const winOverlay   = document.getElementById('win-overlay');
const winMovesEl   = document.getElementById('win-moves');
const winTimeEl    = document.getElementById('win-time');

// Custom cursor
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
document.addEventListener('mousemove', e => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

// ── Helpers ───────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function padNum(n, len = 2) {
  return String(n).padStart(len, '0');
}

function formatTime(s) {
  return Math.floor(s / 60) + ':' + padNum(s % 60);
}

// ── Timer ─────────────────────────────────────────────────────────
function startTimer() {
  clearInterval(timerID);
  seconds = 0;
  timerEl.textContent = '0:00';
  timerID = setInterval(() => {
    seconds++;
    timerEl.textContent = formatTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerID);
  timerID = null;
}

// ── Update HUD ────────────────────────────────────────────────────
function updateHUD() {
  movesEl.textContent = padNum(moves, 3);
  pairsEl.textContent = padNum(matched, 2) + '/' + padNum(totalPairs, 2);
  const pct = Math.round((matched / totalPairs) * 100);
  progressFill.style.width = pct + '%';
  progressLbl.textContent  = 'PROTOCOL: ' + pct + '%';
}

// ── Build game ────────────────────────────────────────────────────
function initGame(pairs) {
  totalPairs = pairs;
  firstCard = secondCard = null;
  locked    = false;
  moves     = 0;
  matched   = 0;
  stopTimer();
  seconds   = 0;
  timerEl.textContent = '0:00';
  winOverlay.classList.remove('visible');
  updateHUD();

  // Pick icons — use emoji pool for more visual variety
  const pool   = shuffle([...EMOJI_POOL]).slice(0, pairs);
  const deck   = shuffle([...pool, ...pool]);

  // Grid columns
  const cols = pairs <= 6 ? 4 : pairs <= 8 ? 4 : 5;
  grid.style.setProperty('--grid-cols', cols);

  grid.innerHTML = '';
  deck.forEach((icon, idx) => {
    const outer = document.createElement('div');
    outer.className = 'card-outer';
    outer.dataset.icon = icon;
    outer.style.animationDelay = `${idx * 0.035}s`;
    outer.setAttribute('role', 'button');
    outer.setAttribute('aria-label', 'Memory card');

    outer.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-front">
          <span class="card-q">?</span>
        </div>
        <div class="card-face card-back" role="img" aria-label="${icon}">
          <span>${icon}</span>
        </div>
      </div>`;

    outer.addEventListener('click', () => onCardClick(outer));
    grid.appendChild(outer);
  });
}

// ── Card click ────────────────────────────────────────────────────
function onCardClick(card) {
  if (locked) return;
  if (card.classList.contains('flipped')) return;
  if (card.classList.contains('matched')) return;

  // Start timer on very first click
  if (!timerID && moves === 0 && !firstCard) startTimer();

  card.classList.add('flipped');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  locked = true;
  moves++;
  updateHUD();

  if (firstCard.dataset.icon === secondCard.dataset.icon) {
    // ✅ Match
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    matched++;
    updateHUD();

    firstCard = secondCard = null;
    locked = false;

    if (matched === totalPairs) {
      setTimeout(onWin, 400);
    }
  } else {
    // ❌ No match
    const a = firstCard, b = secondCard;
    a.classList.add('wrong');
    b.classList.add('wrong');

    setTimeout(() => {
      a.classList.remove('flipped', 'wrong');
      b.classList.remove('flipped', 'wrong');
      firstCard = secondCard = null;
      locked = false;
    }, 900);
  }
}

// ── Win ───────────────────────────────────────────────────────────
function onWin() {
  stopTimer();
  winMovesEl.textContent = moves;
  winTimeEl.textContent  = formatTime(seconds);
  winOverlay.classList.add('visible');
}

// ── Difficulty ────────────────────────────────────────────────────
document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initGame(parseInt(btn.dataset.pairs, 10));
  });
});

// ── Restart ───────────────────────────────────────────────────────
document.getElementById('restart-btn').addEventListener('click', () => {
  const pairs = parseInt(document.querySelector('.diff-btn.active').dataset.pairs, 10);
  initGame(pairs);
});

document.getElementById('win-restart').addEventListener('click', () => {
  winOverlay.classList.remove('visible');
  const pairs = parseInt(document.querySelector('.diff-btn.active').dataset.pairs, 10);
  initGame(pairs);
});

// ── Keyboard support ──────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') winOverlay.classList.remove('visible');
});

// ── Boot ──────────────────────────────────────────────────────────
initGame(6);
