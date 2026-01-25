// assets/js/clock.js  (NEW FILE)
// Computes time since 18 July 11:15 AM IST (fixed at +05:30), updates every second.

const timeEl = document.getElementById("time");
const btn = document.getElementById("toMain");

/**
 * IMPORTANT: Set the year you want here.
 * Using 2025 by default (most recent past July relative to now for many cases).
 * If needed, change 2025 -> 2024 or 2023 etc.
 */
const MEET_ISO_IST = "2025-07-18T11:15:00+05:30"; // 18 July 11:15 AM IST

const meet = new Date(MEET_ISO_IST).getTime();

function pad2(n){ return String(n).padStart(2, "0"); }

function render(){
  const now = Date.now();
  let diff = now - meet;

  if (diff < 0) diff = 0;

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timeEl.textContent = `${days} days, ${pad2(hours)} hours, ${pad2(minutes)} minutes, ${pad2(seconds)} seconds`;
}

render();
setInterval(render, 1000);

// Button to main page.
// We keep the autoplay flag and set it again on click for best chance of audio playing.
btn.addEventListener("click", () => {
  sessionStorage.setItem("autoplaySong", "1");
  window.location.href = "woah.html";
});
