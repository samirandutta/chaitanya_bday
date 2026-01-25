const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const worldTap = document.getElementById("worldTap");

function revealUs() {
  // fade out first step
  step1.classList.add("fadeOut");

  // show second step after a beat
  setTimeout(() => {
    step2.classList.add("show");
    step2.setAttribute("aria-hidden", "false");
  }, 450);
}

worldTap.addEventListener("click", revealUs);
worldTap.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    revealUs();
  }
});

document.getElementById("toMain").addEventListener("click", () => {
  // keep music autoplay intent
  sessionStorage.setItem("autoplaySong", "1");
  window.location.href = "main.html";
});
