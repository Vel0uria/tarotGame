document.getElementById("wands").addEventListener("click", event => {
  if (selectedCard.answer === "wands" || selectedCard.answer === "gives one") {
    ctx.fillStyle = "gold";
    wwands.style.display = "block";
    ctx.font = "40px Cinzel, serif";
    ctx.fillText("Correct!", 700, 300);
    wwands.style.display = "block";
    cardsWon.push("wands");
  } else {
    ctx.fillStyle = "gold";
    ctx.font = "40px Cinzel, serif";
    ctx.fillText("Wrong", 700, 300);
  }
});

document.getElementById("coins").addEventListener("click", event => {
  console.log(wcoins.style);
  {
    if (
      selectedCard.answer === "coins" ||
      selectedCard.answer === "gives one"
    ) {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Correct!", 700, 300);
      wcoins.style.display = "block";
      cardsWon.push("coins");
    } else {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Wrong", 700, 300);
    }
  }
});

document.getElementById("cups").addEventListener("click", event => {
  {
    if (selectedCard.answer === "cups" || selectedCard.answer === "gives one") {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Correct!", 700, 300);
      wcups.style.display = "block";
      cardsWon.push("cups");
    } else {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Wrong", 700, 300);
    }
  }
});

document.getElementById("swords").addEventListener("click", event => {
  {
    if (
      selectedCard.answer === "swords" ||
      selectedCard.answer === "gives one"
    ) {
      ctx.fillStyle = "gold";
      ctx.font = "40px Cinzel, serif";
      ctx.fillText("Correct!", 700, 300);
      wswords.style.display = "block";
      cardsWon.push("swords");
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
    console.log(event);
    let x = event.pageX - elemLeft;
    let y = event.pageY - 210;
    cards.forEach(function(element) {
      if (
        x > element.x &&
        x < element.x + element.width &&
        (y > element.y && y < element.y + element.height)
      ) {
        element.drawCenter();
        selectedCard = element;
        if (selectedCard.answer === "takes one") devil();
        death();
        star();
      }
    });
  },
  false
);
