// !!!!!!!!!			Creating Classes			!!!!!!!!!!!!!

class Account {
  readonly id: number
  owner: string
  private _balance: number
	nickname?: string

  // when you hover over constructor you will see that the constructor always returns a bank account
  constructor(id: number, owner: string, _balance: number) {
    // this -> reference the current class
    this.id = id
    this.owner = owner
    this._balance = _balance
  }

  // we define a function, which is called a method because is inside a class
  deposit(amount: number): void {
		if (amount <= 0)
			throw new Error('Invalid amount')
		this._balance += amount
  }

	private calculatetax() {
		// This method cannot be accessed outside of the class
	}

	getBalance(): number {
		return this._balance
	}
}


// !!!!!!!!!!!!!			Creating Objects			!!!!!!!!!!!!!!!!!!

let account = new Account(1, 'Artur', 0)
account.deposit(100)
// If you are using a type guard to narrow down a type, and you are dealing with a custom object,
// you should use an instanceof operator instead of type:
console.log(account instanceof Account)


// !!!!!!!!!!!!!			Read only and Optional Properties			!!!!!!!!!!!!!!

// class Account {
//   readonly id: number  -> example. When you later on will try to assign a different value of id, you will get an error
//   owner: string
//   _balance: number
//   nickname?: string    -> optional because of a questionmark


// !!!!!!!!!!!!!			Access Control Keywords			!!!!!!!!!!!!!!!!!!

// Access Modifiers
//  - public
// 	- private - property accessable within class. By the convention we prefixed privet properties with underscore. 
								// We only use private properties for writing robust code. Private keyword we can apply to the method as well
// 	- protected

// When we define a properties, all the properties are public by default

// To return balance to the user we canno't do that:
// console.log(account.balance) -> because balance is a private property now. But we can define a method which will return a value for us.

console.log(account.getBalance())



// !!!!!!!!!!!!!			Parameter Properties			!!!!!!!!!!!!!!!!!!

// Tworząc konstruktory klas powtarzamy wiele kodu. Klasę Account możemy sprawniej napisać, bez powtarzania kilku linijek.

// class Account {
//   readonly id: number
//   owner: string
//   private _balance: number
// 	 nickname?: string

//   constructor(id: number, owner: string, _balance: number) {
//     this.id = id
//     this.owner = owner
//     this._balance = _balance
//   }


	// To jest to samo:

	// class Account {
	// 	nickname?: string

	// 	constructor(
	// 		public readonly id: number, 
	// 		public owner: string, 
	// 		private _balance: number) {
	// 	}
	// }


	// !!!!!!!!!!!!!			Getters and Setters			!!!!!!!!!!!!!!!!!!

	// This is the prev getBalance() method from the class. Thanks to 'get' keyword
	//  we have getter method. Getter is a method inside of a class that we use to get a value of the property

	// get balance(): number {
	// 	return this._balance
	// }

	// With this syntax we can access that property like that:
	// console.log(account.balace)

	// we can access that property, but we can't set it. For set we need a setter method.

	// set balance(value: number) {
	// 	if (value < 0)
	// 		throw new Error('Invalid value')
	// 	this._balance = value
	// }


	// !!!!!!!!!!!!!			Index Signatures			!!!!!!!!!!!!!!!!!!

	// In situations that we need to add a properties to an objject dynamically (which is against TS),
	// but in this cases we use Index Signatures.
	// Index Signatures for creating properties dynamically like JS, but we also get type checking.
	// In the bottom example we can only assigne a string to the seatNumber

	class SeatAssignement {
		// A1, A2 ...
		// Mosh, John ...
		//Index signature property
		[seatNumber: string]: string
	}

	let seats = new SeatAssignement()
	seats.A1 = 'Mosh'
	// seats['A1'] = 'Mosh'  -> same think than above (different syntax)
	seats.A2 = 'John'
	console.log(seats) // => SeatAssignement { A1: 'Mosh', A2: 'John' }



	// !!!!!!!!!!!!!			Static Members			!!!!!!!!!!!!!!!!!!
	// Static property belongs to a class not to an object, so we are gonna have a one instance of that property in a memory

class Ride {
	// we want to keep track of number of active rides
	activeRides: number = 0 // we can initialize it here, so we don't need to write constructor

	start() { this.activeRides++ }
	stop() { this.activeRides-- }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

console.log(ride1.activeRides) // => 1
console.log(ride2.activeRides) // => 1

// Here we are dealing with 2 separate objects, ride1 and ride2, and each object is in separate space in a memory.
// So each object is independently tracking ActiveRides. We need some kind of a global state.

class RideOne {
	private static _activeRides: number = 0 // now this property belongs to the Ride class and not to the Ride object.

	static get activeRides(): number { // - we need to use static to move it to Ride class
		return RideOne._activeRides
	}

	start() { RideOne._activeRides++ }
	stop() { RideOne._activeRides-- }
}

let ride11 = new RideOne()
ride11.start()

let ride22 = new RideOne()
ride22.start()

console.log(RideOne.activeRides) // => 2


// !!!!!!!!!!!!!			Inheritence			!!!!!!!!!!!!!!!!!!

// mechanizm który pozwala na ponowne uuzycie kodu.

// super -> keword to reference a base class

class Person {
	constructor(
		public firstName: string,
		public lastName: string
	){}

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

	walk () {
		console.log('I can walk!')
	}
}

class Student extends Person {
	constructor(public studentId: number, firstName: string, lastName: string){
		super(firstName, lastName)
	}

	taketest() {
		console.log("Taking a test")
	}
}

let student = new Student(1, 'John', 'Doe')

console.log(student.fullName)
console.log(student.walk)
console.log(student.taketest())

// Super classes we should implement in a seperate files


// !!!!!!!!!!!!!			Method Overriding			!!!!!!!!!!!!!!!!!!

class Teacher extends Person{
	// override -> tell the compiler that we are changing implementation of this method
	override get fullName() {
		return 'Profesor' + ' ' + super.fullName
	}
}

let teacher = new Teacher('Muhamad', 'Abduhl')
console.log(teacher.fullName)



// !!!!!!!!!!!!!			Polymorphizm			!!!!!!!!!!!!!!!!!!

// When object can take many different forms

// Lets call the function printNames which is declered under, and give it an array of Person object.
// Every student is a Person, and every teacher is a Person, so in this array we can add a Student or Teacher object

class Principal extends Person {
	override get fullName() {
		return 'Principal' + ' ' + super.fullName
	}
}

printNames([
	new Student(1, 'John', 'Smith'),
	new Teacher('Artur', 'Bartkowicz'),
	new Principal('Rafał', 'Kukla')
])

// => John Smith
// => Profesor Artur Bartkowicz
// We get different output depending on the different person.

// In each iteration of the for loop this Person object is taking a different form (A form of a student or teacher)
// Person object is taking many different forms and is acting polimorficly

// Why this is powerfull? Because we can create a new class ex. Principal, and creating state without making a single 
// change to this bottom function.

// Stworzyłem wyżej dodatkową klasę Principal, wrzucam do array printnames i mam dodatkowy output z funkcji

// => John Smith
// => Profesor Artur Bartkowicz
// => Principal Rafał Kukla

// We have enhanced our program without a single change to our function!!!!
// We have implemented some new functionality just by writing new code.
// This brings us to Open Closed Principle.

// ! Clases should be open for extension and closed for modification !

// with override key word we can achieve this polimorphic behaviour

function printNames(people: Person[]) {
	for(let person of people) {
		console.log(person.fullName)
	}
}


// !!!!!!!!!!!!!			Private vs Protected members			!!!!!!!!!!!!!!!!!!

// protected members are inherited, private members are not
// protected use with caution, unless you know what you are doing 


// !!!!!!!!!!!!!			Abstract Classes and Methods			!!!!!!!!!!!!!!!!!!
