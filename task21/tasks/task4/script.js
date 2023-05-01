// Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, 
// то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці
// з використанням відповідно доданого для цього атрибута).

class ElementCreate {
    static createTable({ tag, props }) {
        const element = document.createElement(tag)
        if (props) {
            for (const propKey in props) {
                element[propKey] = props[propKey]
            }
        }
        return element
    }
}

class TableCreator {
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    createCountEvent() {
        let span = ElementCreate.createTable({
            tag: 'span',
            props: {
                innerText: '0'
            }
        })
        return span
    }

    clickTable(table) {
        table.addEventListener('click', (e) => {
            let tablepreSibling = e.target.closest('table').previousSibling
            let previosCount = parseInt(tablepreSibling.innerText)
            tablepreSibling.innerText=++previosCount

            if (e.target.tagName === 'TD') {
                table.style.borderColor = 'red'
            }
        })
    }

    createTable(trAmount = 3, tdAmount = 3) {

        let table = ElementCreate.createTable({
            tag: 'table',
            props: {
                className: 'table',
                border: '1px solid black'
            }
        })

        let tbody = ElementCreate.createTable({
            tag: 'tbody'
        })

        for (let i = 0; i < trAmount; i++) {
            let tr = ElementCreate.createTable({
                tag: 'tr'
            })

            for (let i = 0; i < tdAmount; i++) {
                let td = ElementCreate.createTable({
                    tag: 'td',
                    props: {
                        innerText: `${this.random(0, 90)}`
                    }
                })
                tr.append(td)
            }
            tbody.append(tr)
        }
        this.clickTable(table)
        table.append(tbody)

        return table
    }

    createTables(selector, tableAmount = 3) {
        let selectorHTML = document.querySelector(selector)
        for (let i = 0; i < tableAmount; i++) {
            selectorHTML.append(this.createCountEvent())
            selectorHTML.append(this.createTable())
        }
        document.body.append(selectorHTML)
    }
}

let a = new TableCreator()
a.createTables('.wrapper')