let playerScore = 0;
let computerScore = 0;


function game() {
    for (i = 0; i < 5; i++) { // loop for the game to run 5 times
      const playerSelection = prompt('rock, paper, or scissors').toLowerCase();
      const options = ['rock', 'paper', 'scissors'];
      const computerSelection = options[Math.floor(Math.random() * options.length)]; // make random choice for computer 
        

      playRound(playerSelection, computerSelection); // playRound function used in loop

    }
        // message to display after end of loop
      if (playerScore > computerScore) {
        console.log(`game over, you win! - ${playerScore} to ${computerScore}`);

    } else if (playerScore < computerScore) {
        console.log(`game over, you lose - ${playerScore} to ${computerScore}`);

    } else {
        console.log('ended in a draw');
    }
  
}
  console.log(game());



    // function to play 1 round
 function playRound(playerSelection, computerSelection) {


    
        // for a tie
     if (playerSelection === computerSelection) {
        console.log('it\'s a tie');
     }  
      
        // user chooses rock
     if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
             console.log('you lose');
             computerScore++;
       
         } else if (computerSelection === 'scissors') {
             console.log('you win');
             playerScore++;
            
         }
     }
     
        // user chooses paper
     if (playerSelection === 'paper') {
         if (computerSelection === 'rock') {
             console.log('you win');
             playerScore++;
             
         } else if (computerSelection === 'scissors') {
             console.log('you lose');
             computerScore++;
             
         }
     }

        // user chooses scissors
     if (playerSelection === 'scissors') {
         if (computerSelection === 'rock') {
             console.log('you lose');
             computerScore++;
           
         } else if (computerSelection === 'paper') {
             console.log('you win');
             playerScore++;
           
         }
     }

    }