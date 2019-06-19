function displayCards() {
  for (i = 0; i < images.length; i++) {
    cards.push(new Card(90 + 120 * i, images[i]));
  }
  cards.forEach(card => {
    card.draw();
  });
}

function drawCard() {
  let rndC = Math.floor(Math.random() * cards.length);
  ctx.drawImage(cards[0], 90, 350);
}
