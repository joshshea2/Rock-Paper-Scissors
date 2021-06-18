// function for entire game
const game = () => {
  let pScore = '0'; // starting player score
  let cScore = '0'; // starting computer score

  // what happens when play button is clicked
  const introClick = () => {
    const playBtn = document.querySelector('.playBtn');
    const introScreen = document.querySelector('.introScreen');
    const mainScreen = document.querySelector('.mainScreen');

    // intro screen fades out, main screen fades in
    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      setTimeout(() => {
        mainScreen.classList.remove('mainScreen'); // delay to remove class before fadeIn is added
      }, 500);
      mainScreen.classList.add('fadeIn');
    });
  };

  // game starts by choosing rock, paper, or scissors button
  const startMatch = () => {
    const playerChoices = document.querySelectorAll('.choices button');
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]; // generates computer random value

    // what happens when one of the buttons are clicked (any of them)
    playerChoices.forEach(playerChoice => {
      playerChoice.addEventListener('click', function () {
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        playRound(this.id, computerSelection); // 'this' keyword represents the element being clicked
      });
    });
  };

  // function to update score on page
  const updateScore = () => {
    const playerScore = document.querySelector('.playerScore');
    const computerScore = document.querySelector('.computerScore');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // function that compares player's and computer's selected values
  const playRound = (playerSelection, computerSelection) => {
    const winnerText = document.querySelector('.winner');

    // for a tie
    if (playerSelection === computerSelection) {
      winnerText.textContent = "It's a tie!";
    }

    // user chooses rock (increment score && run updateScore function)
    if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        winnerText.textContent = 'You Lose';
        cScore++;
        updateScore();
        return;
      } else if (computerSelection === 'scissors') {
        winnerText.textContent = 'You Win!';
        pScore++;
        updateScore();
        return;
      }
    }

    // user chooses paper
    if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        winnerText.textContent = 'You Win!';
        pScore++;
        updateScore();
        return;
      } else if (computerSelection === 'scissors') {
        winnerText.textContent = 'You Lose';
        cScore++;
        updateScore();
        return;
      }
    }

    // user chooses scissors
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        winnerText.textContent = 'You Lose';
        cScore++;
        updateScore();
        return;
      } else if (computerSelection === 'paper') {
        winnerText.textContent = 'You Win!';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  introClick();
  startMatch();
};

game(); // run game
