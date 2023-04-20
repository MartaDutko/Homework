// Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану і з випадковою
// швидкістю рухається вниз. Як тільки сніжинка досягає нижньої частини екрану вона знову повинна з’явитись
// у верхній частині екрану.

class Snowflake {
    randomWidth() {
        let width = window.innerWidth
        return 0 + Math.floor(Math.random() * (width - 0 + 1))
    }
    randomSpeed() {
        return 1 + Math.floor(Math.random() * 9) / 10
    }
    render() {
        let snow = document.createElement('span')
        snow.classList.add('icon-weather-snow')
        snow.classList.add('move')
        snow.style.top = '-50px'

        snow.style.left = `${this.randomWidth()}px`
        document.body.append(snow)

        setInterval(() => {
            if (parseFloat(snow.style.top) < window.innerHeight)
                snow.style.top = (parseFloat(snow.style.top) + 5) + 'px'
            else{
                snow.style.top = '-50px'
                snow.style.left =`${this.randomWidth()}px`
            }
        }, this.randomSpeed() * 10)

    }

}
for (let i = 0; i < 20; i++) {
    let a = new Snowflake()
    a.render()
}
