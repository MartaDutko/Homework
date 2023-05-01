// Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати
// інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні
//  на 1 більше (кожен наступне на 1 більше за попереднього)

let wrapper = document.querySelector('.wrapper')
wrapper.addEventListener('input', (e) => {
    let eventElement = e.target
    let number = parseInt(e.target.value)
    let parentLabel = eventElement.parentElement

    while (parentLabel.previousElementSibling) {
        // previousElement
        let previousLabel = parentLabel.previousElementSibling
        previousLabel.firstElementChild.value=--number
        parentLabel=previousLabel
    }

    parentLabel = eventElement.parentElement
    number= parseInt(e.target.value)

    while (parentLabel.nextElementSibling) {
        // nextElement
        let nextLable = parentLabel.nextElementSibling
        nextLable.firstElementChild.value = ++number
        parentLabel = nextLable
    }
})