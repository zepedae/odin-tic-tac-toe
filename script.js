const player = (value, symbol) => {
  this.value = value;
  this.symbol = symbol;
  const indices = [];

  return { value, symbol, indices };
};

const form = document.querySelector('#player-info');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  document.querySelector('.info').setAttribute('hidden', true);
  console.log(data);
});

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
