var extensionID = chrome.i18n.getMessage("@@extension_id");

var body = document.createElement("body");
var video = document.createElement("iframe");
var videoW = document.createAttribute("width");
var videoH = document.createAttribute("height");
var videoFB = document.createAttribute("frameborder");
var videoSrc = document.createAttribute("src");
var rickrollChance;

videoW.value = "1280";
videoH.value = "720";
videoFB.value = "0";
videoSrc.value = "https://www.youtube.com/embed/Xh8YG25Y6Pc?rel=0&amp;controls=0&amp;showinfo=0";
video.setAttributeNode(videoW);
video.setAttributeNode(videoH);
video.setAttributeNode(videoSrc);
video.setAttributeNode(videoFB);
body.appendChild(video);
rickrollChance = Math.floor(Math.random() * 100) + 1;

if (rickrollChance > 0) {
	initiateRickRoll();
}

function initiateRickRoll() {
	document.write("");
	document.appendChild(body);
}