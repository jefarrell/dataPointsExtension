  ///////////////////////////////////////////////////
 ///---BACKGROUND PAGE---///////////////////////////
///////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
console.log("here");
});


// Listen for messages from content_script
chrome.runtime.onMessage.addListener(
    function(request){
        console.log(request.text);
            chrome.browserAction.setIcon({
                "path":"resources/blink.png" }); // setIcon to blink
            window.setInterval(function(){
                chrome.browserAction.setIcon({
                    "path":"resources/base.png" }); 
            }, 300); // setIcon back to base after 300ms

    }
);
