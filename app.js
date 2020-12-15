console.log("Hey im actually doing this!")

// Here is the function and you declared it but you havent called it. Call it by >> sayHello(); Doing the function that you identified.
function taskOne() {
    var promptQuestion = "How American are you?";
    var response = prompt(promptQuestion);
} 
var alertMessage;
var color; 


if (response === "As American As it Gets") {
    alertMessage = "Well, You have an American Day";
    color = "blue";
}   else {
    alertMessage = "That's Alright, America is land of the Free and home of the Brave"
    color = "red";
}
document.getElementById("content").style.backgroundColo = color;


// Also done correctly but no call or declare for the colors. Your not saying what the colors are for nor what there supposed to do. Take the free code that JS gives you.... document.getElecmentById("content").style.backgroundColo = color;

//important
//document.getElecmentById("content").style.backgroundColo = ;
//document.getElecmentById("content").style.backgroundColo = color;
