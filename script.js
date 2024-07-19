let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".button");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startButton = document.getElementById("button-start");
let reset = document.getElementById("button-reset");
let pause = document.getElementById("button-pause");
let time = document.getElementById("time");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
  };

  focusButton.addEventListener("click", () => {
    removeFocus();
    focusButton.classList.add("button-focus");
    pauseTimer();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  });
  
  shortBreakButton.addEventListener("click", () => {
    active = "short";
    removeFocus();
    shortBreakButton.classList.add("button-focus");
    pauseTimer();
    minCount = 4;
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
  });
  
  longBreakButton.addEventListener("click", () => {
    active = "long";
    removeFocus();
    longBreakButton.classList.add("button-focus");
    pauseTimer();
    minCount = 14;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  });