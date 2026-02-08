// assets/js/knock.js
// Plays a cute "knock knock" via Web Audio (no external audio file needed)
// and triggers a little shake animation on the text.

(function () {
  // Auth guard
  if (sessionStorage.getItem("authed") !== "1") {
    window.location.href = "index.html";
    return;
  }

  const knockBox = document.getElementById("knockBox");
  const btn = document.getElementById("toLetter");
  let played = false;

  function playKnockOnce(){
    if (played) return;
    played = true;

    // Visual shake
    knockBox.classList.remove("shake");
    void knockBox.offsetWidth; // reflow
    knockBox.classList.add("shake");

    // Sound (may be blocked until user gesture; we also call this on first click)
    try{
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();

      function thud(at){
        const noise = ctx.createBufferSource();
        const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.08), ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i=0;i<data.length;i++){
          data[i] = (Math.random()*2-1) * Math.exp(-i/700);
        }
        noise.buffer = buffer;

        const lp = ctx.createBiquadFilter();
        lp.type = "lowpass";
        lp.frequency.value = 420;
        lp.Q.value = 0.9;

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, at);
        g.gain.exponentialRampToValueAtTime(0.6, at + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, at + 0.10);

        noise.connect(lp);
        lp.connect(g);
        g.connect(ctx.destination);

        noise.start(at);
        noise.stop(at + 0.12);
      }

      const t0 = ctx.currentTime + 0.03;
      thud(t0);
      thud(t0 + 0.28);

      setTimeout(() => { try{ ctx.close(); }catch(e){} }, 800);
    }catch(e){
      // ignore
    }
  }

  // Try on load (may fail due to autoplay policy)
  playKnockOnce();

  // Guarantee it happens on first user gesture
  const firstGesture = () => playKnockOnce();
  window.addEventListener("pointerdown", firstGesture, { once: true });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") firstGesture();
  }, { once: true });

  btn.addEventListener("click", () => {
    window.location.href = "letter1.html";
  });
})();
