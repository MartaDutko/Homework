// Задача 1. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку




class Product {
    constructor({ productStatus, sale, img, tittel, price }) {
        this.productStatus = productStatus
        this.sale = sale
        this.imgProduct = img
        this.titelProduct = tittel
        this.priceProduct = price
    }
    saleStatus() {
        if (this.sale === true)
            return 'saleProduct'
        return 'notSaleProduct'
    }
    render(containerSelector) {
        const blockProduct = document.createElement('div')
        blockProduct.className = 'blockProduct'

        const conditionGoogsBlock = document.createElement('div')
        conditionGoogsBlock.classList.add('conditionGoogsBlock');
        conditionGoogsBlock.classList.add(this.saleStatus());

        const conditionGoogs = document.createElement('p')
        conditionGoogs.className = 'conditionGoogs'
        conditionGoogs.innerText = this.productStatus
        conditionGoogsBlock.append(conditionGoogs)

        // blockImgProduct
        const blockImgProduct = document.createElement('div')
        blockImgProduct.className = 'blockImgProduct'
        const img = document.createElement('img')
        img.src = this.imgProduct
        img.className = 'productImage'
        blockImgProduct.append(img)

        // block description
        const description = document.createElement('div')
        description.className = 'description'
        // console.log(description);

        const descriptionProduct = document.createElement('p')
        descriptionProduct.innerText = this.titelProduct
        descriptionProduct.className = 'descriptionProduct'

        const priceProduct = document.createElement('p')
        priceProduct.className = 'priceProduct'
        priceProduct.innerText = this.priceProduct

        description.append(descriptionProduct)
        description.append(priceProduct)

        // append
        blockProduct.append(conditionGoogsBlock)
        blockProduct.append(blockImgProduct)
        blockProduct.append(description)
        document.querySelector(containerSelector).append(blockProduct)
    }
}

let listProduct = [
    {
        productStatus: 'Топ продажів',
        sale: false,
        img: './img/1.jpeg',
        tittel: 'MacBook',
        price: 34000 + '₴'
    },
    {
        productStatus: 'Топ продажів',
        sale: false,
        img: './img/2.jpeg',
        tittel: 'Ноутбук Lenovo',
        price: 10000 + '₴'
    },
    {
        productStatus: 'акція',
        sale: true,
        img: './img/3.jpeg',
        tittel: 'Ноутбук Lenovo',
        price: 34000 + '₴'
    },
    {
        productStatus: 'Топ продажів',
        sale: false,
        img: './img/4.jpeg',
        tittel: 'Ноутбук Redmi',
        price: 4000 + '₴'
    },
]
console.log(listProduct);

for (const el of listProduct) {
    let a = new Product(el)
    a.render('.mainBlock')
}
