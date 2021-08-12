chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text == "what is my tab_id?") {
    sendResponse(sender.tab.id);
  }
});

// console.log("this is bg js");

// chrome.tabs.onActivated.addListener((activeInfo) => {
//   console.log(activeInfo.tabId);

//   chrome.tabs.get(activeInfo.tabId, function (tab) {
//     console.log(tab.url);
//   });
// });
// chrome.runtime.onMessage.addListener((msg, sender_info, Reply) => {
//   Reply(window.location);
// });
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

//   //   var newUrl = changeInfo.url;
//   //   if (newUrl) {
//   //     var tabIdToUrl = {};
//   //     tabIdToUrl[tabId.toString()] = newUrl;
//   //     chrome.storage.local.set(tabIdToUrl);
//   //   }
// });
// chrome.webNavigation.onUpdated.addListener(function (data) {
//   if (data.frameId !== 0) {
//     // Don't trigger on iframes
//     return;
//   }
//   var tabIdToUrl = {};
//   tabIdToUrl[data.tabId.toString()] = data.url;
//   chrome.storage.local.set(tabIdToUrl);
// });

// var tabIdToUrl = {};
// //   tabIdToUrl[data.tabId.toString()] = data.url;
// //   chrome.storage.local.set(tabIdToUrl);

// chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
//   chrome.storage.local.get(function (result) {
//     chrome.runtime.onMessage.addListener((msg, sender_info, Reply) => {
//       let tabId = tabs[0].id.toString();
//       Reply(result[tabId]);
//     });
//   });

//   chrome.storage.local.get(tabs[0].id, function (item) {
//     // var url = item[tabId];
//   });
// use `url` here inside the callback because it's asynchronous!
// });
// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

// console.log(getCurrentTab());
