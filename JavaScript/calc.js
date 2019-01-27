 // jshint esversion: 6

const calc = (operation) => {
    let numberA = parseFloat(document.getElementById('calcA').value);
    let numberB = parseFloat(document.getElementById('calcB').value);
    let result;
    let resultSpan = document.getElementById('calcResult');
    switch (operation) {
        case '+':
            result = numberA + numberB;
            break;
        case '-':
            result = numberA - numberB;
            break;
        case '*':
            result = numberA * numberB;
            break;
        case '/':
            if (numberB) {
                result = numberA / numberB;
            } else {
                result = 'Nie dziel przez 0!';
            }
            break;
        case '^':
            result = Math.pow(numberA, numberB);
            break;
        default:
            result = '3RR0R';
    }
    if (result > 0) {
        resultSpan.style.color = 'lightgreen';
    } else if (result === 0) {
        resultSpan.style.color = '#b36f09';
    } else {
        resultSpan.style.color = '#FF6666';
    }
    resultSpan.innerHTML = result;
};