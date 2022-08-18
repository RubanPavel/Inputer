let clearButtonName = document.getElementById("clearButtonName");
let clearName = document.getElementById("Name");

clearButtonName.addEventListener("click", clearButtonN);

function clearButtonN() {
  clearName.value = "";
}

let clearButtonPassword = document.getElementById("clearButtonPass");
let clearPassInput = document.getElementById("Password");

clearButtonPassword.addEventListener("click", clearButtonP);

function clearButtonP() {
  clearPassInput.value = "";
}
