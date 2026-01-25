const introStage = document.getElementById("introStage");
const finalStage = document.getElementById("finalStage");
const lighthouseBtn = document.getElementById("lighthouseBtn");
const bg = document.querySelector(".bg");

function revealFinal() {
  introStage.classList.add("fadeOut");

  setTimeout(() => {
    bg.classList.add("show");
    finalStage.classList.add("show");
    finalStage.setAttribute("aria-hidden", "false");
  }, 450);
}

lighthouseBtn.addEventListener("click", revealFinal);
lighthouseBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    revealFinal();
  }
});

document.getElementById("continueBtn").addEventListener("click", () => {
  sessionStorage.setItem("autoplaySong", "1");
  window.location.href = "world.html";
});
