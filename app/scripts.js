const clock = document.querySelector('.clock');

const changeTime = function() {
  const time = new Date();

  let hours = time.getHours();
  hours = (hours < 10) ? '0' + hours : hours;

  let minutes = time.getMinutes();
  minutes = (minutes < 10) ? '0' + minutes : minutes;

  let seconds = time.getSeconds();
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  const hex = '#' + hours + minutes + seconds;

  clock.innerHTML = hex;
  document.body.style.background = hex;
};

changeTime();
const timer = setInterval(changeTime, 1000);
