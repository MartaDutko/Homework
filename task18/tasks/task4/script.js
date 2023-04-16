// Задача 4. Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються 
// у окремих div (їх треба створити і додати на сторінку)

const wishlist = ['книга', 'квитки', 'годинник', 'камера', 'кросівки', 'ноутбук', 'телефон', 'телевізор']

function randomWhish(wishlist) {
    return wishlist[0 + Math.floor(Math.random() * (wishlist.length - 1 + 1))]
}

function appendDiv(max,wishlist) {
    for (let i = 0; i < max; i++) {
        let div=document.createElement('div')
        div.innerText = randomWhish(wishlist)
        document.body.append(div)
    }
}
appendDiv(3,wishlist)