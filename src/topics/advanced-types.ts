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
