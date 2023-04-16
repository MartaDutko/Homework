// Задача 1. Розробити калькулятор

let buttons = document.querySelectorAll('.btn')
let firstNumber = parseFloat(document.getElementById('firstNumber').value)
let secondNumber = parseFloat(document.getElementById('secondNumber').value)
let result = document.getElementById('result')

for (const button of buttons) {
    button.onclick = function () {
        result.value = eval(firstNumber + button.value + secondNumber)
    }
}