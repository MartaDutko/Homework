// Задача 4. Використовуючи один з АРІ 
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних

let catsFacts = document.getElementById('catsFacts')

fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let p = document.createElement('p')
            p.innerText = data[i].text
            catsFacts.append(p)
        }
    })
