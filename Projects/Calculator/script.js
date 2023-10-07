



/////// my code for calculator
// keyboard se input lene ke liye  Event listener ka use karke input lene ke liye
document.addEventListener('keydown', function (event) {
    const key = event.key;
    
    if (/[0-9]/.test(key)) {
        appendNumber(parseInt(key));
    } else if (key === '.') {
        appendDecimal();
    } else if (key === 'Enter') {
        calculate();
    } else if (key === '+') {
        performOperation('+');
    } else if (key === '-') {
        performOperation('-');
    } else if (key === '*') {
        performOperation('*');
    } else if (key === '/') {
        performOperation('/');
    } else if (key === '%') {
        performOperation('%');
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if (key === 'Delete') {
        clearAll();
    }
});





let currentInput = '_';  // current  input ke liye
let prevInput = '_';     // picche input ke liye
let operator = '_';     // Current operator ke liye
let result = '_';          // Result ka calculations ke liye

// har bar display ko update karne ke liye
function updateDisplay() {
    if (currentInput.length > 12) {
        document.getElementById('result').innerText = 'Exceed Limit';
    } else {
        document.getElementById('result').innerText = currentInput;
    }
}

//  number ko input lene ke liye
function appendNumber(number) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

// Function  decimal point ke liye
function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

// Function mere jo +/- sign h usko check krega
function toggleSign() {
    if (currentInput.charAt(0) === '-') {
        currentInput = currentInput.substr(1);
    } else {
        currentInput = '-' + currentInput;
    }
    updateDisplay();
}

// function mera input karega 
function performOperation(newOperator) {
    if (operator !== null) {
        calculate();
    }
    prevInput = currentInput;
    currentInput = '0';
    operator = newOperator;
}

// CE button ka liye mere method
function clearDisplay() {
      if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1); // Remove the last character
      } else {
        currentInput = '0';
      }
      updateDisplay();
 }

// jab C button press kre to uske liye method
function clearAll() {
    currentInput = '0';
    prevInput = '0';
    operator = null;
    result = 0;
    updateDisplay();
}

// Mathematical oprtaion ke liye jo
function calculate() {
    let a = parseFloat(prevInput);
    let b = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b !== 0) {
                result = a / b;
            } else {

                result=0;
                // alert("Cannot divide by zero!");
                clearAll();
                return;
            }
            break;
        case '%':
            result = (a / 100) * b;
            break;
    }
    currentInput = result.toString();
    prevInput = '0';
    operator = null;
    updateDisplay();
}


