/* === PASSWORD SYSTEM === */
const PASSWORD = "112";

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const lockMsg = document.getElementById("lockMsg");

  if (input === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    lockMsg.textContent = "❌ Wrong password. Try again.";
    document.getElementById("passwordInput").value = "";
  }
}

/* === PAGE NAVIGATION === */
function showSection(sectionId) {
  document.getElementById("menu").style.display = "none";
  const sections = document.querySelectorAll(".section");
  sections.forEach(s => s.style.display = "none");
  document.getElementById(sectionId).style.display = "block";
}

function showMenu() {
  document.getElementById("menu").style.display = "grid";
  document.querySelectorAll(".section").forEach(s => s.style.display = "none");
}

/* === DAILY LOG === */
function saveEntry() {
  const mood = document.getElementById("mood").value;
  const highlight = document.getElementById("highlight").value.trim();
  const time = new Date().toLocaleString();

  if (!highlight) { alert("Please write something before saving!"); return; }

  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push({ mood, highlight, time });
  localStorage.setItem("entries", JSON.stringify(entries));

  document.getElementById("highlight").value = "";
  document.getElementById("mood").value = "";
  const msg = document.getElementById("savedMsg");
  msg.style.display = "block";
  setTimeout(() => msg.style.display = "none", 1500);
}

/* === MOOD COLOR BACKGROUND === */
document.getElementById("mood").addEventListener("change", e => {
  const mood = e.target.value;
  const body = document.body;
  switch (mood) {
    case "😊": body.style.background = "linear-gradient(135deg,#ffed8b,#ffc107)"; break;
    case "😐": body.style.background = "linear-gradient(135deg,#3e3e3e,#555)"; break;
    case "😢": body.style.background = "linear-gradient(135deg,#1b2735,#2c5364)"; break;
    case "😡": body.style.background = "linear-gradient(135deg,#ff4b1f,#ff9068)"; break;
    case "😴": body.style.background = "linear-gradient(135deg,#001f3f,#003366)"; break;
    case "🤩": body.style.background = "linear-gradient(135deg,#ff00cc,#3333ff)"; break;
    default: body.style.background = "linear-gradient(135deg,#0d0d0d,#1b1b1b)";
  }
});

/* === INIT === */
window.onload = () => {
  document.body.style.overflow = "hidden";
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  if (entries.length) console.log(`Loaded ${entries.length} entries`);
};

