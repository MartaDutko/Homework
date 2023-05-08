// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. 
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. 
// Також підрахувати скільки всього студентів відвідують хоча б один гурток. 

let mathWorkshop = ['Ivanov', 'Petriv', 'Pavliv', 'Nazariv', 'Andrewoch']
let historyWorkshop = ['Ivanov', 'Nazariv', 'Vasiliv']

function studentWorkshop (math, history) {
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

    let mathWorkshop = new Set(math).size
    console.log(`Math visit ${mathWorkshop}`);
    let historyWorkshop = new Set(history).size
    console.log(`Hystory visit ${historyWorkshop}`);
}

studentWorkshop(mathWorkshop, historyWorkshop)