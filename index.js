export const getUserChoice = (userInput) => {
  let input = userInput.trim().toLowerCase();
  if (input === "rock") {
    return input;
  } else if (input === "paper") {
    return input;
  } else if (input === "scissors") {
    return input;
  } else if (input === 'bomb'){
    return input;
  } else {
    console.log("Incorrect choice")
  }
  
};

export const getComputerChoice = () => {
  let input2 = Math.floor(Math.random() * 3);
  let randomChoice = ["rock", "paper", "scissors"];
  return randomChoice[input2];
};

export const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return 'user won';
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return 'user won';
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return 'user won';
  } else if (userChoice === 'bomb') {
    return 'user won'
  } else {
    return 'computer won';
  }
};

const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

export default playGame;

playGame();
