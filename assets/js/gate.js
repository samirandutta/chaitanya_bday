// Change this to her name (or whatever you want)
const PERSON = "Chaitanya";

const question = document.getElementById("question");
const catImg = document.getElementById("catImg");
const message = document.getElementById("message");
const btnRow = document.getElementById("btnRow");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

question.textContent = `Are you ${PERSON}?`;

yesBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

noBtn.addEventListener("click", () => {
  catImg.src = "assets/img/cat2.jpg";
  message.textContent = "This website is not for you.";
  btnRow.style.display = "none";
});
