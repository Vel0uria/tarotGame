class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
  }
}
class Card {
  constructor(x, img, question, answer) {
    this.x = x;
    this.y = 150;
    this.width = 120;
    this.height = 225;
    this.img = img;
    this.imgTop = new Image();
    this.imgTop.src = "Tarot/fondo.png";
    this.question = question;
  }

  draw() {
    ctx.drawImage(this.imgTop, this.x, this.y, this.width, this.height);
  }
}
