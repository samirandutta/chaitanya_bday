(function () {
  const cake = document.getElementById("cake");
  const btn = document.getElementById("blowBtn");

  let done = false;

  function blow() {
    if (done) return;
    done = true;

    cake.classList.add("blown");
    btn.disabled = true;
    btn.textContent = "Yay! 🎂✨";

    // go to next page after the animation
    setTimeout(() => {
      window.location.href = "main.html";
    }, 1200);
  }

  // click flame/cake or button
  cake.addEventListener("click", blow);
  btn.addEventListener("click", blow);

  // keyboard accessibility
  cake.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      blow();
    }
  });
})();
