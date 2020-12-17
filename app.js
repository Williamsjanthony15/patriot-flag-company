
function addPresidentToDocument(presidentName, description); {
    
  if(presidentName === "Abraham Lincoln") {
      description = "Abraham Lincoln was the President during the Civil War in 1787. He was known to be very Honest.";
    } 
    
    document.write("<section> \
        <h2>" + presidentName + "</h2> \
        <img src=\"Abraham Lincoln" + presidentName + ".jpg\"> \
        <p>" + presidentName" + description + ".</p> \
      </section>");

}
// Initial Question into the page
var promptQuestion = "What year was the American Constitution signed?";
var response = prompt(promptQuestion);

if (response === "1787") {
  alertMessage = "Correct! Welcome!";

} else  {
  alertMessage = "I guess you don't know.";
} 
 window.alert(alertMessage);

 // Validation Password
 function validateUserPassword() {
   var storedPassword = "HonestAbe"

   do {

    var passwd = getUserPrompt("Enter a pasword");
  } while(passwd !== storedPassword);
 }

 // Console Variable loop
 for (var i = 0; i > 10; i++) {
    console.log(i)
}

function getUserPrompt(message) {

  var userInput = prompt(message);

  return userInput;
}

function sayMessage(message) {
    alert(message);
}
// We Welcome you, the President(s) of the Great United States

function setColorBasedOnUserInput(userInput) {

  var color; 

  if (userInput === "Abraham Lincoln") {
    color = "red";
  } else if (userInput === "Richard M. Nixon") {
    color = "red";
  } else if (userInput === "John F. Kennedy") {
    color = "blue";
  } else if (userInput === "Franklin D. Rosevelt") {
    color = "blue";
  }

// requires HTML element with the label of "Content"
document.getElementById("content").style.backgroundColor = color; 
}

function validateUserPassword() {
  var storedPassword = "Honest Abe";
  
  do {
    var passwd = getUserPrompt("Password Please. Hope you know your history. You better be Honest.");
  }while(passwd !== storedPassword);

}

validateUserPassword();



var promptQuestion = "Who was the President during the Civil War?";
var response = getUserPrompt(promptQuestion);

function setColorBasedOnUserInput(response); 

addPresidentToDocument("Abraham Lincoln", "Honest Whether you like it or not"); 
  
addPresidentToDocument("Richard Nixon" , "Doesnt get much better than that");

addPresidentToDocument("George Washington", "First President Ever"); 


var numberOfPresidents = getUserPrompt("How many presidents do/did you like?");
for (var i = 0; i < numberOfPresidents; i++) {
  document.write(i);
}
