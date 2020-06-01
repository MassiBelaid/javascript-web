document.addEventListener("keypress", function (e) {
    var CouleurChoisie = String.fromCharCode(e.charCode);
	if(CouleurChoisie === "R" || CouleurChoisie === "r"){
		changeParagColor('red');
	}else if (CouleurChoisie === "J" || CouleurChoisie === "j"){
		changeParagColor('yellow');
	}else if (CouleurChoisie === "V" || CouleurChoisie === "v"){
		changeParagColor('green');	  
	}else if (CouleurChoisie === "B" || CouleurChoisie === "b"){
		changeParagColor('blue');	  
	}
});


function changeParagColor(color){
	var ParsElts = document.getElementsByTagName("div");
	for(var i=0; i<ParsElts.length; i++){
		ParsElts[i].style.backgroundColor = color;
	}
}