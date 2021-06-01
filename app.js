
const playerSelection = prompt('rock, paper, or scissors').toLowerCase;
const options = ['rock', 'paper', 'scissors'];
const computerSelection = options[Math.floor(Math.random() * options.length)];



 function playRound(playerSelection, computerSelection) {

    

     if (playerSelection === computerSelection) {
        console.log('it\'s a tie');
     }   
     
     if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
          console.log('you lose');
         } else if (computerSelection === 'scissors') {
             console.log('you win');
         }
     }

     if (playerSelection === 'paper') {
         if (computerSelection === 'rock') {
             console.log('you win');
         } else if (computerSelection === 'scissors') {
             console.log('you lose');
         }
     }

     if (playerSelection === 'scissors') {
         if (computerSelection === 'rock') {
             console.log('you lose');
         } else if (computerSelection === 'paper') {
             console.log('you win');
         }
     }
    }

// let playMatch = playRound(playerSelection, computerSelection);

 console.log(playRound());     

//      if (playerSelection === computerSelection) {
//          console.log('it\'s a tie');
         

//      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//          console.log('you lose');
    

//      } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//          console.log('you win');
         

//      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//          console.log('you win');
         

//      } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//          console.log('you lose');
         

//      } else if (playerSelection === 'scissors' && computerSelction === 'rock') {
//          console.log('you lose');


//      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//          console.log('you win');
         

//      } else {
//          console.log('something went wrong');
//      }
//  }

// console.log(playRound(playerSelection, computerSelection))