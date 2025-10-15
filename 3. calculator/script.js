let currentValue = '';
document.querySelector('#display').value = currentValue;

function add(value) {
    currentValue += value;
    document.querySelector('#display').value = currentValue;
}

function clearDisplay() {
    currentValue = currentValue.slice(0,-1);
    document.querySelector('#display').value = currentValue;
}

function calculate() {
    currentValue = eval(currentValue);
    document.querySelector('#display').value = currentValue;
}