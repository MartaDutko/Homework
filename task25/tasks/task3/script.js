// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

class Generator {
    constructor(start, end, evenNumbers) {
        this.start = start
        this.end = end
        this.evenNumbers = evenNumbers
    }
    random() {
        return this.start + Math.floor(Math.random() * (this.end - this.start + 1))
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.evenNumbers; i++) {
            let rand = this.random()
            if (rand % 2 === 0)
            yield rand
            else
            i--
        }
    }
}
let generator = new Generator(1, 10, 3)

for (const el of generator) {
    console.log(el);
}