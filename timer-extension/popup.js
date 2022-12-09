const timeElement = document.getElementById("time");
const now = new Date().toLocaleTimeString();

timeElement.textContent = `The time is: ${now}`;

// method to set title from code
chrome.action.setTitle({
  title: "Popup opened",
});

// badge: Refer Focus Todo app that shows timer as the badge
chrome.action.setBadgeText(
  {
    text: "25",
  },
  () => {
    setTimeout(() => {
      chrome.action.setBadgeText({ text: "2525" });
    }, 2000);
  }
);

// set background color for badge
chrome.action.setBadgeBackgroundColor({ color: "#00FF00" });

// set badge text color
// chrome.action.setBadgeTextColor({ color: "pink" }); // not working
