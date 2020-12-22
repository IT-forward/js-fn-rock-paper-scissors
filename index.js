export const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase().trim();

  if (userInput === 'rock'){ 
    return 'rock';
  }
  else {
    if (userInput === 'paper'){ 
      return 'paper';
    }
    else {
      if (userInput === 'scissors'){ 
        return 'scissors';
      }
      else {
        if (userInput === 'bomb') return 'bomb';
        else console.log(`Please choose one of the words : "rock", "paper", or "scissors"`);
      }
    }
  }

};

export const getComputerChoice = () => {

  let randDigit = Math.floor(Math.random() * 3);
  if (randDigit === 0) return 'rock';
  if (randDigit === 1) return 'paper';
  if (randDigit === 2) return 'scissors';
};

export const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') return 'user won';
  if (userChoice === computerChoice) return 'tie';
  
  switch (userChoice){
    case 'rock': if (computerChoice === 'paper') return 'computer won'; break;
    case 'paper': if (computerChoice === 'scissors') return 'computer won'; break;
    case 'scissors': if (computerChoice === 'rock') return 'computer won'; break;
  }

  return 'user won';
};

const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('user choice: ' + userChoice);
  console.log('computer choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

export default playGame;
