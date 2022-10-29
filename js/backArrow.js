/* RETROCEDER A PARTIR DA SETA */
var backBtn = document.querySelector("#go_back");
backBtn.addEventListener("click", () => {
  window.history.back();
});
