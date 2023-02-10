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

buttonForest = document.querySelector(".button.forest");
