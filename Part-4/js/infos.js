var eltContenu = document.getElementById("contenu");

var p = document.createElement("p");
document.body.appendChild(p);

p.appendChild(document.createTextNode("Informations sur l'élément : "));
p.appendChild(document.createElement("br"));
var ul = document.createElement("ul");
p.appendChild(ul);
var li1 = document.createElement("li");
ul.appendChild(li1);
li1.appendChild(document.createTextNode("Longueur : "+ getComputedStyle(eltContenu).width));
var li2 = document.createElement("li");
ul.appendChild(li2);
li2.appendChild(document.createTextNode("Hauteur : "+ getComputedStyle(eltContenu).height));

