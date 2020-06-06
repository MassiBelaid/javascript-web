var formElt = document.querySelector("form");

formElt.addEventListener("submit", function(e){
	e.preventDefault();
	
	var pseudo = formElt.elements.pseudo.value;
	var evaluation = parseInt(formElt.elements.note.value,10);
	var message = formElt.elements.message.value;
	
	
	var data = {
    pseudo: pseudo,
    evaluation: evaluation,
    message: message,
}
	ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", data,
    function (reponse) {
        // Le film est affiché dans la console en cas de succès
        console.log("L'évaluation' " + JSON.stringify(data) + " a été envoyé au serveur");
		document.getElementById("messageRetour").textContent = "Evaluation bien envoyée"
    },
    true // Valeur du paramètre isJson
);	
});