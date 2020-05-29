var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];


for(var i=0; i<mots.length; i++){
	var parElt = document.createElement("p");
	var motElt = document.createElement("b");
	motElt.textContent = mots[i].terme;
	parElt.appendChild(motElt);
	parElt.appendChild(document.createElement("br"));
	parElt.appendChild(document.createTextNode("        "+mots[i].definition));
	document.getElementById("contenu").appendChild(parElt);
}