chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "reloadTab") {
    location.reload();
  }
});
