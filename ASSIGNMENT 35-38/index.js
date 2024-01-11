/*Q#1
<!DOCTYPE html>
<html>
<head>
    <title>Dice Game</title>
</head>
<body>
    <h1>Dice Game</h1>
    <button id="rollDiceButton">Roll Dice</button>
    <p id="result"></p>

    <script>
        // Function to simulate rolling a 6-sided die
        function rollDie() {
            return Math.floor(Math.random() * 6) + 1;
        }

        // Function to determine the winner
        function determineWinner(die1, die2) {
            if (die1 > die2) {
                return "Dice 1 wins!";
            } else if (die1 < die2) {
                return "Dice 2 wins!";
            } else {
                return "It's a tie!";
            }
        }

        // Function to handle the button click event
        document.getElementById("rollDiceButton").addEventListener("click", function() {
            const resultElement = document.getElementById("result");

            // Roll two dice
            const dice1 = rollDie();
            const dice2 = rollDie();

            // Display the results
            resultElement.textContent = `Dice 1: ${dice1} | Dice 2: ${dice2}\n${determineWinner(dice1, dice2)}`;
        });
    </script>
</body>
</html>

function displayCurrentDateTime() {
    const currentDate = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  
    const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
    const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);
  
    console.log(`Current Date: ${formattedDate}`);
    console.log(`Current Time: ${formattedTime}`);
  }
    displayCurrentDateTime();
  

//Q.2
function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(`Hello, ${fullName}! Welcome.`);
  }
    greetUser("John", "Doe");

//Q.3
function addTwoNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
      if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input. Please enter valid numbers.";
    }
      const sum = num1 + num2;
  
    return `The sum of ${num1} and ${num2} is ${sum}`;
  }
    const resul = addTwoNumbers();
  console.log(resul);
  
//Q.4
function performOperation(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          return "Division by zero is not allowed.";
        }
        break;
      default:
        return "Invalid operator. Please use +, -, *, or /.";
    }
  
    return `Result of ${num1} ${operator} ${num2} is ${result}`;
  }
    const num1 = 10;
  const num2 = 5;
  const operator = "+";
  
  const Result = performOperation(num1, num2, operator);
  console.log(Result);
  

//Q.5
function squareNumber(number) {
    return number * number;
  }
    const resut = squareNumber(5);
  console.log(resut);

//Q.6
function computeFactorial(number) {
    if (number === 0) {
      return 1;
    } else if (number < 0) {
      return "Invalid input. Factorial is not defined for negative numbers.";
    } else {
      return number * computeFactorial(number - 1);
    }
  }
  const num = 5;
  const result = computeFactorial(num);
  console.log(`The factorial of ${num} is ${result}`);


//Q.7
function displayCounting(start, end) {
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        console.log(i);
      }
    } else {
      console.log("Start number should be less than or equal to the end number.");
    }
  }
    const startNumber = 1;
  const endNumber = 5;
  displayCounting(startNumber, endNumber);
  
  
//Q.8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
      return side * side;
    }
  
    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuseSquare = baseSquare + perpendicularSquare;
    const hypotenuse = Math.sqrt(hypotenuseSquare);
  
    return hypotenuse;
  }
  
  const baseLength = 3;
  const perpendicularLength = 4;
  const rsult = calculateHypotenuse(baseLength, perpendicularLength);
  console.log(`The hypotenuse is ${rsult}`);
  

  //Q.9
  function calculateRectangleArea(width, height) {
    return width * height;
  }
  const area1 = calculateRectangleArea(5, 7);
  console.log(`Area (Arguments as values): ${area1}`);


  //Q.10
  function isPalindrome(str) {
    str = str.replace(/\s/g, "").toLowerCase();
      for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  const testString1 = "madam";
  const testString2 = "hello";
  
  console.log(`"${testString1}" is a palindrome: ${isPalindrome(testString1)}`);
  console.log(`"${testString2}" is a palindrome: ${isPalindrome(testString2)}`);

  //Q.11
  function capitalizeFirstLetters(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return "";
      }
    });
    const result = capitalizedWords.join(" ");
  
    return result;
  }
  const inputString = "the quick brown fox";
  const outputString = capitalizeFirstLetters(inputString);
  console.log(outputString);
  */

 // Q.1 write a function in javascript that tell in boolean if value of v after sum of a & b exist or not
  //let a = [-3, 1, -6, 4]
  //let b =[ 2, 3, -9, -6]
  //let v= -9


  function doesValueExistAfterSum(a, b, v) {
    for (const A of a) {
      for (const B of b) {
        if (A + B === v) {
          return true;
        }
      }
    }
    return false;
  }
  
  // Test the function with your example arrays and value
  let a = [-3, 1, -6, 4];
  let b = [2, 3, -9, -6];
  let v = -9;
  
  const result = doesValueExistAfterSum(a, b, v);
  console.log(result); // Output should be true in this case
  

  //-Q.2 convert below array to 90 degree angle.

  // let arrOfArr = [
      //[1,2,3]
      //[4,5,6]
      //[7,8,9]
      
  //]

  // Define the 3x3 array
let arrOfArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function rotate90Degrees(arr) {
  const numRows = arr.length;
  const numCols = arr[0].length;

  // Create an empty rotated array
  const newArr = [];

  for (let i = 0; i < numCols; i++) {
    newArr.push([]);
    for (let j = 0; j < numRows; j++) {
      newArr[i].unshift(arr[j][i]);
    }
  }

  return newArr;
}

const newArray = rotate90Degrees(arrOfArr);

// Display the rotated array
for (let row of newArray) {
  console.log(row);
}

// body mass calculation 

const weightMark = 78
const heightMark = 1.69
const johnWeight = 92
const johnHeight = 1.95

const mark = (weightMark / heightMark ** 2).toFixed(2);
const john = (johnWeight / johnHeight ** 2).toFixed(2);
console.log(john)
console.log(mark)

if(john > mark) {
  console.log(`JohnBMI is $(john) is higher than MarkBMI $(mark)`)
}else{
  console.log(`MarkBMI is $(mark) is higher than MarJohnBMI $(john)`)

}