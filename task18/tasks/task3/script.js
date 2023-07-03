// Задача 3. Користувач задає рік народження. Визначити кількість років користувача.

function printUserAge(idUserData, idUserAge) {
    let userYears = document.getElementById(idUserData)
    userYears.oninput = function () {
        let userYearsValue = parseInt(userYears.value)
        document.getElementById(idUserAge).value = countAge(userYearsValue)
    }
}

function countAge(userYears) {
    let currentYear = new Date().getFullYear()
    return currentYear - userYears
}

printUserAge('userData', 'userAge')