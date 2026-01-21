// =========================
// Content setup
// =========================
document.getElementById("title").innerText = CONFIG.title;
document.getElementById("subtitle").innerText = CONFIG.subtitle;
document.getElementById("letter").innerText = CONFIG.letter;

const song = document.getElementById("song");
song.src = CONFIG.song;

document.getElementById("playBtn").onclick = () => {
  song.paused ? song.play() : song.pause();
};

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
// Balloon animation
// =========================
(function balloons() {
  const layer = document.querySelector(".balloon-layer");
  const colors = [
    "#ff7aa2",
    "#ffd27d",
    "#96e6ff",
    "#bef5cd",
    "#d7beff"
  ];

  function spawn(side) {
    const b = document.createElement("div");
    b.className = "balloon";

    const size = 26 + Math.random() * 26;
    b.style.width = `${size}px`;
    b.style.height = `${size * 1.3}px`;
    b.style.background = colors[Math.floor(Math.random() * colors.length)];

    const x = side === "left"
      ? Math.random() * 80
      : window.innerWidth - 80 + Math.random() * 80;

    b.style.left = `${x}px`;
    b.style.animationDuration = `${6 + Math.random() * 6}s`;
    b.style.setProperty("--drift", `${Math.random() * 80 - 40}px`);
    b.style.setProperty("--spin", `${Math.random() * 20 - 10}deg`);

    layer.appendChild(b);
    b.addEventListener("animationend", () => b.remove());
  }

  setInterval(() => {
    spawn(Math.random() < 0.5 ? "left" : "right");
  }, 450);
})();
