const form = document.querySelector('#player-info');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  document.querySelector('.info').hidden = true;
  startGame(data);
});

const startGame = (data) => {
  initializeVariables(data);
  addEventListenersToGameBoard(data);
};

const initializeVariables = (data) => {
  data.choice = +data.choice;
  data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  data.player1 = 'X';
  data.player2 = 'O';
  data.round = 0;
  data.currentPlayer = 'X';
  data.gameOver = false;
};

const addEventListenersToGameBoard = (data) => {
  document.querySelectorAll('.tile').forEach((tile) => {
    tile.addEventListener('click', (event) => {
      playMove(event.target, data);
    });
  });
};

const playMove = (tile, data) => {
  if (data.gameOver) {
    return;
  }
  if (data.board[tile.getAttribute('value')] !== 'X' && data.board[tile.getAttribute('value')] === 'O') {
    return;
  }
  data.board[tile.getAttribute('value')] = data.currentPlayer;
  console.log(data.board);
  tile.textContent = data.currentPlayer;

  if (data.round >= 4) {
    checkWin(data);
  } else {
    switchTurn(data);
  }
};

const checkWin = (data) => {
  if (data.board[0] === data.currentPlayer
    && data.board[1] === data.currentPlayer
    && data.board[2] === data.currentPlayer
    || data.board[3] === data.currentPlayer
    && data.board[4] === data.currentPlayer
    && data.board[5] === data.currentPlayer
    || data.board[6] === data.currentPlayer
    && data.board[7] === data.currentPlayer
    && data.board[8] === data.currentPlayer
    || data.board[0] === data.currentPlayer
    && data.board[3] === data.currentPlayer
    && data.board[6] === data.currentPlayer
    || data.board[1] === data.currentPlayer
    && data.board[4] === data.currentPlayer
    && data.board[7] === data.currentPlayer
    || data.board[2] === data.currentPlayer
    && data.board[5] === data.currentPlayer
    && data.board[8] === data.currentPlayer
    || data.board[0] === data.currentPlayer
    && data.board[4] === data.currentPlayer
    && data.board[8] === data.currentPlayer
    || data.board[2] === data.currentPlayer
    && data.board[4] === data.currentPlayer
    && data.board[6] === data.currentPlayer) {
    alertWin(data);
    resetGame();
  } else {
    switchTurn(data);
  }
};

const alertWin = (data) => {
  document.querySelector('.gameboard').hidden = true;
  let winner;
  if (data.currentPlayer === data.player1) {
    winner = data.player1Name;
  } else {
    winner = data.player2Name;
  }
  alert(`Congrats ${winner} wins`);
  resetGame();
};

const switchTurn = (data) => {
  data.round++;
  data.currentPlayer = data.currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
  location.reload();
};
