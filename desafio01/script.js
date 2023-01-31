const tryBtn = document.querySelector("#tryBtn");
const resetBtn = document.querySelector("#resetBtn");
let randomNumber = Number(Math.round(Math.random() * 10));
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const phrases = [
  `A sua vida e o seu mundo mudam quando você muda`,
  `Seja a mudança que quer ver no mundo`,
  `A primeira e melhor vitória é conquistar-se a si mesmo`,
  `Não são os grandes planos que dão certo. São os pequenos detalhes`,
  `Nós somos o que fazemos repetidamente, a excelência não é um feito, é sim um hábito`,
  `Só existem dois dias no ano em que você não pode fazer nada para ser mais feliz, Ontem e Amanhã`,
  `Aquilo que pedimos aos céus na maioria das vezes encontra-se nas nossas mãos`,
  `Não existe caminho para a felicidade. A felicidade é o caminho`,
  `Cada ferida é uma lição, e cada lição nos torna melhores`,
  `Coisas boas vêm com o tempo. As melhores vêm de repente`,
  `Investir em conhecimento rende sempre os melhores juros.`,
];

tryBtn.addEventListener("click", handleTryClick);
resetBtn.addEventListener("click", handleResetClick);

function handleTryClick(event) {
  event.preventDefault();
  toggleScreen();
  randomPhrase();
}

function handleResetClick() {
  toggleScreen();
}

function randomPhrase() {
  document.querySelector("#phrase").innerText = `${phrases[randomNumber]}`;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
