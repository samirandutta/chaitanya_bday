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

    setTimeout(() => {
      window.location.href = "main.html";
    }, 1200);
  }

  cake.addEventListener("click", blow);
  btn.addEventListener("click", blow);

  cake.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      blow();
    }
  });
})();
