// AGENDA:
// - Generic
// - Generic Classes
// - Generic Functions
// - Generic Interfaces
// - Generic Constraints
// - Extending Generic Classes
// - The keyof parameter/operator
// - Type mapping


// ----------     Generic     ----------


// Generic - common and reusable solutions

// Problem z jakim się mierzymy? -> chcemy utworzyć klasę która będzie tworzyła
// key-value pary. Ale jak w konstruktorze określimy, że pierwszy parametr
// ma być typu number a drugi typu string, to ktoś kto by chciał utworzyć key-value
// parę ale key żeby był stringiem, to już z tej klasy skorzystać nie może. Musiałby
// utworzyć nową klasę.


// ----------     Generic Classes     ----------


// Generic classes in TS are the same that template classes in C++
// K, V - it can be different word

class KeyValuePair<K, V>{
	constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair<string, string>('String', 'KeyIsAString, ValueAString')
let pair2 = new KeyValuePair<number, string>(10, 'KeyIsANumber, ValueAString')

// For most of the time we don't have to supply generic type arguments, compiler will recognize it:
let pair3 = new KeyValuePair(10, 'KeyIsANumber, ValueAString')


// ----------     Generic Functions     ----------


// key-word 'function' we only use in a stand alone functions. When that function is in the class
// so it becomes a method, then we don't need that key-word

function wrapInArrayFunction<T>(value: T){
	return [value]
}

let wrapCall = wrapInArrayFunction('1') // Jeśli najedziemy kursorem na nazwę zmiennej będziemy widzieć jakiego
										// Typu jest array

class ArrayUtils {
	wrapInArray<T>(value: T) {
		return [value]
	}
}

let utils = new ArrayUtils()
let numbers = utils.wrapInArray(1)

// We can add static key-word, and the method will belong to the class:

// class ArrayUtils {
// 	static	wrapInArray<T>(value: T) {
// 		return [value]
// 	}
// }

// let numbers = ArrayUtils.wrapInArray(1)


// ----------     Generic Interfaces      ----------


// Mamy 2 endpointy:

// http://mywebsite.com/users
// http://mywebsite.com/produscts

// Stworzymy interfejs który będzie reprezentował zapytanie do jednego z tych endpointów

interface Result<T>{
	data: T | null // because if we have an error, then we don't have data
	error: string | null // because we don't necessary need to get an error
} 

// Now wen we have an interface, lets try to use it
// Because the function should return a generic result (Result<T>), we should add a 
// generic type after fetch key-word (fetch<T>)

function fetch<T>(url: string): Result<T> {
	return { data: null, error: null } // For simplicitly. We don't call actual endpoint
}

interface User {
	userName: string
}

interface Product {
	name: string
}

let result = fetch<User>('url')
//result.data.			-> After a coma we will see all properties of user object (Uncomment and test)


// ----------     Generic Constraints     ----------


// Constraint or limit of number passing objects to a function
// After 'extend' we can specify what type you can assign to T

function echo<T extends number | string>(value: T): T {
	return value
}

echo('Albo number albo string') // Możemy przekazać number lub string bo tak określiliśmy po extend

function echo1<T extends { name: string }>(value: T): T {
	return value
}

echo1({name: 'Artur'}) // Możemy określić shape przekazywanego obiektu. Teraz możemy przekazać obiekt
					   // Który odpowiada tylko temu shape-owi
					   // We can extend by another type or even a class which inherit from prev class.
					   // Więcej info w kursie


// ----------     Extending Generic Classes     ----------


// We are building an E-commerce application, so we have objects like: product, categories, shopping carts...

interface ProductCommerce {
	name: string;
	price: number;
}

// Now we need a mechanizm to store this object, and we want to store different kind of objects
// so we want to make this class generic

class Store<T> {
	// we want to have an array to store these objects
	// in this case I don't want to create a constructor because in this case it doesn't make sense 
	// to create a new instance of this class and give it an empty array. So we will initialize it here:

	protected _objects: T[] = []; // we want to make this private, that no-one can overrite this object from outside

	add(obj: T): void {
		this._objects.push(obj)
	}
}

// We have a generic class, now lets try to extend this class.

// Scenario 1:
// Pass on the generic type parameter. Generic type parameter which we have in the base class
// it is also going to be used in the child class

//<T> za CompressibleStore będzie użyte w Store<T>
class CompressibleStore<T> extends Store<T> {
	compress() {}
}

let store = new CompressibleStore<ProductCommerce>()
// store.add() || store.compress()      - now we have available 2 functions

// Scenario 2:
// We are restricting the generic type parameter.
// Implement a method for finding objects:
//<T extends { name: string }>
// Here we can use this generic class to find any object which has a name property.
// It doesn't have to be a product. It can be anything as long it has a name property.

class SearchableStore<T extends { name: string }> extends Store<T> {
	find(name: string): T | undefined {
		return  this._objects.find(obj => obj.name === name)
	}
} 

// private members are not inherited in child classes!!!

// Scenario 3:
// Fixing or terminating the generic type parameter.
// Lets say we have certain operation which we can only perform on products.
// We don't want to ProductStore to be generic. We will be dealing with very specific store.


class ProductStore extends Store<ProductCommerce> {
	// This operation is very specific to product. We don't wanna use it in the User store.
	filterByCategory(category: string): ProductCommerce[] {
		return []
	}
}

// When we extending a generic class we have 3 options:
// - Fix the generic type parameter
// - Restrict the generic type parameter
// - Pass the generic type parameter to the child class.


// ----------     The keyof parameter/operator     ----------


interface ProductTest {
	name: string;
	price: number;
}

class StoreTest<T> {
	protected _objects: T[] = [];

	add(obj: T): void {
		this._objects.push(obj)
	}

	// implement find method
	// property we pass here can only be one of the keys or properties of type T
	// If T is ProductTest
	// keyof T => 'name' | 'price' (keyof T can only return name or price)

	find(property: keyof T, value: unknown): T | undefined {
		// because we are using a square bracket syntax,
		// the compiler thinks that we are using index signature property
		// we need to tell compiler that we are not using signatures, and we work with 
		// actual object properties.
		return this._objects.find(obj => obj[property] === value)
	}
}

let storeTest = new StoreTest<ProductTest>()
storeTest.add({name: 'a', price: 1})
storeTest.find('name', 'a')
storeTest.find('price', 1)
                      // storeTest.find('nonExistingProperty', 1) 
                      // To wyżuci błąd. Żeby się przed tym zabezpieczyć
										 	// używamy keyof operator

// Another examples
// keof operator - referenes the type of given field

type ContactName = string;
type ContactStatus1 = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus1;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}
// This line defines a typ alias consisting all of the properties on the Contact type
// Another word, a variable of this type may only contain values matching the names of 
// the properties on the Contact
type ContactFields = keyof Contact

const fieldContact: ContactFields = "name"

// This functioon accepts 2 parameters. 
// - an object
// - an name of the property on that object
// The function then returns the value of that object property dynamically using JS index syntax

// keyof Contact limits the values of the secon elements, so you can't pass wrong value
function getValue<T>(source: T, propertyName: keyof T){
  return source[propertyName]
}

const value = getValue({min: 1, max: 200}, "max") // in quotes TS will restrict values which we can pass

// keyof operator is great to contrain your generic types


// ----------     Type mapping      ----------


// Sometime we need to base a type on another type. This is called type mapping
interface Computer {
	name: string,
	price: number
}

// we will create a new type based on existing type. In the new type we want to add all this
// properties dinamically and make them read only.
// we need to create a type alias, not another interface tah is why we use type not interface

type ReadOnlyComputer = {
	// Index Signatures
	// keyof operator
	// Using keyof operator you're getting all the keys or properties of the Computer
	// using the in operator you're iterating over these keys, and Property in each iteration 
	// is going to hold one of this property names.
	// First iteration: name, Second iteration: price (kind of like a for loop
	// What about type of these properties? We want to use the same type which we have used in the 
	// Computer interface. So:
	// if Property is name Computer[Property] return string
	// if Property is price Computer[Property] return number
	// Property we kan rename to the K or other letter:
	// [K in keyof Computer]: Computer[K], and we can all of them make readonly

	readonly [Property in keyof Computer]: Computer[Property]
}

let computer: ReadOnlyComputer = {
	name: 'Mac',
	price: 100
}

// computer.name = 'compiler error, because read only'

// we can go further. What if we need another read-only typw of object?
// Like read-only customer. We can use a generic type

type ReadOnly<T> = {
	readonly [P in keyof T]: T[P]
}

// Zamiast Computer możemy przekazać inne interfejsy i mamy read only wszędzie!
let computer1: ReadOnly<Computer> = {
	name: 'Mac',
	price: 100
}


// Create optional 
type Optional<T> = {
	[P in keyof T]?: T[P] 
}

// This is so populart, that is available on typescriptlang.org website under UTILITY TYPES


// ----------------------------------------------------------------------------------------


// EXERCISES

// Exercise 1
// Convert the function below to a generic function:

function echo2(arg: void) { return arg; }

// Solution 1

function echo5<T>(arg: T): T{return arg}

// Exercise 2
// When compiling the following piece of code, we get an error saying 
// ‘Property name does not exist on type T’. 
// How can we solve this problem?

// function printName<T>(obj: T) {console.log(obj.name);}

// Solution 2
// We need to apply a constraint on the generic type parameter so the TypeScript 
// compiler knows that objects of type T have a name property:

function printName<T extends {name: string}>(obj: T) {console.log(obj.name);}

// Exercise 3
// An Entity should have a unique identifier. The type of identifier, however, 
// is dependent on the use case. In some cases, the ID might be a number, in 
// other cases, it might be a string, GUID, etc. Represent the entity using a generic class.  

class Entity<T> {
	constructor(public id: T) {}
}

// Solution 3

// Exercise 4
// Given the following interface, what does keyof User return?

interface User { 
	userId: number; 
	username:string;
}

// Solution 4

// It returns a union of the properties of User: ‘userId’ | ‘username’