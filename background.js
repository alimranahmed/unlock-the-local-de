chrome.action.onClicked.addListener(async (tab) => {
  
  const settings = await chrome.contentSettings.javascript.get({
    primaryUrl: tab.url
  });

  const pattern = "*://*.thelocal.de/*";
  
  if (settings.setting === 'block') {

    // console.log("JavaScript is currently blocked. Enabling JavaScript...");

    await chrome.contentSettings.javascript.set({
      primaryPattern: pattern,
      setting: "allow"
    });

  } else {

    //console.log("JavaScript is currently enabled. Disabling JavaScript...");

    await chrome.contentSettings.javascript.set({
      primaryPattern: pattern,
      setting: "block"
    });
  }

  chrome.tabs.sendMessage(tab.id, { action: "reloadTab" });
});