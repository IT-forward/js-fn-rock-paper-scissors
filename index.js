export const getUserChoice = (userInput) => {
  
  let res = userInput.trim().toLowerCase();
  if (res === 'rock' || res === 'scissors' || res === 'paper' || res === 'bomb'){
    return res;
  } else {
    console.log('Error occured');
  }
};

export const getComputerChoice = () => {
  
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
  
  if(userChoice === computerChoice) {
    return 'tie';
  } else if(userChoice === 'rock'){
      if(computerChoice === 'scissors'){
        return 'user won';
      } else {
        return 'computer won';
    }
  } else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'computer won';
      } else {
        return 'user won';
      }
  } else if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'user won';
      } else {
        return 'computer won';
      }
  } else if(userChoice === 'bomb'){
      return 'user won';
  }
};

const playGame = () => {
  
  let userChoice = getUserChoice('bomb');
  console.log('User choice: '+ userChoice);
  
  let computerChoice = getComputerChoice();
  console.log('Computer choice: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

export default playGame;
