export const getUserChoice = (userInput) => {
  let cleanInput = userInput.trim().toLowerCase();

  if (cleanInput === 'paper') {
    return cleanInput;
  } else if (cleanInput === 'rock') {
    return cleanInput;
  } else if (cleanInput === 'scissors') {
    return cleanInput;
  } else if (cleanInput === 'bomb') {
    return cleanInput;
  } else {
    console.log('Error Message');
  }
};

export const getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * 3);
  let choices = ['rock', 'paper', 'scissors'];

  return choices[randomIndex];
};

export const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
    return 'tie'
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'user won';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'user won';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'user won'
  } else if (userChoice === 'bomb') {
    return 'user won'
  } else {
    return 'computer won';
  }

};

const playGame = () => {
  let userChoice = getComputerChoice('scissors');
  let computerChoice = getComputerChoice();
  console.log('user chose: ' + userChoice);
  console.log('computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  
};

export default playGame;
playGame();