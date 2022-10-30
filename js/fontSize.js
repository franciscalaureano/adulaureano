let p;
/*p = document.getElementsByClassName("p");

//let sizeup = document.getElementById("sizeUp");
//let sizedown = document.getElementById("sizeDown");

function sizeUp() {
  style = window.getComputedStyle(p, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  p.style.fontSize = currentSize + 2 + "px";
}

function sizeDown() {
  style = window.getComputedStyle(p, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  p.style.fontSize = currentSize - 2 + "px";
}*/

p1 = document.getElementById("p1");
p2 = document.getElementById("p2");
p3 = document.getElementById("p3");
p4 = document.getElementById("p4");

function sizeUp() {
  style = window.getComputedStyle(p1, null).getPropertyValue("font-size");
  style = window.getComputedStyle(p2, null).getPropertyValue("font-size");
  style = window.getComputedStyle(p3, null).getPropertyValue("font-size");
  style = window.getComputedStyle(p4, null).getPropertyValue("font-size");

  currentSize = parseFloat(style);

  p1.style.fontSize = currentSize + 2 + "px";
  p2.style.fontSize = currentSize + 2 + "px";
  p3.style.fontSize = currentSize + 2 + "px";
  p4.style.fontSize = currentSize + 2 + "px";
}

function sizeDown() {
  style = window.getComputedStyle(p1, null).getPropertyValue("font-size");
  style = window.getComputedStyle(p2, null).getPropertyValue("font-size");
  style = window.getComputedStyle(p3, null).getPropertyValue("font-size");
  style = window.getComputedStyle(p4, null).getPropertyValue("font-size");

  currentSize = parseFloat(style);

  p1.style.fontSize = currentSize - 2 + "px";
  p2.style.fontSize = currentSize - 2 + "px";
  p3.style.fontSize = currentSize - 2 + "px";
  p4.style.fontSize = currentSize - 2 + "px";
}
// ----------------------
