const form = document.getElementById("loginForm");
const u = document.getElementById("username");
const p = document.getElementById("password");
const err = document.getElementById("error");

const USERNAME = "chaitanyaheavydriver";
const PASSWORD = "ilovefish";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = (u.value || "").trim();
  const pass = (p.value || "").trim();

  if (user === USERNAME && pass === PASSWORD) {
    // mark authenticated for this session (lightweight)
    sessionStorage.setItem("authed", "1");
    window.location.href = "cake.html";
    return;
  }

  err.textContent = "Nope. Try again 🙂";
  p.value = "";
  p.focus();
});
