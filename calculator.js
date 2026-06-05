const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstOperand = 0;
let secondOperand = 0;
let operator = "";

function operate(a, b, c) {
    let result = "ERR";
    switch (c) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    };
    return result;
};

const buttons = Array.from(document.querySelectorAll("button"));
const display = document.querySelector(".display");

buttons.forEach((button) => {
    button.addEventListener("click" , () => {
        firstOperand = button.id;
        display.textContent = firstOperand;
    });
});