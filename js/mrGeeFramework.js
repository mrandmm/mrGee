mrGeeFramework = (function () {
	
	document.addEventListener("keypress", function (evt){
	}, false);
	
	document.addEventListener("DOMContentLoaded", function () {
		mrGeeInformation.setSize(mrGeeInformation.getInformation());
		
		// ��ʼ����̨��С
		mrGeeStage.init(mrGeeInformation.getInformation());
		
		mrGeeStage.draw();
		
		// ����
		mrGeeAudio.init();
		mrGeeAudio.setLoop(false);
		mrGeeAudio.setSrc("./res/LoveSong.mp3");
		
	}, true);
})();