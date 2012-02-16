// JavaScript Document
// JavaScript Document
mrGeeVideo = (function (){
	var audio = document.createElement("video");
	
	function init(){
		audio.setAttribute("autoplay", "autoplay");
		audio.setAttribute("src", "./res/LoveSong.mp3");
	}
	function setSrc(src){
	    audio.setAttribute("src", src);
	}
	function  setSize(Screen){
		audio.setAttribute("width", Screen.width);
		audio.setAttribute("height", Screen.height);
	}
	function setLoop(bloop){
		if (bloop){
			audio.setAttribute("loop", "loop");
		}else{
			audio.removeAttribute("loop");
		}
	}
	
	function play(){
		
	}
	
	return {
        "init": init,
		"setLoop": setLoop,
		"play": play,
		"setSrc": setSrc,
		"setSize": setSize
    }
})();