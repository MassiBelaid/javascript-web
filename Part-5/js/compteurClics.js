var nbClicks = 0;
var stopNotCliqued = true;




document.getElementById("desactiver").addEventListener("click", function () {
    stopNotCliqued = false;
});



document.getElementById("clic").addEventListener("click", function () {
    if(stopNotCliqued){
		nbClicks ++ ;
		document.getElementById("compteurClics").textContent = nbClicks;
	   }
});
