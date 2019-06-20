document.getElementById("wands").addEventListener("click", event => {
  if (selectedCard.answer === "wands") {
    ctx.fillStyle = "gold";
    ctx.font = "40px Cinzel, serif";
    ctx.fillText("Correct!", 700, 300);
  } else {
    ctx.fillStyle = "gold";
    ctx.font = "40px Cinzel, serif";
    ctx.fillText("Wrong", 700, 300);
  }
});

document.getElementById("coins").addEventListener("click", event => {
  {
    if (selectedCard.answer === "coins") {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Correct!", 700, 300);
    } else {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Wrong", 700, 300);
    }
  }
});

document.getElementById("cups").addEventListener("click", event => {
  {
    if (selectedCard.answer === "cups") {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Correct!", 700, 300);
    } else {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Wrong", 700, 300);
    }
  }
});

document.getElementById("swords").addEventListener("click", event => {
  {
    if (selectedCard.answer === "swords") {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Correct!", 700, 300);
    } else {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Wrong", 700, 300);
    }
  }
});

canvas.addEventListener(
  "click",
  function(event) {
    let x = event.pageX - elemLeft;
    let y = event.pageY - 370;
    cards.forEach(function(element) {
      if (
        x > element.x &&
        x < element.x + element.width &&
        (y > element.y && y < element.y + element.height)
      ) {
        element.drawCenter();
        selectedCard = element;
      }
    });
  },
  false
);
