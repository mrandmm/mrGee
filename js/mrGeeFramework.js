mrGeeFramework = (function () {
	
	document.addEventListener("keypress", function (evt){
	}, false);
	
	document.addEventListener("DOMContentLoaded", function () {
		mrGeeInformation.setSize(mrGeeInformation.getInformation());
		
		// 初始化舞台大小
		mrGeeStage.init(mrGeeInformation.getInformation());
		
		mrGeeStage.draw();
		
		// 声音
		mrGeeAudio.init();
		mrGeeAudio.setLoop(false);
		mrGeeAudio.setSrc("./res/LoveSong.mp3");
		
	}, true);
})();