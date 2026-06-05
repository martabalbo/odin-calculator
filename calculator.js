const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstOperand = "";
let secondOperand = "";
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

const numberButtons = Array.from(document.querySelectorAll(".number"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const display = document.querySelector(".display");

numberButtons.forEach((button) => {
    button.addEventListener("click" , () => {

        /*if (firstOperand === "") {
            firstOperand = button.id;
            display.textContent = firstOperand;
        } else {
            secondOperand = button.id;
            display.textContent = firstOperand + " " + secondOperand;
        };*/
    });
});


const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
    button.addEventListener("click", () => {display.textContent = "sadanbdhusnah anhAAAAAAAAAAAAAAAHHHHHH"});
});