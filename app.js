

function addPresidentToDocument(presidentName, description) {
  
  if(presidentName === "Abraham Lincoln") {
    description = "Abraham Lincoln was the President during the Civil War in 1787. He was known to be very Honest.";
  } 
  
  document.write('<img src="images/Abraham Lincoln.jpg">');
  
}

function getUserPrompt(message){
  
  var userInput = prompt(message);
  
  return userInput;
}


function sayMessage(message) {
  alert(message);
}


function setColorBasedOnUserInput(userResponse) {

  var color; 
  
  if (userResponse === "Abraham Lincoln") {
    color = "red";
  } else if (userResponse === "Richard M. Nixon") {
    color = "red";
  } else if (userResponse === "John F. Kennedy") {
    color = "blue";
  } else if (userResponse === "Franklin D. Rosevelt") {
    color = "blue";
  }
  
  
  // requires HTML element with the label of "Content"
  document.getElementById("content").style.backgroundColor = color; 
}

// Validation Password
function validateUserPassword() {
  var storedPassword = "HonestAbe";

  do {

   var passwd = getUserPrompt("Enter a pasword");
 }while(passwd !== storedPassword);

}

validateUserPassword();

  // Initial Question into the page
var promptQuestion = "What year was the American Constitution signed?";
var response = prompt(promptQuestion);

setColorBasedOnUserInput(response);

addPresidentToDocument("Abraham Lincoln", "Honest Whether you like it or not"); 
  addPresidentToDocument("Richard Nixon" , "Doesnt get much better than that");
addPresidentToDocument("George Washington", "First President Ever"); 
addPresidentToDocument("John F. Kennedy", "Every Accomplishment starts with the decision to try");


var numberOfPresidents = getUserPrompt("How many presidents do you like?");
for (var i = 0; i < numberOfPresidents; i++) {
  console.log(i);
}


var promptQuestion = "Who was the President during the Civil War?";
var response = getUserPrompt(promptQuestion);

function setColorBasedOnUserInput(response); 

// if (response === "1787") {
//   alertMessage = "Correct! Welcome!";
  
// } else  {
//   alertMessage = "I guess you don't know.";
// } 
//  window.alert(alertMessage);


//  // Console Variable loop
//  for (var i = 0; i > 10; i++) {
//     console.log(i)
// }


// // We Welcome you, the President(s) of the Great United States
