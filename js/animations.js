/*INDEX*/
const indexContent = document.querySelectorAll("#imgtxt_container");

indexContent.onmouseover = function () {
  indexContent.style.transform = "translate(0, -20px)";
  indexContent.style.transitionDuration = "0.8s";
};

indexContent.onmouseleave = function () {
  indexContent.style.transform = "translate(0, 0px)";
  indexContent.style.transitionDuration = "0.8s";
};

/*Header*/
const backButton = document.getElementById("go_back");

backButton.onmouseover = function () {
  backButton.style.color = "#784108";
  backButton.style.transitionDuration = "0.8s";
};

backButton.onmouseleave = function () {
  backButton.style.color = "#000000";
  backButton.style.transitionDuration = "0.8s";
};

/*Font Size*/
const sizeup = document.getElementById("sizeUp");
const sizedown = document.getElementById("sizeDown");

sizeup.onmouseover = function () {
  sizeup.style.backgroundColor = "#fffaf5";
  sizeup.style.transitionDuration = "0.8s";
};

sizeup.onmouseleave = function () {
  sizeup.style.backgroundColor = "#f5ddc4";
  sizeup.style.transitionDuration = "0.8s";
};

sizedown.onmouseover = function () {
  sizedown.style.backgroundColor = "#fffaf5";
  sizedown.style.transitionDuration = "0.8s";
};

sizedown.onmouseleave = function () {
  sizedown.style.backgroundColor = "#f5ddc4";
  sizedown.style.transitionDuration = "0.8s";
};
