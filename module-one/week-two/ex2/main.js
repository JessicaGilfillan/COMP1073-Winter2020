// JavaScript Document

//Think like a programmer - break it down into simple, actionable tasks 

//provide the user with a way to select date
// listen for a change in the select element  //capture the user info  

/*checking the users choice, and running code in response ( if Monday --- else if Tuesday )*/

//create some variables to store references to elements 

let select = document.querySelector('select'); 
let p = document.getElementById('schedule');
let div = document.querySelector('div');
let dayParagraph = document.getElementById('day'); 

//listen for change on select and run code stored in scheduleDisplay function 
select.onchange = scheduleDisplay;

//define the scheduleDisplay function 
function scheduleDisplay() {
  //capture user value
  let selectValue = select.value;
  //display a message showing the day the user has selected, changing the text content of dayParagraph 
  dayParagraph.textContent = 'You have selected ' + selectValue + '.'; 
  
  if(selectValue === 'Monday') {
    //change the text
    p.textContent = 'You have COMP1073 today!'; 
    //change the colour of the background
    div.style.backgroundColor = '#BADA55'; 
  }
  else if(selectValue === 'Tuesday') {
     //change the text
    p.textContent = 'You have COMP1006 today!'; 
    //change the colour of the background
    div.style.backgroundColor = '#950FF1';
  }
  else if(selectValue === 'Wednesday') {
    //change the text
    p.textContent = 'You have COMP2081 today!'; 
    //change the colour of the background
    div.style.backgroundColor = '#BC1B16'; 
  }
  else if(selectValue === 'Thursday') {
     //change the text
    p.textContent = 'You have COMP2081 today!'; 
    //change the colour of the background
    div.style.backgroundColor = '#6116BC';
  }
  else if(selectValue === 'Friday') {
      //change the text
    p.textContent = 'You have COMP1030 today!'; 
    //change the colour of the background
    div.style.backgroundColor = '#1673BC';
  }
  else if(selectValue === 'Saturday') {
      //change the text
    p.textContent = 'Weekend timmmme!!!'; 
    //change the colour of the background
    div.style.backgroundColor = '#6FDD27';
  }
  else if(selectValue === 'Sunday') {
    //change the text
    p.textContent = 'No SCHOOL!!!'; 
    //change the colour of the background
    div.style.backgroundColor = '#8F16BC'; 
  }
}