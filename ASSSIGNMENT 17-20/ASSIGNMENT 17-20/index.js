//Q.1
const multiDimArray = [];

//Q.2
for (var i = 1; i <11; i++){
    console.log(i)
}


//Q.4
var tableNumber = parseInt(prompt("Enter the table number:"));
var tableLength = parseInt(prompt("Enter the table length:"));

if (isNaN(tableNumber) || isNaN(tableLength)) {
  console.log("Please enter valid numbers.");
} else {
  console.log(`Multiplication table for ${tableNumber} up to ${tableLength}:`);
  for (let i = 1; i <= tableLength; i++) {
    var result = tableNumber * i;
    console.log(`${tableNumber} x ${i} = ${result}`);
  }
}


// Q.7
 var fruits = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
 var userInput = prompt("Welcome to ABC Bakery.What do you want to order Sir.Ma'am");
 var index = fruits.indexOf(userInput);
 if (index === -1) {
   alert('sorry');
 } else {
     alert('available at index ' + index);
 }


 //Q.8
var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    smallest = A[i];
  }
}
console.log("The largest number in the array is: " + smallest);


 //Q.9
 // Define the array
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (let i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}
console.log("The smallest number in the array is: " + smallest);;

//Q.10
for (let i = 1; i <=100; i++){
   if (i % 5 === 0){
    console.log(i);

 }
}
