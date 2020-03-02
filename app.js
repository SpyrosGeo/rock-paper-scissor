let userScore = 0;
let computerScore = 0;
//caching the DOM
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result')
const rock_dv = document.getElementById('rock')
const paper_dv = document.getElementById('paper')
const scissors_dv = document.getElementById('scissor')

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor']
    const randNumber = Math.floor(Math.random() * choices.length);
    return choices[randNumber];
}

function win(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML =`You WIN with:  ${userChoice} against computer's: ${computerChoice}`
    document.getElementById(userChoice).classList.add('green-glow');
    reset(userChoice)


}
function reset(choice){
    setTimeout(()=>{
        document.getElementById(choice).classList.remove('green-glow');
        document.getElementById(choice).classList.remove('red-glow');
    },700)
}

function lose(userChoice,computerChoice) {
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML =computerScore;
    result_div.innerHTML = `You lose with:  ${userChoice} against computer's: ${computerChoice}`
    document.getElementById(userChoice).classList.add('red-glow');
    reset(userChoice)
}

function draw() {
 result_div.innerHTML = "Its a draw"
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice,computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw();
            break;

    }
}
game("")

function main() {
    rock_dv.addEventListener('click', () => {

        game("rock")
    })
    paper_dv.addEventListener('click', () => {
        game("paper")
    })
    scissors_dv.addEventListener('click', () => {
        game("scissor")
    })
}

main();