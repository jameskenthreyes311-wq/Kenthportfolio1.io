const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  if (!cursor || !ring) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  ring.style.left = e.clientX + 'px';
  ring.style.top = e.clientY + 'px';
});

document.querySelectorAll('a,button,canvas').forEach(el => {
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

const canvas = document.getElementById('snake-canvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const bestEl = document.getElementById('best-score');
const lengthEl = document.getElementById('length');
const statusEl = document.getElementById('status');
const pauseBtn = document.getElementById('pause-btn');
const resultOverlay = document.getElementById('result-overlay');
const resultScore = document.getElementById('result-score');
const resultBest = document.getElementById('result-best');
const resultLength = document.getElementById('result-length');

const cells = 24;
const cellSize = canvas.width / cells;
const speeds = { slow: 145, normal: 105, fast: 72 };

let speedMode = 'normal';
let snake;
let direction;
let nextDirection;
let food;
let score;
let best = parseInt(localStorage.getItem('kenthSnakeBest') || '0', 10);
let loopId = null;
let paused = false;
let gameOver = false;
let gameStarted = false;

function pad(num) {
  return String(num).padStart(3, '0');
}

function randomCell() {
  return {
    x: Math.floor(Math.random() * cells),
    y: Math.floor(Math.random() * cells)
  };
}

function spawnFood() {
  let point = randomCell();
  while (snake.some(part => part.x === point.x && part.y === point.y)) {
    point = randomCell();
  }
  food = point;
}

function resetGame() {
  clearInterval(loopId);
  loopId = null;
  snake = [
    { x: 11, y: 12 },
    { x: 10, y: 12 },
    { x: 9, y: 12 }
  ];
  direction = null;
  nextDirection = null;
  score = 0;
  paused = false;
  gameOver = false;
  gameStarted = false;
  resultOverlay.classList.remove('visible');
  spawnFood();
  updateHud();
  draw();
}

function updateHud() {
  scoreEl.textContent = pad(score);
  bestEl.textContent = pad(best);
  lengthEl.textContent = pad(snake.length);
  statusEl.textContent = gameOver ? 'END' : paused ? 'PAUSE' : gameStarted ? 'RUN' : 'READY';
  if (!gameStarted && !gameOver) {
    pauseBtn.textContent = 'START';
    return;
  }
  pauseBtn.innerHTML = paused ? '<span class="btn-icon">▶</span> RESUME' : '<span class="btn-icon">Ⅱ</span> PAUSE';
}

function getDirectionVector(dir) {
  const map = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 }
  };
  return map[dir] || null;
}

function startGame(dir = 'right') {
  if (gameOver) resetGame();
  if (gameStarted) return;

  const wanted = getDirectionVector(dir) || getDirectionVector('right');
  const head = { x: 11, y: 12 };
  snake = [
    head,
    { x: head.x - wanted.x, y: head.y - wanted.y },
    { x: head.x - wanted.x * 2, y: head.y - wanted.y * 2 }
  ];
  direction = wanted;
  nextDirection = wanted;
  gameStarted = true;
  paused = false;
  updateHud();
  draw();
  loopId = setInterval(tick, speeds[speedMode]);
}

function setDirection(dir) {
  const wanted = getDirectionVector(dir);
  if (!wanted) return;
  if (!gameStarted) {
    startGame(dir);
    return;
  }
  if (wanted.x + direction.x === 0 && wanted.y + direction.y === 0) return;
  nextDirection = wanted;
}

function tick() {
  if (!gameStarted || paused || gameOver) return;
  direction = nextDirection;
  const head = snake[0];
  const next = { x: head.x + direction.x, y: head.y + direction.y };

  if (
    next.x < 0 || next.x >= cells ||
    next.y < 0 || next.y >= cells ||
    snake.some(part => part.x === next.x && part.y === next.y)
  ) {
    endGame();
    return;
  }

  snake.unshift(next);
  if (next.x === food.x && next.y === food.y) {
    score += speedMode === 'fast' ? 15 : speedMode === 'slow' ? 8 : 10;
    spawnFood();
  } else {
    snake.pop();
  }

  updateHud();
  draw();
}

function drawCell(point, color, glow, inset = 2) {
  const x = point.x * cellSize + inset;
  const y = point.y * cellSize + inset;
  const size = cellSize - inset * 2;
  ctx.fillStyle = color;
  ctx.shadowColor = glow;
  ctx.shadowBlur = 12;
  ctx.fillRect(x, y, size, size);
  ctx.shadowBlur = 0;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(12,30,34,0.94)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(0,212,255,0.06)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= cells; i++) {
    const pos = i * cellSize;
    ctx.beginPath();
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, pos);
    ctx.lineTo(canvas.width, pos);
    ctx.stroke();
  }

  drawCell(food, '#f59e0b', 'rgba(245,158,11,0.9)', 4);

  snake.forEach((part, idx) => {
    if (idx === 0) {
      drawCell(part, '#00d4ff', 'rgba(0,212,255,0.95)', 2);
    } else {
      const alpha = Math.max(0.34, 0.9 - idx * 0.045);
      drawCell(part, `rgba(76,175,130,${alpha})`, 'rgba(76,175,130,0.55)', 3);
    }
  });
}

function endGame() {
  gameOver = true;
  clearInterval(loopId);
  if (score > best) {
    best = score;
    localStorage.setItem('kenthSnakeBest', String(best));
  }
  updateHud();
  resultScore.textContent = score;
  resultBest.textContent = best;
  resultLength.textContent = snake.length;
  resultOverlay.classList.add('visible');
}

function togglePause() {
  if (gameOver) return;
  if (!gameStarted) {
    startGame();
    return;
  }
  paused = !paused;
  updateHud();
}

document.addEventListener('keydown', e => {
  const key = e.key.toLowerCase();
  if (['arrowup', 'w'].includes(key)) {
    e.preventDefault();
    setDirection('up');
  } else if (['arrowdown', 's'].includes(key)) {
    e.preventDefault();
    setDirection('down');
  } else if (['arrowleft', 'a'].includes(key)) {
    e.preventDefault();
    setDirection('left');
  } else if (['arrowright', 'd'].includes(key)) {
    e.preventDefault();
    setDirection('right');
  } else if (key === ' ' || key === 'p') {
    e.preventDefault();
    togglePause();
  } else if (key === 'escape') {
    resultOverlay.classList.remove('visible');
  }
});

document.querySelectorAll('[data-dir]').forEach(btn => {
  btn.addEventListener('click', () => setDirection(btn.dataset.dir));
});

document.querySelectorAll('[data-speed]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-speed]').forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    speedMode = btn.dataset.speed;
    resetGame();
  });
});

document.getElementById('restart-btn').addEventListener('click', resetGame);
document.getElementById('result-restart').addEventListener('click', resetGame);
pauseBtn.addEventListener('click', togglePause);

bestEl.textContent = pad(best);
resetGame();
