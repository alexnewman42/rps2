let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("compscore");
const scoreBoard_div = document.querySelector(".score-board");
const result_p= document.querySelector(".result" > p);
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = user + " beats " + computer + ". You win!"
}

function loose() {
    computerScore++;
}

function draw() {

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();