function getComputerChoice() {

    var randomNumber = Math.random();
    if (randomNumber < 0.34) {
        randomNumber = "Rock";
    } else if (randomNumber <= 0.67) {
        randomNumber = "Paper";
    } else {
        randomNumber = "Scissors";
    };

    return randomNumber;
}

function getUserChoice() {

    var choices = document.getElementsByName('choice');
    var userChoice = '';

    for (i = 0; i < choices.length; i++) {
        if (choices[i].checked === true) {
            userChoice = choices[i].value;
        }
    }

    return userChoice;

}


function compare(computerChoice, userChoice) {

    if (computerChoice === userChoice) {
        window.alert("It's a tie!");
    } else {
        if (computerChoice === "Rock") {
            if (userChoice === "Scissors") {
                // rock wins
                window.alert("You win!");
            } else {
                // paper wins
                window.alert("You lose! Try again.");
            }
        }
        if (computerChoice === "Paper") {
            if (userChoice === "Rock") {
                // paper wins
                window.alert("You win!");
            } else {
                // scissors wins
                window.alert("You lose! Try again.");
            }
        }
        if (computerChoice === "Scissors") {
            if (userChoice === "Rock") {
                // rock wins
                window.alert("You lose! Try again.");
            } else {
                // scissors wins
                window.alert("You win!");

            }
        }
    }
}

function PlayTheGame() {
	debugger;

    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice();

    compare(computerChoice, userChoice);

}