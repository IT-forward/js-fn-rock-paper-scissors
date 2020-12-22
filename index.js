export const getUserChoice = (userInput) => {
  // TODO
  let input = userInput.trim().toLowerCase();
  if (input === 'rock' || 'paper' || 'scissors') {
    return input;
  } else {
    return 'ERROR MESSAGE';
  }
};

export const getComputerChoice = () => {
  // TODO
};

export const determineWinner = (userChoice, computerChoice) => {
  // TODO
};

const playGame = () => {
  // TODO
};

export default playGame;
