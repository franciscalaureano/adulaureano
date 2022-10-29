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
