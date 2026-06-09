const add = (a, b) => Number(a) + Number(b);
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
            if (b == 0) {
            alert("NEVER DIVIDE BY ZERO!!!");
            firstOperand = "";
            secondOperand = "";
            operator = "";
            display.textContent = "";
            break
            };
            result = divide(a, b);
            break;
    };
    return Number(result.toFixed(5));
};

const numberButtons = Array.from(document.querySelectorAll(".number"));
const display = document.querySelector(".display");

numberButtons.forEach((button) => {
    button.addEventListener("click" , () => {
        if (operator == "") {
            firstOperand = firstOperand + button.id;
            display.textContent = firstOperand;
        } else {
            secondOperand = secondOperand + button.id;
            display.textContent = firstOperand + operator + secondOperand;
        };
    });
});

const operatorButtons = Array.from(document.querySelectorAll(".operator"));

operatorButtons.forEach((button) => {
    button.addEventListener("click" , () => {
        if (operator != "") {
            firstOperand = operate(firstOperand, secondOperand, operator);
            secondOperand = "";
        }
        operator = button.id;
        display.textContent = firstOperand + operator;
    });
});

const equalButton = document.querySelector(".equals");

equalButton.addEventListener("click", () => {
    let result = operate(firstOperand, secondOperand, operator);
    firstOperand = "";
    secondOperand = "";
    operator = "";
    display.textContent = result;
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    display.textContent = "";
});


//to do: if a result is displayed, make it not possible to add numbers to it.
//instead substitute the number.



//panic button
/*const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
    button.addEventListener("click", () => {display.textContent = "sadanbdhusnah anhAAAAAAAAAAAAAAAHHHHHH"});
});*/