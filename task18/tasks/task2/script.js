// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)

function currencyConverter(dollarRate = 39, euroRate = 40) {
    document.getElementById('btnConvert').onclick = function () {
        let sumGrn = parseFloat(document.getElementById('sumGrn').value)
        division('sumEuro',sumGrn,euroRate)
        division('sumDolars',sumGrn,dollarRate)
    }
}
function division(idSelector, sumGrn, rate) {
    document.getElementById(idSelector).value = sumGrn / rate
}
currencyConverter()