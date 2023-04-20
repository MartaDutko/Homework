// Задача 2. Дано список спортсменів.Потрібно сформувати список тих, які будуть брати участь у змаганні.При цьому є два стовпці.
// В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.При натисканні на зелену стрілку спортсмен переміщається у список для змагань.
// При натисканні на червону стрілку спортсмен переміщається у загальний список.

let listOfAthletes = [
    {
        status: true,
        name: 'Ivan',
        surname: 'Ivanov'
    },
    {
        status: true,
        name: 'Pavlo',
        surname: 'Pavliv'
    },
    {
        status: true,
        name: 'Petro',
        surname: 'Petriv'
    },
    {
        status: true,
        name: 'Taras',
        surname: 'Ivanov'
    },
]

console.log(listOfAthletes);

class Sportsmen {
    constructor(obg) {
        this.status = obg.status
        this.name = obg.name
        this.surname = obg.surname
    }

    clickUser() {
        let blockUser = document.querySelectorAll('.blockUser')
        for (const el of blockUser) {
            if (el.firstChild.innerText === this.name + ' ' + this.surname)
                el.remove()
        }
        if (this.status === true)
            this.status = false

        else
            this.status = true

        this.render()

    }
    render() {
        let blockUser = document.createElement('div')
        blockUser.classList = 'blockUser'
        let p = document.createElement('p')
        p.innerText = this.name + ' ' + this.surname

        this.button = document.createElement('button')
        let span = document.createElement('span')
        if (this.status === true)
            span.classList.add('icon-arrow-right')
        else
            span.classList.add('icon-arrow-left')
        this.button.append(span)
        this.button.onclick = this.clickUser.bind(this)
        // append
        blockUser.append(p)
        blockUser.append(this.button)
        if (this.status === true)
            document.querySelector('.listOfAthletes').append(blockUser)
        else
            document.querySelector('.selectedForCompetition').append(blockUser)
    }
}

for (const obj of listOfAthletes) {
    let sportsmen = new Sportsmen(obj)
    sportsmen.render()
}