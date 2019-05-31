
function triangleTracker() {


var side1 = parseFloat(prompt("Enter ur 1st number"))
var side2 = parseFloat(prompt("Enter ur 2st number"))
var side3 = parseFloat(prompt("Enter ur 3st number"))

var pass =function(a,b,c){

return a+b>c && b+c>a && c+a>b

}

if(pass(side1,side2,side3) && side1===side2 && side2 ===side3){
alert("Equilateral triangle")

}

else if(pass(side1,side2,side3) && side1===side2 || side2===side3 || side3 ===side1){
alert("isoceless triangle")

}

else if(pass(side1,side2,side3)&& side1!=side2!=side3){
alert("scalent triangle")
}

else{
alert("not triangle")
}
}
document.getElementById('button').addEventListener('click', triangleTracker);