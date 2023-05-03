// Задача. Розробити Класи

class Object {
    constructor(obj) {
        this.coordinateX = obj.coordinateX
        this.coordinateY = obj.coordinateY
        this.url = obj.url
        this.updateInterval = obj.updateInterval
        this.img = this.createElement()
    }

    random(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1))
    }

    generateElem() {
        this.coordinateY = this.random(0, innerHeight)
        this.coordinateX = this.random(0, innerWidth)
    }
    createElement() {
        let img = document.createElement('img')
        img.setAttribute('src', this.url)
        img.style.top = this.coordinateX + 'px'
        img.style.left = this.coordinateY + 'px'
        img.style.transitionDuration='500ms'
        return img
    }
    render(selector) {
        document.querySelector(selector).append(this.img)
    }

}
let obj = [
    {
        coordinateX: 500,
        coordinateY: 300,
        url: './img/house.png',
        updateInterval: 5
    },
    {
        coordinateX: 100,
        coordinateY: 300,
        url: './img/dog.png',
        updateInterval: 2
    },
    {
        coordinateX: 30,
        coordinateY: 30,
        url: './img/bird.png',
        updateInterval: 1
    }
]

// HOUSE
// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (збільшення або зменшення масштабу (об’єкт не рухається)

class House extends Object {
    constructor(objHouse) {
        super(objHouse)
    }
    update() {
        setInterval(() => {
            this.img.style.transform = `scale(${this.random(1, 3)})`
        }, this.updateInterval * 1000);
    }
}
let house = new House(obj[0])
house.render('.wrapper')
house.update()


// DOG
// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (випадкове зміщення по горизонталі (зміна координати Х))

class Dog extends Object {
    constructor(objDog) {
        super(objDog)
    }
    update() {
        setInterval(() => {
            let widthImg = this.img.width
            this.img.style.left = `${(this.random(widthImg, innerWidth)) - widthImg}px`
        }, this.updateInterval * 1000);
    }
}
let dog = new Dog(obj[1])
dog.render('.wrapper')
dog.update()

// BIRD
// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (випадкове переміщення у довільному напрямку)

class Bird extends Object {
    constructor(objBird) {
        super(objBird)
    }
    update() {
        setInterval(() => {
            let widthImg = this.img.width
            this.img.style.top = `${(this.random(widthImg, innerHeight)) - widthImg}px`
            this.img.style.left = `${(this.random(widthImg, innerWidth)) - widthImg}px`
        }, this.updateInterval * 1000);
    }
}
let bird = new Bird(obj[2])
bird.render('.wrapper')
bird.update()