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

changeShowButton.addEventListener("click", changeButton);
changePassword.addEventListener("click", changeButton);

function changeButton() {
  if (changeShowButton.innerHTML === "Show") {
    changeShowButton.innerHTML = "Hide";
    changePassword.type = "text";
  } else {
    changeShowButton.innerHTML = "Show";
    changePassword.type = "password";
  }
}
