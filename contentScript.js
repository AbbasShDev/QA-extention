chrome.runtime.sendMessage({ text: "what is my tab_id?" }, (tabId) => {
  let tabIdString = tabId.toString();

  chrome.storage.local.get(function (result) {
    const prevlUrl = result[tabIdString];
    const currentUrl = window.location.href;

    const prevParsed = new URL(prevlUrl);
    const currentParsed = new URL(currentUrl);

    if (
      prevParsed.hostname === "www.google.com" &&
      currentParsed.hostname !== "www.google.com"
    ) {
      let queryArray = prevParsed.searchParams.get("q").split(" ");

      queryArray.push(prevParsed.searchParams.get("q"));

      var pageMarker = new Mark(document.querySelector("body"));

      pageMarker.mark(queryArray);
    }
  });

  var tabIdToUrl = {};
  tabIdToUrl[tabIdString] = window.location.href;
  chrome.storage.local.set(tabIdToUrl);
});
