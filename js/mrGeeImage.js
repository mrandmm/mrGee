// JavaScript Document
mrGeeImage = (function(){
		
		function setImage(src){
		    var image = document.createElement("image");
		    image.setAttribute("src", src);
			return image;
		}
		return {
        "setImage": setImage
    }
})();