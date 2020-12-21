export const getUserChoice = (userInput) => {
  // TODO
  let res = userInput.trim().toLowerCase();
  if (res === 'rock' || res === 'scissors' || res === 'paper' || res === 'bomb'){
    return res;
  } else {
    return 'error';
  }
};

export const getComputerChoice = () => {
  // TODO
  // rock = 0;
  // paper = 1;
  // scissors = 2;
  
  let compChoice = Math.floor(Math.random() * 3);
  if(compChoice === 0){
    compChoice = 'rock';
  } else if(compChoice === 1) {
    compChoice = 'paper';
  } else {
    compChoice = 'scissors';
  }
  
  return compChoice;
};

export const determineWinner = (userChoice, computerChoice) => {
  // TODO
  if(userChoice === computerChoice) {
    return 'Tie';
  } else if(userChoice === 'rock'){
      if(computerChoice === 'scissors'){
        return 'You won';
      } else {
        return 'You lost';
    }
  } else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'You lost';
      } else {
        return 'You won';
      }
  } else if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'You won';
      } else {
        return 'You lost';
      }
  } else if(userChoice === 'error'){
      return 'Error occured'
  } else if(userChoice === 'bomb'){
      return 'You won';
  }
};

const playGame = () => {
  // TODO
  let userChoice = getUserChoice('bomb');
  console.log('Your choice: '+ userChoice);
  
  let computerChoice = getComputerChoice();
  console.log('Computer\'s choice: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

export default playGame;
