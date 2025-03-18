const start = document.getElementById("start");
const stopButton = document.getElementById("stop");
const reserButton = document.getElementById("reset");
const timer = document.getElementById("timer");

let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;

const formatTime = () => {
  return `${String(hours).padStart(2, "0")}:
          ${String(minutes).padStart(2, "0")}:
          ${String(seconds).padStart(2, "0")}`;
};

start.addEventListener("click", () => {
  start.disabled = true;
  stopButton.disabled = false;
  reserButton.disabled = false;

  interval = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    timer.textContent = formatTime();
  }, 1000);
});

stopButton.addEventListener("click", () => {
  start.disabled = false;
  stopButton.disabled = true;

  clearInterval(interval);
});

reserButton.addEventListener("click", () => {
  reserButton.disabled = true;
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = formatTime();
});
