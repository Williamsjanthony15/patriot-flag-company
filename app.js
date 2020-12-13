console.log("welcome!")

var myVariableName = " Welcome to Patriotic Flag Company"
console.log(myVariableName) ; 


var promptQuestion = "what is our statues name?"
var response = prompt (promptQuestion);
console.log(response);

var alertMessage;

if (response === "Statue of Libery") {
    alertMessage = "Congradulations"
    color = "#00FF00";
} else if (response === "Statue of Godess") {
    alertMessage = "You're Wrong";
    color = "#010205"; 
} else {
    color = "#FF0020" 
    alertMessage = "You're not even close"
}

alert(alertMessage);
