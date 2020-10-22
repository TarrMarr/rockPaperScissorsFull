var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

var player = document.getElementById('player');
var computer = document.getElementById('computer');
var outcome = document.getElementById('outcome');

var reset = document.getElementById('reset');

var playerChoice;
var computerChoice;

rock.addEventListener('click', ()=>{
    playerChoice = 'rock';
    player.innerHTML = playerChoice;
    computersGuess();
    outcome.innerHTML = determineWinner(playerChoice, computerChoice);
});

paper.addEventListener('click', ()=>{
    playerChoice = 'paper';
    player.innerHTML = playerChoice;
    computersGuess();
    outcome.innerHTML = determineWinner(playerChoice, computerChoice);
});

scissors.addEventListener('click', ()=>{
    playerChoice = 'scissors';
    player.innerHTML = playerChoice;
    computersGuess();
    outcome.innerHTML = determineWinner(playerChoice, computerChoice);
});

reset.addEventListener('click', resetGame);

var computersGuess = () => {
    var randomNum = Math.floor(Math.random()*3);
    if(randomNum === 0){
        computerChoice = 'rock';
        computer.innerHTML = 'rock';
    } else if (randomNum === 1){
        computerChoice = 'paper';
        computer.innerHTML = 'paper';
    } else if (randomNum ===2){
        computerChoice = 'scissors';
        computer.innerHTML = 'scissors';
    }
};

var determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice){
        return 'It is a tie';
    } else if (playerChoice === 'rock' && computerChoice === 'paper'){
        return 'Computer Wins! Paper covers rock!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        return 'You win! Rock smashes scissors!';
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
        return 'You win! Paper covers rock!';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors'){
        return 'Computer wins!  Scissors cut paper!';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock'){
        return 'Computer wins! Rock smashes scissors';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        return 'You win!  Scissors cut paper!';
    }
};

var resetGame = () => {
    player.remove.innerText;
    computer.innerHTML = '';
    outcome.innerHTML = '';
}