let display = document.getElementById("display");

function appendTo(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value); // ⚠️ safe only for learning/demo
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
