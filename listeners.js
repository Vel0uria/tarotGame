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

addEventListener("click", event => {
  console.log(event);
  console.log(cards);
  if (
    (event.clientX > 420 && event.clientX < 510) ||
    (event.clientX > 596 && event.clientX < 697) ||
    (event.clientX > 750 && event.clientX < 840) ||
    (event.clientX > 936 && event.clientX < 1028) ||
    (event.clientX > 1106 && event.clientX < 1196) ||
    (event.clientX > 1278 && event.clientX < 1366) ||
    (event.clientX > 1456 && event.clientX < 1546) ||
    (event.clientX < 12 &&
      event.clientX > 1290 &&
      (event.clientY > 530 && event.clientY < 610))
  ) {
    alert("..");
  }
});
