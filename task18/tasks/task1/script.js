// Задача 1. Розробити калькулятор
let buttons = document.querySelectorAll('.btn')

for (const button of buttons) {
    button.onclick = function () {
        let firstNumber = parseFloat(document.getElementById('firstNumber').value)
        let secondNumber = parseFloat(document.getElementById('secondNumber').value)
        let result = document.getElementById('result')
        result.value = eval(firstNumber + button.value + secondNumber)
    }
}