var lettresElet = document.getElementById("lettres");
var motsElet = document.getElementById("mots");

var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
;

for(var i=0; i<alphabets.length; i++){
	var aplEl = document.createElement('a');
	aplEl.textContent = alphabets[i];
	aplEl.id = alphabets[i];
	aplEl.href = "#";
	aplEl.addEventListener("click", function(e){
		motsElet.innerHTML = "";
		ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/"+e.target.textContent, function (reponse) {
		var mots = JSON.parse(reponse);
		if(mots.length > 0){
			mots.forEach(function (mot) {
				var motEltt = document.createElement("h1");
				motEltt.textContent = mot.term;
				motsElet.appendChild(motEltt);

				var descElet = document.createElement("p");
				descElet.textContent = mot.definition;
				motsElet.appendChild(descElet);
		
    });
			}else{
				var descElet = document.createElement("p");
				descElet.textContent = "aucune mot trouvée pour la lettre : "+e.target.textContent;
				motsElet.appendChild(descElet);
			}
		});
		console.log(e.target.textContent);
	});
	lettresElet.appendChild(aplEl);
	var espElt = document.createElement('span');
	espElt.textContent = '    |    '
	lettresElet.appendChild(espElt);
}



