(function () {
  if (sessionStorage.getItem("authed") !== "1") {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("toLetter2").addEventListener("click", () => {
    window.location.href = "letter2.html";
  });
})();
