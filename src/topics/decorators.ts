// AGENDA:
// - What are decorators
// - Class decorators
// - Parameterized decorators
// - Decorator Composition
// - Method Decorators
// - Accessor Decorators
// - Property Decorators
// - Parameter Decorator


// ----------			What are decorators			----------


// Attributes that we are apply to the classes and their members and with them we can
// change how they behave. Use in Angular and Vue. Under the hood the decorator is 
// just a function use in JS runtime. JS runtime or JS engine which executes our code
// is going to call that function and pass our class to it.
// In that function we have a chance to modify that class adding a new properties etc.

// To use decorators we have to enable in tsconfig 'experimentaldecorators'


// ----------			Class decorators			----------


// If we want to apply our decorator to a class, we should pass to a function
// decorator only one argument.
// If the arguments type is a :Function, compiler will assume that we want to apply
// that decorator on a class.

function Component(constructor: Function){
  // In this function we have a chance to modify/enhance our class
  // we can add properties, modify them, delete etc.

  // Every object in JS has a prototype, from which it inherits various properties and methods
  // We can go to this prototype, add new methods, then all instances of ProfileComponent
  // or any class which will have @Component decorator will have these new methods
  console.log('Component decorator called')
  constructor.prototype.uniqueId = Date.now()
  constructor.prototype.insertInDOM = () => {
    console.log('Inserting in the DOM')
  }
}

@Component
class ProfileComponent {
}

// We could solve this problem using inheritance. But decorators are another tool in our toolbox.
// Even if we don't create any instance of our ProfileComponent, the decorator will be called at least
// once


// ----------			Parameterized decorators			----------


type ComponentOptions = {
  selector: string
}

// Decorator Factory
function Component1(value: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called')
    constructor.prototype.options = value
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting in the DOM')
    }
  }
}

@Component1({ selector: '#my-profile' })
class ProfileComponent1 {
}

// We can pass ex. an object as an argument decorator


// ----------			Decorator Composition  		----------


// We can apply multiple decorators to its class or its

function Pipe(constructor: Function) {
  console.log('Pipe Decorator')
  constructor.prototype.pipe = true
}

// Jeśli wywołamy to, to @Pipe decorator będzie wywołany najpierw i dopiero 
// później @Component1 decorator.
// They are applied in the reverse order
// Idea za tym wywodzi sięz matematyki. f(g(x)). Najpierw wywoływana g(x) i jej rezultat w f(x)

// Tak samo tutaj. Decorator @Pipe wywołany na klasie i rezultat później wywołany w dekoratorze @Component1

@Component1({ selector: '#my-profile' })
@Pipe
class ProfileComponent2 {
}


// ----------			Method Decorators  		----------


// To apply decorator to a method we need 3 parameters
// 1. Object that owns the target method. target: any (any here is a type that TS compiler expects from us)
// 2. Name of the target method
// 3. Descriptor object or the target method. Every property on an object have a descriptor object that describe 
// that property (this is from JavaScript). You can google it and find them on official TypeScript documentation.

// Name of these parameters doesn't matter. What matters is their numbers and type

//!!! - in tsconfig - noUnusedParameters - true. Jeśli jakieś parametry są nieużywane, to można to zakomentować

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    // We can do a lot of stuff here.
    // Ex. descriptor obj. has a property of value, that reference this to a target method.
    let original = descriptor.value as Function // dajemy referencjr do orginalnej funkcji
                                                // Musimy użyć type assertion, żeby później
                                                // mieć opcje funkcji (żeby kompiler nam podpowiadał
                                                // co możemy z funkcją zrobić)
    descriptor.value = function(...args: any){ // using the spread operator, we can pass multiple arguments
                                               // Używamy tutaj function expression, and not an arrow function.
                                               // Arrow functions don't define it's own this keyword!!!
      console.log('Before')
      original.call(this, 'Musimy przekazać dwa argumenty. this and second some string')
      original.call(this, ...args)
      console.log('After')
    }
}

class Person1 {
  @Log
  say(message: string){
    console.log('Person says ' + message)
  }
}

let person1 = new Person1()
person1.say('Hello') // Hello zostanie zastąpione tym co było w dekoratorze, ale
                     // możemy też przekazać oryginalną wiadomość. Tylko w dekoratorze
                     // musimy przekazać argument


// ----------			Accessor Decorators  		----------


// Define a decorator which will capitalize the getter method

function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor){
	// Create a reference to the original getter
	// descriptor.value works for regular methods
	const original = descriptor.get
	// Descriptor can't have any arguments
	descriptor.get = function(){
		const result = original?.call(this)
		return (typeof result === 'string') ? result.toUpperCase() : result;
	}
}

class Person2 {
  constructor(public firstName: string, public lastName: string){}

	@Capitalize
	get fullName(){
		return `${this.firstName} ${this.lastName}`
	}
}

let person2 = new Person2('Artur', 'Bartkowicz')
console.log(person2.fullName)


// ----------			Property Decorators  		----------


// Very similar to method decorators, but they don't have a property descriptor
// Instead we are going to define a property descriptor for the target property.
function MinLength(length: number){
	return (target: any, propertyName: string) => {
		let value: string
		const descriptor: PropertyDescriptor = {
			get(){return value},
			set(newValue: string) {
				if(newValue.length < 4)
					throw new Error(`${propertyName} should be at least ${length} characters long`)
				// if the new value is valid, we want to store it somewhere
				value = newValue
			}
		}

		// Now when we have a descriptor object we need to assighn him to the target property:
		Object.defineProperty(target, propertyName, descriptor)
	}
}

class User {
	@MinLength(4)
	password: string

	constructor(password: string){
		this.password = password
	}
}

let user1 = new User('1234')
console.log(user1.password)
// let user2 = new User('123')
// console.log(user2.password) -> this will throw an error



// ----------			Parameter Decorator  		----------


// We don't use them very often, but if we design a framework for other people to use, then we should know 
// how this parameter is going to work -> then checkout documentation


// -------------------------------------------------------------------------------------------------------


// Exercise!

// Create a decorator for adding a sauce to Pizza instances:

// @Sauce('pesto')
// class Pizza {}

// In the above example, all instances of the Pizza class should have a sauce property set to pesto.


function Sauce(sauce: string){
	return (constructor: Function) => {
		constructor.prototype.sauce = sauce
	} 
}

@Sauce('pesto')
class Pizza {}

let pizza = new Pizza()