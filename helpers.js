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

function death() {}

function star() {}

function devil() {}
