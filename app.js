console.log("welcome!")

var myVariableName = " Welcome to Patriotic Flag Company"
console.log(myVariableName) ; 


var promptQuestion = "what is our statues name?"
var response = prompt (promptQuestion);
console.log(response);

var alertMessage;

if (response === "Statue of Liberty") {
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

function sayHello() {
    document.write('Hello!');
} 

var proptQuestion = "Dont know why you say goodbye when you can say hello?"
var response = prompt (promptQuestion);
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

var msg = 'Thanks for visiting my site, If you donate now, Patriot Flag Company will match your donation dollar for dollar';
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}
updateMessage();