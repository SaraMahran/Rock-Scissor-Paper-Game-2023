//A way to use shortcut for is statement (Default opertator)
      //Add it to the same line of code instead of the if statement below

      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        loses: 0,
        ties: 0,
      };
      updateScoreElement();
      /* if (!score) {
        score = {
          wins: 0,
          loses: 0,
          ties: 0,
        };
      }*/

      document.body.addEventListener('keydown', (event) => {
        if(event.key === 'r'){
          playGame('Rock');
        }
        else if(event.key === 'p')
        {
          playGame('Paper');
        }
        else if(event.key === 's')
        {
          playGame('Scissors');
        }
      });
      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = "";
        if (playerMove === "Scissors") {
          if (computerMove === "Rock") {
            result = "You lose.";
          } else if (computerMove === "Paper") {
            result = "You win.";
          } else if (computerMove === "Scissors") {
            result = "Tie.";
          }
        } else if (playerMove === "Paper") {
          if (computerMove === "Rock") {
            result = "You win.";
          } else if (computerMove === "Paper") {
            result = "Tie.";
          } else if (computerMove === "Scissors") {
            result = "You lose.";
          }
        } else if (playerMove === "Rock") {
          if (computerMove === "Rock") {
            result = "Tie.";
          } else if (computerMove === "Paper") {
            result = "You lose.";
          } else if (computerMove === "Scissors") {
            result = "You win.";
          }
        }

        if (result === "You win.") {
          score.wins += 1;
        } else if (result === "You lose.") {
          score.loses += 1;
        } else if (result === "Tie.") {
          score.ties += 1;
        }
        localStorage.setItem("score", JSON.stringify(score));
        updateScoreElement();

        document.querySelector(".js-result").innerHTML = result;
        document.querySelector(
          '.js-moves'
        ).innerHTML = `You
          <img src="images/${playerMove}-emoji.png" alt="An image for a rock emoiji in the rock paper scissors game." class="move-icon">
          <img src="images/${computerMove}-emoji.png" alt="An image for a scissors emoiji in the rock paper scissors game." class="move-icon">
          Computer
          `;

        /*alert(
          `You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}.`
        );
        */
      }

      function updateScoreElement() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins: ${score.wins}, Loses: 
         ${score.loses}, Ties: ${score.ties}`;
      }
      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = "";
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "Rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "Paper";
        } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
          computerMove = "Scissors";
        }
        console.log(computerMove);
        return computerMove;
      }

      let isAutoPlaying = false;
      let intervalId;

      function autoPlay(){
        if(!isAutoPlaying){
          const playerMove = pickComputerMove();
           intervalId = setInterval(function(){
            playGame(playerMove)
          },1000);
          
          isAutoPlaying = true;
        }
        else{
          clearInterval(intervalId);
          isAutoPlaying = false;
        }         
      }

      document.querySelector('.js-rock-button').addEventListener('click', () => {
        playGame('Rock');
      });

      document.querySelector('.js-paper-button').addEventListener('click', () => {
        playGame('Paper');
      });

      document.querySelector('.js-scissors-button').addEventListener('click', () => {
        playGame('Scissors');
      });

      document.querySelector('.js-autoplay-button').addEventListener('click', () => {
        autoPlay();
      });

      document.querySelector('.js-reset-score-button').addEventListener('click', () => {
        score.wins = 0;
        score.loses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
            });





