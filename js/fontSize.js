let p = document.getElementById("p");

let sizeup = document.getElementById("sizeUp");
let sizedown = document.getElementById("sizeDown");

function sizeUp() {
  style = window.getComputedStyle(p, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  p.style.fontSize = currentSize + 2 + "px";
}

function sizeDown() {
  style = window.getComputedStyle(p, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  p.style.fontSize = currentSize - 2 + "px";
}
