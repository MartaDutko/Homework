// Задача 7. Подорож складається з 3 етапів.На кожному етапі користувач може вибрати один з видів
// транспорту(авто, автобус, літак - випадаючий список), харчування(сніданок, обід, вечеря – checkbоx) та
// одного з 3 - х гідів(використати - radio buttons).Ціни визначте самі.Підрахувати загальну вартість.

document.getElementById('btnTotalPrice').onclick = function() {
    let sum = 0
    sum += parseInt(document.getElementById('typeOfTransport').value)
    let inputs = document.getElementsByTagName('input')

    for (const el of inputs) {
        if (el.checked)
            sum += parseInt(el.value)
    }
    let p = document.createElement('p')
    p.innerText = `Загальна сума = ${sum}`
    document.querySelector('.wrapper').append(p)
}