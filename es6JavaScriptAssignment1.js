class Customer{

    id;
    name;
    account;

    toString(){
        return "Id is " + this.id + " Name is " + this.name + " account details: " + this.account;
    }

    constructor(id, name, account){
        this.id = id;
        this.name = name;
        this.account = account;
    }

}

class Account{

    balance;

    toString(){
        return "Balance is " + this.balance;
    }

    constructor(balance){
        this.balance = balance;
    }

}

class PrimeAccount extends Account{

    supercoins;

    toString(){
        return "Balance is " + super.toString() + " Supercoins earned is " + this.supercoins;
    }

    constructor(balance, supercoins){
        super(balance);
        this.supercoins = supercoins;
    }

}

let account1 = new Account(25.0);
let account2 = new Account(25.5);
let primeAccount1 = new PrimeAccount(23.0, 50);
let primeAccount2 = new PrimeAccount(23.5, 80);
let customer1 = new Customer(1, "raj", account1);
let customer2 = new Customer(2, "raj2", account2);
let customer3 = new Customer(3, "raj3", primeAccount1);
let customer4 = new Customer(4, "raj4", primeAccount2);

let customers = [customer1, customer2, customer3, customer4];

for(let i=0; i<customers.length; i++){
    console.log(customers[i].toString());
}