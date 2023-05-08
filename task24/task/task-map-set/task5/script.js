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
    for (const el of arrUser) {
        let ageCount = 1
        if (!map.has(el.age)) {
            map.set(el.age, ageCount)
        }
        else {
            map.set(el.age, ++ageCount)
        }
    }
    return map
}
let map = getRepeatValue(arrUser)
console.log(map);

function getMaxValue(map) {
    let maxValue = 0
    let keys = map.keys()
    for (const el of keys) {
        if (el > maxValue)
            maxValue = el
    }
    return maxValue
}
console.log(getMaxValue(map));