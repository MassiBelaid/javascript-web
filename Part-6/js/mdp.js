var form = document.querySelector("form");
form.addEventListener("submit",function(e){
	var mdp1 = form.elements.mdp1.value;
	var mdp2 = form.elements.mdp2.value;
	var regex = /.*\d.*/;
	
	var infoMdpElet = document.getElementById("infoMdp");
	if(!(mdp1 === mdp2)){
		infoMdpElet.textContent = "Erreur : Les deux mots de passe doivent être identiques.";
		e.preventDefault();
	   }else if(mdp1.length < 6){
		   infoMdpElet.textContent = "Erreur : Choisissez un mot de passe d'une taille minimum de 6.";
		   e.preventDefault();
	   }else if(!regex.test(mdp1)){
			infoMdpElet.textContent = "Erreur : Le mot de passe doit contenir au minimum un chiffre.";
		   	e.preventDefault();
			}
	
});