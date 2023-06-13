var sec = 0;
var min = 0;
var hour = 0;

var secval = document.getElementById("sec");
var minval = document.getElementById("min");
var hourval = document.getElementById("hour");
var startbtn = document.getElementById("startbtn");
var stopbtn = document.getElementById("stopbtn");

function renderval() {
  secval.innerHTML = sec;
  minval.innerHTML = min;
  hourval.innerHTML = hour;
}

var interval;

function start() {
  // startbtn.disabled = true;
  stopbtn.disabled = false;
  interval = setInterval(function () {
    timer();
  }, 100);
}

function timer() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      hour++;
      min = 0;
    }
  }
  renderval();
}

function stop() {
  // startbtn.disabled = false;
  stopbtn.disabled = true;

  clearInterval(interval);
}

function reset() {
  sec = 0;
  min = 0;
  hour = 0;

  stop();
  renderval();
}
