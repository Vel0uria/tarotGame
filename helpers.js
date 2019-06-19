function displayCards() {
  for (i = 0; i < images.length; i++) {
    cards.push(new Card(150 + 250 * i, images[i]));
  }
  cards.forEach(card => {
    card.draw();
  });
}

function drawCard() {
  ctx.drawImage(images, 90, 440);
}
