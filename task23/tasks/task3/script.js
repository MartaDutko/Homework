// Задача 3. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.

class CreateArray {
    constructor() {
        this.randomArr = []
    }
    random(min = 1, max = 800) {
        return min + Math.floor(Math.random() * (max - min + 1))
    }
    createArr(value = 1000) {
        for (let i = 0; i < value; i++) {
            this.randomArr.push(this.random())
        }
    }

    bubbleSort() {
        let startTime = new Date()
        let arr = this.randomArr
        let bubbleSort = arr.length
        for (let i = 0; i < bubbleSort - 1; i++) {
            for (let j = 0; j < bubbleSort - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        let endTime = new Date()
        return endTime - startTime

    }
    insertionSort() {
        let startTime = new Date()
        let arr = this.randomArr
        let insertionSort = arr.length
        for (let i = 0; i < insertionSort; i++) {
            let curent = arr[i]
            let pre = i - 1
            while (pre >= 0 && arr[pre] > curent) {
                arr[pre + 1] = arr[pre]
                pre--
            }
            arr[pre + 1] = curent
        }
        let endTime = new Date()
        return endTime - startTime
    }
    getOptimalTimeSort(){
        if(this.insertionSort()>this.bubbleSort())
        console.log('Час сортування вставкою швидший');
        else
        console.log('Час сортування бульбашкою швидший');
    }
}

let arr = new CreateArray()
arr.createArr()
arr.getOptimalTimeSort()