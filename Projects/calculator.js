// let currentOperand = '';
// let previousOperand = '';
// let operation = undefined;

// const display = document.getElementById('result');

// function appendNumber(number) {
//     if (number === '.' && currentOperand.includes('.')) return;
//     currentOperand += number.toString();
//     updateDisplay();
// }

// function clearAll() {
//     currentOperand = '';
//     previousOperand = '';
//     operation = undefined;
//     updateDisplay();
// }

// // function clearDisplay() {
// //     currentOperand = '';
// //     updateDisplay();
// // }

// function toggleSign() {
//     currentOperand = (parseFloat(currentOperand) * -1).toString();
//     updateDisplay();
// }

// function performOperation(op) {
//     if (currentOperand === '') return;
//     if (previousOperand !== '') {
//         calculate();
//     }
//     operation = op;
//     previousOperand = currentOperand;
//     currentOperand = '';
// }

// function calculate() {
//     let result;
//     const prev = parseFloat(previousOperand);
//     const curr = parseFloat(currentOperand);
//     if (isNaN(prev) || isNaN(curr)) return;
//     switch (operation) {
//         case '+':
//             result = prev + curr;
//             break;
//         case '-':
//             result = prev - curr;
//             break;
//         case '*':
//             result = prev * curr;
//             break;
//         case '/':
//             result = prev / curr;
//             break;
//         case '%':
//             result = prev % curr;
//             break;
//         default:
//             return;
//     }
//     currentOperand = result.toString();
//     operation = undefined;
//     previousOperand = '';
//     updateDisplay();
// }

// function updateDisplay() {
//     display.textContent = currentOperand === '' ? '0' : currentOperand;
// }

// function clearDisplay() {
//     if (currentInput.length > 1) {
//       currentInput = currentInput.slice(0, -1); // Remove the last character
//     } else {
//       currentInput = '0';
//     }
// }
//     updateDisplay();
// // Start with an initial display update




// // JavaScript code for Calculator
// let currentInput = '0'; // Store the current input
// let operator = ''; // Store the current operator
// let result = 0; // Store the result

// // Function to update the display
// function updateDisplay() {
//   document.getElementById('result').textContent = currentInput;
// }

// // Function to append a number to the current input
// function appendNumber(number) {
//   if (currentInput === '0' && number !== '0') {
//     currentInput = number;
//   } else {
//     currentInput += number;
//   }
//   updateDisplay();
// }

// // Function to append a decimal point
// function appendDecimal() {
//     if (!decimalClicked && currentInput.length < MAX_DIGITS) {
//       currentInput += '.';
//       decimalClicked = true; // Disable decimal button
//       updateDisplay();
//     }
//   }

// // Function to perform a mathematical operation
// function performOperation(newOperator) {
//   if (operator !== '') {
//     calculate();
//   }
//   result = parseFloat(currentInput);
//   operator = newOperator;
//   currentInput = '0';
// }

// // Function to calculate the result
// function calculate() {
//   if (operator === '+') {
//     result += parseFloat(currentInput);
//   } else if (operator === '-') {
//     result -= parseFloat(currentInput);
//   } else if (operator === '*') {
//     result *= parseFloat(currentInput);
//   } else if (operator === '/') {
//     result /= parseFloat(currentInput);
//   } else if (operator === '%') {
//     result = (result * parseFloat(currentInput)) / 100;
//   }
//   currentInput = result.toString();
//   operator = '';
//   updateDisplay();
// }

// // Function to clear the current input
// function clearDisplay() {
//   currentInput = '0';
//   updateDisplay();
// }

// // Function to clear all
// function clearAll() {
//   currentInput = '0';
//   operator = '';
//   result = 0;
//   updateDisplay();
// }

// // Function to toggle the sign of the current input
// function toggleSign() {
//   currentInput = (-parseFloat(currentInput)).toString();
//   updateDisplay();
// }

// // Attach event listeners to buttons
// document.querySelectorAll('.Button').forEach(button => {
//   button.addEventListener('click', () => {
//     const buttonValue = button.textContent;
//     if (!isNaN(parseFloat(buttonValue)) || buttonValue === '.') {
//       appendNumber(buttonValue);
//     } else if (buttonValue === '+/-' && currentInput !== '0') {
//       toggleSign();
//     } else if (buttonValue === '%') {
//       performOperation(buttonValue);
//     } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
//       performOperation(buttonValue);
//     } else if (buttonValue === '=') {
//       calculate();
//     } else if (buttonValue === 'C') {
//       clearAll();
//     } else if (buttonValue === 'CE') {
//       clearDisplay();
//     }
//   });
// });

// function clearDisplay() {
//   if (currentInput.length > 1) {
//     currentInput = currentInput.slice(0, -1); // Remove the last character
//   } else {
//     currentInput = '0';
//   }
//   updateDisplay();
// }
// // Initialize the display
// updateDisplay();




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





let currentInput = '0';  // current  input ke liye
let prevInput = '0';     // picche input ke liye
let operator = null;     // Current operator ke liye
let result = 0;          // Result ka calculations ke liye

// har bar display ko update karne ke liye
function updateDisplay() {
    if (currentInput.length > 12) {
        document.getElementById('result').innerText = 'Exceed Display';
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