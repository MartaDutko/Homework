// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// Заокруглити вверх значення та підрахувати кількість різних показів.


let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

function getUnique(arr) {
    let map = new Map()
    let set = new Set()

    for (const el of arr) {
        let count = map.get(el) || 0
        map.set(el, count + 1)
        set.add(Math.ceil(el))
    }
    return {map,set}
}
console.log(getUnique(temperatures).map);
console.log(getUnique(temperatures).set);
