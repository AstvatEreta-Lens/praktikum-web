//Javascript (naskah jawa)

const papan = document.getElementById('board');
const kolom = document.querySelectorAll('.cell');
const displayStatus = document.getElementById('status');
const tombolReset = document.getElementById('reset');
const tombotToggleDarkMode = document.getElementById('toggleDarkMode');
const soundBackground = document.getElementById('soundBack')

var pemainSekarang = 'X';
var papanPermainan = ['', '', '', '', '', '', '', '', ''];
var gameActive = true;
var darkMode = false;


// cek pemenang
const cekPemenang = () => {
  const kombinasiUntukMenang = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const kombinasi of kombinasiUntukMenang) {
    const [a, b, c] = kombinasi;
    if (papanPermainan[a] && papanPermainan[a] === papanPermainan[b] && papanPermainan[a] === papanPermainan[c]) {
      gameActive = false;
      return papanPermainan[a];
    }
  }

  if (!papanPermainan.includes('')) {
    gameActive = false;
    return 'Seri';
  }

  return null;
};

// fungsi untuk handle cell click
const handleKlikKolom = (index) => {
  if (!gameActive || papanPermainan[index] !== '') return;

  papanPermainan[index] = pemainSekarang;
  kolom[index].textContent = pemainSekarang;
  const pemenang = cekPemenang();

  if (pemenang) {
    if (pemenang === 'Seri') {
      displayStatus.textContent = 'Permainan Seri!';
    } else {
      displayStatus.textContent = `${pemenang} Menang!`;
    }
  } else {
    pemainSekarang = pemainSekarang === 'X' ? 'O' : 'X';
    displayStatus.textContent = `Giliran Player ${pemainSekarang}`;
  }
};

// fungsi reset game
const restartGame = () => {
  papanPermainan = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  pemainSekarang = pemainSekarang;
  pemainSekarang =pemainSekarang === 'X' ? 'O': 'X';
  displayStatus.textContent = `Giliran Player ${pemainSekarang}`;
  kolom.forEach(cell => cell.textContent = '');
  soundBackground.currentTime = 0;
  soundBackground.play();

};


kolom.forEach((cell, index) => {
  cell.addEventListener('click', () => handleKlikKolom(index));
});

tombolReset.addEventListener('click', restartGame);

tombotToggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkMode = !darkMode;
  if (darkMode) {
    tombotToggleDarkMode.textContent = 'Mode Terang ?';
  } else {
    tombotToggleDarkMode.textContent = 'Mode Gelap ?';
  }
});


displayStatus.textContent = `Giliran Player ${currentPlayer}`;
soundBackground.play()