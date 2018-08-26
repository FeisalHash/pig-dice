
  // Business Logic
function Player() {
  this.runningTotal = 0;
  this.totalScore = 0;
}

Player.prototype.holdScore = function() {
  this.totalScore += this.runningTotal;
}

Player.prototype.rollDice = function() {
  var random = randomNum();
  if (random > 1) {
    this.runningTotal += random;
  } else {
    alert("You rolled a 1! Player 2's turn!")
    this.runningTotal = 0;
  }
}

function randomNum() {
  return Math.floor(Math.random() * 6 + 1)
}

  // User interface Logic
$(document).ready(function() {

var player1 = new Player();
var player2 = new Player();

  // Player 1
  $("button#roll-1-btn").click(function() {
    player1.rollDice();
    $(".player-1-score").text(player1.runningTotal);

  });

  // Player 2
  $("button#roll-2-btn").click(function() {
    player2.rollDice();
    $(".player-2-score").text(player2.runningTotal);

  });

  // Hold 1
  $("button#stop-1-btn").click(function(event) {
    event.preventDefault();
    player1.holdScore();
    $(".player-1-total-score").text(player1.totalScore);
    player1.runningTotal = 0;
    $(".player-1-score").text(player1.runningTotal);
  });

  // Hold 2
  $("button#stop-2-btn").click(function(event) {
    event.preventDefault();
    player2.holdScore();
    $(".player-2-total-score").text(player2.totalScore);
    player2.runningTotal = 0;
    $(".player-2-score").text(player2.runningTotal);
  });
});
