
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(
    queryInfo, 
    function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
      /*console.assert(typeof url == 'string', 'tab.url should be a string');*/
      callback(url);
    }
  );
}
	
document.addEventListener(
  'DOMContentLoaded', 
  function() {
    getCurrentTabUrl(
      function(url) {

		if (url == undefined)
			return false;	  
	  
		if ( url.indexOf("clarin.com") > 0 )
		{
		  chrome.tabs.executeScript(
			null,
			{code:"var x = document.getElementsByClassName('modal-pase');var i;for (i = 0; i < x.length; i++) {x[i].parentNode.removeChild(x[i]);}"}
		  );
		  chrome.tabs.executeScript(
			null,
			{code:"var x = document.getElementsByClassName('mainPage');var i;for (i = 0; i < x.length; i++) {x[i].classList.remove('lock');x[i].style.opacity=100;}"}
		  );
		  chrome.tabs.executeScript(
			null,
			{code:"var x = document.getElementsByClassName('modal-pase');var i;for (i = 0; i < x.length; i++) {x[i].parentNode.removeChild(x[i]);}"}
		  );	  
		}
        window.close();
      }
    );
  }
);





