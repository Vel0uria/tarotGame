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
    this.y = 40;
    this.width = 60;
    this.height = 90;
    this.img = new Image();
    this.img.src = img;
    this.imgTop = new Image();
    this.imgTop.src = "Tarot/fondo.png";
    this.imgTop.onload = () => this.draw();
    this.question = question;
    this.answer = answer;
  }

  draw() {
    ctx.drawImage(this.imgTop, this.x, this.y, this.width, this.height);
  }
  drawCenter() {
    ctx.drawImage(this.img, 320, 200, 180, 270);
    ctx.fillStyle = "black";
    ctx.fillRect(40, 550, 900, 22);
    ctx.fillStyle = "white";
    ctx.font = "22px Cinzel, serif";
    ctx.fillText(this.question, 40, 570);
  }
}
