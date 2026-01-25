(function () {
  const stage = document.getElementById("stage");
  let done = false;

  function blow() {
    if (done) return;
    done = true;

    stage.classList.add("blown");

    // Tell main.html to auto-play the song
    sessionStorage.setItem("autoplaySong", "1");

    setTimeout(() => {
      window.location.href = "main.html";
    }, 950);
  }

  stage.addEventListener("click", blow);

  stage.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      blow();
    }
  });
})();
