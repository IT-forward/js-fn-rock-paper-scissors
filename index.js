export const getUserChoice = (userInput) => {
  let input = userInput.trim().toLowerCase();

  if (input === 'paper') {
    return input;
  } else if (input === 'rock') {
    return input;
  } else if (input === 'scissors') {
    return input;
  } else if (input === 'bomb') {
    return input;
  } else {
    console.log('Error Message');
  }
};

export const getComputerChoice = () => {
  let choiceNums = Math.floor(Math.random() * 3);
  let indexs = ['rock', 'paper', 'scissors'];

  return indexs[choiceNums];
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
  determineWinner(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

export default playGame;
playGame();