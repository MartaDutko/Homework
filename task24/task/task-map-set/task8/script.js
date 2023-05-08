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
    let map = new Map()
    let count = 1
    for (const el of arr) {
        if (!map.has(el.faculty))
            map.set(el.faculty, count)

        else
            map.set(el.faculty, ++count)

    }
    return map
}

console.log(getCountFacultets(arrStudent));

function getCountCourse(arr) {
    let map = new Map()
    for (const el of arr) {
        let count = 1
        if (!map.has(el.course))
            map.set(el.course, count)
        else
            map.set(el.course, ++count)
    }
    return map
}
console.log(getCountCourse(arrStudent));