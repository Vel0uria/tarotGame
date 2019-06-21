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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(completa, 400, 200, 200, 330);
    ctx.fillText("You saved the world!!", 300, 90);
  }
}
