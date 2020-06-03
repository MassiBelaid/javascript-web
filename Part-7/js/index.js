var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);   
	
	if(compteur > 1){
		compteurElt.textContent = compteur - 1;	
	}else{
		clearInterval(intervalID);
		var titre = document.getElementById("titre");
		titre.textContent = "BOUM !!";
		
		setTimeout(function(){
			titre.textContent = "Tout est cassé :-(";
		},2000);
	}
    
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalID = setInterval(diminuerCompteur, 1000);




var bloc = document.getElementById("bloc");
var cadre = document.getElementById("cadre");
var vitesse = 2.5; // Valeur du déplacement en pixels

var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null; // Identifiant de l'animation

// Déplace le bloc sur sa gauche
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if (xBloc + largeurBloc <= xMax) { // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        bloc.style.left = (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBloc);
    } else {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }
}
requestAnimationFrame(deplacerBloc); // Début de l'animation