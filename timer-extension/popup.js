const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???";
  console.log(name, "name");
  nameElement.innerText = `Your name is ${name}`;
});

function updateTimer() {
  const now = new Date().toLocaleTimeString();
  timeElement.textContent = `The time is: ${now}`;

  chrome.storage.local.get(["timer"], (res) => {
    const timer = res.timer ?? 0;
    timerElement.innerText = `The timer is at: ${timer} seconds`;
  });
}

updateTimer();
setInterval(() => {
  updateTimer();
}, 1000);
