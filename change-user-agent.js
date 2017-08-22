chrome.webRequest.onBeforeSendHeaders.addListener(
	function(details) {
		for (var i = 0; i < details.requestHeaders.length; i++) {
			if (details.requestHeaders[i].name === 'User-Agent') {
				// Use newer Chrome user agent for GitHub
				details.requestHeaders[i].value =
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36';

				break;
			}
		}

		return { requestHeaders: details.requestHeaders };
	},
	{
		urls: ['https://github.com/*']
	},
	['blocking', 'requestHeaders']
);
