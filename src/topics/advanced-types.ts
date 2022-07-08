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

type AddressableContact = Contact & Address


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
