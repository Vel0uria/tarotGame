document.getElementById("bastos").addEventListener("click", event => {
  {
    alert("...");
  }
});

document.getElementById("oros").addEventListener("click", event => {
  {
    alert("...");
  }
});

document.getElementById("copas").addEventListener("click", event => {
  {
    alert("...");
  }
});

document.getElementById("espadas").addEventListener("click", event => {
  {
    alert("...");
  }
});

canvas.addEventListener(
  "click",
  function(event) {
    let x = event.pageX - elemLeft;
    let y = event.pageY - 370;
    cards.forEach(function(element) {
      if (
        x > element.x &&
        x < element.x + element.width &&
        (y > element.y && y < element.y + element.height)
      ) {
        alert("clicked an element");
      }
    });
  },
  false
);
