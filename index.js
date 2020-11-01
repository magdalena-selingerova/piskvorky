'use strict';

let player = false;
let i = 0;
const currentPlayer = document.querySelector('.info');
const btnElm = document.querySelectorAll('#btn_play');

const Play = (event) => {
  if (player) {
    event.target.classList.add('board__field--cross');
    event.target.setAttribute('disabled', true);
    currentPlayer.classList.remove('info-krizek');
    currentPlayer.classList.toggle('info-kolecko');
    winner(event.target);
  } else {
    event.target.classList.add('board__field--circle');
    event.target.setAttribute('disabled', true);
    currentPlayer.classList.remove('info-kolecko');
    currentPlayer.classList.toggle('info-krizek');
    winner(event.target);
  }
  player = !player;
};

for (let i = 0; i < btnElm.length; i += 1) {
  btnElm[i].addEventListener('click', Play);
}

//5.úkol
//zjistit, na kterém řádku a ve kterém sloupci jsme

const boardSize = 10; // 10x10

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < btnElm.length) {
    if (field === btnElm[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
//getField(row,column)
const getField = (row, column) => btnElm[row * boardSize + column];

//getSymbol(field) - vrací, co je v políčku za symbol

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

//výherní funkce isWinningMove

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1;
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

const winner = (field) => {
  if (isWinningMove(field) === true) {
    if (getSymbol(field) === 'circle') {
      confirm('Vyhrává kolečko! Chcete hrát znovu?');
      location.reload();
    } else if (getSymbol(field) === 'cross') {
      confirm('Vyhrává křížek! Chcete hrát znovu?');
      location.reload();
    }
  }
};
