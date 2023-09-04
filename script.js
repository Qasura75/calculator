let firstEntry = 0;
let secondEntry = 0;
let currentOperator;

let numberA;
let numberB;

let numberSwitch = true;

//Math functions
function add(a, b) {
  c = a + b;
  return c;
}

function subtract(a, b) {
  c = a - b;
  return c;
}

function multiply(a, b) {
  c = a * b;
  return c;
}

function divide(a, b) {
  c = a / b;
  return c;
}

//Operate function
function operate(operator) {
  numA = parseInt(firstEntry)
  numB = parseInt(secondEntry);

  switch (operator) {
    case "+":
      return add(numA, numB)
      break;
    case "-":
      return subtract(numA, numB)
      break;
    case "*":
      return multiply(numA, numB)
      break;
    case "/":
      return divide(numA, numB)
      default:
        return numB;
  }
}


//Variables
const buttonGrid = document.querySelector(".button-grid");
const displayValue = document.querySelector(".display-value");
const numberButtons = document.querySelectorAll(".num-btn");

//If number is pressed
numberButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    const numberValue = button.getAttribute("data-key");

    if(numberSwitch == true) {
      firstEntry += numberValue
      numberA = parseFloat(firstEntry);
      displayValue.textContent = numberA;
    }
    else {
      secondEntry += numberValue
      numberB = parseFloat(secondEntry);
      displayValue.textContent = numberB;
    }
    
  });
});



const operatorButtons = document.querySelectorAll(".operator-btn");

//If operator is pressed
operatorButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    const operator = button.getAttribute("data-key");

    if (numberSwitch) {
      numberSwitch = !numberSwitch;
      currentOperator = operator;
    }
    else {
      if(secondEntry) {
        operate(currentOperator)
        currentOperator = operator;
        firstEntry = c.toString();
        secondEntry = "";
        displayValue.textContent = firstEntry
      }
    }

    
  });
});


//Equal Button
const equalButton = document.querySelector(".equal-btn");
equalButton.addEventListener("click", function (event) {
  if (!numberSwitch && secondEntry) {
    const result = operate(currentOperator);
    firstEntry = result.toString();
    secondEntry = "";
    displayValue.textContent = firstEntry;
    numberSwitch = true;
  }
});


//Clear Button
const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", function (event) {
  firstEntry = "0";
  secondEntry = "0";
  currentOperator = "";
  displayValue.textContent = "0";
});