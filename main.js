function time() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM"; // will change to pm depending on timezone

  if (hour == 0) {
    hour = 12;
    // 12h clock
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = hour + ":" + minutes + ":" + seconds + session;
  let clockElement = document.querySelector("#clock");
  clockElement.innerText = currentTime;
  clockElement.textContent = currentTime;

  setTimeout(time, 1000);
  // runs the function every second
}
time();

// Coded without Coffeeeeeeeeee ☕☕☕☕☕☕☕
