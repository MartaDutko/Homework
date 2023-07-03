// Задача 7. Подорож складається з 3 етапів.На кожному етапі користувач може вибрати один з видів
// транспорту(авто, автобус, літак - випадаючий список), харчування(сніданок, обід, вечеря – checkbоx) та
// одного з 3 - х гідів(використати - radio buttons).Ціни визначте самі.Підрахувати загальну вартість.

let container = document.querySelector('.container')
container.onclick = function (e) {
    if (e.target.tagName === 'BUTTON') {
        let sum = 0
        sum += parseInt(document.getElementById('typeOfTransport').value)
        let inputs = document.getElementsByTagName('input')

        for (const el of inputs) {
            if (el.checked)
                sum += parseInt(el.value)
        }
        let p = createElelment('p', `Загальна сума = ${sum}`)
        findConteiner('.wrapper', e).append(p)
    }
}

function findConteiner(selector, e) {
    let element = e.target
    return element.closest(selector);
}

function createElelment(tag, innerText) {
    let element = document.createElement(tag)
    element.innerText = innerText
    return element
}