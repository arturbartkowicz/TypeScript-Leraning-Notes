// AGENDA:
// - Type Aliases
// - Union Types
// - Intersection Types
// - Literal Types
// - Nullable Types
// - Optional Chaining
// - The Nullish Coaelscing Operator
// - Type Assertions
// - The unknown Type
// - The never Type
// - typeof keyword
// - kyeof keyword
// - Indexed access type
// - keof typeof
// - record type


// ----------     Type Aliases      ----------


type EmployeeAlias = {
	readonly id: number,
  name: string,
  retire: (date: Date) => void
}
  
let employeeAlias: EmployeeAlias = { 
 id: 1, 
 name: 'Mosh',
 retire: (date: Date) => {
  console.log(date)
 } 
}

// Type aliases might be a good alternative to the enums

enum ContactStatus {
  Active = 'active',
  Inactive = 'inactive',
  New = 'new'
}

// With type aliases
type ContactStatusAlias = 'active' | 'inactive' | 'new'
// You can use that alias in another interface


// ----------     Union Types      ----------


// With union types, we can give a variable or a function parameter more than one type.
// Narrowing technique. We are going to narrow the weight type, to a more specific type.

function kgToLbs(weight: number | string): number {
 // Narrowing
 if (typeof weight === 'number')
  return weight * 2.2
 else
  return parseInt(weight) * 2.2
}
  
  kgToLbs(10)
  kgToLbs('10kg')

  // Another example:
  type ContactBirthDay = Date | number | string

  interface Contact {
    id: number
    birthDay?: ContactBirthDay
  }


// ----------     Intersection      ----------


// Another technique for combining types.

type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

// Thanks to intersection we have defined new type, UIWidged which is Draggable and Resizable
// Now with this type in place we can declare a variable which is a textBox.
// To initialize this object, we needt to implement all members of draggable and resizable.

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {}
}


// Another example

interface Address {
  line1: string
  line2: string
}

interface Example {
  line3: number
  line4: Address
}

type AddressableContact = Contact & Address


// ----------     typeof operator      ----------


// This is JS keyword. We can use it in TS on various ways, ex. for Narrowing

// but also in many other ways:

const myType = { min: 1, max: 200 } // TS interfer the type ot this variable
function save(source: typeof myType){} // With this code I can assure, that if someone
                                       // want to call this function, the arameter which you
                                       // can pass, must be same structure, as defined myType variable.


                              
// ----------     keyof keyword      ----------


interface Test5 {
  id: number
  name: string
}

type TestBasedOnTest5 = keyof Test5 // -> type alias consisting all of the properties
// on the Contact type. In other words. The value of that type, may only contains 
// values matching the names of the properties on the Test5. id and name


// ----------     Indexed access type      ----------


type Awesome = Contact['id'] // type Awesome matches now number

// I can dig in more complex structures

type Awesome1 = Example['line4']['line2'] // line4 odnosi się do interfejsu Address
                                          // i dlatego Awesome1 jest stringiem


interface ContactEvent {
  contactId: Contact['id'] // describe a good intentions
}


// ----------     keyof typeof      ----------


enum ColorsEnum {
  white = '#ffffff',
  black = '#000000',
}

type Colors = keyof typeof ColorsEnum;

// last line is equivalent to:

// type Colors = 'white' | 'black'

//https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript

//nice explanation of the issue
// W skrócie to keyof typeof pozwala wziąć obiekt i uwzglądnić a argumentach tylko jego klucze, nic więcej.




// ----------     record type      ----------


//  very flexible type definition that allows you to define some structure and typing without to detail
// every possible property. Syntax is simple:
// It is a generic syntax with two generic parameters
// - first: possible property values
// - second: possible property types

let x: Record<string, string> = {name: 'Robert'}
// x.number = '1234'  -> To byłoby ok
// x.number = 1234  -> To już jest wyłapane przez TS compiler

// Chyba że uzyję union i drugi parametr zaakceptuje też number

// let x: Record<string, string | number> = {name: 'Robert'}






//--------------------------------------------------------------------------------------


// Exercises

// 1 Given the data below, define a type alias for representing users

// let users = [
// 	{
// 		name: 'John Smith',
// 		age: 30,
// 		occupation: 'Software Engineer'
// 	},
// 	{
// 		name: 'Kate Muller',
// 		age: 28
// 	}
// ]

// 1 Solution

// type User = {
// 	name: string,
// 	age: number,
// 	occupation?: string
// }



// 2 Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

// 2 Soultion

// type Bird = {
// 	fly: () => void
// }

// type Fish = {
// 	swim: () => void
// }

// type Pet = Bird | Fish



// 3 Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

// 3 Solution

// type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'

// let day: DayOfWeek = 'Monday'

// console.log(day)



// 4 Simplify the following code snippets

// let user = getUser()
// console.log(user && user.address ? user.address.street : undefined);

// let x = foo !== null && foo !== undefined ? foo : bar()

// 4 Solution

// console.log( user?.adress?.street);
// let x = foo ?? bar()



// 5 What is the problem in this piece of code?

// let value: unknown = 'a';
// console.log(value.toUpperCase())

// 5 Solution

// value is unknow, so we have to do a narrowing for specify the type.
// let value: unknown = 'a';
// if (typeofvalue === 'string')
// console.log(value.toUpperCase());
