# Rock, Paper, or Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:

1. Get the user’s choice.
2. Get the computer’s choice.
3. Compare the two choices and determine a winner.
4. Start the program and display the results.

## Tasks

1. The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts. Since a user can pass in a parameter, such as ‘Rock’ ‘rock’, '  rock ' with different capitalizations and spaces between. So, your `getUserChoice()` function should:
  - clean all cases. For example, `userInput` should be `rock` no matter what capitalization or extra spaces used.
  - return input if it is valid input that is one of *rock, paper, scissors*.
  - if input is invalid, it should not return anything but log some error message of your choice.
  
2. Now we need to have the computer make a choice. Inside `getComputerChoice()` utilize `Math.random()` and `Math.floor()` to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.

3. Now it’s time to determine a winner. `determineWinner()` will compare the two choices played and then return if the human player won, lost, or tied.
  - Let’s deal with the tie condition first. Within the `determineWinner()` function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, `return` a string that the game was a *'tie'*.
  - If the game is not a tie, you’ll need to determine a winner. Using `if else` and/or `switch` statement figure out whether *'user won'* or *'computer won'* and return this string.
  
4. Everything is set up. Now you need to start the game and log the results.

  - Inside the `playGame()` function, create a variable named `userChoice` set equal to the result of calling `getUserChoice()`, passing in either *'rock'*, *'paper'*, or *'scissors'* as an argument.
   
  - Create another variable named `computerChoice`, and set it equal to the result of calling `getComputerChoice()`.
   Under both of these variables, use `console.log` to print them to the console.
  - Finally, let’s determine who won. Inside the `playGame()` function, call the `determineWinner()` function. Pass in the `userChoice` and `computerChoice` variables as its parameters. Make sure to put this function call inside of a `console.log()` statement so you can see the result.

    Then, to start the game, call the `playGame()` function on the last line of your program.
