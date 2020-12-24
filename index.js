export const getUserChoice = (userInput) => {
  const cleanInput = userInput.trim().toLowerCase();

  if (
    cleanInput === "rock" ||
    cleanInput === "paper" ||
    cleanInput === "scissors" ||
    cleanInput === "bomb"
  ) {
    return cleanInput;
  } else {
    console.log("Input is invalid");
  }
};

export const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return options[randomIndex];
};

export const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "tie";
  }

  if (userChoice === "bomb") {
    return "user won";
  }

  switch (userChoice) {
    case "rock":
      if (computerChoice === "paper") {
        return "computer won";
      } else {
        return "user won";
      }
      break;

    case "paper":
      if (computerChoice === "scissors") {
        return "computer won";
      } else {
        return "user won";
      }
      break;

    case "scissors":
      if (computerChoice === "rock") {
        return "computer won";
      } else {
        return "user won";
      }
      break;
  }
};

const playGame = () => {
  const userChoice = getUserChoice("bomb");

  const computerChoice = getComputerChoice();

  console.log("user choice: " + userChoice);
  console.log("computer choice: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

export default playGame;
