var extensionID = chrome.i18n.getMessage("@@extension_id");

var body = document.createElement("body");
var video = document.createElement("video");
var videoW = document.createAttribute("width");
var videoH = document.createAttribute("height");
var videoAuto = document.createAttribute("autoplay");
var videoSrc = document.createAttribute("src");
var videoLoop = document.createAttribute("loop");
var rickrollChance;

videoW.value = "1280";
videoH.value = "720";
videoSrc.value = "https://github.com/FruitMage/rick-random/blob/master/video/rickroll.mp4";
video.setAttributeNode(videoW);
video.setAttributeNode(videoH);
video.setAttributeNode(videoSrc);
video.setAttributeNode(videoAuto);
video.setAttributeNode(videoLoop);
body.appendChild(video);
rickrollChance = Math.floor(Math.random() * 100) + 1;

if (rickrollChance > 0) {
	initiateRickRoll();
}

function initiateRickRoll() {
	document.write("");
	document.appendChild(body);
}
