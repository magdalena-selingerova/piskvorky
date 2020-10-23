let player = false;

const currentPlayer = document.querySelector('.info');

const Play = (event) => {
  if (player) {
    event.target.classList.add('board__field--cross');
    event.target.setAttribute('disabled', true);
    currentPlayer.classList.remove('info-krizek');
    currentPlayer.classList.toggle('info-kolecko');
  } else {
    event.target.classList.add('board__field--circle');
    event.target.setAttribute('disabled', true);
    currentPlayer.classList.remove('info-kolecko');
    currentPlayer.classList.toggle('info-krizek');
  }
  player = !player;
};

const btnElm = document.querySelectorAll('#btn_play');
for (let i = 0; i < btnElm.length; i += 1) {
  btnElm[i].addEventListener('click', Play);
}
