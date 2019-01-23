/************************
* Variables and Data Type
*************************
*/
/*
var firstName = 'Saumitra';
console.log(firstName);

var lastName = 'Bajpai';
console.log(lastName);

var age = 30;
console.log(age);

var trueAge = true;
console.log(trueAge);

var job;
console.log(job);

job = 'IT Consultant';
console.log(job);
*/

/************************************
* Variable Mutation and Type Coercion
*************************************
*/

//Type Coercion
/*
var firstName = 'Saumitra'
var age = 30;
console.log(firstName + ' ' + age);

var job,isMarried;
job = 'IT Consultant';
isMarried = true;
console.log(firstName + ' a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation

age = 'thirty';
job = 'software engineer';
alert(firstName + ' a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/***************
Basic Operators
****************
*/
/*
var currentYear, yearSaumitra, yearSantosh, ageSaumitra, ageSantosh;
currentYear = 2019;
ageSantosh = 39;
ageSaumitra = 30;

// Math Operators
yearSaumitra = currentYear - 30;
yearSantosh = currentYear - 39;
console.log(yearSaumitra);

console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 10);


// Logical Operators
var ageCompare = ageSaumitra > ageSantosh;
console.log(ageCompare);

// typeof operators
console.log(typeof ageCompare);
console.log(typeof yearSaumitra);
console.log(typeof 'santosh is older than saumitra');
var x;
console.log(typeof x);
*/

/********************
* Operator Precedence
*/
/*
var currentYear = 2019;
var yearSaumitra = 1988;
var fullAge = 18;

//Multiple Operators
var isFullAge = currentYear - yearSaumitra >= fullAge;
console.log(isFullAge);

//Grouping
var ageSaumitra = currentYear - yearSaumitra;
var ageSantosh = 39;
var average = (ageSantosh + ageSaumitra) / 2;
console.log(average);

//Multiple Assignments
var x,y;
x = y = (3 + 5) * 4 - 6;
console.log(x,y);

//More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/*****************
Coding Challenge 1
*/
var massMark, massJohn, heightMark, heightJohn;
massMark = 85;
massJohn = 80;
heightMark = 1.75;
heightJohn = 1.5;
var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var bmiCompare = bmiMark > bmiJohn;
console.log(bmiCompare);

console.log("Is Mark's BMI higher than John's BMI", ' ', bmiCompare);