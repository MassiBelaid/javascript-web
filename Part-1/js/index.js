var h = document.head;
console.log(h);

var b = document.body;
console.log(b);


console.log("----------------------------------------------------");

if(document.body.nodeType === document.ELEMENT_NODE){
	console.log("balise body de type noeud élément");
}else{
	console.log("balise body de type noeud élément");
}

console.log("----------------------------------------------------");
console.log(2 === "2"); //print false
console.log(2 == "2"); //print true because the string is converted to int

console.log("----------------------------------------------------");

for(var i=0 ; i<document.body.childNodes.length ; i++ ){
	console.log(document.body.childNodes[i]);
}

console.log("----------------------------------------------------");

var h1 = document.body.childNodes[1];
console.log(h1.parentNode);
console.log(document.parentNode);