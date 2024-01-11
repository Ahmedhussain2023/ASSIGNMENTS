
//Q.1
var firstname = prompt("Enter your first name: ");
var lastname = prompt("Enter your last name: ");
var fullname = firstname  + " " + lastname
alert("Hello, " + fullname + "! Welcome! ");

//Q.2
var favModel = prompt("What is your favorite mobile phone model?")
var inputLength = favModel.length;
document.write("My favorite phone is: " + favModel + "<br>");
document.write("Length of string: " + favModel.length + "<br>" + "<br>")

//Q.3
var word = "Pakistani"
var indexOfN = word.indexOf("n");
document.write("String: " + word + "<br>")
document.write("Index of 'n': " + indexOfN + "<br>" + "<br>")

//Q.4
var word = "Hello World"
var indexOfL = word.lastIndexOf("l");
document.write("String: " + word + "<br>")
document.write("Index of 'l': " + indexOfL + "<br>" + "<br>")


//Q.5
var word = "Hello World"
var characterAt3rdIndex = word.charAt("3");
document.write("String: " + word + "<br>")
document.write("Character at index 3: " + characterAt3rdIndex + "<br>" + "<br>")


//Q.6
var firstname = prompt("Enter your first name: ");
var lastname = prompt("Enter your last name: ");
var fullname = firstname.concat(" " + lastname);
alert("Hello, " + fullname + "! Welcome! ");

//Q.7
var orignalWord = "Hyderabad"
var replaceWord = orignalWord.replace("Hyder", "Islam");
document.write("City: " + orignalWord + "<br>")
document.write("After replacement: " + replaceWord + "<br>" + "<br>")

//Q.8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");
document.write("Original Message: " + message + "<br>");
document.write("Replaced Message: " + replacedMessage + "<br>" + "<br>");


//Q.9
var str = "472";
var num = parseInt(str);
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>" + "<br>");


//Q.10
var userInput = prompt("Enter some text:");
var uppercaseInput = userInput.toUpperCase();
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + uppercaseInput + "<br>" + "<br>");


/*Q.11
var userInput = prompt("Enter some text:");
var titlecaseInput = userInput.toTitleCase();
document.write("User input: " + userInput + "<br>");
document.write("Title case: " + uppercaseInput + "<br>" + "<br>");
*/

//Q.12
var num = 35.36;
var numString = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + numString + "<br>" + "<br>");


//Q.16
var university = "University of Karachi";
var universityArray = university.split(" ");
document.write(universityArray.join("<br>") + "<br>" + "<br>");


//Q.17
var userInput = prompt("Enter some text: ")
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("User input: " + userInput + "<br>")
document.write("Last character of input: " + lastCharacter + "<br>" + "<br>")


//Q.18
