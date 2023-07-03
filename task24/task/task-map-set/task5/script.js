// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.

let arrUser = [
    {
        name: 'Ivan',
        age: 10
    },
    {
        name: 'Olga',
        age: 11
    },
    {
        name: 'Andrev',
        age: 10
    },
    {
        name: 'Petro',
        age: 9
    },
    {
        name: 'Petro',
        age: 9
    },
    {
        name: 'Pavlo',
        age: 12
    }
]

function getRepeatValue(arr) {
    let map = new Map()
    for (const el of arr) {
        let count = map.get(el.age) || 0
        map.set(el.age, ++count)
    }
    return map
}
let map = getRepeatValue(arrUser)
console.log(map);

function getMaxValue(map) {
    let maxValue = -Infinity
    let keys = map.keys()
    for (const el of keys) {
        if (el > maxValue)
            maxValue = el
    }
    return maxValue
}
console.log(getMaxValue(map));