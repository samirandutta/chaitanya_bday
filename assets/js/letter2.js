(function () {
  if (sessionStorage.getItem("authed") !== "1") {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("toMain").addEventListener("click", () => {
    sessionStorage.setItem("autoplaySong", "1");
    window.location.href = "main.html";
  });
})();
