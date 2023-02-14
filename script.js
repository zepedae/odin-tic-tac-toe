const player = (value, symbol) => {
  this.value = value;
  this.symbol = symbol;
  let indices = [];

  return {value, symbol, indices};
}

function addMove(tile) {
  tile.innerText = turn.symbol;
  gameboard[tile.value] = turn.value;
  turn.indices.push
  window();
}

function win() {
  if(Object.keys(player1.indices))
  
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[1, 4, 7],
[2, 5, 8],
[3, 6, 9],
[1, 5, 9],
[3, 5, 7],
}



const tiles = document.querySelectorAll('.tile');

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    addMove(tile);
    if (window()) {
      return `${turn} wins!`;
    }
    changeTurn();
  });
});
