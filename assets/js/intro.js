// assets/js/intro.js (FULL) — no button, and plays song after blowing

(function () {
  const cake = document.getElementById("cake");
  let done = false;

  // put your song here (same file you use on main page)
  const song = new Audio("assets/img/song.mp3");
  song.loop = true;

  function blow() {
    if (done) return;
    done = true;

    cake.classList.add("blown");

    // play song (allowed because this is triggered by a user click)
    song.play().catch(() => {});

    // redirect after a moment
    setTimeout(() => {
      window.location.href = "main.html";
    }, 1300);
  }

  cake.addEventListener("click", blow);

  cake.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      blow();
    }
  });
})();
