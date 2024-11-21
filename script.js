// Get DOM elements
const startPanel = document.getElementById('start-panel');
const gameArea = document.getElementById('game');
const startBtn = document.getElementById('start-btn');
const scoresList = document.getElementById('scores-list');
const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');

// Game variables
let score = 0;
let isAlive = false;
let gameLoop;
let highScores = JSON.parse(localStorage.getItem('dinoHighScores')) || [];

// Update high scores display
function updateHighScores() {
    scoresList.innerHTML = '';
    const sortedScores = highScores.sort((a, b) => b - a).slice(0, 5);
    sortedScores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = score;
        scoresList.appendChild(li);
    });
}

// Save score to local storage
function saveScore(score) {
    highScores.push(score);
    localStorage.setItem('dinoHighScores', JSON.stringify(highScores));
    updateHighScores();
}

// Jump function
function jump() {
    if (!dino.classList.contains('jump') && isAlive) {
        dino.classList.add('jump');
        setTimeout(() => {
            dino.classList.remove('jump');
        }, 500);
    }
}

// Start game function
function startGame() {
    startPanel.classList.add('hidden');
    gameArea.classList.remove('hidden');
    score = 0;
    isAlive = true;
    scoreDisplay.textContent = `Score: ${score}`;
    
    // Reset cactus animation
    cactus.classList.remove('cactus-moving');
    void cactus.offsetWidth; // Trigger reflow
    cactus.classList.add('cactus-moving');

    // Start game loop
    gameLoop = setInterval(() => {
        if (!isAlive) return;

        score++;
        scoreDisplay.textContent = `Score: ${score}`;

        const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
        const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));

        if (cactusLeft > 500 && cactusLeft < 560 && dinoTop <= 40) {
            gameOver();
        }
    }, 50);
}

// Game over function
function gameOver() {
    isAlive = false;
    clearInterval(gameLoop);
    cactus.classList.remove('cactus-moving');
    saveScore(score);
    alert(`Game Over! Your score: ${score}`);
    startPanel.classList.remove('hidden');
    gameArea.classList.add('hidden');
}

// Event listeners
startBtn.addEventListener('click', startGame);
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

// Initialize high scores on load
updateHighScores(); 