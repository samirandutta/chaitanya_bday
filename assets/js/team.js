document.getElementById("continueBtn").addEventListener("click", () => {
  sessionStorage.setItem("autoplaySong", "1");
  window.location.href = "together.html";
});
