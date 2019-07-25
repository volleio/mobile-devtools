function OpenMobileDevtools()
{
	const erudaScript = document.createElement('script');
	erudaScript.src = chrome.runtime.getURL('/node_modules/eruda/eruda.min.js');
	erudaScript.onload = function() {
		eruda.init();
	}
	document.head.appendChild(erudaScript);
}

let readyStateCheckInterval = setInterval(function() {
if (document.readyState === 'complete') {
	clearInterval(readyStateCheckInterval);

	OpenMobileDevtools();
}
}, 10);
