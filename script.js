let computerCount = 0;
let playerCount = 0;
while (computerCount < 5 && playerCount < 5) {

  let playerChoice = prompt("Your Turn").toUpperCase();

  let pool = ["ROCK", "PAPER", "SCISSORS"];
  let getComputerChoice = pool[Math.floor(Math.random() * pool.length)];

  let compare = function (player, computer) {
    if (player === computer) {
      return "tie";
    }
    if (player === "ROCK") {
      if (computer === "SCISSORS") {
        return "player";
      } else {
        return "computer";
      }
    }
    if (player === "PAPER") {
      if (computer === "ROCK") {
        return "player";
      } else {
        if (computer === "SCISSORS") {
          return "computer";
        }
      }
    }
    if (player === "SCISSORS") {
      if (computer === "ROCK") {
        return "computer";
      } else {
        if (computer === "PAPER") {
          return "player";
        }
      }
    }
  };
  let winner = compare(playerChoice, getComputerChoice);
  if (winner === "player") {
    playerCount++;
  } else if (winner === "computer") {
    computerCount++;
  }
  console.log("User Choice: " + playerChoice);
  console.log("Computer Choice: " + getComputerChoice);
  console.log("User Score: " + playerCount);
  console.log("Computer Score: " + computerCount);
  console.log("====================================================");
};

if (playerCount === 5) {
  console.log("Player Wins!");
} else if (computerCount === 5) {
  console.log("Computer Wins!");
};
