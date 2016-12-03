var extensionID = chrome.i18n.getMessage("@@extension_id");

var body = document.createElement("body");
var video = document.createElement("video");
var source = document.createElement("source");
var videoW = document.createAttribute("width");
var videoH = document.createAttribute("height");
var videoAuto = document.createAttribute("autoplay");
var videoLoop = document.createAttribute("loop");
var sourceSrc = document.createAttribute("src");
var sourceType = document.createAttribute("type");
var rickrollChance;

videoW.value = "1280";
videoH.value = "720";
video.setAttributeNode(videoW);
video.setAttributeNode(videoH);
video.setAttributeNode(videoAuto);
video.setAttributeNode(videoLoop);
sourceSrc.value = "https://raw.githubusercontent.com/FruitMage/rick-random/master/video/rickroll.mp4";
sourceType = "video/mp4";
source.setAttributeNode(sourceSrc);
video.appendChild(source);
body.appendChild(video);
rickrollChance = Math.floor(Math.random() * 100) + 1;

if (rickrollChance <= 10) {
	initiateRickRoll();
}

function initiateRickRoll() {
	document.write("");
	document.appendChild(body);
}
