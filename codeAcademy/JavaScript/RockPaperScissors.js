/*RockPaperScissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/
function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
    console.log('Invalid option!');
    } }
    
    
    function getComputerChoice() {
    let computerInput = Math.floor(Math.random() * 3);
    switch (computerInput){
       case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        console.log("invalid!");
        break;
     } };
    
     
    
    
    function determineWinner (userChoice, computerChoice){  if (userChoice === computerChoice) {    
      return 'It is a tie!';
      }
    
       if (userChoice === 'rock'){
        if (computerChoice === 'paper') {
          return 'The computer won!';
         } else {
          return 'You won!';
        }
      }
    
    if(userChoice === 'paper'){
      if (computerChoice === 'scissors'){
      return 'The computer won!';
    }else {
      return 'You won!';
    } 
    }
    
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    
    if (userChoice === 'bomb'){
      return 'you won!';
    }
    };
    
    
    
    function playGame(){
      let userChoice = getUserChoice('rock');
      let computerChoice = getComputerChoice();
      console.log('user = ' +userChoice);
      console.log('computer = ' +computerChoice);
      console.log(determineWinner(userChoice, computerChoice))}
      
    
    playGame();
    
    
    
    