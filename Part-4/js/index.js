var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.fontFamily = "arial";

var paragraphesElts = document.getElementsByTagName("p");
for (var i=0; i<paragraphesElts.length; i++){
	//console.log(paragraphesElts[i].style.color);
	console.log(getComputedStyle(paragraphesElts[i]).color)
}