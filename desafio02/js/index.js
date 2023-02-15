const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const buttonPLay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonAdd = document.querySelector(".add-5");
const buttonSub = document.querySelector(".sub-5");
let timerTimeOut;

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

buttonPLay.addEventListener("click", countdown);

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    updateTimerDisplay(minutes, 0);

    if (minutes === 0 && seconds === 0) {
      updateTimerDisplay(25, 0);
      timeEnd()
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    updateTimerDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

buttonStop.addEventListener("click", function () {
  clearTimeout(timerTimeOut);
});

buttonAdd.addEventListener("click", function () {
  let minutes = Number(minutesDisplay.textContent);
  let addMinutes = minutes;
  minutesDisplay.textContent = addMinutes + 5;
});

buttonSub.addEventListener("click", function () {
  let minutes = Number(minutesDisplay.textContent);
  let subMinutes = minutes;
  minutesDisplay.textContent = subMinutes - 5;
  if (minutes <= 0) {
    minutesDisplay.textContent = 00;
  }
});

const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener("click", handleButtonClick);
}

function handleButtonClick(event) {
  const bg = event.currentTarget.querySelector(".bg");
  const design = event.currentTarget.querySelector(".design");

  const activeBgButton = document.querySelector(".button .bg.active");
  if (activeBgButton) {
    activeBgButton.classList.remove("active");
  }

  const activeDesign = document.querySelector(".button .design.active-fill");
  if (activeDesign) {
    activeDesign.classList.remove("active-fill");
  }

  bg.classList.add("active");
  design.classList.add("active-fill");
}

const buttonForest = document.querySelector(".button.forest");
const buttonRain = document.querySelector(".button.rain");
const buttonCoffe = document.querySelector(".button.coffe");
const ButtonFire = document.querySelector(".button.fireplace");

const forestAudio = new Audio("./src/Floresta.wav");
const rainAudio = new Audio("./src/Chuva.wav");
const coffeAudio = new Audio("./src/Cafeteria.wav");
const fireAudio = new Audio("./src/Lareira.wav");
const bellSound = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
);

buttonForest.addEventListener("click", soundForest);

function soundForest() {
  forestAudio.loop = true;
  forestAudio.play();
}

buttonRain.addEventListener("click", soundRain);

function soundRain() {
  rainAudio.loop = true;
  rainAudio.play();
}

buttonCoffe.addEventListener("click", coffeSound);

function coffeSound() {
  coffeAudio.loop = true;
  coffeAudio.play();
}

ButtonFire.addEventListener("click", soundFireplace);

function soundFireplace() {
  fireAudio.loop = true;
  fireAudio.play();
}

function timeEnd() {
  bellSound.play()
}
