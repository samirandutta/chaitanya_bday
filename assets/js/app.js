// =========================
// Content setup
// =========================
document.getElementById("title").innerText = CONFIG.title;
document.getElementById("subtitle").innerText = CONFIG.subtitle;
document.getElementById("letter").innerText = CONFIG.letter;

// =========================
// Audio (autoplay after intro click)
// =========================
const song = document.getElementById("song");
song.src = CONFIG.song;

(function tryAutoplay() {
  const flag = sessionStorage.getItem("autoplaySong");
  if (flag === "1") {
    sessionStorage.removeItem("autoplaySong");
    song.play().catch(() => {
      // If a browser blocks autoplay, it will just stay paused.
      // (No button requested, so we fail silently.)
    });
  }
})();

// =========================
// Gallery
// =========================
const gallery = document.getElementById("gallery");
CONFIG.images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});

// =========================
// Birthday counter
// =========================
const birth = new Date(CONFIG.birthDate);
const timer = document.getElementById("timer");

function updateTimer() {
  const now = new Date();
  const diff = now - birth;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  timer.innerText = `${days} days of being amazing ✨`;
}

updateTimer();
setInterval(updateTimer, 1000 * 60 * 60);

// =========================
// Balloons (if you already had them)
// =========================
(function balloons() {
  let layer = document.querySelector(".balloon-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "balloon-layer";
    layer.setAttribute("aria-hidden", "true");
    document.body.prepend(layer);
  }

  const colors = ["#ff7aa2", "#ffd27d", "#96e6ff", "#bef5cd", "#d7beff"];

  function spawn(side) {
    const b = document.createElement("div");
    b.className = "balloon";

    const size = 28 + Math.random() * 28;
    b.style.width = `${size}px`;
    b.style.height = `${size * 1.3}px`;
    b.style.background = colors[Math.floor(Math.random() * colors.length)];

    const edge = 100;
    const x = side === "left"
      ? 10 + Math.random() * edge
      : window.innerWidth - edge - 10 + Math.random() * edge;

    b.style.left = `${x}px`;
    b.style.animationDuration = `${6 + Math.random() * 6}s`;
    b.style.setProperty("--drift", `${Math.random() * 80 - 40}px`);
    b.style.setProperty("--spin", `${Math.random() * 20 - 10}deg`);

    layer.appendChild(b);
    b.addEventListener("animationend", () => b.remove());
  }

  for (let i = 0; i < 12; i++) spawn(i % 2 === 0 ? "left" : "right");
  setInterval(() => spawn(Math.random() < 0.5 ? "left" : "right"), 400);
})();
