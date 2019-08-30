chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "toggle_devtools") {
		sendResponse({ success: true });
		
		if (document.getElementById('toggle-devtools.js'))
			document.getElementById('toggle-devtools.js').remove();
		
		addScriptToHead('toggle-devtools.js');
	}
});

addLoadingSpinner();
addScriptToHead('eruda.min.js');
addScriptToHead('toggle-devtools.js');


function addScriptToHead(url) {
	const script = document.createElement('script');
	script.id = url;
	script.src = chrome.extension.getURL(url);
	(document.head||document.documentElement).appendChild(script);
}

function addLoadingSpinner() {
	const styles = document.createElement('style');
	(document.head||document.documentElement).appendChild(styles);
	styles.innerHTML = `
		.mobile-devtools-loader,
		.mobile-devtools-loader:before,
		.mobile-devtools-loader:after {
			position: fixed;
			bottom: 100px;
			margin-left: 50%;
			margin-right: 50%;
			width: 10px;
			height: 40px;
			z-index: 999999999;
			background: #2196f3;
			animation: mobile-devtool-loading 1s infinite ease-in-out;
		}
		.mobile-devtools-loader {
			color: #2196f3;
			transform: translateZ(0);
			animation-delay: -0.16s;
		}
		.mobile-devtools-loader:before,
		.mobile-devtools-loader:after {
			position: absolute;
			top: 0;
			content: '';
		}
		.mobile-devtools-loader:before {
			left: -25px;
			animation-delay: -0.32s;
		}
		.mobile-devtools-loader:after {
			left: 15px;
		}
		@keyframes mobile-devtool-loading {
			0%,
			80%,
			100% {
				box-shadow: 0 0;
				height: 40px;
			}
			40% {
				box-shadow: 0 -20px;
				height: 50px;
			}
		}
	`;

	const loadingSpinner = document.createElement('div');
	loadingSpinner.id = 'mobile-devtools-loader';
	loadingSpinner.className = 'mobile-devtools-loader';
	document.body.appendChild(loadingSpinner);
}
