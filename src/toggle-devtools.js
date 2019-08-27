function initializeEruda() {
	eruda.init();
	eruda.show(); // Show by default because extension button was just clicked
	document.getElementById('mobile-devtools-loader').remove(); // Remove loading spinner now that eruda is visible
}

if (window.eruda) {
	if (!eruda._isInit) {
		initializeEruda();
	} else {
		const devTools = eruda._$el[0].querySelector('.eruda-dev-tools');
		if (devTools.offsetHeight > 0)
			eruda.hide();
		else
			eruda.show();
	}
} else {
	let readyStateCheckInterval = setInterval(function() {
		if (window.eruda) {
			clearInterval(readyStateCheckInterval);
			initializeEruda();
		}
	}, 40);
}
