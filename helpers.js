function displayCards() {
  for (i = 0; i < images.length; i++) {
    cards.push(new Card(90 + 120 * i, images[i], riddles[i], answers[i]));
  }
  shuffle(cards);
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
    let selectedCard = cardsWon.pop();

    if (selectedCard === "coins") {
      wcoins.style.display = "none";
      wwands.style.display = "none";
      wcups.style.display = "none";
      wswords.style.display = "none";
    } else if (selectedCard === "wands") {
      wcoins.style.display = "none";
      wwands.style.display = "none";
      wcups.style.display = "none";
      wswords.style.display = "none";
    } else if (selectedCard === "cups") {
      wcoins.style.display = "none";
      wwands.style.display = "none";
      wcups.style.display = "none";
      wswords.style.display = "none";
    } else if (selectedCard === "swords") {
      wcoins.style.display = "none";
      wwands.style.display = "none";
      wcups.style.display = "none";
      wswords.style.display = "none";
    }
  }
}

function devil() {
  if (selectedCard.answer === "takes one") {
    let selectedCard = cardsWon.pop();

    if (selectedCard === "coins") {
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
/*
function drawWorld() {
  if (selectedCard.answer === "coins") {
    azul.style.display = "block";
    amarillo.style.display = "none";
    verde.style.display = "none";
    rojo.style.display = "none";
    mundo1.style.display = "none";
  } else if (selectedCard.answer === "wands") {
    azul.style.display = "none";
    amarillo.style.display = "block";
    verde.style.display = "none";
    rojo.style.display = "none";
    mundo1.style.display = "none";
  } else if (selectedCard.answer === "cups") {
    azul.style.display = "none";
    amarillo.style.display = "none";
    verde.style.display = "block";
    rojo.style.display = "none";
    mundo1.style.display = "none";
  } else if (selectedCard.answer === "swords") {
    azul.style.display = "none";
    amarillo.style.display = "none";
    verde.style.display = "none";
    rojo.style.display = "block";
    mundo1.style.display = "none";
  }
}
*/
