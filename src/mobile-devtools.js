let readyStateCheckInterval = setInterval(function() {
	if (eruda) {
		clearInterval(readyStateCheckInterval);
		eruda.init()
	}
}, 100);
