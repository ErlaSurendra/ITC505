const boardSize = 5; // 5x5 grid
const board = [];

// Initialize the board and render it
function initializeBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    board.length = 0;

    for (let row = 0; row < boardSize; row++) {
        const rowArray = [];
        for (let col = 0; col < boardSize; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.row = row;
            square.dataset.col = col;

            square.addEventListener('click', () => toggleSquare(row, col));
            gameBoard.appendChild(square);
            rowArray.push(square);
        }
        board.push(rowArray);
    }

    randomizeBoard();
}

// Toggle a square and its neighbors
function toggleSquare(row, col) {
    const toggle = (r, c) => {
        if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
            board[r][c].classList.toggle('is-off');
        }
    };

    toggle(row, col); // Current square
    toggle(row - 1, col); // Top neighbor
    toggle(row + 1, col); // Bottom neighbor
    toggle(row, col - 1); // Left neighbor
    toggle(row, col + 1); // Right neighbor

    checkWin();
}

// Randomize the board with a solveable state
function randomizeBoard() {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const randomRow = Math.floor(Math.random() * boardSize);
        const randomCol = Math.floor(Math.random() * boardSize);
        toggleSquare(randomRow, randomCol);
    }
}

// Check if all squares are "off"
function checkWin() {
    const allOff = board.every(row =>
        row.every(square => square.classList.contains('is-off'))
    );

    if (allOff) {
        window.alert('You win!');
    }
}

// Add an event listener for the Restart button
document.getElementById('restart-game-btn').addEventListener('click', restartGame);
function startTimer() {
    timer = 0;
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = `Time: ${timer}s`;
    }, 1000);
}

function restartGame() {
    const popup = document.getElementById('win-popup');
    popup.classList.add('hidden'); // Ensure the win popup is hidden
    initializeBoard(); // Restart the game board
}

// Initialize the game
initializeBoard();

