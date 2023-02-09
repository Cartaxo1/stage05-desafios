const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const buttonPLay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonAdd = document.querySelector(".add-5");
const buttonSub = document.querySelector(".sub-5");


function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

buttonPLay.addEventListener("click", countdown);

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      updateTimerDisplay(25, 0)
      return;
    }

    if (seconds <= 0) {
      seconds = 2;
      --minutes;
    }

    updateTimerDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

