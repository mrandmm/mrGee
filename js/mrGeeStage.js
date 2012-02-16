// JavaScript Document
mrGeeStage = (function () {
	var stage = document.getElementById("backgroundGradient");
	var graphics = stage.getContext("2d");
	function init(Screen){
		stage.width = Screen.width;
		stage.height = Screen.height;
	}
	
	function getGraphics(){
		return graphics;
	}
	
	function draw(){
		mrGeeConfig.draw(graphics);
	}
	return {
        "init": init,
		"getGraphics": getGraphics,
		"draw": draw
    }
})();