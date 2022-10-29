let p = document.getElementById("p");

let sizeUp = document.getElementById("sizeUp");

function sizeup() {
  style = window.getComputedStyle(p, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  p.style.fontSize = currentSize + 220 + "px";
}
