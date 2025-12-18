let userId = localStorage.getItem("userId");
let entries = localStorage.getItem("entries") || 0;
let score = 0;

if (!userId) {
  userId = "USER_" + Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("userId", userId);
}

document.getElementById("userIdText").innerText = "Guest ID: " + userId;
updateEntries();

function updateEntries() {
  document.getElementById("entryText").innerText =
    "Your Entries: " + entries;
}

function startGame() {
  score = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("gameArea").classList.remove("hidden");
  document.getElementById("drawArea").classList.add("hidden");
}

function tap() {
  score++;
  document.getElementById("score").innerText = score;
}

function finishGame() {
  entries++;
  localStorage.setItem("entries", entries);
  updateEntries();
  alert("आपको 1 Entry मिली");
  document.getElementById("gameArea").classList.add("hidden");
}

function showDraw() {
  document.getElementById("drawArea").classList.remove("hidden");
  document.getElementById("gameArea").classList.add("hidden");
  document.getElementById("drawEntries").innerText =
    "Your Entries: " + entries;
}
