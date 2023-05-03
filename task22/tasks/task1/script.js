// Задача. Створити клас Client
// Властивості:
// ID
// ПІБ
// Кількість грошей на рахунку
// Методи:
// Додавання грошей
// Зняття грошей
// ToString

let objClients = [
    {
        id: 1,
        FDI: 'Ry Tyy Yo',
        balanceMoney: 3000,
        creditLimit: 5000,
        interestUseOfCreditFunds: 0.05,
        goldenClient:true
    },
    {
        id: 2,
        FDI: 'Ry Tyy Yo',
        balanceMoney: 3000,
        creditLimit: 10000,
        interestUseOfCreditFunds: 0.08,
        goldenClient:false
    },
    {
        id: 3,
        FDI: 'Ry Tyy Yo',
        balanceMoney: 3000,
        creditLimit: 10000,
        interestUseOfCreditFunds: 0.08,
        goldenClient:true
    },
    {
        id: 4,
        FDI: 'Ry Tyy Yo',
        balanceMoney: 3000,
        creditLimit: 5000,
        interestUseOfCreditFunds: 0.05,
        goldenClient:false
    }
]

class Client {
    constructor(objClient) {
        this.id = objClient.id
        this.FDI = objClient.FDI
        this.balanceMoney = objClient.balanceMoney
    }
    addMoneyToAccoyunt(value) {
        this.balanceMoney += value
    }
    withdrawingMoneyOfAccount(value) {
        if (this.balanceMoney - value > 0)
            this.balanceMoney -= value
    }
    toString() {
        return `Id: ${this.id}, name ${this.FDI}, balance:${this.balanceMoney} UAH`
    }

}

// На основі цього класу створити клас GoldenClient
// Властивості:
// ID
// ПІБ
// Кількість грошей на рахунку
// Ліміт кредитних коштів
// Відсоток за використання кредитних коштів
// Методи:
// Додавання грошей
// Зняття грошей
// Визначення пені за використання кредитних коштів
// ToString

class GoldenClient extends Client {
    constructor(objClient) {
        super(objClient)
        this.creditLimit = objClient.creditLimit
        this.interestUseOfCreditFunds = objClient.interestUseOfCreditFunds
    }
    definitionOfPennyOfCreditFunds() {
        return this.creditLimit * this.interestUseOfCreditFunds
    }
    toString() {
        return super.toString() +`,credit limit  ${this.creditLimit} UAH, definition of penny for use of credit funds ${this.interestUseOfCreditFunds}%`
    }
}

// Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
// Вивести усіх простих клієнтів;
// Вивести усіх клієнтів GoldenClient;
// Знати сумарну кількість грошей на рахунку;

class Bank{
    constructor(arrClients){
        this.clientsOfBank=arrClients
    }
    ordinaryCustomers(){
        return this.clientsOfBank.filter(el=>el.goldenClient===false)
    }
    goldenCustomers(){
        return this.clientsOfBank.filter(el=>el.goldenClient===true)
    }
    getTotalAmountMoneyInAccount(){
        return this.clientsOfBank.reduce((prevRes,el)=>prevRes+el.balanceMoney,0)
    }
}
