// Задача 5. На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата, стаж, номер відділу,
// порядковий номер). Додати подію обробки події click на форму і якщо клік на input, то автоматично
// замінювати значення його на 0.

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

class Form {
    constructor(obj) {
        this.obj = obj
    }

    createForm() {
        let form = ElementCreate.createHTML({
            tag: 'form'
        })
        for (const key in this.obj) {
            let lable = ElementCreate.createHTML({
                tag: 'lable',
                props: {
                    innerText: this.obj[key],
                    className: 'itemForm'
                }
            })
            let input = ElementCreate.createHTML({
                tag: 'input',
                props: {
                    type: 'number'
                }
            })
            this.clickInput(form)
            lable.append(input)
            form.append(lable)
        }
        return form
    }
    rendrer(selector,obj) {
        let sel = document.querySelector(selector)
        sel.append(this.createForm())
    }
    clickInput(form){
        form.addEventListener('click',(e)=>{
            if(e.target.tagName ==='INPUT')
            e.target.value=0
        })
    }
}

const user = {
    year: 'Вік',
    height: 'Зріст',
    weigth: 'Вага',
    money: 'Заробітна плата',
    experience: 'Стаж',
    departmentNumber: 'Номер відділу',
    serialNumber: 'Порядковий номер',
}
let form = new Form(user)
form.rendrer('.wrapper')