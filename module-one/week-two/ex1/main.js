// JavaScript Document

// variables 

let result = document.getElementById('result'); 

let myCoolVar; 
myCoolVar = 'This is a cool var'; 

let anotherCoolVar = 'This is also a cool var'; 

myCoolVar = 'This is a lame var'; 


let num1 = 10; 
let num2 = '10'; 

let total = num1 + num2; 

// the difference between let and var 

//initialization
variableOne = 1000; 
//variable declaration
var variableOne; 


//now with let 
//variableTwo = 2000; 
//let variableTwo; 

// variable scope

let myGlobalVariable = 'Hey there, I am a global variable'; 

//define a function and create a variable called myLocalVariable + assign a string value to that variable 

function myFunction() {
  let myLocalVariable = 'Hey, I am a local variable';  
}

let myLocalVariable = 'Hey I am a totally different variable'; 

result.textContent = myLocalVariable;

//arrays 

let myArrayExample = [1, true, 'string', [1, 2, 'anotherString'] ]; 

let myArray = ['Jad', 'Brittany', 'Alp', 'Mark'];

for(let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); 
}



































