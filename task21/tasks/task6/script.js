// Приклад. Дано перелік товарів у кошику. При зміні кількості одиниць товару збільшувати загальну 
// вартість. Створити клас Product, що призначений для маніпуляцій товаром та клас ProductManager
// що оперує з усіма товарами (через подію передвати ідентифікатор товару та операцію, що зроблена


let arrProduct = [
    {
        id: 1,
        img: './img/1.jpeg',
        tittle: 'Leptop',
        quantiti: 2,
        price: '2000'
    }, {
        id: 2,
        img: './img/1.jpeg',
        tittle: 'Leptop',
        quantiti: 2,
        price: '5000'
    }, {
        id: 3,
        img: './img/1.jpeg',
        tittle: 'Leptop',
        quantiti: 2,
        price: '2000'
    }
]

class ElementCreate {
    static createHTML({ tag, props }) {
        const element = document.createElement(tag)
        if (props) {
            for (const propKey in props) {
                element[propKey] = props[propKey]
            }
        }
        return element
    }
}

class Product {
    constructor(obj) {
        this.obj = obj
    }
    create() {
        this.wrapperDiv = ElementCreate.createHTML({
            tag: 'div',
            props: {
                className: 'block-product'
            }
        })
        let productDiv = ElementCreate.createHTML({
            tag: 'div',
            props: {
                className: 'block'
            }
        })
        let productImg = ElementCreate.createHTML({
            tag: 'img',
            props: {
                src: this.obj.img,
                className: 'img-product'
            }
        })
        let productTiitle = ElementCreate.createHTML({
            tag: 'p',
            props: {
                innerText: this.obj.tittle
            }
        })
        // append
        productDiv.append(productImg)
        productDiv.append(productTiitle)

        let quantitiDiv = ElementCreate.createHTML({
            tag: 'div',
            props: {
                className: 'block'
            }
        })
        this.btnDelete = ElementCreate.createHTML({
            tag: 'button',
            props: {
                className: 'delete',
                innerText: '-'
            }
        })
        this.pQuantiti = ElementCreate.createHTML({
            tag: 'p',
            props: {
                className: 'quantiti',
                innerText: this.obj.quantiti
            }
        })
        this.btnAdd = ElementCreate.createHTML({
            tag: 'button',
            props: {
                className: 'add',
                innerText: '+'
            }
        })

        // addClick
        this.btnDelete.addEventListener('click', this.clickBtnMinus.bind(this))
        this.btnAdd.addEventListener('click', this.clickBtnPlus.bind(this))

        //append
        quantitiDiv.append(this.btnDelete)
        quantitiDiv.append(this.pQuantiti)
        quantitiDiv.append(this.btnAdd)

        let productSumDiv = ElementCreate.createHTML({
            tag: 'div',
            props: {
                className: 'block'
            }
        })
        let productSumTittle = ElementCreate.createHTML({
            tag: 'p',
            props: {
                className: 'tittle-sum',
                innerText: 'До оплати:'
            }
        })
        this.totalSum = ElementCreate.createHTML({
            tag: 'p',
            props: {
                className: 'total-sum',
                innerText: this.obj.price * this.obj.quantiti
            }
        })
        let productDeleteBtn = ElementCreate.createHTML({
            tag: 'button',
            props: {
                className: 'delete-sum',
                innerText: 'x'
            }
        })

        // addClick
        productDeleteBtn.addEventListener('click', this.clickBtnDelete.bind(this))
        // append
        productSumDiv.append(productSumTittle)
        productSumDiv.append(this.totalSum)
        productSumDiv.append(productDeleteBtn)


        this.wrapperDiv.append(productDiv)
        this.wrapperDiv.append(quantitiDiv)
        this.wrapperDiv.append(productSumDiv)
        return this.wrapperDiv
    }
    render(selector) {
        let s = document.querySelector(selector)
        s.append(this.create())
    }
    clickBtnMinus() {
        let clickBtn = new CustomEvent('minusClick', {
            detail: {
                obj: this.obj
            }
        })
        this.wrapperDiv.dispatchEvent(clickBtn)
    }
    clickBtnPlus() {
        let clickBtn = new CustomEvent('plussClick', {
            detail: {
                obj: this.obj
            }
        })
        this.wrapperDiv.dispatchEvent(clickBtn)
    }
    clickBtnDelete() {
        let clickBtn = new CustomEvent('clickDelete', {
            detail: {
                obj: this.obj
            }
        })
        this.wrapperDiv.dispatchEvent(clickBtn)
    }
}

class ProductManager {
    constructor(arr) {
        this.arr = arr;
    }
    createTotalPrice(selector) {
        let div = ElementCreate.createHTML({
            tag: 'div',
            props: {
                className: 'sum-Block'
            }
        })
        let p = ElementCreate.createHTML({
            tag: 'p',
            props: {
                innerText: `Загальна сума: ${this.totalPrice()}`
            }
        })
        div.append(p)
        let s = document.querySelector(selector)
        s.append(div)
    }
    totalPrice() {
        let sum = 0
        for (const obj of this.arr) {
            sum += parseFloat(obj.price) * obj.quantiti
        }
        return sum
    }

    onClickPluss(e) {
        let obj = e.detail.obj;
        obj.quantiti = obj.quantiti + 1;
        this.render();
    }
    onClickMinus(e) {
        let obj = e.detail.obj
        if (obj.quantiti > 0)
            obj.quantiti = obj.quantiti - 1
        this.render()
    }
    onClickDelete(e) {
        let obj = e.detail.obj
        let newArr = this.arr.filter(el => el !== obj)
        this.arr = newArr
        this.render()
    }
    render() {
        document.querySelector('.wrapper').innerHTML = ''
        for (const el of this.arr) {
            let product = new Product(el);
            product.render('.wrapper');
            product.wrapperDiv.addEventListener('plussClick', maneger.onClickPluss.bind(this))
            product.wrapperDiv.addEventListener('minusClick', maneger.onClickMinus.bind(this))
            product.wrapperDiv.addEventListener('clickDelete', maneger.onClickDelete.bind(this))
        }
        this.createTotalPrice('.wrapper')
    }
}

let maneger = new ProductManager(arrProduct);
maneger.render()