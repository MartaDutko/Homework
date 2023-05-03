// Задача. Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) 
// та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку 
// (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.

// перевіряти чи є числом
class isNumber extends Error {
    constructor() {
        super()
        this.message = 'Введено не число'
        this.name = 'isNumber'
    }
}
// чи від 1 до 12
class inRange_1_12 extends Error {
    constructor() {
        super()
        this.message = 'Потрібно ввести від 1 до 12'
        this.name = 'inRange_1_12'
    }
}

// чи не канікули
class IsVacation extends Error {
    constructor() {
        super()
        this.message = 'Канікули'
        this.name = 'IsVacation'
    }
}

class Number1_100 extends Error {
    constructor() {
        super()
        this.message = 'Потрібно ввести від 1 до 100'
        this.name = 'Number1_100'
    }
}

function validate() {
    try {
        let month = document.getElementById('month').value
        let rating = document.getElementById('rating').value

        // month
        if (isNaN(month)) throw new isNumber()
        if (month < 1 || month > 12) throw new inRange_1_12()
        if (month > 5 && month < 8) throw new IsVacation()
        // rating
        if (isNaN(rating)) throw new isNumber()
        if (rating < 1 || rating > 100) throw new Number1_100()
    }
    catch (err) {
        if (err instanceof isNumber)
            document.getElementById('month').value = 1
        else if (err instanceof inRange_1_12)
            document.getElementById('month').value = 1
        else if (err instanceof IsVacation)
            document.getElementById('month').value = 5
        else if (err instanceof isNumber)
            document.getElementById('rating').value = 1
        else if (err instanceof Number1_100)
            document.getElementById('rating').value = 1
        else
            console.log(err.message);
        validate()
    }
}

document.getElementById('btn').addEventListener('click', () => {
    validate()
    let month = parseInt(document.getElementById('month').value)
    let rating = parseInt(document.getElementById('rating').value)
    let result = document.getElementById('result')
    if (month !== 5 && month !== 12 && rating > 50)
        result.innerText = 'Учень зможе виправити оцінку'
    else
        result.innerText = 'Учень не зможе виправити оцінку'
})