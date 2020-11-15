document.getElementById('Rock').onclick = user;
document.getElementById('Paper').onclick = user;
document.getElementById('Scissors').onclick = user;



function user(){
const userChoice = prompt("Do you choose rock, paper or scissors?");
    console.log("User: " + userChoice);

    var generateComputerChoice = Math.random();
         if (generateComputerChoice < 0.34) {
             generateComputerChoice = "Rock";
          }else if(generateComputerChoice <= 0.67) {
             generateComputerChoice = "Paper";
          }else{
             generateComputerChoice = "Scissors";
          }; 

    console.log("Computer: " + generateComputerChoice);

(compare(userChoice, generateComputerChoice)); 

var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            return "You win!";
        } else {
            // paper wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};
// Run the compare function
var results = compare(userChoice,generateComputerChoice);
// Display results
document.write("<br><hr><b>Results: </b>" + results);

}