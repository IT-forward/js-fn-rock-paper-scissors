export const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase().trim();

  switch (userInput){
    case 'rock': return 'rock';
    case 'paper': return 'paper'; 
    case 'scissors': return 'scissors';
    case 'bobm': return 'bomb'; 
    default: console.log(`Please choose one of the words : "rock", "paper", or "scissors"`); break;
  }

};

export const getComputerChoice = () => {

  let randDigit = Math.floor(Math.random() * 3);
  if (randDigit === 0) return 'rock';
  if (randDigit === 1) return 'paper';
  if (randDigit === 2) return 'scissors';
};

export const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return 'tie';
  
  switch (userChoice){
    case 'bomb': return 'user won'; 
    case 'rock': if (computerChoice === 'paper') return 'computer won'; break;
    case 'paper': if (computerChoice === 'scissors') return 'computer won'; break;
    case 'scissors': if (computerChoice === 'rock') return 'computer won'; break;
  }

  return 'user won';
};

const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('user choice: ' + userChoice);
  console.log('computer choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

export default playGame;
playGame();