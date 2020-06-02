// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}



var selectMaisonElt = document.getElementById("maison");
for(var i=0; i<maisons.length; i++){
	var optElt = document.createElement("option");
	optElt.value = maisons[i].code;
	optElt.textContent = maisons[i].nom;
	selectMaisonElt.appendChild(optElt);
}


document.getElementById("maison").addEventListener("change", function (e){
	//console.log(e.target.value);
	var personnagesTab = getPersonnages(e.target.value);
	var ulPersElt = document.getElementById("persos");
	ulPersElt.innerHTML = "";
	
	for(var j=0; j<personnagesTab.length; j++){
		var liElt = document.createElement("li");
		liElt.textContent = personnagesTab[j];
		ulPersElt.appendChild(liElt);
	}
});