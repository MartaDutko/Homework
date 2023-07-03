// Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується
// таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить
// середнє значення.

// getTableBtn
const getTableBtn = document.getElementById('getTable').onclick = function () {
    createTable('.mainBlock')
}

function getCountFields(targetSelector) {
    return parseInt(document.getElementById(targetSelector).value)
}
function createTable(targetSelector) {
    let mainBlock = document.querySelector(targetSelector)
    const inputNumber = getCountFields('priceNumber')
    for (let i = 0; i < inputNumber; i++) {
        let input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('value', '0')
        input.setAttribute('class', 'scores')
        mainBlock.append(input)
    }
}

// getSumBtn
const getSumBtn = document.getElementById('getSum').onclick = function () {
    getAverageScore('.wrapper')
}

function getSum(targetSelector) {
    let scores = document.querySelectorAll(targetSelector)
    let sum = 0
    let scoresLength = scores.length
    for (const el of scores) {
        sum += parseInt(el.value)
    }
    return { sum, scoresLength }
}

function getAverageScore(targetSelector) {
    let container = document.querySelector(targetSelector)
    let sum = getSum('.scores').sum
    let scoresLength = getSum('.scores').scoresLength
    let res = sum / scoresLength
    let p = createElelment('p', `Sum = ${res}`)
    container.append(p)
}

function createElelment(tag, innerText) {
    let element = document.createElement(tag)
    element.innerText = innerText
    return element
}