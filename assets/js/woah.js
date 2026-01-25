// assets/js/woah.js (REPLACE FULL FILE)

document.getElementById("continueBtn").addEventListener("click", () => {
  // ensure main tries to play music
  sessionStorage.setItem("autoplaySong", "1");
  window.location.href = "main.html";
});
