var titreElts = document.getElementsByTagName("h2");
console.log(titreElts[0].childNodes[0]);
console.log(titreElts[0]);
console.log(titreElts.length);

console.log("--------------------------------------------------");
var merveillesElts = document.getElementsByClassName("merveilles");
for(var i=0 ;  i < merveillesElts.length ; i++){
	console.log(merveillesElts[i]);
}

console.log("--------------------------------------------------");
console.log(document.getElementById("nouvelles"));
console.log(document.querySelectorAll("p").length);
console.log(document.querySelectorAll("#antiques > .existe").length);
console.log(document.querySelector("p")); // Renvoit seulment le 1er élément et non une liste

console.log("--------------------------------------------------");
console.log(document.getElementById("contenu").innerHTML);
console.log(document.getElementById("contenu").textContent);
console.log(document.querySelector("a").getAttribute("href"));

console.log("--------------------------------------------------");
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}