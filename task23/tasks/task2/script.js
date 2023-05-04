// Задача 2 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності.
// Визначити чи є він придатним на даний момент.

function dateOfManufacture(year, month, day, numberDaysValidity) {
    let todayDate = new Date()
    let dateProduct = new Date(year, month-1, day)

    dateProduct.setDate(dateProduct.getDay() + numberDaysValidity)

    if (dateProduct > todayDate)
        console.log(`Продукт придатний до споживання`)
    else
        console.log(`Продукт не  придатний до споживання`);
}

dateOfManufacture(2023, 1, 1,10)