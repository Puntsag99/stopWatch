const start = document.getElementById("start");
const stopButton = document.getElementById("stop");
const timer = document.getElementById("timer");

let interval;
let seconds = 0;

start.addEventListener("click", () => {
  interval = setInterval(() => {
    seconds++;
  }, 1000);
  console.log("first");
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});
