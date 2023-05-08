// Задача 12. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). 
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). 
// Якщо користувач натискає на «Ок», то видаляти цю задачу.
let tasksList = [
    'eat',
    'learn',
    'walk',
]
function saveInLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
saveInLocalStorage(tasksList)

function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function intervalList() {
    let interval = setInterval(() => {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        let randomTask = random(0, tasks.length - 1)
        if (confirm(tasks[randomTask])) {
            tasks.splice(randomTask, 1)
            saveInLocalStorage(tasks)
        }
        if (tasks.length === 0) {
            clearInterval(interval)
            alert('0 tasks')
        }
    }, random(1, 3) * 1000);
}
intervalList()