(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68030939-2', 'auto');
ga('set', 'checkProtocolTask', null); // Disables file protocol checking.


chrome.browserAction.onClicked.addListener((tab) => {
    if (tab) {
        try {
            chrome.tabs.sendMessage(tab.id, { action: "toggle_devtools" });  
            ga('send', 'pageview', '/popup'); // Set page, avoiding rejection due to chrome-extension protocol 
        }
        catch(err) { } // sendMessage will fail in extensions menu, new tab, etc. 
    }
});
