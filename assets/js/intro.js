// assets/js/intro.js  (REPLACE FULL FILE)
// After blowing candle: go to clock page (NOT main), and set autoplay flag for later.

(function () {
  const stage = document.getElementById("stage");
  let done = false;

  function blow() {
    if (done) return;
    done = true;

    stage.classList.add("blown");

    // Tell later pages that we should try to start the song on main.html
    sessionStorage.setItem("autoplaySong", "1");

    setTimeout(() => {
      window.location.href = "clock.html";
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
