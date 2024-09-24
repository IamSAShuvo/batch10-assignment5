function toggleButton(id) {
  document.getElementById("donatingSection").classList.add("hidden");
  document.getElementById("historySection").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

function getTextFieldValue(id) {}

function getInputFieldValue(id) {
  let inputValue = document.getElementById(id).value;

  return inputValue;
}

function addition(num1, num2) {
  let result = num1 + num2;
  return result;
}

function subtraction(num1, num2) {
  let result = num1 - num2;
  return result;
}
