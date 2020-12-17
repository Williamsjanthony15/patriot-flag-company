// Title and Console Prompt
var myPrompt = "Patriot Flag Company";
console.log(myPrompt);

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

function getUserPrompt(message)

  var userInput = prompt(message);

  return userInput;

  
// First President Add
function addPresidentToDocument(PresidentName, Year) {

  if(presidentName === "John F Kennedy") {
      description = "John F. Kennedy was the 35th President of the United States (1961-1963), the youngest man elected to the office. On November 22, 1963, when he was hardly past his first thousand days in office, JFK was assassinated in Dallas, Texas, becoming also the youngest President to die."
  }
}

// Pictures, And links to HTML for header / Description

  Document.write("<section> \
                    <h2> + presidentName + "</h2> \
                    <img src=\"images/" + presidentName + ".png\"> \
                    <p>" + presidentName + description + ".</p> \
                    </section>");
}

function sayMessage(message) {
    alert(message);
}
// We Welcome you, the President(s) of the Great United States

