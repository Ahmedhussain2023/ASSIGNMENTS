
//Q.1
Date()
var rightnow = new Date()
document.write("Q.1--" + rightnow + "<br>" + "<br>")


//Q.3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDate = new Date();
var currentDayIndex = currentDate.getDay();
var currentDayName = dayNames[currentDayIndex];
document.write("Q.3--Today is: " + currentDayName + "<br>" + "<br>")


//Q.4
var rightnow = new Date();
var currentDay = rightnow.getDay();
if (currentDay === 6 || currentDay === 0) {
    document.write("Q.4--It's Fun day");
    } else {
      document.write("Q.4--It's not Fun day" + "<br>" + "<br>");
    }


//Q.5
var currentDate = new Date();
var dayOfMonth = currentDate.getDate();
if (dayOfMonth < 16) {
  document.write("Q.5--First fifteen days of the month");
} else {
  document.write("Q.5--Last days of the month" + "<br>" + "<br>");
}


//Q.6
//const currentDate = new Date();
const millisecondsSinceEpoch = currentDate.getTime();
const minutesSinceMidnight = millisecondsSinceEpoch / (1000 * 60);
document.write(`Q.6--Current date: ${currentDate} <br> `);
document.write(`--Elapsed Minutes since midnight, Jan. 1, 1970: ${minutesSinceMidnight} <br> <br>`);



//Q.7
var curentDate = new Date();
var currentHour = currentDate.getHours();
if (currentHour < 12){
    document.write ("Q.7--Its AM" + "<br>" + "<br>");
}else{
    document.write ("Q.7--Its PM" + "<br>" + "<br>");
}

//Q.8
var date = new Date("2021-01-01");
date.setDate(0);
var laterDate = date;
document.write("Q.8--Later date: " + laterDate + "<br>" + "<br>");


//Q.9
var ramadanStartDate = new Date("2015-06-18");
var currentDate = new Date();
var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.write("Q.9--Number of days passed since 1st Ramadan: " + daysPassed + "<br>" + "<br>");


//Q.10
//Q.11
var currentDate = new Date();
var currentHours = curentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Q.11--Current Date: " + curentDate + "<br>")
document.write("1 Hour ago, it was" + currentDate + "<br>" + "<br>")


//Q.12
var currentDate = new Date();
var yearBefore = curentDate.getFullYear() - 100;
currentDate.setFullYear(yearBefore);
document.write("Q.12--Current Date: " + curentDate + "<br>")
document.write("--100 years back, it was " + yearBefore)

//Q.13
var age = prompt("Please enter your age: ")
age = parseInt(age);
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
alert("Your birth year is: " + birthYear);

