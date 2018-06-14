$(document).ready(function() {
	chrome.tabs.getSelected(null, function(tab) {
		$('#coder_qr').empty().qrcode(tab.url);
	});
});
