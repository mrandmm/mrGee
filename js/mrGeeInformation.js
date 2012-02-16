mrGeeInformation = (function(){

    var siSize = document.getElementById("siSize")
	
    function getInformation() {
        var information = {};
        information.width = window.innerWidth;
        information.height = window.innerHeight;
        return information;
    }
    function setSize(info) {
        if (!info) {
            return;
        }
        if (info.width && info.height) {
            siSize.textContent = info.width + "x" + info.height;
        }
        if (info.fps) {
            lastFps = info.fps;
            if (onFpsReport && typeof(onFpsReport) === "function") {
                onFpsReport(info.fps);
            }
            siFps.textContent = info.fps;
        }
    }
    return {
        "setSize": setSize,
        "getInformation": getInformation
    }
})();