//Problem #1
const person = {
    name: 'Ahmed Hussain',
    age: 19
  };
    function displayPersonInfo(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
  }
  displayPersonInfo(person);
  

//Problem #2
const students = [
    { name: 'Uzair', score: 85 },
    { name: 'Ahmed', score: 92 },
    { name: 'Shayan', score: 78 },
    { name: 'Tahir', score: 95 }
  ];
    function findTopStudent(students) {
    let topStudent = students[0];
    for (let i = 1; i < students.length; i++) {
      if (students[i].score > topStudent.score) {
        topStudent = students[i];
      }
    }
    console.log(`Top Student: ${topStudent.name}`);
    console.log(`Score: ${topStudent.score}`);
  }
  
  findTopStudent(students);
  

//Problem #3
//Problem #4
const fruits = ['apple', 'orange', 'banana', 'grape', 'kiwi'];
const sortedFruits = fruits.slice().sort();
console.log('Sorted Fruits:', sortedFruits);

//Problem #5
function factorial(number) {
    if (number === 0) {
      console.log('Factorial of 0 is 1');
      return;
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    console.log(`Factorial of ${number} is ${result}`);
  }
  factorial(5);
  factorial(0);
  
  //Problem #6
  function reverseString(inputString) {
    const reversedString = inputString.split('').reverse();
    console.log(`Original String: ${inputString}`);
    console.log(`Reversed String: ${reversedString}`);
  }
  const exampleString = 'Javascript';
  reverseString(exampleString);
  

  //Problem #7
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person1 = new Person('Ahmed', 20);
  const person2 = new Person('Owais', 25);
  
  console.log('Person 1:', person1.name, '-', person1.age, 'years old');
  console.log('Person 2:', person2.name, '-', person2.age, 'years old');
  
  //Problem #8
 for (let i = 1; i <= 10; i++){
    console.log(i)
 }

 //Problem # 9
 function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    console.log(`Sum of Array Elements: ${sum}`);
  }
  const numbersArray = [1, 2, 3, 4, 5];
  sumArrayElements(numbersArray);
  

//Problem #10

function isEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is Even`);
        }else {
            console.log(`${number} is Odd`);
        }
    }

    isEven(7);
    isEven(12);

//Problem #11
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are Eligible for voting");
    }else {
        console.log("Sorry, You are not Eligble for voting");
    }
}

checkVotingEligibility(20);
checkVotingEligibility(16);


//Problem #12
function displayCurrentDateTime() {
    const currentDate = new Date();
        console.log(currentDate);
}
displayCurrentDateTime();


//Problem #14
function squareNumbers(numbers) {
    const squaredValues = numbers.map(number => number ** 2);
    console.log("Squared Values:", squaredValues);
  }
  const numbersarray = [1, 2, 3, 4, 5];
  squareNumbers(numbersArray);
  

//Problem #15
function countVowels(inputString) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (let char of inputString.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  console.log(`Number of vowels: ${vowelCount}`);
}
const inputString = "Hello, World!";
countVowels(inputString);
