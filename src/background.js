chrome.browserAction.onClicked.addListener((tab) => {
    if (tab) {
        try {
            chrome.tabs.sendMessage(tab.id, { action: "toggle_devtools" });  
        }
        catch(err) { } // sendMessage will fail in extensions menu, new tab, etc. 
    }
});
