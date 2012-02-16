// JavaScript Document
mrGeeAudio = (function (){
	var audio = document.createElement("audio");
	
	function init(){
		audio.setAttribute("autoplay", "autoplay");
		//audio.setAttribute("src", "./res/LoveSong.mp3");
	}
	function setSrc(src){
	    audio.setAttribute("src", src);
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
		"setSrc": setSrc
    }
})();