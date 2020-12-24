export const getUserChoice = (userInput) => {
  let cleanInput = userInput.trim().toLowerCase();
  if (cleanInput === 'rock') {
    return cleanInput;
  } else if (cleanInput === 'scissors') {
    return cleanInput;
  } else if (cleanInput === 'paper') {
    return cleanInput;
  } else if (cleanInput === 'bomb') {
    return cleanInput;
  } else {
    console.log('ERROR MESSAGE');
  }
};

export const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const options = ['rock', 'scissors', 'paper'];
  return options[randomIndex];
};

export const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'user won';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'user won';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'user won';
  } else if (userChoice === 'bomb') {
    return 'user won';
  } else {
    return 'computer won';
  }
};

const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log('User chose: ' + userChoice);
  console.log('Computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
export default playGame;
playGame();