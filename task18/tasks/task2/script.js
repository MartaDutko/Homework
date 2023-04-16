// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)

const dollarRate = 39
const euroRate = 40

document.getElementById('btnConvert').onclick = function () {
    let sumGrn = parseFloat(document.getElementById('sumGrn').value)
    document.getElementById('sumEuro').value = sumGrn / euroRate
    document.getElementById('sumDolars').value = sumGrn / dollarRate
}