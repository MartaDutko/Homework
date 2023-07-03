// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів. 

let arrStudent = [
    {
        fullName: 'Ivan Ivanov',
        course: 2,
        faculty: 'literature'
    },
    {
        fullName: 'Petro Petriv',
        course: 1,
        faculty: 'mathematics'
    },
    {
        fullName: 'Pavlo Pavliv',
        course: 2,
        faculty: 'history'
    },
    {
        fullName: 'Nazar Nazariv',
        course: 3,
        faculty: 'literature'
    },
    {
        fullName: 'Olga Olga',
        course: 2,
        faculty: 'mathematics'
    },
    {
        fullName: 'Vasil Vasiliv',
        course: 2,
        faculty: 'literature'
    },
    {
        fullName: 'Andrew Andrewoch',
        course: 4,
        faculty: 'literature'
    }
]

function getCountFacultets(arr) {
    let set = new Set()
    for (const el of arr) {
        set.add(el.faculty)
    }
    return set
}

console.log(getCountFacultets(arrStudent));

function getCountCourse(arr) {
    let map = new Map()
    for (const el of arr) {
        let count = map.get(el.faculty) || 0
        map.set(el.faculty, ++count)
    }
    return map
}
console.log(getCountCourse(arrStudent));