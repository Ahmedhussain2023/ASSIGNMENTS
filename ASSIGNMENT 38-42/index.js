//Q.1 
function power(a, b) {
    return Math.pow(a, b);
  }
  console.log(power(2, 3));
  console.log(power(5, -2));
  console.log(power(10, 0));
  


  //q.2
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const yearToCheck = 2020;
  if (isLeapYear(yearToCheck)) {
    console.log(yearToCheck + " is a leap year.");
  } else {
    console.log(yearToCheck + " is not a leap year.");
  }


  //q.3
function calculateS(a, b, c) {
  return (a + b + c) / 2;
}
function calculateTriangleArea(a, b, c) {
  const s = calculateS(a, b, c);
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
const sideA = 5;
const sideB = 6;
const sideC = 7;

const area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);


//q.4
function calculateAverage(subject1, subject2, subject3) {
  return (subject1 + subject2 + subject3) / 3;
}
function calculatePercentage(subject1, subject2, subject3) {
  const totalMarks = subject1 + subject2 + subject3;
  const percentage = (totalMarks / (3 * 100)) * 100;
  return percentage;
}
function mainFunction(subject1, subject2, subject3) {
  const average = calculateAverage(subject1, subject2, subject3);
  const percentage = calculatePercentage(subject1, subject2, subject3);

  console.log("Marks in Subject 1: " + subject1);
  console.log("Marks in Subject 2: " + subject2);
  console.log("Marks in Subject 3: " + subject3);
  console.log("Average Marks: " + average);
  console.log("Percentage: " + percentage + "%");
}
const subject1Marks = 80;
const subject2Marks = 75;
const subject3Marks = 90;

mainFunction(subject1Marks, subject2Marks, subject3Marks);


//Q.5
function customIndexOf(str, target) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      return i;
    }
  }
  return -1;
}
const text = "Hello, World!";
const characterToFind = 'o';
const index = customIndexOf(text, characterToFind);

if (index !== -1) {
  console.log(`The character '${characterToFind}' was found at index ${index}.`);
} else {
  console.log(`The character '${characterToFind}' was not found in the string.`);
}


//Q.6
function removeVowels(sentence) {
  const regex = /[aeiouAEIOU]/g;
  const result = sentence.replace(regex, '');
  return result;
}
const inputSentence = "This is a sample sentence with vowels.";
const sentenceWithoutVowels = removeVowels(inputSentence);
console.log("Original Sentence: " + inputSentence);
console.log("Sentence without Vowels: " + sentenceWithoutVowels);


//Q.7
function countSuccessiveVowels(text) {
  text = text.toLowerCase();
  const vowels = 'aeiou';
  let count = 0;
  for (let i = 0; i < text.length - 1; i++) {
    if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
      count++;
    }
  }

  return count;
}
const sentence = "In the example sentence, there are quite a few vowels.";
const numberOfSuccessiveVowels = countSuccessiveVowels(sentence);
console.log("Number of successive vowels: " + numberOfSuccessiveVowels);


//Q.8
function kilometersToMeters(kilometers) {
  return kilometers * 1000;
}

function kilometersToFeet(kilometers) {
  return kilometers * 3280.84;
}

function kilometersToInches(kilometers) {
  return kilometers * 39370.1;
}

function kilometersToCentimeters(kilometers) {
  return kilometers * 100000;
}
function convertAndPrintDistance(distanceInKilometers) {
  const distanceInMeters = kilometersToMeters(distanceInKilometers);
  const distanceInFeet = kilometersToFeet(distanceInKilometers);
  const distanceInInches = kilometersToInches(distanceInKilometers);
  const distanceInCentimeters = kilometersToCentimeters(distanceInKilometers);

  console.log(`Distance in Meters: ${distanceInMeters} meters`);
  console.log(`Distance in Feet: ${distanceInFeet} feet`);
  console.log(`Distance in Inches: ${distanceInInches} inches`);
  console.log(`Distance in Centimeters: ${distanceInCentimeters} centimeters`);
}
const distanceInKilometers = 100;
convertAndPrintDistance(distanceInKilometers);


//Q.9
function calculateOvertimePay(hoursWorked) {
  const regularHours = 40;
  const overtimeRate = 12.00;

  if (hoursWorked > regularHours) {
    const overtimeHours = hoursWorked - regularHours;
    const overtimePay = overtimeHours * overtimeRate;
    return overtimePay;
  } else {
    return 0;
  }
}
const hoursWorked = 45;
const overtimePay = calculateOvertimePay(hoursWorked);

console.log(`Employee worked for ${hoursWorked} hours.`);
console.log(`Overtime pay: Rs. ${overtimePay}`);
