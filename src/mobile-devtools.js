function addScriptToHead(url) {
	const script = document.createElement('script');
	script.src = chrome.extension.getURL(url);
	(document.head||document.documentElement).appendChild(script);
}

let loadedEruda = false;
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "toggle_devtools") {
		if (!loadedEruda) {
			addScriptToHead('eruda.min.js');
			loadedEruda = true;
		}
		addScriptToHead('toggle-devtools.js');
	}
});
