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
      add(numA, numB)
      break;
    case "-":
      subtract(numA, numB)
      break;
    case "*":
      multiply(numA, numB)
      break;
    case "/":
      divide(numA, numB)
      break;
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
      numberA = parseInt(firstEntry);
      displayValue.textContent = numberA;
    }
    else {
      secondEntry += numberValue
      numberB = parseInt(secondEntry);
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
equalButton.addEventListener("click", function(event){
  operate(currentOperator);
  displayValue.textContent = c;
})


//Clear Button
const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", function(event){
  console.log("Cleared");
})



  /*
if (clickedButton.classList.contains("num-btn")) {
  const numberValue = clickedButton.getAttribute("data-key");
  numA += numberValue.toString();
  console.log(numA);
}
else if (clickedButton.classList.contains("operator-btn")) {
  const operatorValue = clickedButton.getAttribute("data-key");
  console.log(operatorValue);
  operate(operatorValue);
}
*/