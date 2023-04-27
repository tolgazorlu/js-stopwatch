window.onload = function (){
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var appendHours = document.getElementById("hours");
  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  let elapsedTime = 0;
  let startTime = 0;
  let delta = 0;
  let timer;
  
  start.onclick = function (){
    clearInterval(timer);
    startTime = Date.now();
    timer = setInterval(() => {
      delta = Date.now() - startTime + elapsedTime;
      seconds = delta / 1000;
      minutes = seconds / 60;
      hours = minutes / 60;
      appendSeconds.innerHTML = ('0' + Math.floor(seconds) % 60).slice(-2);
      appendMinutes.innerHTML = ('0' + Math.floor(minutes) % 60).slice(-2);
      appendHours.innerHTML = ('0' + Math.floor(hours)).slice(-2);
    }, 1000);
    elapsedTime = delta;
  }
  
  pause.onclick = function () {
    clearInterval(timer);
  };
  
  reset.onclick = function () {
    startTime = 0;
    delta = 0;
    elapsedTime = 0;
    clearInterval(timer);
    appendHours.innerHTML = "00";
    appendMinutes.innerHTML = "00";
    appendSeconds.innerHTML = "00";
  };
}

function darkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}
