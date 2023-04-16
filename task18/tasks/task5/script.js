// Задача 5. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

function getTable(rowNumber, columnNumber) {
    let table = document.createElement('table')
    table.style.border = "1px solid black"
    for (let i = 0; i < rowNumber; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < columnNumber; j++) {
            let td = document.createElement('td')
            td.style.border = '1px solid black'
            td.innerText = getRandomNumber()
            tr.append(td)
        }
        table.append(tr)
    }
    document.body.append(table)
}

function getRandomNumber() {
    return (1 + Math.floor(Math.random() * (100 - 1 + 1)))
}
getTable(3,4)