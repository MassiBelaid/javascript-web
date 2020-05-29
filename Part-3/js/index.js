document.getElementById("langages").innerHTML += '<li id = "JavaScript">JavaScript</li>';
//document.getElementById("langages").innerHTML = "";
document.querySelector("h1").textContent += " de programmation";
document.querySelector("h1").setAttribute("id","titre");
//document.querySelector("h1").id = "titre"; équivalent au précédent
console.log(document.getElementById("titre"));

var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);

console.log("-------------------------------------------");

var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.textContent = "Ruby"; 
//rubyElt.appendChild(document.createTextNode("Ruby")); équivalente a la précédente
document.getElementById("langages").appendChild(rubyElt);

var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.appendChild(document.createTextNode("Perl"));
document.getElementById("langages").insertBefore(perlElt, document.getElementById("ruby"));


var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));


// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));

document.getElementById("contenu").insertAdjacentHTML("afterend",'<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation">liste</a> plus complète</p>');

/* ou bien :
var pElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = "liste";
pElt.appendChild(document.createTextNode("En voici une "));
pElt.appendChild(lienElt);
pElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(pElt);
*/
