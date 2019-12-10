// start opdracht 3
var getal = 6;

document.getElementById("nummer").innerText =
"The value of getal is: " + getal;

// end opdracht3
// start opdracht4
let number1=10;
let number2=20;
let x=number1+number2;
let y=number1-number2;
let z=number1/number2;
let d=number1%number2;


document.getElementById("opdracht1").innerText = "number1 :"  +  number1 +"number2 :" + number2 +"oprator: +" + "antwoord=" + x  ;
document.getElementById("opdracht2").innerText = "number1 :"  +  number1 +"number2 :" + number2 +"oprator: -" + "antwoord=" + y  ;
document.getElementById("opdracht3").innerText = "number1 :"  +  number1 +"number2 :" + number2 +"oprator: /" + "antwoord=" + z  ;
document.getElementById("opdracht4").innerText = "number1 :"  +  number1 +"number2 :" + number2 +"oprator: %" + "antwoord=" + d  ;


// end opdracht4
// start opdracht5

var car="car";
console.log(car);
var key;
console.log(key);
var hi= null;
console.log(hi);
// end opdracht5
// start opdracht6


// end opdracht6
// start opdracht7
var content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var n = content.length;
document.getElementById("content").innerText=n;
console.log(n);
var s = content.slice(0, 11);
document.getElementById("slice").innerText = s;
var uppercase = content.toLocaleUpperCase();
  document.getElementById("upper").innerText = uppercase;
// end opdracht7
// start opdracht8
var car = {
    carModel:"mazda",
    color:"red",
      
    };
document.getElementById("car").innerText= "the car  properties are " +" the carModel is "+ car.carModel + "and the color is" + car.color;
// end opdracht8
// start opdracht9
var array=[6,7,8];
var h= array[0]+array[1];
console.log(h);
var xx=h - array[2];
console.log(xx);

// end opdracht9