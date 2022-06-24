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
