function displayCards() {
  cards = [];

  shuffle(allCards);
  for (i = 0; i < images.length; i++) {
    cards.push(
      new Card(
        90 + 120 * i,
        allCards[i].image,
        allCards[i].riddle,
        allCards[i].answer
      )
    );
  }

  cards.forEach(card => {
    card.draw();
  });
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex--);
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function death() {
  if (selectedCard.answer === "takes all") {
    cardsWon = [];
    ctx.fillStyle = "black";
    ctx.fillRect(700, 270, 200, 32);

    wcoins.style.display = "none";
    wwands.style.display = "none";
    wcups.style.display = "none";
    wswords.style.display = "none";
  }
}

function devil() {
  if (selectedCard.answer === "takes one") {
    let selectedCard = cardsWon.pop();
    ctx.fillStyle = "black";
    ctx.fillRect(700, 270, 200, 32);
    if (selectedCard === "coins") {
      selectedCard;

      wcoins.style.display = "none";
    } else if (selectedCard === "wands") {
      wwands.style.display = "none";
    } else if (selectedCard === "cups") {
      wcups.style.display = "none";
    } else if (selectedCard === "swords") {
      wswords.style.display = "none";
    }
  }
}

function drawWorld() {
  if (cardsWon.length === 1) {
    uno.style.display = "block";
    dos.style.display = "none";
    tres.style.display = "none";
    mundo1.style.display = "none";
  } else if (cardsWon.length === 2) {
    uno.style.display = "none";
    dos.style.display = "block";
    tres.style.display = "none";
    mundo1.style.display = "none";
  } else if (cardsWon.length === 3) {
    uno.style.display = "none";
    dos.style.display = "none";
    tres.style.display = "block";
    mundo1.style.display = "none";
  } else {
    uno.style.display = "none";
    dos.style.display = "none";
    tres.style.display = "none";
    mundo1.style.display = "none";
  }
}
