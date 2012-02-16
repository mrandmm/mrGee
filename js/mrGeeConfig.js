// JavaScript Document

// ≈‰÷√Œƒº˛

mrGeeConfig = (function() {

	function draw(graphics){
		
		
				
		graphics.fillStyle="#FF0000";
		graphics.beginPath();
		graphics.arc(70,18,15,0,Math.PI*2,true);
		graphics.closePath();
		graphics.fill();
		
		graphics.drawImage(mrGeeImage.setImage("./res/image.gif"), 10, 10);

	}
	
	return {
		"draw": draw
    }
})();