// Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується
// таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить
// середнє значення.

let mainBlock = document.querySelector('.mainBlock')
let getTable = document.getElementById('getTable')

getTable.onclick = function () {
    let priceNumber = parseInt(document.getElementById('priceNumber').value)
    for (let i = 0; i < priceNumber; i++) {
        let input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('value', '0')
        input.setAttribute('class', 'scores')
        mainBlock.append(input)
    }
}

document.getElementById('getSum').onclick = function getAverageValue() {
    let scores = document.querySelectorAll('.scores')
    let sum = 0
    let count = 0
    for (const scoreValue of scores) {
        sum += parseFloat(scoreValue.value)
        count++
    }
    let p = document.createElement('p')
    p.innerText = 'Sum= ' + sum / count
    document.querySelector('.wrapper').append(p)
}