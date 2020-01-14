// JavaScript Document
//step one - create a variable to store a reference to our button 
    
let myButton = document.querySelector('button'); 
    
//step two: event handler, listens for click and triggers our function 
myButton.onclick = alertFunction;  
    
// the function that is triggered 
function alertFunction() {
  alert("The button was totally clicked!"); 
       }

