// JavaScript Document

// Part One - Variables

//declare a variable

var myVar; 
let myVar2;

//initialize 

myVar = 'this is my var! cool right?'; 
myVar2 = [1, 2, 3, 'four']; 

//declared and initialized 

let var3 = "Hello World!"; 

var3 = "Hello World!!!!!!!!!!!"; 

//constants - they don't change 

const myBirthday = 'May 10th 1985'; 

// practice time 

//create a variable and intialize with first name
//create a variable and intialize with last name 
//create a variable called full name that adds first and last name together 


let firstName = 'Jessica'; 
let lastName = 'Gilfillan'; 
let fullName = firstName + ' ' + lastName; 

let mainHeading = document.querySelector('h1'); 
mainHeading.style.color = "#BADA55"; 

// Part Two 

// loosely-typed language, don't have to declare datatypes 

let variableOne = '1'; 
let variableTwo = 12; 

let total = variableOne + variableTwo; 

//objects 

let myObject = {
  name: 'Jessica', 
  role: 'Instructor', 
  catlady: true 
}

//Part Three 

let num1 = 12; 
let num2 = 20; 

let numTotal = num1 + num2; 
numTotal = num2 - num1; 
numTotal = num2 % num1; 


if( num1 < num2) {
  alert('num2 is bigger'); 
}
else if (num1 > num2 ) {
  alert('num1 is bigger'); 
}
else if (num1 === num2) {
  alert ('They are equal'); 
}

let num3 = num1 += 7; 


/* Strings */ 

let myString = 'This is a string'; 
let anotherString = "This is also string"; 

let escapeString = 'Let\'s escape!';

console.log(escapeString); 

let upperCase = escapeString.toUpperCase();

let newString = escapeString.slice(6);

let newString2 = escapeString.replace('escape', 'dance'); 






































