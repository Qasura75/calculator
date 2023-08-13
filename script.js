let numA;
let numB;
let operator;

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