// !!!!!!!!!!!!!           Generic         !!!!!!!!!!

// Generic - common and reusable solutions

// Problem z jakim się mierzymy? -> chcemy utworzyć klasą która będzie tworzyła
// key - value pary . Ale jak w konstruktorze określimy, że pierwszy parametr
// ma być typu number a drugi typu string, to ktoś kto by chciał utworzyć key-value
// parę ale key żeby był stringiem, to już z tej klasy skorzystać nie może. Musiałby
// utworzyć nową klasę.

// !!!!!!!!!!!!!           Generic Classes         !!!!!!!!!!

// Generic classes in TS are the same that template classes in C++
// K, V - it can be different word

class KeyValuePair<K, V>{
	constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair<string, string>('String', 'KeyIsAString, ValueAString')
let pair2 = new KeyValuePair<number, string>(10, 'KeyIsANumber, ValueAString')

// For most of the time we don't have to supply generic type arguments, compiler will recognize it:
// let pair2 = new KeyValuePair(10, 'KeyIsANumber, ValueAString')


// !!!!!!!!!!!!!           Generic Functions         !!!!!!!!!!


// key-word 'function' we only use in a stand alone functions. When that function is in the class
// so it becomes a method, then we don't need that key-word

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



// !!!!!!!!!!!!!           Generic Interfaces         !!!!!!!!!!

// Mamy 2 endpointy:

// http://mywebsite.com/users
// http://mywebsite.com/produscts

// Storzymy interfejs który będzie reprezentował zapytanie do jednego z tych endpointów

interface Result<T>{
	data: T | null // because if we have an error, then we don't have data
	error: string | null // because we don't necessary need to get an error
} 

// Now wen we have an interface, lets try to use it
// Because the function should return a generic result, we should add a generic type after fetch key-word
function fetch<T>(url: string): Result<T> {
	return { data: null, error: null }
}

interface User {
	userName: string
}

interface Product {
	name: string
}

let result = fetch<User>('url')


// !!!!!!!!!!!!!           Generic Constraints         !!!!!!!!!!


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


// !!!!!!!!!!!!!           Extending Generic Classes         !!!!!!!!!!


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
	// to create a new instance of this class and gice it an empty array. So we will initialize it here:

	private _objects: T[] = []; // we want to make this private, that no-one can overrite this object from outside

	add(obj: T): void {
		this._objects.push(obj)
	}
}

// We have a generic class, now lets try to extend this class.

// Scenario 1:
