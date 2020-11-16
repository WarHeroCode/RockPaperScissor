var choice1 = document.getElementById('choice1');
var choice = document.getElementById('choice');
var compare = document.getElementById('compare');





function userThrow(){

    var randomNumber = Math.random();
         if (randomNumber < 0.34) {
             randomNumber = "Rock";
          }else if(randomNumber <= 0.67) {
             randomNumber = "Paper";
          }else{
             randomNumber = "Scissors";
          }; 
          

var choice = document.getElementsByName('choice');


for (i =0;i < choice.length; i++){
    if (choice[i].checked === true){
     Choice = choice[i].value;   }}
     
     generateComputerChoice = choice1;
           return choice1;
           

 }
     function compare (choice1,choice) {
    if (choice1=== choice) {
        alert("It's a tie!");
    }
    if (choice1 === "rock") {
        if (choice === "scissors") {
            // rock wins
            alert("You win!");
        } else {
            // paper wins
            alert("You lose! Try again.");
        }
    }
    if (choice1 === "paper") {
        if (choice === "rock") {
            // paper wins
            alert("You win!");
        } else {
            // scissors wins
            alert("You lose! Try again.");
        }
    }
    if (choice1 === "scissors") {
        if (choice === "rock") {
            // rock wins
            alert("You lose! Try again.");
        } else {
            // scissors wins
            alert("You win!");
            
        }
    }
}

