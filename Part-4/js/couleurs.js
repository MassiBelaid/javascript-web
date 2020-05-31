var couleurTexte = prompt("Entrez la couleur du texte :");
var couleurFond = prompt("Entrez la couleur du fond :");


var divElt = document.getElementsByTagName("div");
for(var i=0 ; i<divElt.length; i++){
	divElt[i].style.backgroundColor = couleurFond;
	divElt[i].style.color = couleurTexte;
}