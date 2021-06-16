// let playerScore = 0;
// let computerScore = 0;

// // function game() {
// //     for (i = 0; i < 5; i++) { // loop for the game to run 5 times
// //       // const playerSelection = prompt('rock, paper, or scissors').toLowerCase();

// // const options = ["rock", "paper", "scissors"];
// // const computerSelection = options[Math.floor(Math.random() * options.length)]; // make random choice for computer

// //       playRound(playerSelection, computerSelection); // playRound function used in loop

// //     }
// //     // message to display after end of loop
// //     if (playerScore > computerScore) {
// //         console.log(`game over, you win! - ${playerScore} to ${computerScore}`);

// //     } else if (playerScore < computerScore) {
// //         console.log(`game over, you lose - ${playerScore} to ${computerScore}`);

// //     } else {
// //         console.log('ended in a draw');
// //     }

// // }
// // console.log(game());

// // function to play 1 round

// const options = ["Rock", "Paper", "Scissors"];
// const computerSelection = options[Math.floor(Math.random() * options.length)]; // make random choice for computer
// const playerOptions = document.querySelectorAll("#btn");

// function game() {
// 	for (const playerSelection of playerOptions) {
// 		playerSelection.addEventListener("click", function () {
// 			console.log(this.textContent);
// 		});

// 		playRound(computerSelection, playerSelection);
// 	}
// }

// game();

// // game();

// //DOM Manipulation

// // const btn1 = document.querySelector('#btn1');
// // const btn2 = document.querySelector('#btn2');
// // const btn3 = document.querySelector('#btn3');

// // btn1.addEventListener('click', () => {
// //     console.log('clicked rock');
// // });

// // btn2.addEventListener('click', () => {
// //     console.log('clicked paper');
// // });

// // btn3.addEventListener('click', () => {
// //     console.log('clicked siccors');
// // });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const game = () => {
  let pScore = 0; // starting player score
  let cScore = 0; // starting computer score

  // what happens when play button is clicked
  const introClick = () => {
    const playBtn = document.querySelector('.playBtn');
    const introScreen = document.querySelector('.introScreen');
    const mainScreen = document.querySelector('.mainScreen');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      setTimeout(() => {
        mainScreen.classList.remove('mainScreen'); // delay to remove class before fadeIn is added
      }, 500);
      mainScreen.classList.add('fadeIn');
    });
  };

  const startMatch = () => {
    const playerChoice = document.querySelectorAll('.choices button');
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    playerChoice.forEach(playerChoice => {
      playerChoice.addEventListener('click', function () {
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        console.log(computerSelection);
      });
    });
  };

  // function playRound(playerChoices, computerSelection) {
  //   // for a tie
  //   if (playerChoices === computerSelection) {
  //     console.log("it's a tie");
  //   }

  //   // user chooses rock
  //   if (playerSelection.textContent === 'Rock') {
  //     if (computerSelection === 'Paper') {
  //       console.log('you lose');
  //       computerScore++;
  //     } else if (computerSelection === 'Scissors') {
  //       console.log('you win');
  //       playerScore++;
  //     }
  //   }

  //   // user chooses paper
  //   if (playerSelection.textContent === 'Paper') {
  //     if (computerSelection === 'Rock') {
  //       console.log('you win');
  //       playerScore++;
  //     } else if (computerSelection === 'Scissors') {
  //       console.log('you lose');
  //       computerScore++;
  //     }
  //   }

  //   // user chooses scissors
  //   if (playerSelection.textContent === 'Scissors') {
  //     if (computerSelection === 'Rock') {
  //       console.log('you lose');
  //       computerScore++;
  //     } else if (computerSelection === 'Paper') {
  //       console.log('you win');
  //       playerScore++;
  //     }
  //   }
  // }

  startMatch();
  introClick();
  // playRound(playerChoices, computerSelection);
};

game();
