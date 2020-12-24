export const getUserChoice = (userInput) => {
  let cleanInput = userInput.trim().toLowerCase();
  if (input === "rock") {
    return cleanInput;
  } else if (cleanInput === "paper") {
    return cleanInput;
  } else if (cleanInput === "scissors") {
    return cleanInput;
  } else if (cleanInput === 'bomb'){
    return cleanInput;
  } else {
    console.log("Incorrect choice")
  }
  
};

export const getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[randomIndex];
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