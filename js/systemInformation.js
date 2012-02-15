systemInformation = (function() {
	"use strict";
    var siSize = document.getElementById("siSize");
    var siFps = document.getElementById("siFps");
    var lastFps = 0;
    var onFpsReport;
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
    function setOnFpsReport(handler) {
        onFpsReport = handler;
    }
    function getLastFps() {
        return lastFps;
    }
    return {
        "setSize": setSize,
        "getInformation": getInformation,
        "getLastFps": getLastFps,
        "setOnFpsReport": setOnFpsReport
    }
})();