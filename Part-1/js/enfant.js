function afficherEnfant(noeud, indice){
	if(noeud.nodeType === Node.TEXT_NODE){
		console.error("Type de noeud incorrecte");
	}else if (noeud.childNodes.length <= indice || indice < 0){
		console.error("Indice incorrect");
	}else{
		console.log(noeud.childNodes[indice]);
	}
	
}

afficherEnfant(document.body,1);
afficherEnfant(document.body,-1);
afficherEnfant(document.body,8);
afficherEnfant(document.body.childNodes[0], 0);