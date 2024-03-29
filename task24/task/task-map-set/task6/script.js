// Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.

let arrBoock = [
    {
        name: 'Boock1',
        year: 2000,
        autor: 'Ivan Ivanov'
    },
    {
        name: 'Boock2',
        year: 2001,
        autor: 'Petro Petrov'
    },
    {
        name: 'Boock3',
        year: 2002,
        autor: 'Pavlo Pavliv'
    },
    {
        name: 'Boock4',
        year: 2003,
        autor: 'Ivan Ivanov'
    },
    {
        name: 'Boock5',
        year: 2004,
        autor: 'Petro Petrov'
    },
]

function getNumberBoocks(arr) {
    let map = new Map()
    for (const el of arr) {
        let count = map.get(el.autor) || 0
        map.set(el.autor, ++count)
    }
    return map
}
console.log(getNumberBoocks(arrBoock));