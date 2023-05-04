// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

// let testStringArr =['aaa1','b2bb','ccc','d3dd']
// for (const el of testStringArr) {
//     if(/\d/.test(el))
//     console.log(el);
// }

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

// let testStringArr =['aaa1','bbb','ccc','d3dd']
// for (const el of testStringArr) {
//     if(/^\D+$/.test(el))
//     console.log(el);
// }

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
// let testStringArr =['аааа','ииии','ccc','d3dd','юююю']

// for (const el of testStringArr) {
//     if(/[аеєиіїоуюя]/.test(el))
//     console.log(el);
// }

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.

// let testStringArr = ['аааа', 'ииии', 'ccc', 'd3dd', 'юююю']

// for (const el of testStringArr) {
//     if (/[^аеєиіїоуюя]/.test(el))
//         console.log(el);
// }

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

// let testStringArr = ['aaa1', 'bbb', 'ccc', 'd3dd']
// for (const el of testStringArr) {
//     if (/(1|3)/.test(el))
//         console.log(el);
// }

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

// let testStringArr = 'a4a7a'
// for (const el of testStringArr) {
//     if(el.match(/\d/))
//     console.log(el);
// }

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

// let testStringArr = 'a 4a 7 a'

// for (const el of testStringArr) {
//     if(el.match(/\W/))
//     console.log(el);
// }

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

// let testStringArr = 'a 4a,7 a.k'
// let strArr = testStringArr.split(/[^\w']/)
// for (const el of strArr) {
//     if(el.match(/\w/))
//     console.log(el);
// }

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).

// let testString = '20/06/2000'
// let search = /\d{1,2}\/\d{1,2}\/\d{4}/g
// let res = testString.match(search)
// console.log(res);

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

// let testString = '11 aaa11 2b ccc22'
// let arr = testString.match(/\d{2}/g).length
// console.log(arr);

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.

// let testString ='aaa4142-3433-2323-3434 bbbbbb 5142-3433-2323-3435'
// let arr=testString.match(/\b\d{4}-\d{4}-\d{4}\b/g)
// console.log(arr);

// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)

// let testUrl='https://test.test.gov'
// if(testUrl.endsWith('gov'))
// console.log('Урядовий');
// else
// console.log('Не урядовий');

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення

// let testMessage = '1997,2000,2022,2023'

// let test = testMessage.match(/\d{4}/g).filter(el=>el>2021)
// console.log(test);

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
// let testString= '+380961111111'
// let test = testString.match(/^\+380\d{9}/g)
// console.log(test);

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.

// let testString = 'Ivan Ivanov'
// console.log(testString.replace(/\s/, '-'));

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
// let testString = '20.06.2000'
// let test = testString.replace(/\D/g,'/')
// console.log(test);

// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним

// let testString = '6'
// if(testString.match(/[0-4]|[mon,tue,wed,thu,fri]/g))
// console.log('робоий день');
// else
// console.log('вихідний');