$( document ).ready(function() {
	var urlSearch = window.location.search;
	var html = $("body").html();
	if (urlSearch.indexOf("/cases/") >= 0 && urlSearch.indexOf("/view/") >= 0 && html.indexOf("About TestRail") >= 0)
	{
		console.log("TestRail YTtestCase is Online");

		var src = chrome.extension.getURL("icons/folder-48.png");	

		$('.content-header-inner').append('<br /><div id="ytcopyBtn" class=".toolbar.content-header-toolbar" style="height: auto;padding-left:97%;">' + 
			'<img src="' + 
			src + 
			'" height="20" width="20" alt="YT Copy" title="YT Copy" />' + 
			'</div>');

		function copyStringToClipboard (str) {
		   	// Create new element
		   	var el = document.createElement('textarea');
		   	// Set value (string to be copied)
		   	el.value = str;
		   	// Set non-editable to avoid focus and move outside of view
		   	el.setAttribute('readonly', '');
		   	el.style = {position: 'absolute', left: '-9999px'};
		   	document.body.appendChild(el);
		   	// Select text inside element
		   	el.select();
		   	// Copy text to clipboard
		   	document.execCommand('copy');
		   	// Remove temporary element
		   	document.body.removeChild(el);
		}

		$('#ytcopyBtn').click(function(){
			var oid = $('#cell_custom_custom_original_id').text().replace("Original Id", "").split(",");
			if (oid.length > 1)
			    oid = oid[1].trim()
			else
			    oid = oid[0].trim()
			var value = "[" 
						+ oid
						+ " " 
						+ $('.content-header-title').text().trim()
						+ "]"
						+ "(" + window.location.href.substring(0, window.location.href.indexOf("&")) 
						+ ")"
			copyStringToClipboard(value);
		});	
	}
});