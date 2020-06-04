/*

// Création d'une requête HTTP
var req = new XMLHttpRequest();

// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Envoi de la requête
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);
// Affiche la réponse reçue pour la requête*/



ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
	var ulLangagesItem = document.getElementById("langages");
    var listLangages = reponse.split(";");
	for(var i=0; i<listLangages.length; i++){
		var liLangage = document.createElement("li");
		liLangage.textContent = listLangages[i];
		ulLangagesItem.appendChild(liLangage);
	}
});


ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});