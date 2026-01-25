// Change this to her name (or whatever you want)
const PERSON = "XXX";

const question = document.getElementById("question");
const catImg = document.getElementById("catImg");
const message = document.getElementById("message");
const btnRow = document.getElementById("btnRow");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

question.textContent = `Are you ${PERSON}?`;

yesBtn.addEventListener("click", () => {
  // go to cake page
  window.location.href = "cake.html";
});

noBtn.addEventListener("click", () => {
  // show second image + message, hide buttons
  catImg.src = "assets/img/cat2.jpg";
  message.textContent = "This website is not for you.";
  btnRow.style.display = "none";
});
