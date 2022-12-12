const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;

  // set user name in chrome storage when save button is clicked
  chrome.storage.sync.set({ name }, () => {
    console.log(`Name has been set to ${name}`);
  });
});

// retrieve saved user name on load
chrome.storage.sync.get(["name", "test"], (res) => {
  const name = res.name ?? "???";
  nameInput.value = name;
});
