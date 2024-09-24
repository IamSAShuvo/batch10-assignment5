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
