window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  displayCards();
}

function endGame() {
  if (cardsWon.length === 4) {
    ctx.styleRect = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
