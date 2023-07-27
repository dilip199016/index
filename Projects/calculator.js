let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const display = document.getElementById('result');

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number.toString();
    updateDisplay();
}

function clearAll() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    updateDisplay();
}

function toggleSign() {
    currentOperand = (parseFloat(currentOperand) * -1).toString();
    updateDisplay();
}

function performOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentOperand === '' ? '0' : currentOperand;
}

// Start with an initial display update
updateDisplay();
