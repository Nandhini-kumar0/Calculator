let display = document.getElementById("display");

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1) || "0";
}

function appendNumber(number) {
  if (display.textContent === "0") display.textContent = number;
  else display.textContent += number;
}

function appendOperator(operator) {
  const lastChar = display.textContent.slice(-1);
  if (!"+-*/%".includes(lastChar)) display.textContent += operator;
}

function appendDot() {
  if (!display.textContent.includes(".")) display.textContent += ".";
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent.replace("×", "*").replace("÷", "/"));
  } catch {
    display.textContent = "Error";
  }
}
