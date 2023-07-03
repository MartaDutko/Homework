// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера
// виводиться оператор (050…. 🡪 MTC, 096… 🡪 Kyivstar, ….)

class PhoneNumber {
    constructor(number) {
        this.number = number
        this.operator = this.operatorSelection()
    }
    operatorSelection() {
        let pattern = /^(\+38)(096|050)\d{7}/
        let match = pattern.exec(this.number)
        if (match !== null) {
            if (match[2] === '096')
                return 'Київстар'
            else
                return 'Водафон'
        }
    }

    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number': return this.number
            case 'string': return this.operator
        }
    }
}

let number = new PhoneNumber('+380962474626')
alert(number)