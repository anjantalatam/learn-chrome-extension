// // create a chrome alarm which runs every one second
// // => every 1 second alarm event is fired
// chrome.alarms.create({
//   periodInMinutes: 1 / 60,
// });

// chrome.alarms.onAlarm.addListener((alarm) => {
//   // every 1 second this will be executed
//   chrome.storage.local.get(["timer"], (res) => {
//     const time = res.timer ?? 0;

//     chrome.storage.local.set({
//       timer: time + 1,
//     });

//     chrome.action.setBadgeText({
//       text: `${time + 1}`,
//     });
//   });
// });
