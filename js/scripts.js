
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
