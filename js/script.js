
function triangleTracker() {


var side1 = parseInt(document.getElementById("side1").value);
var side2 = parseInt(document.getElementById("side2").value);
var side3 = parseInt(document.getElementById("side3").value);

if(side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2){
if( side1===side2 && side2 ===side3){
	alert("Equilateral triangle")

}

else if(side1===side2 || side2===side3 || side3 ===side1){
	alert("isoceless triangle")

}

else if(side1!=side2!=side3){
	alert("scalent triangle")
}
}

else{
	alert("not triangle")
}
}
document.getElementById('button').addEventListener('click', triangleTracker);