const canvas = document.querySelector("#tarotCanvas");
const ctx = canvas.getContext("2d");
let interval;
let board = new Board();
let card = new Card();
const images = [
  "Tarot/loco.png",

  "Tarot/2-sacerdotiza.png",

  "Tarot/5-hierofante.png",

  "Tarot/9-ermitaño.png",

  "Tarot/13-muerte.png",

  "Tarot/15-diablo.png",

  "Tarot/17-estrella.png"
];

const cards = [];

//let rndC = Math.floor(Math.random() * cards.length);

const riddles = [
  "A dragon's tooth on a mortal's hand",

  "A belly full of wine, which in celebrations makes a clinking sound",

  "I was often put between people's teeth and yet i am not food",

  "Son of a great lord with green hat, but only inherited the brown pants",

  "The stars grants wishes to those with pure intentios. Pick a card for free!!",

  "The devil takes away when your intentions are not pure. You lost a card. :(",

  "Death appears when we need a new beggining. Start again from scrath!"
];
