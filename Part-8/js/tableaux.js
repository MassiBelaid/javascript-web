ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
	var ulItems = document.getElementById("tableaux");
    var tableaux = JSON.parse(reponse);
    
    tableaux.forEach(function (tableau) {
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.nom + "</td>" + "<td>" + tableau.annee + "</td>" +
            "<td>" + tableau.peintre + "</td>";
		ulItems.append(ligneElt);
    });
});