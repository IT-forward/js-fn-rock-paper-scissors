export const getUserChoice = (userInput) => {
  // TODO
  let input = userInput.trim().toLowerCase();
  if (input === 'rock') {
    return input;
  } else if (input === 'paper') {
    return input;
  } else if (input === 'scissors') {
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
