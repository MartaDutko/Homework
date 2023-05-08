// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

let userInfo = [
    {
        user: 'Ivan',
        login: '1111',
    },
    {
        user: 'Petro',
        login: '2222',
    },
    {
        user: 'Pavlo',
        login: '3333',
    },
    {
        user: 'Andrew',
        login: '4444',
    },
    {
        user: 'Nazar',
        login: '55555',
    },
    {
        user: 'Oleg',
        login: '666',
    },
    {
        user: 'Oleg',
        login: '666',
    },
    {
        user: 'Oleg',
        login: '666',
    },
    {
        user: 'Oleg',
        login: '666',
    }
]

function getVisitesUser(arr) {
    let map = new Map()
    for (const el of arr) {
        let countValues = map.get(el.login) || 0
        map.set(el.login, countValues + 1)
    }
    return map
}
console.log(getVisitesUser(userInfo));