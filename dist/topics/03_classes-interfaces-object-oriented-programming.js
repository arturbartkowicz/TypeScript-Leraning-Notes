"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _09_config_1 = require("./09_config");
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    calculatetax() {
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 'Artur', 0);
(0, _09_config_1.log_description)('Log an instance of Account', account);
account.deposit(100);
(0, _09_config_1.log_description)('Check if account is instanceof Account class', account instanceof Account);
(0, _09_config_1.log_description)('Return property _balance which is private via getBalance public method', account.getBalance());
class SeatAssignement {
}
let seats = new SeatAssignement();
seats.A1 = 'Mosh';
seats.A2 = 'John';
console.log(seats);
class Ride {
    constructor() {
        this.activeRides = 0;
    }
    start() { this.activeRides++; }
    stop() { this.activeRides--; }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(ride1.activeRides);
console.log(ride2.activeRides);
class RideOne {
    static get activeRides() {
        return RideOne._activeRides;
    }
    start() { RideOne._activeRides++; }
    stop() { RideOne._activeRides--; }
}
RideOne._activeRides = 0;
let ride11 = new RideOne();
ride11.start();
let ride22 = new RideOne();
ride22.start();
console.log(RideOne.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('I can walk!');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    taketest() {
        console.log("Taking a test");
    }
}
let student = new Student(1, 'John', 'Doe');
console.log(student.fullName);
console.log(student.walk);
console.log(student.taketest());
class Teacher extends Person {
    get fullName() {
        return 'Profesor' + ' ' + super.fullName;
    }
}
let teacher = new Teacher('Muhamad', 'Abduhl');
console.log(teacher.fullName);
class Principal extends Person {
    get fullName() {
        return 'Principal' + ' ' + super.fullName;
    }
}
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Artur', 'Bartkowicz'),
    new Principal('Rafał', 'Kukla')
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering a circle');
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class Logger {
    constructor(logFile) {
        this.logFile = logFile;
    }
    log(message) { }
}
class PersonExercise {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class EmployeeExercise extends PersonExercise {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let employee = {
    name: 'John Smith',
    salary: 50000,
    address: {
        street: 'Flinders st',
        city: 'Melbourne',
        zipCode: 3144,
    },
};
//# sourceMappingURL=03_classes-interfaces-object-oriented-programming.js.map