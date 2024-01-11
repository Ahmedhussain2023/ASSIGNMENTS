//Q.1
var num = prompt ("Q.1--Please input positive integer")
document.write("Q.1--Number: " + num + "<br>")
document.write("Round off value: " + Math.round(num) + "<br>")
document.write("Floor value: " + Math.floor(num) + "<br>")
document.write("Ceil value: " + Math.ceil(num) + "<br>" + "<br>")


//Q.2
var num = prompt ("Q.2--Please input negative integer")
document.write("Q.2--Number: " + num + "<br>")
document.write("Round off value: " + Math.round(num) + "<br>")
document.write("Floor value: " + Math.floor(num) + "<br>")
document.write("Ceil value: " + Math.ceil(num) + "<br>" + "<br>")


//Q.3
function absolutevalue(number){
  if (number < 0){
    return -number;
  } else {
    return number
  }
}
const number = -4;
const absValue = absolutevalue(number);

document.write(`Q.3-- Absolute value of a ${number} is ${absValue}` + "<br>" + "<br>");


//Q.4
function rollDice() {
  const randomValue = Math.floor(Math.random() * 6) + 1;
  return randomValue
}
  const rollDiceResult = rollDice();
  document.write(`Q.4--Random dice value:  ${rollDiceResult}  <br>  <br>`)


//Q.5
if(Math.ceil(Math.random() * 2) === 2) document.write("Q.5--Random coin value: " + "heads")
else document.write(`Q.5--Random coin value:   tails  <br>  <br>`)


//Q.6
const randomNum = Math.floor(Math.random() * 100) + 1;
document.write(`Q.6--Random Number between 1 to 100:  ${randomNum}`);
