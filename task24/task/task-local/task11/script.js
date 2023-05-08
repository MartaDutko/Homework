// Задача 11. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.

initColor()
function initColor() {
    if (localStorage.getItem('BackroundColor', color)) {
        document.body.style.backgroundColor = localStorage.getItem('BackroundColor', color)
    }
}

function backroundColor() {
    if (sessionStorage.getItem('count')) {
        sessionStorage.setItem('count',parseInt(sessionStorage.getItem('count'))+1)
    }
    else{
    sessionStorage.setItem('count', 0)
    }
    let color = document.getElementById('color').value
    localStorage.setItem('BackroundColor', color)
}

document.getElementById('color').addEventListener('input', backroundColor)