
const playerSelection = prompt('rock, paper, or scissors').toLowerCase();
const options = ['rock', 'paper', 'scissors'];
const computerSelection = options[Math.floor(Math.random() * options.length)]; // make random choice for computer 


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
         } else if (computerSelection === 'scissors') {
             console.log('you win');
         }
     }

        // user chooses paper
     if (playerSelection === 'paper') {
         if (computerSelection === 'rock') {
             console.log('you win');
         } else if (computerSelection === 'scissors') {
             console.log('you lose');
         }
     }

        // user chooses scissors
     if (playerSelection === 'scissors') {
         if (computerSelection === 'rock') {
             console.log('you lose');
         } else if (computerSelection === 'paper') {
             console.log('you win');
         }
     }

    }

  console.log(playRound(playerSelection, computerSelection));