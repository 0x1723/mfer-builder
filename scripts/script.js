// base domain for image layers
var baseURL = 'https://coolwave.art/mfer-builder/images/mfers/';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var dimensionParam = urlParams.get('dimension');
var backgroundParam = urlParams.get('background');
var typeParam = urlParams.get('type');
var eyesParam = urlParams.get('eyes');
var mouthParam = urlParams.get('mouth');
var headphonesParam = urlParams.get('headphones');
var smokeParam = urlParams.get('smoke');
var watchParam = urlParams.get('watch');
var beardParam = urlParams.get('beard');
var chainParam = urlParams.get('chain');
var shirtParam = urlParams.get('shirt');
var longhairParam = urlParams.get('longhair');
var hatunderheadphonesParam = urlParams.get('hatunderheadphones');
var hatoverheadphonesParam = urlParams.get('hatoverheadphones');
var shorthairParam = urlParams.get('shorthair');

const backgroundList = ["blue", "graveyard", "green", "orange", "red", "space", "tree", "yellow"];

const typeList = ["alienmfer", "apemfer", "charcoalmfer", "plainmfer", "zombiemfer"];

const eyesList = ["3Dglasses", "alieneyes", "eyemask", "nerdglasses", "purpleshades", "regulareyes", "shades", "vr", "zombieeyes"];

const mouthList = ["flat", "smile"];

const headphonesList = ["blackheadphones", "blueheadphones", "goldheadphones", "greenheadphones", "linedheadphones", "pinkheadphones", "redheadphones", "whiteheadphones"];

const smokeList = ["cigblack", "cigwhite", "pipe"];

const watchList = ["argoblack", "argowhite", "oystergold", "oystersilver", "subbatblueblack", "subblack", "subblue", "subcolabluered", "sublanterngreen", "subred", "subrose", "subturquoise"];

const beardList = ["fullbeard", "shadowbeard"];

const chainList = ["goldchain", "silverchain"];

const shirtList = ["collaredshirtblue", "collaredshirtgreen", "collaredshirtpink", "collaredshirtturquoise", "collaredshirtwhite", "collaredshirtyellow", "hoodiedownblue", "hoodiedowngray", "hoodiedowngreen", "hoodiedownpink", "hoodiedownred", "hoodiedownwhite"];

const longhairList = ["longhairblack", "longhairyellow", "prettycoolhair"];

const hatunderheadphonesList = ["bandanablue", "bandanadarkgray", "bandanared", "beanie", "beaniemonochrome", "capmonochrome", "cappurple", "headbandblue_green", "headbandblue_red", "headbandblue_white", "headbandgreen_white", "headbandpink_white", "knitatlanta", "knitbaltimore", "knitbuffalo", "knitchicago", "knitcleveland", "knitdallas", "knitkc", "knitlasvegas", "knitmiami", "knitnewyork", "knitpittsburgh", "knitsanfran"];

const hatoverheadphonesList = ["cowboyhat", "hoodie", "pilothelmet", "tophat"];

const shorthairList = ["messyblack", "messypurple", "messyred", "messyyellow", "mohawkblack", "mohawkblue", "mohawkgreen", "mohawkpink", "mohawkpurple", "mohawkred", "mohawkyellow"];

// function to generate mfers
function generateMfers() {
	
	document.getElementsByClassName("html-content-holder")[0].style.display = "inherit";

	const elements = document.getElementsByClassName('mferImg');
	var div = document.createElement("div");
	div.setAttribute('class', 'mferImg');

	if (backgroundParam == "none") {
		var _background = "url()"
	} else if (backgroundParam == null) {
		var _background = "url(" + baseURL + "/background/" + backgroundList[Math.floor(Math.random() * backgroundList.length)] + ".png" + ")";
		console.log(_background)
	} else {
		var _background = "url(" + baseURL + "/background/" + backgroundParam + ".png" + ")";
	}

	if (typeParam == "none") {
		var _type = ""
	} else if (typeParam == null) {
		var _type = "url(" + baseURL + "/type/" + typeList[Math.floor(Math.random() * typeList.length)] + ".png" + "),";
	} else {
		var _type = "url(" + baseURL + "/type/" + typeParam + ".png" + "),";
	}

	if (eyesParam == "none") {
		var _eyes = ""
	} else if (eyesParam == null) {
		var _eyes = "url(" + baseURL + "/eyes/" + eyesList[Math.floor(Math.random() * eyesList.length)] + ".png" + "),";
	} else {
		var _eyes = "url(" + baseURL + "/eyes/" + eyesParam + ".png" + "),";
	}

	if (mouthParam == "none") {
		var _mouth = ""
	} else if (mouthParam == null) {
		var _mouth = "url(" + baseURL + "/mouth/" + mouthList[Math.floor(Math.random() * mouthList.length)] + ".png" + "),";
	} else {
		var _mouth = "url(" + baseURL + "/mouth/" + mouthParam + ".png" + "),";
	}

	if (headphonesParam == "none") {
		var _headphones = ""
	} else if (headphonesParam == null) {
		var _headphones = "url(" + baseURL + "/headphones/" + headphonesList[Math.floor(Math.random() * headphonesList.length)] + ".png" + "),";
	} else {
		var _headphones = "url(" + baseURL + "/headphones/" + headphonesParam + ".png" + "),";
	}

	if (smokeParam == "none") {
		var _smoke = ""
	} else if (smokeParam == null) {
		var _smoke = "url(" + baseURL + "/smoke/" + smokeList[Math.floor(Math.random() * smokeList.length)] + ".png" + "),";
	} else {
		var _smoke = "url(" + baseURL + "/smoke/" + smokeParam + ".png" + "),";
	}

	if (watchParam == "none") {
		var _watch = ""
	} else if (watchParam == null) {
		var _watch = "url(" + baseURL + "/watch/" + watchList[Math.floor(Math.random() * watchList.length)] + ".png" + "),";
	} else {
		var _watch = "url(" + baseURL + "/watch/" + watchParam + ".png" + "),";
	}

	if (beardParam == "none") {
		var _beard = ""
	} else if (beardParam == null) {
		var _beard = "url(" + baseURL + "/beard/" + beardList[Math.floor(Math.random() * beardList.length)] + ".png" + "),";
	} else {
		var _beard = "url(" + baseURL + "/beard/" + beardParam + ".png" + "),";
	}

	if (chainParam == "none") {
		var _chain = ""
	} else if (chainParam == null) {
		var _chain = "url(" + baseURL + "/chain/" + chainList[Math.floor(Math.random() * chainList.length)] + ".png" + "),";
	} else {
		var _chain = "url(" + baseURL + "/chain/" + chainParam + ".png" + "),";
	}

	if (shirtParam == "none") {
		var _shirt = ""
	} else if (shirtParam == null) {
		var _shirt = "url(" + baseURL + "/shirt/" + shirtList[Math.floor(Math.random() * shirtList.length)] + ".png" + "),";
	} else {
		var _shirt = "url(" + baseURL + "/shirt/" + shirtParam + ".png" + "),";
	}

	if (longhairParam == "none") {
		var _longhair = ""
	} else if (longhairParam == null) {
		var _longhair = "url(" + baseURL + "/longhair/" + longhairList[Math.floor(Math.random() * longhairList.length)] + ".png" + "),";
	} else {
		var _longhair = "url(" + baseURL + "/longhair/" + longhairParam + ".png" + "),";
	}

	if (hatunderheadphonesParam == "none") {
		var _hatunderheadphones = ""
	} else if (hatunderheadphonesParam == null) {
		var _hatunderheadphones = "url(" + baseURL + "/hatunderheadphones/" + hatunderheadphonesList[Math.floor(Math.random() * hatunderheadphonesList.length)] + ".png" + "),";
	} else {
		var _hatunderheadphones = "url(" + baseURL + "/hatunderheadphones/" + hatunderheadphonesParam + ".png" + "),";
	}

	if (hatoverheadphonesParam == "none") {
		var _hatoverheadphones = ""
	} else if (hatoverheadphonesParam == null) {
		var _hatoverheadphones = "url(" + baseURL + "/hatoverheadphones/" + hatoverheadphonesList[Math.floor(Math.random() * hatoverheadphonesList.length)] + ".png" + "),";
	} else {
		var _hatoverheadphones = "url(" + baseURL + "/hatoverheadphones/" + hatoverheadphonesParam + ".png" + "),";
	}

	if (shorthairParam == "none") {
		var _shorthair = ""
	} else if (shorthairParam == null) {
		var _shorthair = "url(" + baseURL + "/shorthair/" + shorthairList[Math.floor(Math.random() * shorthairList.length)] + ".png" + "),";
	} else {
		var _shorthair = "url(" + baseURL + "/shorthair/" + shorthairParam + ".png" + "),";
	}
	
	window.scrollTo(0,0);	
	var seed = _watch + _smoke + _hatoverheadphones + _headphones + _hatunderheadphones + _longhair + _shorthair + _shirt + _chain + _eyes + _mouth + _beard + _type + _background;
		
	// var dimension = document.getElementsByClassName("pixels")[0].value;
	if (dimensionParam == null) {
		var dimension = 600;
	} else {
		var dimension = dimensionParam;
	}

	document.getElementsByClassName("html-content-holder")[0].style.backgroundImage = seed;
	document.getElementsByClassName("html-content-holder")[0].style.width = dimension;
	document.getElementsByClassName("html-content-holder")[0].style.height = dimension;
	
	// console.log(seed);
	html2canvas(document.getElementsByClassName("html-content-holder")[0],{backgroundColor: null,allowTaint: true,useCORS: true}).then(function (canvas) {
		var pngUrl = canvas.toDataURL("image/png");
		var mferImg = document.createElement("img");
		mferImg.src = pngUrl;
		mferImg.style.width = dimension;
		mferImg.style.height = dimension;
		mferImg.className = 'mfers';
		document.getElementsByClassName("mferImg")[0].appendChild(mferImg);
	});

	document.getElementsByClassName("html-content-holder")[0].style.display = "none";
}
