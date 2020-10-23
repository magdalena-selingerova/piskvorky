console.log('funguju');

//přidat na kliknutí do pole kolečko

/*const circle = event.target.classList.add('board__field--circle');
const cross = event.target.classList.add('board__field--cross');  */
let player = false;
const Play = (event) => {
  if (player) {
    event.target.classList.add('board__field--cross');
    event.target.setAttribute('disabled', true);
  } else {
    event.target.classList.add('board__field--circle');
    event.target.setAttribute('disabled', true);
  }
  player = !player;
};

const btnElm = document.querySelectorAll('#btn_play');
for (let i = 0; i < btnElm.length; i += 1) {
  btnElm[i].addEventListener('click', Play);
}
