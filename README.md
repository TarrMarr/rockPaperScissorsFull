# Project Name
> Rock Paper Scissors 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Code Examples](#code-examples)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
A simple game of rock paper scissors using HTML, CSS and JavaScript.  

## Screenshots
![Example screenshot](https://github.com/TarrMarr/rockPaperScissorsFull/blob/main/screenshot.JPG)

## Technologies
* HTML5
* CSS
* Bootstrap
* JavaScript

## Code Examples
Show examples of usage:
`scissors.addEventListener('click', ()=>{
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
`

## Status
Project is:_finished_

## Inspiration
Created for Codecademy's Full Stack Engineer program  

## Contact
Created by TarrMarr(https://www.tarrynmarr.me) - feel free to contact me!
