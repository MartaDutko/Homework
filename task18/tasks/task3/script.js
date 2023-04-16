// Задача 3. Користувач задає рік народження. Визначити кількість років користувача.

const dataYear = new Date().getFullYear()

document.getElementById('userData').oninput = function getUserYear() {
    let userData = document.getElementById('userData').value
    document.getElementById('userAge').value = dataYear - userData
}
