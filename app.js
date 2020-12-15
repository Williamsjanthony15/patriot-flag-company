console.log("welcome!");

// Create a variable to hold a console message
var myVariableName = "Welcome to Patriotic Flag Company";

// Print the message to console
console.log(myVariableName); 

// Create a variable to hold prompt message
var promptQuestion = "what is our statues name!";

// Call the prompt function and save return value in variable
var response = prompt(promptQuestion);

// Print the response to console
console.log(response);

// CREATE the variable
var alertMessage;

// If user input matches "Statue of Liberty"
if (response === "Statue of Liberty") {
    // ASSIGN the variable a VALUE
    alertMessage = "Congradulations" // set an alertMessage
    color = "#00FF00"; // set a color...for something?

// If user input matches "Statue of Godess"
} else if (response === "Statue of Godess") {
    alertMessage = "You're Wrong";
    color = "#010205"; 

// Catch-all for every other response
} else {
    alertMessage = "You're not even close"
    color = "#FF0020" 
}

// alert returns nothing
alert(alertMessage);

var proptQuestion = "Dont know why you say goodbye when you can say hello?";
var response = prompt(proptQuestion);
console.log(response);

if (response === "hello hello!") {
    alertMessage = "HEY! Nice job! You know music!"
    color = "blue";
} else if (response === "hello goodbye"){
    alertMessage = "Goodbye Goodbye"
    color = "red";
} else { 
    color = "green"
    alertMessage = "I cant believe you dont even know..."
}

alert(alertMessage);

document.body.style.backgroundColor = color;

var msg = 'Thanks for visiting my site, If you donate now, Patriot Flag Company will match your donation dollar for dollar';

function sayHello() {
    document.write('Hello!');
}

sayHello();