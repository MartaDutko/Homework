// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. 
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. 
// Також підрахувати скільки всього студентів відвідують хоча б один гурток. 

let mathWorkshop = ['Ivanov', 'Petriv', 'Pavliv', 'Nazariv', 'Andrewoch']
let historyWorkshop = ['Ivanov', 'Nazariv', 'Vasiliv']

function studentWorkshop(math, history) {
    let map = new Map()
    for (const el of math) {
        let count = map.get(el) || 0
        map.set(el, count + 1)
    }
    for (const el of history) {
        let count = map.get(el) || 0
        map.set(el, count + 1)
    }

    let twoWorkshop = 0
    for (const el of map) {
        if (el[1] === 2)
            twoWorkshop++
    }
    console.log(`History & math visit ${twoWorkshop} students`);
}
studentWorkshop(mathWorkshop, historyWorkshop)

function getCount(arr, nameWorkshop) {
    let set = new Set()
    for (const el of arr) {
        set.add(el)
    }
    return `Гурток ${nameWorkshop} відвідує = ${set.size} учнів `
}
console.log(getCount(mathWorkshop, 'Math'));