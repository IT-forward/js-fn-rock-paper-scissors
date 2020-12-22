export const getUserChoice = (userInput) => {
  // TODO
  const input = userInput.trim().toLowerCase();
  if (input === 'rock') {
    return input;
  } else if (input === 'scissors') {
    return input;
  } else if (input === 'paper') {
    return input;
  } else {
    console.log('ERROR MESSAGE');
  }
};

export const getComputerChoice = () => {
  // TODO
  const randomIndex = Math.floor(Math.random() * 3);
  const options = ['rock', 'scissors', 'paper'];
  return options[randomIndex];
};

export const determineWinner = (userChoice, computerChoice) => {
  // TODO
};

const playGame = () => {
  // TODO
};

export default playGame;
