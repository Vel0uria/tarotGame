const canvas = document.querySelector("#tarotCanvas");
const ctx = canvas.getContext("2d");
let interval;
let board = new Board();
const images = [
  "Tarot/loco.png",
  "Tarot/2-sacerdotiza.png",
  "Tarot/3-emperatriz.png",
  "Tarot/4-emperador.png",
  "Tarot/5-hierofante.png",
  "Tarot/6-Amantes.png",
  "Tarot/7-carruaje.png",
  "Tarot/8-justicia.png",
  "Tarot/9-ermitaño.png",
  "Tarot/10-fortuna.png",
  "Tarot/11-fuerza.png",
  "Tarot/12-colgado.png",
  "Tarot/13-muerte.png",
  "Tarot/14-templanza.png",
  "Tarot/15-diablo.png",
  "Tarot/16-torre.png",
  "Tarot/17-estrella.png",
  "Tarot/18-luna.png",
  "Tarot/19-sol.png",
  "Tarot/20-juicio.png"
];

const wizardTools = [
  "Tarot/as-bastos.png",
  "Tarot/as-copas.png",
  "Tarot/as-espadas.png",
  "Tarot/as-oros.png"
];

const cards = [];

for (i = 0; i < images.length; i++) {
  cards.push(new Card(30 + 60 * i, images[i]));
}
