//     NAME : BILAL ARSHAD 

//     ROLL # KH01210817984

//     ASSIGNMENT # 2 ( CLASSES AND INHERITANCE )

// QUESTION NO. 1 
/*
Create a class called PersonAccount.
It has firstName, lastName, incomes, expenses properties, and totalincome, totalExpense, addIncome, addExpense and accountBalance methods. 
Incomes is an array of objects. incomes object have income and discription properties.
Expenses is also an array of objects which has expense and description properties.
*/

class PersonAccount {
    constructor(fname, lname, age, contactno, income, expense){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.contactno = contactno;
        this.income = income;
        this.expense = expense;
        this.totalIncome(income);
        this.totalExpense(expense);
        this.accountInfo(fname, lname, income, expense);
        this.accountBalance(fname, lname, income, expense);
    }

    getName(){
        console.log("The name of the Account owner is " + this.fname + this.lname);
    }

    getAge(){
        console.log("The age of the Account owner is " + this.age);
    }

    getContactNo(){
        console.log("The contact no of the Account owner is " + this.contactno);
    }

    totalIncome(income){
        console.log("Person has " + income + " income...!");
    }

    totalExpense(expense){
        console.log("Person has " + expense + " expense...!");
    }

    accountInfo(fname, lname, income, expense){
        let savings = income - expense;
        console.log(fname + " " + lname + " " + "saves " + savings + " every month");
    }

    accountBalance(fname, lname, income, expense){
        console.log(fname+ " " +lname+ " " + "has " + income + " Incomes &" + expense + " Expense"); 
    }
}

let c = new PersonAccount("Bilal", "Arshad", 20, 033427, 80000, 55000);
c.getName();
c.getAge();
c.getContactNo();
c.totalIncome();
c.totalExpense();
c.accountInfo();
c.accountBalance();


//   QUESTION # 2

/*
Create an automobile class. The class will have name, model, color, type: automatic or manual properties and create different methods e-g: start() logs car is ready for drive, opendoor() logs door is open
Create child classes of Automobile Car, Truck, Bus these classes also have extra information like doors property, maxspeed.
*/


class automobile{
    constructor(name, model, color, engine){
        this.name = name;
        this.model = model;
        this.color = color;
        this.engine = engine;
    }

    start(){
        console.log(this.name + " car is now ready for drive");
    }

    opendoor(){
        console.log("The doors of " + this.name + " of " + this.model + " are now ready to open");
    }

    getspeed(){
        console.log("The speed of " + this.name + " is " + this.engine + " km/hrs");
    }


}


class Car extends automobile{
    constructor(name, model, color, engine, type){
        super(name, model, color, engine);
        this.type = type;
    }

    showtype(){
        console.log("The type of the car " + this.name + " is " + this.type);
    }
}

let a = new automobile("Honda", 2002, "black", "90");
a.start();
a.opendoor();
a.getspeed();

let b = new Car("Corolla", 2017, "black", 170, "Automatic");
b.showtype();
b.getspeed();
b.opendoor();
b.start();

