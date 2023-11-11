const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let darkMode = false;

// cek pemenang
const checkWinner = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      return gameBoard[a];
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    return 'Draw';
  }

  return null;
};

// fungsi untuk handle cell click
const handleCellClick = (index) => {
  if (!gameActive || gameBoard[index] !== '') return;

  gameBoard[index] = currentPlayer;
  cells[index].textContent = currentPlayer;
  const winner = checkWinner();

  if (winner) {
    if (winner === 'Draw') {
      status.textContent = 'Permainan Seri!';
    } else {
      status.textContent = `${winner} Menang!`;
    }
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Giliran Player ${currentPlayer}`;
  }
};

// fungsi reset game
const resetGame = () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  status.textContent = `Giliran Player ${currentPlayer}`;
  cells.forEach(cell => cell.textContent = '');
};

// Event listeners
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

resetButton.addEventListener('click', resetGame);

toggleDarkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkMode = !darkMode;
  if (darkMode) {
    toggleDarkModeButton.textContent = 'Toggle Light Mode';
  } else {
    toggleDarkModeButton.textContent = 'Toggle Dark Mode';
  }
});

// Initial status message
status.textContent = `Giliran Player ${currentPlayer}`;
