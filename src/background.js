// Google Analytics initialization 
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-68030939-2');


chrome.browserAction.onClicked.addListener((tab) => {
    if (tab) {
        try {
            chrome.tabs.sendMessage(tab.id, { action: "toggle_devtools" });  
        }
        catch(err) { } // sendMessage will fail in extensions menu, new tab, etc. 
    }
});
