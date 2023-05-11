// Задача 2. Дано Shop -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна,
// кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елмента
// виводився рядок «товар-загальна вартість»

class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'string': return `Товар:${this.name} - Загальна вартість: ${this.price * this.quantity}`
            default: return this.price
        }
    }
}

let productsList = [
    new Product('Product1', 10, 3),
    new Product('Product2', 20, 3),
    new Product('Product3', 30, 3),
    new Product('Product4', 40, 3),
    new Product('Product5', 50, 3),
    new Product('Product6', 60, 3)
]

class Shop {
    constructor(arrProducts) {
        this.arrProducts = arrProducts;
    }
    [Symbol.iterator]() {
        this.currentIndex = 0;
        return this;
    }
    next() {
        if (this.currentIndex < this.arrProducts.length) {
            const product = this.arrProducts[this.currentIndex];
            this.currentIndex++;
            return { done: false, value: String(product) };
        } else {
            return { done: true };
        }
    }
}

let shop = new Shop(productsList)

for (const el of shop) {
    console.log(el)
}