//Q#1
var cityName = prompt("Q#1 Enter a city name:");
if (cityName === "karachi"){
    alert("Welcome to the city of lights!");
} else {
    alert("Welcome to " + cityName);
}


//Q#2
var gender = prompt("Q#2-Enter your gender (male/female):");
if (gender === "male"){
    alert("Good Morning Sir!");
}else if(gender === "female"){
    alert("Good Morning Ma'am!");
}else {
    alert("Good Morning!");
}


//Q#3
var signalColor = prompt("Q#3-Enter a color of the traffic signal (red/yellow/green):");
if (signalColor ==="red"){
    alert("You must stop");
}else if (signalColor ==="yellow"){
    alert("Ready to move");
}else if (signalColor ==="green"){
    alert("Move now");
}else {
    alert("Invalid input. Please enter a valid signal color.");
}

//Q#4
var fuel = prompt("Q#-4Enter the remaining fuel in car (in litres):");
if (fuel < 0.25){
    alert("Please refill the fuel in your car.");
}else{
    alert("You have enough fuel");
}

//Q#5
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
var materialCost = 20000; var laborCost = 2000;
var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
if (true)
{ alert("True"); } if (false){ alert("False"); }
if("car" < "cat"){ alert("car is smaller than cat"); }




//Q#6
//Q#7
var secretNumber = 2
var userGuess = parseInt(prompt("Q#7-Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
  alert("Close enough to the correct answer.");
} else {
  alert("Sorry, that's not the correct answer.");
}

//Q#8
var userNumber = prompt("Q#8-give me a number");
if (userNumber % 3 === 0) {
alert('divisible by 3');
} else {
alert('not divisible by 3');
}

//Q#9
var number = +prompt("Q#9-give me a number");
if (number % 2 === 0) {
alert('Even number');
} else {
alert('Odd number');
}

//Q#10
var tempreture = prompt("Q#10-Enter the temperature in Celsius:");
if(tempreture > 40){
    alert("It is too hot outside.");
}else if(tempreture > 30){
    alert("The Weather today is Normal.");
}else if(tempreture > 20){
    alert("Today’s Weather is cool.");
}else if(tempreture > 10){
    alert("OMG! Today’s weather is so Cool.");
}


//Q#11
var user1Number = +prompt("give me a first number");
var user2Number = +prompt("give me a second number");
var operation = prompt("give me a operation(+,/,*,-,%)");

if (isNaN(user1Number) || isNaN(user2Number)) {
    alert('not a number');
} else if (operation === "+") {
    alert(user1Number + user2Number);
} else if (operation === "-") {
    alert(user1Number - user2Number);
} else if (operation === "*") {
    alert(user1Number * user2Number);
} else if (operation === "/") {
    alert(user1Number / user2Number);
} else if (operation === "%") {
    alert(user1Number % user2Number);
} else {
    alert('wrong operator');
}
