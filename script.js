let clearButtonName = document.getElementById("clearButtonName");
let clearName = document.getElementById("Name");
let clearButtonPassword = document.getElementById("clearButtonPass");
let clearPassInput = document.getElementById("password");

clearButtonName.addEventListener("click", clearButtonN);

function clearButtonN() {
  clearName.value = "";
}
clearButtonPassword.addEventListener("click", clearButtonP);
function clearButtonP() {
  clearPassInput.value = "";
}

let changeShowButton = document.getElementById("showButton");
let changePassword = document.getElementById("password");
let changHideButton = document.querySelector("body");

changeShowButton.addEventListener("mousedown", onShowText);

function onShowText() {
  changeShowButton.innerHTML = "Hide";
  changePassword.type = "text";
  changHideButton.addEventListener("mouseup", onHideText);
}

function onHideText() {
  changeShowButton.innerHTML = "Show";
  changePassword.type = "password";
  changHideButton.removeEventListener("mouseup", onHideText);
}
