// Задача 5. Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які
// їдуть вниз. При кліку на танк він вибухає і зникає з екрану.

class Tank {
    constructor() {
        this.tank = document.createElement('span')
    }
    randomWidth() {
        let width = window.innerWidth - parseInt(this.tank.style.fontSize)
        return 0 + Math.floor(Math.random() * (width - 0 + 1))
    }
    randomTop() {
        return -200 + Math.floor(Math.random() * (50 - (-200) + 1))
    }

    render() {
        this.tank.className = ('icon-1')
        this.tank.style.fontSize = '50px'
        this.tank.style.position = 'absolute'
        this.tank.style.top = `${this.randomTop()}px`
        this.tank.style.left = `${this.randomWidth()}px`
        document.body.append(this.tank)

        this.interval = setInterval(() => {
            if (parseInt(this.tank.style.top) < window.innerHeight)
                this.tank.style.top = parseInt(this.tank.style.top) + 20 + 'px'
            else
                this.tank.style.top = `${this.randomTop()}px`
        }, 500);
        // click
        this.tank.addEventListener('click', (e) => {
            e.target.classList.add('icon-fire')
            setTimeout(() => {
                document.body.removeChild(e.target)

            }, 500);
        })
    }
}

for (let i = 0; i < 5; i++) {
    let tank = new Tank()
    tank.render()
}
