const canvas = document.querySelector("#tarotCanvas");
let elemLeft = canvas.offsetLeft;
let elemTop = canvas.offsetTop;
const ctx = canvas.getContext("2d");
let card = new Card();
let wcoins = document.getElementById("wcoins");
let wwands = document.getElementById("wwands");
let wswords = document.getElementById("wswords");
let wcups = document.getElementById("wcups");
let azul = document.getElementById("azul");
let verde = document.getElementById("verde");
let amarillo = document.getElementById("amarillo");
let rojo = document.getElementById("rojo");
let mundo1 = document.getElementById("mundo-1");
let cardsWon = [];
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

const riddles = [
  "Son of a great lord with green hat, but only inherited the brown pants",

  "A dragon's tooth on a mortal's hand",

  "A belly full of wine, which in celebrations makes a clinking sound",

  "I was often put between people's teeth and yet i am not food",

  "Death appears when we need a new beginning. Start again from scrath!",

  "The devil takes away when your intentions are not pure. You lost a card.",

  "The stars grants wishes to those with pure intentions. Pick a card for free!!"
];

const answers = [
  "wands",
  "swords",
  "cups",
  "coins",
  "takes all",
  "takes one",
  "gives one"
];

let selectedCard = undefined;
