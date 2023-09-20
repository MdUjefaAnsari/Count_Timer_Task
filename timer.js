let timeout;
let interval;
let timeoutPaused = false;
let intervalPaused = false;
let remainingTimeout = 0;
let remainingInterval = 0;

document.getElementById("setTimeout").addEventListener("click", () => {
  let b = document.getElementById("time_duration").value;
  if (b < 0) {
    alert("negative value is not allowed!");
  } else {
    startTimeout(b);
  }
});

function startTimeout(b) {
  remainingTimeout = b;
  timeout = setTimeout(() => timeoutFun(b), 1000);
  function timeoutFun(b) {
    b = b - 1;
    if (b < 0) {
      clearTimeout(timeout);
      alert("setTimeout completed!");
    } else if (b > 59) {
      clearTimeout(timeout);
      alert("setTimeout time must be 60 sec or less!");
    } else {
      document.getElementById("forTimeout").innerHTML =
        "The setTimeout time remaining: " + b + " seconds";
      remainingTimeout = b;
      timeout = setTimeout(() => timeoutFun(b), 1000); // Call timeoutFun again after 1 second
     
    }
  }
}

document.getElementById("setInterval").addEventListener("click", () => {
  let a = document.getElementById("time_duration").value;
  if (a < 0) {
    alert("negative value is not allowed!");
  } else {
    startInterval(a);
  }
});

function startInterval(a) {
  remainingInterval = a;
  interval = setInterval(intervalFun, 1000);

  function intervalFun() {
    a = a - 1;
    if (a < 0) {
      clearInterval(interval);
      alert("setInterval completed!");
    } else if (a > 59) {
      clearInterval(interval);
      alert("setInterval time must be 60 sec or less!");
    } else {
      document.getElementById("forInterval").innerHTML =
        "The setInterval time remaining: " + a + " seconds";
      remainingInterval = a;
    }
  }
}

document.getElementById("pauseTimeout").addEventListener("click", () => {
  if (timeout) {
    clearTimeout(timeout);
    timeoutPaused = true;
  }
});

document.getElementById("resumeTimeout").addEventListener("click", () => {
  if (timeoutPaused) {
    startTimeout(remainingTimeout);
    timeoutPaused = false;
  }
});

document.getElementById("pauseInterval").addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    intervalPaused = true;
  }
});

document.getElementById("resumeInterval").addEventListener("click", () => {
  if (intervalPaused) {
    startInterval(remainingInterval);
    intervalPaused = false;
  }
});
