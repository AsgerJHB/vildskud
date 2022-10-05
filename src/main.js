import "./style.css";

const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const btn1 = document.getElementById("togglebtn1");
const btn2 = document.getElementById("togglebtn2");
const btn3 = document.getElementById("togglebtn3");

btn1.addEventListener("click", (e) => {
  info1.classList.toggle("hidden");
});

btn2.addEventListener("click", (e) => {
  info2.classList.toggle("hidden");
});

btn3.addEventListener("click", (e) => {
  info3.classList.toggle("hidden");
});