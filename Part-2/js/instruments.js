function infosLiens(){
	listLient = document.querySelectorAll("a");
	listLientHref = [];
	for(var i = 0 ; i< listLient.length; i++){
		if(listLient[i].hasAttribute("href")){
			listLientHref.push(listLient[i]);
		}
	}
	console.log(listLientHref.length);
	console.log(listLientHref[0].getAttribute("href"));
	console.log(listLientHref[listLientHref.length - 1].getAttribute("href"));
}

infosLiens();


console.log("=============================================================");

function possede(element, classe){
	if(document.getElementById(element) === null){
		console.log("aucun élément ne possède l'id : "+element);
	}else{
		if(document.getElementById(element).classList.contains(classe)){
			console.log(true);
	   }else{
		   console.log(false);
	   }
	}
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur