// Задача  1. Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.
let userWakation  = 56

let date = new Date()
date.setDate(date.getDate()+userWakation)
console.log(`Користувач повернеться ${date}`);