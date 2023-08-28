let numA;
let numB;
let operator;
/*
function operate() {
    numA = parseInt(prompt("First Number"))
    operator = prompt("Operator");
    numB = parseInt(prompt("Second Number"));

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
    console.log(c);
}

operate();
*/

const buttonGrid = document.querySelector(".button-grid");
const numButtons = buttonGrid.querySelectorAll(".num-btn");


buttonGrid.addEventListener("click", function(event) {
    const clickedButton = event.target;

  if (clickedButton.classList.contains("num-btn")) {
    const numberValue = clickedButton.getAttribute("data-key");
    console.log(numberValue);
  }
  else if (clickedButton.classList.contains("equal-btn")) {
    console.log("Equal");
  }
  else if (clickedButton.classList.contains("clear-btn")) {
    const operatorValue = clickedButton.getAttribute("data-key");
    console.log("Clear");
  }
  else if (clickedButton.classList.contains("operator-btn")) {
    const operatorValue = clickedButton.getAttribute("data-key");
    console.log(operatorValue);
  }
});


  


function add(a, b) {
    c = a+b;
    return c;
}

function subtract(a, b) {
    c = a-b;
    return c;
}

function multiply(a, b) {
    c = a*b;
    return c;
}

function divide(a, b) {
    c = a/b;
    return c;
}