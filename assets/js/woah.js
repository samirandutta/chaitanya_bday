// Build a tiled grid of the same video in the background.
(function () {
  const bg = document.querySelector(".bg");
  const src = "assets/video/catwoah.mp4";

  const grid = document.createElement("div");
  grid.className = "bgGrid";
  bg.appendChild(grid);

  // Choose counts based on screen size
  const cols = Math.max(3, Math.ceil(window.innerWidth / 220));
  const rows = Math.max(4, Math.ceil(window.innerHeight / 220));

  grid.style.setProperty("--cols", cols);
  grid.style.setProperty("--rows", rows);

  const total = cols * rows;

  for (let i = 0; i < total; i++) {
    const v = document.createElement("video");
    v.className = "tile";
    v.autoplay = true;
    v.loop = true;
    v.muted = true;
    v.playsInline = true;

    const s = document.createElement("source");
    s.src = src;
    s.type = "video/mp4";

    v.appendChild(s);
    grid.appendChild(v);

    // Try to kick-start playback (some browsers need it even if muted)
    v.play().catch(() => {});
  }

  // Continue button
  const btn = document.getElementById("continueBtn");
  btn.addEventListener("click", () => {
    // ensure main tries to play music
    sessionStorage.setItem("autoplaySong", "1");
    window.location.href = "main.html";
  });
})();
