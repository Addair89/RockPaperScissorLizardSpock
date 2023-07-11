import { startConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const reset = document.querySelector('.reset-icon');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.fa-regular');

const choices = {
  Rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
  Paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
  Scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
  Lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
  Spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';


//Reset all selected icons
const resetSelected = () => {
  allGameIcons.forEach((icon) =>{
    icon.classList.remove('selected');
  })
  removeConfetti();
}

//Random Computer Choice
const computerRandomChoice = () => {
  //use this random number to pick a choice from the above object for the computer
  const computerChoiceNumber = Math.floor(Math.random() * 5);
  console.log(computerChoiceNumber);
  switch(computerChoiceNumber){
    case 0:
      computerChoice = 'Rock';
      break;
    case 1:
      computerChoice = 'Paper';
      break;
    case 2:
      computerChoice = 'Scissors';
      break;
    case 3:
      computerChoice = 'Lizard';
      break;
    case 4:
      computerChoice = 'Spock';
      break;
    default:
      break;
  }
}

//Add selected Styling and Coomputer choice
const displayComputerChoice = () => {
switch(computerChoice) {
  case 'Rock':
    computerRock.classList.add('selected');
    computerChoiceEl.textContent = ' --- Rock'
    break;
  case 'Paper':
    computerPaper.classList.add('selected');
    computerChoiceEl.textContent = ' --- Paper'
    break;
  case 'Scissors':
    computerScissors.classList.add('selected');
    computerChoiceEl.textContent = ' --- Scissors'
    break;
  case 'Lizard':
    computerLizard.classList.add('selected');
    computerChoiceEl.textContent = ' --- Lizard'
    break;
  case 'Spock':
    computerSpock.classList.add('selected');
    computerChoiceEl.textContent = ' --- Spock'
    break;
  default: 
    break;
}
}

const updateScore = (selectedChoice) => {
  console.log('PLayer: ',selectedChoice);
  console.log('Computer ',computerChoice);
  if(selectedChoice === computerChoice){
    resultText.textContent = "It's A Tie!!!";
  } else {
    const choice = choices[selectedChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if(choice.defeats.indexOf(computerChoice) > -1){
      startConfetti();
      resultText.textContent = `${selectedChoice} beats ${computerChoice}! You Win!`;
      playerScoreNumber++
      playerScoreEl.textContent = playerScoreNumber
    } else {
      resultText.textContent = `${computerChoice} beats ${selectedChoice}! You Lose!`;
      computerScoreNumber++
      computerScoreEl.textContent = computerScoreNumber
    }
  }
}


//Call Functions to process turn
const checkResult = (selectedChoice) => {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(selectedChoice);
}

 //Passing PLayer selection value and styling icons

 const select = (selectedChoice) => {
    checkResult(selectedChoice);
  // Add Selected styling and update playerChoice
  switch(selectedChoice) {
    case 'Rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock'
      break;
    case 'Paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper'
      break;
    case 'Scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors'
      break;
    case 'Lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard'
      break;
    case 'Spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock'
      break;
    default: 
      break;
  }
 }

 window.select = select;

 const resetGame = () => {
  playerScoreNumber = 0;
  computerScoreNumber = 0
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = 'Begin The Game';
  resetSelected();
 }

 //Reset Game event listener
 reset.addEventListener('click', resetGame);







