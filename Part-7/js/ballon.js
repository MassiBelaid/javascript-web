var ballon = document.getElementById("ballon");
var cadre = document.getElementById("cadre");
var vitesse = 10;

var largeurBallon = parseFloat(getComputedStyle(ballon).width);
var animationId = null; // Identifiant de l'animation

var allee = true;

function deplacerBloc() {
	
	var xBallon = parseFloat(getComputedStyle(ballon).left);
    var xMax = parseFloat(getComputedStyle(cadre).width);
	
	if (xBallon + largeurBallon <= xMax) { // Si le bloc n'est pas encore au bout du cadre
		if(allee){
			ballon.style.left = (xBallon + vitesse) + "px";
		}else{
			if (xBallon + largeurBallon > 100){
				ballon.style.left = (xBallon - vitesse) + "px";
			}else{
				allee = true;
				ballon.style.left = (xBallon + vitesse) + "px";
			}
			
		}
        
        
    } else {
        allee = false;
		ballon.style.left = (xBallon - vitesse) + "px";
		//animationId = requestAnimationFrame(deplacerBloc);
    }
	animationId = requestAnimationFrame(deplacerBloc);
}

var bDemarrer = document.getElementById("demarrer");
var bArreter = document.getElementById("arreter");

bDemarrer.addEventListener("click", function(){
	animationId = requestAnimationFrame(deplacerBloc);
	bDemarrer.disabled = true;
	bArreter.disabled = false;
});

bArreter.addEventListener("click", function(){
	cancelAnimationFrame(animationId);
	bDemarrer.disabled = false;
	bArreter.disabled = true;
});

