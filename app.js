const options = ["rock", "paper", "scissor"];
let score = {
  you: 0,
  computer: 0
};
const WIN_GREEN = "#6ac475";
const LOSE_RED = "#c4736a";
const DRAW_BLUE = "#5865f2";

const playerHand = document.querySelector(".hands .player-hand");
const computerHand = document.querySelector(".hands .computer-hand");

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

const btns = document.querySelectorAll(".options button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".hands .player-hand").src = "rock.png";
    document.querySelector(".hands .computer-hand").src = "rock.png";
    playerHand.classList.add('shakePlayer')
    computerHand.classList.add('shakeComputer')
    const playerA = btn.querySelector("label").innerText;
    const playerB = options[getRandomInt()];
    setTimeout(()=>compare(playerA, playerB),1000)
    
  });
});

function compare(player, computer) {
  const won = "YOU WON";
  const lose = "YOU LOST";
  const resultEl = document.querySelector(".hands .result");
  const youScore = document.querySelector(".score .you");
  const computerScore = document.querySelector(".score .computer");

  if (player == computer) {
    console.log(`${player} is equal to ${computer}`);
    update(player, computer);
    resultEl.style.color = DRAW_BLUE;
    resultEl.innerText = "DRAW";
  } else if (player == "rock" && computer == "scissor") {
    console.log(`${player} defeats ${computer}`);
    update(player, computer);
    score.you++;
    resultEl.style.color = WIN_GREEN;
    resultEl.innerText = won;
    youScore.innerText = score.you;
  } else if (player == "rock" && computer == "paper") {
    console.log(`${player} loses to ${computer}`);
    update(player, computer);
    score.computer++;
    resultEl.style.color = LOSE_RED;
    resultEl.innerText = lose;
    computerScore.innerText = score.computer;
  } else if (player == "paper" && computer == "scissor") {
    console.log(`${player} loses to ${computer}`);
    update(player, computer);
    score.computer++;
    resultEl.style.color = LOSE_RED;
    resultEl.innerText = lose;
    computerScore.innerText = score.computer;
  } else if (player == "paper" && computer == "rock") {
    console.log(`${player} defeats ${computer}`);
    update(player, computer);
    score.you++;
    resultEl.style.color = WIN_GREEN;
    resultEl.innerText = won;
    youScore.innerText = score.you;
  } else if (player == "scissor" && computer == "rock") {
    console.log(`${player} loses to ${computer}`);
    update(player, computer);
    score.computer++;
    resultEl.style.color = LOSE_RED;
    resultEl.innerText = lose;
    computerScore.innerText = score.computer;
  } else if (player == "scissor" && computer == "paper") {
    console.log(`${player} defeats ${computer}`);
    update(player, computer);
    score.you++;
    resultEl.style.color = WIN_GREEN;
    resultEl.innerText = won;
    youScore.innerText = score.you;
  }
  // playerHand.classList.remove('shake')
  // computerHand.classList.remove('shake')
}
function update(player, computer) {
  const rock = "rock.png";
  const paper = "paper.png";
  const scissor = "scissor.png";

  // playerHand
  if (player == "rock") {
    playerHand.src = rock;
  } else if (player == "paper") {
    playerHand.src = paper;
  } else if (player == "scissor") {
    playerHand.src = scissor;
  }

  // computerHand
  if (computer == "rock") {
    computerHand.src = rock;
  } else if (computer == "paper") {
    computerHand.src = paper;
  } else if (computer == "scissor") {
    computerHand.src = scissor;
  }
  playerHand.classList.remove('shakePlayer')
  computerHand.classList.remove('shakeComputer')
}


//Reset Game Button ---------------------------------
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  score.you = 0;
  score.computer = 0;
  document.querySelector(".score .you").innerText = score.you;
  document.querySelector(".score .computer").innerText = score.computer;
  document.querySelector(".hands .result").innerText = "";
  document.querySelector(".hands .player-hand").src = "rock.png";
  document.querySelector(".hands .computer-hand").src = "rock.png";
});


// // Mapping
// // 0 -> rock, 1->paper, 2->scissor
// const options = ["rock", "paper", "scissor"];

// // number
// /**
//  *
//  * @param {number} player1Choice
//  * @param {number} player2Choice
//  * return string player1, player2, draw
//  */
// function whoWon(player1Choice, player2Choice) {
//   /**
//    * 0, 0 => draw
//    * 0, 1 => rock
//    * 0, 2 => scissor
//    * 1, 0 => rock
//    * 1, 1 => draw
//    * 1, 2
//    * 2, 0
//    * 2, 1
//    * 2, 2 => draw
//    */
// }

// function generateComputerChoice() {
//   let a = options[getRandomInt(3)];
//   console.log(a);
// }
// generateComputerChoice();

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
