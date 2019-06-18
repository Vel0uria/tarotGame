window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    displayCards();
  }

  function startGame() {
    if (interval) return;
    interval = setInterval(update, 1000 / 60);
  }
};
