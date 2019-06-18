class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
  }
}
class Card {
  constructor(x, img) {
    this.x = x;
    this.y = 220;
    this.width = 50;
    this.height = 90;
    this.img = img;
    this.imgTop = new Image();
    this.imgTop.src = "Tarot/fondo.png";
  }

  draw() {
    ctx.drawImage(this.imgTop, this.x, this.y, this.width, this.height);
  }
}
/*
class Fire {
  constructor() {
    this.text = "Feed me and I live, yet give me a drink and I die.";
  }
}

class Water {
  constructor() {
    this.text = "I don’t get any wetter, no matter how much rain falls on me"; Tentativo
  }
}
class Wind {
  constructor() {
I move very fast but i dont have feet,You can hear me but not for my mouth, I can bring down a building yet i'm not a machine.
Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.
  }
}

class Earth{
  constructor() {

  }
}
*/
