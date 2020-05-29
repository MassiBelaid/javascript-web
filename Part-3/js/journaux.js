var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
for(var i=0; i<journaux.length; i++){
	var parElt = document.createElement("a");
	parElt.href = journaux[i];
	parElt.textContent = journaux[i];
	document.getElementById("contenu").appendChild(parElt);
	document.getElementById("contenu").appendChild(document.createElement("br"));
	
}