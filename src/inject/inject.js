chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		function viewMyTasks () {
			document.getElementsByClassName('atm')[0].click()
		}

		function viewInbox () {
			document.getElementsByClassName('feed')[0].click()
		}


		document.onkeypress = function (e) {
	    e = e || window.event;
	    if (e.keyCode == 116) {
	    	viewMyTasks()
	    }
	    else if (e.keyCode == 105) {
	    	viewInbox()
	    }
		}
		
	}
	}, 10);
});