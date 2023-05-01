// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними 
// числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). 
// При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

class GenerateRandomLists {
    constructor(selector) {
        this.selector = selector
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    createList() {
        let ol = document.createElement('ol')
        for (let i = 0; i < this.random(1, 10); i++) {
            let li = document.createElement('li')
            li.innerText = this.random(1, 100)
            ol.append(li)
        }
        return ol
    }
    renderLists(num = 5) {
        let selectorBlock = document.querySelector(this.selector)
        for (let i = 0; i < num; i++) {
            selectorBlock.append(this.createList())
        }
    }

    oddOrEvenNumber() {
        let olList = document.querySelector(this.selector).children
        for (const li of olList) {
            if (li.children.length % 2 == 0)
                li.style.color = 'green'
            else
                li.style.color = 'red'
        }
    }
}

let generateRandomLists = new GenerateRandomLists('.wrapper')
generateRandomLists.renderLists()

document.getElementById('btnColor').addEventListener('click', () => {
    generateRandomLists.oddOrEvenNumber()
})