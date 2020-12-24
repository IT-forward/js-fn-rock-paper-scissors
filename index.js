export const getUserChoice = (userInput) => {
  let cleanInput = userInput.trim().toLowerCase();
  if (cleanInput === 'rock') {
    return cleanInput;
  } else if(cleanInput === 'paper') {
    return cleanInput;
  } else if(cleanInput === 'scissors') {
    return cleanInput;
  } else if(cleanInput === 'bomb') {
    return cleanInput;
  }
   else {
    console.log('Error_message');
  }
};

export const getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * 3);
  let options = ['rock','paper','scissors'];
  return options[randomIndex]; 
};

export const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice)  return 'tie';  
  switch(userChoice) {
   case 'rock': 
        if (computerChoice === 'paper') return 'computer won';
        break;
   case 'paper': 
        if (computerChoice === 'scissors') return 'computer won'; 
        break;
   case 'scissors':
        if (computerChoice === 'rock') return 'computer won'; 
        break;
  }
  return 'user won';
};

const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log('user chose: ' + userChoice);
  console.log('computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

export default playGame;
playGame();
