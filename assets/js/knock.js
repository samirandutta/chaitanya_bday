(function () {
  if (sessionStorage.getItem("authed") !== "1") {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("toLetter").addEventListener("click", () => {
    window.location.href = "letter1.html";
  });
})();
