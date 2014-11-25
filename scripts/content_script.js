  ///////////////////////////////////////////////////
 ///---DOC READY---/////////////////////////////////
///////////////////////////////////////////////////

$("document").ready(function(){
	
  console.log("document is ready");

  // Detect mouse clicks
  window.addEventListener('click', function(){
    console.log("mouse clicked");
    chrome.runtime.sendMessage({text:"click"});
    
  })

  // Detect text field change ONLY WHEN SUBMITTED
  $('input[type=text]').change(function(){
      console.log("input changed");
      chrome.runtime.sendMessage({text:"input"});
  });

  // Detect URL changes
	if ('onhashchange' in window) {
	    console.log("url changed");
      chrome.runtime.sendMessage({text:"window"});
	}


});

