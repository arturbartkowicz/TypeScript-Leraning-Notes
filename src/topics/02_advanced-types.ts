import { log_description } from './09_config'

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


// The biggest advantage: You can reuse it in multiple places.

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

let contactStatus: ContactStatusAlias = 'new'

log_description('Create a variable as a type alias. Type aliases is a good alternative for enums', contactStatus)


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

let contact: Contact = {
  id: 12,
  birthDay: '24.10.1991'
}

log_description('Log the contact description', contact)


// ----------     Intersection Types     ----------


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
// To initialize this object, we need to implement all members of draggable and resizable.

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

let exampleAdress: Example = {
  line3: 10,
  line4: {
    line1: 'Test line 1',
    line2: 'Test line 2'
  } 
}

log_description('Combine Interfaces and Types', exampleAdress)


// ----------     Literal Types      ----------


// To limit a values which we can assign to a variable we use literal type

// We will annotate a variable with literal meaning (exact or specific) value.

// let quantity: 50 | 100 = 100

// Instead of hard-coding these literal values here we can create a custom type, using a type alias

type Quantity = 50 | 100 
let quantity: Quantity = 100

// Literals don't have to be numbers, they also can be strings ex:

type Metrics = 'cm' | 'inch'



// ----------     Nullable Types      ----------


// By default TS is very strict using null and undefined values, 
// because they are a commont source of bugs in applications to deal

function greet (name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase)
  else
    console.log('Hola amigo, you have passed an Undefined value!')
}

log_description('Pass undefined argument to a function')
greet(undefined)

// to deal with null or undefined values which we wanna pass to our function, 
// we will have to change the configuration file (tsconfig.json) or use union 
// types where we pass our arguments


// ----------     Optional chaining      ----------


// Using optional chaining (?.) we can simplify our code and remove the need for null checks.

type Customer = {
  birthday: Date
}
  
function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() }
}
  
let customer = getCustomer(0)

log_description('Log customer - refactore using optional chaining', customer)
  
// if (customer !== null && customer !== undefined)
//   console.log(customer.birthday)

// There is a simple way to check it with the Optional property access operator.  
// Because customer might be null or undefined, right after customer we write a '?'
  
log_description('Display a customer birthday, using optional chaining operator', customer?.birthday)
  
// This piece of code is executed only if the customer is not null or if it is not undefined
  
// If we want to specify the birthday as an optional parameter
  
// type Customer = {
//   birthday?: Date
// }
  
// console.log(customer?.birthday?.getFullYear)
// The above piece of code will be executed only if we have a customer and if the 
// customer has a birthday day.
  
// Optional element access operator - this is useful when we are dealing with arrays.
  
// customer?.[0] - element w array z indexem 0 może nie istnieć (być null or undefined). 
// Jeśli chcemy sie przed tym zabezpieczyć, to właśnie używamy takiej składni.
  
// Optional call operator
  
// let log: any = null
  
// log?.('a') - this piece of code will get executed, only if log is referencing an actual function.



// ----------     The Nullish Coaelscing Operator      ----------


// Using the Nullish Coalescing Operator we can fallback to a default value when 
// dealing with null/undefined objects.

let speed: number | null = null
let ride = {
  // Falsy (undefined, null, '', false, 0)
  // Nullish coalescing operator
  speed: speed ?? 30 // - if speed is not null or undefined, use that value (speed)
  // otherwise use 30 as a default value
}
  

// ----------     Type Assertions      ----------


// Sometimes we know more about the type of a variable than the TypeScript compiler. 
// In those situations, we can use the as keyword to specify a different type than 
// the one inferred by the compiler. This is called type assertion. 

let phone = document.getElementById('phone') as HTMLInputElement // - we are specify target element

phone.value

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