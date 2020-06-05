var form = document.querySelector("form");
var infoElt = document.getElementById("infoElt");

form.addEventListener("submit", function(e){
	var user = form.elements.user.value;
	
	
	ajaxGet("https://api.github.com/users/"+user, function (reponse) {
		
	
    var profile = JSON.parse(reponse);
    console.log(profile);
	var AvatarElt = document.createElement("img");
    AvatarElt.src = profile.avatar_url;
	AvatarElt.style.height = "150px";
	AvatarElt.style.width = "150px";
	infoElt.innerHTML = "";
	infoElt.appendChild(AvatarElt);
		
	var nomElt = document.createElement("p");
	nomElt.textContent = profile.name;
	nomElt.style.fontSize = "20px";
	infoElt.appendChild(nomElt);
		
		
	var companyElt = document.createElement("p");
	companyElt.textContent = profile.company;
	companyElt.style.fontSize = "10px";
	infoElt.appendChild(companyElt);
		
	var aElt = document.createElement("a");
	aElt.href = profile.blog;
	aElt.textContent = profile.blog;
	infoElt.appendChild(aElt);
	
});
	
	e.preventDefault();
});