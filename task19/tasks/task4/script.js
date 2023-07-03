// Задача 4. Сяючі зорі.Вказана кількість зірочок повинна з’являтися у випадковій частині екрану.
// Кожна зірка з певним кроком і інтервалом збільшується від мінімального до максимального розміру.
// Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.

class Star {
    constructor(minStarValue, maxStarValue) {
        this.minStarValue = minStarValue
        this.maxStarValue = maxStarValue
        this.star = document.createElement('span')
    }
    randomWidth() {
        let width = window.innerWidth-this.maxStarValue
        return 0 + Math.floor(Math.random() * (width - 0 + 1))
    }
    randomHeight() {
        let height = window.innerHeight - this.maxStarValue
        return 0 + Math.floor(Math.random() * (height - 0 + 1))
    }

    random(min,max){
        return min + Math.floor(Math.random() * (max - min + 1))
    }

    render() {
        this.star.classList.add('icon-star-empty')
        this.star.style.position = 'absolute'
        this.star.style.top = `${this.randomHeight()}px`
        this.star.style.left = `${this.randomWidth()}px`
        this.star.style.fontSize = `${this.minStarValue}px`
        document.body.append(this.star)

        this.interval = setInterval(() => {
            if (parseInt(this.star.style.fontSize) < this.maxStarValue) 
                this.star.style.fontSize = parseInt(this.star.style.fontSize) + this.random(0,2) + `px`
            else {
                clearInterval(this.interval)
                this.render()
            }
        }, this.random(3,9) * 10)
    }
}

for (let i = 0; i < 20; i++) {
    let star = new Star(5, 25)
    star.render()
}