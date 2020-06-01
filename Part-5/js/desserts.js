document.querySelector("button").addEventListener("click",function(){
	var dessert = prompt("entrez un dessert");
	var dessertElet = document.createElement("li");
	dessertElet.addEventListener("click", function (e) {
        var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
        e.target.textContent = nouveauNom;
    });
	dessertElet.textContent = dessert;
	document.getElementById("desserts").appendChild(dessertElet);
});