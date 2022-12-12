const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const now = new Date().toLocaleTimeString();

timeElement.textContent = `The time is: ${now}`;

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???";
  nameElement.innerText = `Your name is ${name}`;
});
