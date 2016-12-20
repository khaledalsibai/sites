var userChoice, computerChoice;
computerScore = 0;
playerScore = 0;


$(document).on('click', '.userSelection', function() {
    userChoice = this.value;
});

$(document).on('click', '#clicktoPlay', function() {
    // console.log("computer picked " + computerChoice);
    // console.log("user picked " + userChoice);
    computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    // checking selection 
    if (userChoice === undefined || userChoice === null) {
        $("#result").html("You should select to play!");
        throw new Error("You should select to play!");
    }
    // comperation
    if (userChoice === computerChoice) {
        $("#result").html("Tie");
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            $("#result").html("Rocks break scissors, you win!");
            playerScore += 1;
        } else {
            $("#result").html("Papers cover rocks, computer wins!");
            computerScore += 1;
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            $("#result").html("Papers cover rocks, you win!");
            playerScore += 1;
        } else {
            $("#result").html("Sissors cut papers, computer win!");
            computerScore += 1;
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            $("#result").html("Rocks break scissors, computer wins!");
            computerScore += 1;
        } else {
            $("#result").html("Scissor cut papers, you win!");
            playerScore += 1;
        }
    }
    $("#comp").html(computerScore);
    $("#you").html(playerScore);
});
