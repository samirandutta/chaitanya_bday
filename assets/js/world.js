const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const worldTap = document.getElementById("worldTap");

function revealUs() {
  step1.classList.add("fadeOut");

  setTimeout(() => {
    step1.style.display = "none";
    document.getElementById("gifBg").style.opacity = "1";
    step2.classList.add("show");
  }, 650);
}


worldTap.addEventListener("click", revealUs);
worldTap.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    revealUs();
  }
});

document.getElementById("toMain").addEventListener("click", () => {
  sessionStorage.setItem("autoplaySong", "1");
  window.location.href = "team.html";
});
