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

	
