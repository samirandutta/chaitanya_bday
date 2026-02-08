// assets/js/letter2.js
(function () {
  if (sessionStorage.getItem("authed") !== "1") {
    window.location.href = "index.html";
    return;
  }

  const env = document.getElementById("envelope");

  function go(){
    // If main.html tries to autoplay your song, this gives it a better chance
    sessionStorage.setItem("autoplaySong", "1");
    window.location.href = "main.html";
  }

  env.addEventListener("click", go);
  env.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go();
    }
  });
})();
