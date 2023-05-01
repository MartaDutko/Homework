// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

document.querySelector('.wrapper').addEventListener('click', (e) => {
    if (e.target.tagName === 'DIV') {
        let div = e.target
        while (div) {
            div.style.backgroundColor = 'red'
            div = div.nextElementSibling
        }
    }
})