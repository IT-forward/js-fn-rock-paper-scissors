export const getUserChoice = (userInput) => {
  // bo'sh joylarni o'chiramiz va kichik harfga o'tkazamiz.
  let input = userInput.trim().toLowerCase();
  // shartlarni birin-ketinlik bilan tekshiramiz
  if (input === 'rock') {
    return input;
  } else if(input === 'paper') {
    return input;
  } else if(input === 'scissors') {
    return input;
  } else if(input === 'bomb') {
    return input;
  }
  // shartlarni birortasi qanoatlantirmasa, console da Error_message yozuvi paydo bo'ladi
   else {
    console.log('Error_message');
  }
};

export const getComputerChoice = () => {
  // 0 va 3 sonlar orasidan tasodifiy butun sonni qaytaramiz
  let randomIndex = Math.floor(Math.random() * 3);
  // Massiv elementlarini kiritib olamiz
  let element = ['rock','paper','scissors'];
  // Massivning indexlarini qaytaramiz
  return element[randomIndex]; 
};

export const determineWinner = (userChoice, computerChoice) => {
  // o'yinchi va kompyuter qiymatlari teng bo'lgandagi shart
  if (userChoice === computerChoice)  return 'tie';  
  // switch orqali bularni taqqoslab chiqamiz
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
  console.log(userChoice,computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

export default playGame;
playGame();
