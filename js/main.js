const correctPin = "1002";
let inputPin = [];

const pins = document.querySelectorAll(".pin");
const pinBox = document.querySelector(".pin-box");

function pressKey(num) {
  if (inputPin.length >= 4) return;

  inputPin.push(num);
  updateUI();

  if (inputPin.length === 4) {
    setTimeout(checkPin, 300);
  }
}

function deleteKey() {
  inputPin.pop();
  updateUI();
}

function updateUI() {
  pins.forEach((pin, index) => {
    if (index < inputPin.length) {
      pin.classList.add("filled");
    } else {
      pin.classList.remove("filled");
    }
  });
}
function checkPin() {
  if (inputPin.join("") === correctPin) {
    window.location.href = "success.html";
  } else {
    pinBox.classList.add("shake");
    setTimeout(() => {
      pinBox.classList.remove("shake");
      inputPin = [];
      updateUI();
    }, 300);
  }
}

const yearNum = document.getElementById("yearNum");
const ddayEl = document.getElementById("dday");

setTimeout(() => {
  yearNum.style.transform = "translateY(-100%)";

  setTimeout(() => {
    yearNum.innerText = "6";
    yearNum.style.transition = "none";
    yearNum.style.transform = "translateY(100%)";

    requestAnimationFrame(() => {
      yearNum.style.transition = "transform 0.8s ease";
      yearNum.style.transform = "translateY(-3px)";
    });
  }, 1000);
}, 1000);

let current = 1;
const total = 365;
const duration = 2500;
const interval = duration / total;

const counter = setInterval(() => {
  ddayEl.innerText = current;
  current++;

  if (current > total) {
    clearInterval(counter);
  }
}, interval);

const items = document.querySelectorAll(".item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

items.forEach(item => observer.observe(item));