const pool = ["ROCK", "PAPER", "SCISSORS"];
let player; 
let computer;
const result = document.getElementById("choices");
const result2 = document.getElementById("choices2");
const btns = document.querySelectorAll(".btn");
const points = document.querySelector(".score");
let playerPoints = 0; 
let computerPoints = 0;

btns.forEach(button => button.addEventListener("click", ()=> {
  player = button.value;
  getComputerChoice();
  result.textContent = "Computer choice: " + computer;
  result2.textContent = "Player choice: " + player;
  points.textContent = checkWinner() + playerPoints + computerPoints;

}));

function getComputerChoice() {
  computer = pool[Math.floor(Math.random() * pool.length)];
  return computer;
}

function checkWinner(){
  if(player === computer){
    return "Draw!"
  } else if (player == "ROCK" && computer == "PAPER"){
    computerPoints++;
    return "You Lose!";
  } else if (player == "ROCK" && computer == "SCISSORS"){
    playerPoints++;
    return "You win!";
  } else if (player == "PAPER" && computer == "ROCK"){
    playerPoints++;
    return "You Win!";
  } else if (player == "PAPER" && computer == "SCISSORS"){
    computerPoints++;
    return "You Lose!";
  } else if (player == "SCISSORS" && computer == "PAPER"){
    playerPoints++;
    return "You win!";
  } else if (player == "SCISSORS" && computer == "ROCK"){
    computerPoints++;
    return "You Lose!";
  }
}

