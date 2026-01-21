document.getElementById("title").innerText = CONFIG.title;
document.getElementById("subtitle").innerText = CONFIG.subtitle;
document.getElementById("letter").innerText = CONFIG.letter;

const song = document.getElementById("song");
song.src = CONFIG.song;

document.getElementById("playBtn").onclick = () => {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
};

const gallery = document.getElementById("gallery");
CONFIG.images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});

const birth = new Date(CONFIG.birthDate);
const timer = document.getElementById("timer");

function updateTimer() {
  const now = new Date();
  const diff = now - birth;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  timer.innerText = days + " days of being amazing 💫";
}

updateTimer();
setInterval(updateTimer, 1000 * 60 * 60);