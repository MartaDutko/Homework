// Задача 4. Задаємо користувачу задачу з додавання двох чисел. Визначити скільки секунд було використано для розв’язання задачі.

class UserTask {
    random(min = 1, max = 5) {
        return min + Math.floor(Math.random() * (max - min + 1))
    }
    generateTask() {
        let firstNumber = this.random()
        let secondNumber = this.random()
        let startTime = new Date().getSeconds()
        let task = prompt(`${firstNumber} + ${secondNumber}`)
        let endTime = new Date().getSeconds()
        let resTime = endTime - startTime
        return { firstNumber, secondNumber, task, resTime }
    }
    checkCorectAnswer() {
        let task = this.generateTask()
        let res = task.firstNumber + task.secondNumber
        let resTime = task.resTime
        if (parseInt(task.task) === res)
            console.log(`пpавильно, на вирішення прикладу пішло ${resTime} секунд(a)`);
        else
            console.log(`не пpавильно, на вирішення прикладу пішло ${resTime} секунд(a)`);
    }

}
let task = new UserTask()
task.checkCorectAnswer()