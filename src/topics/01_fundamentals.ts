import { log_description } from './09_config'

// AGENDA:
// - Build-in types
// - Array
// - Touple
// - Enums
// - Function
// - Function without return value
// - Objects


// ----------     Build-in types     ----------


// JS:
// - number
// - string
// - boolean
// - null
// - undefined
// - object

// TypeScript extends that types:
// - any - describes any kind of values
// - unknown
// - never
// - enum
// - tupple

// let sales: number = 1234566   - you are annotating (opisywanie) or explaining the 
// type of the sales variable using this syntax.
// In TypeScript you can separate large numbers using underscore. More readable.

// let sales: number = 123_456_699    

// In TypeScript we don't have to annotate our variables. TypeScript compiler can 
// infer (wnioskować) or detect the type of variables based on the value.

// let sales: number = 1234566   ===  let sales = 1234566

// W obu powyższych przypadkach TypeScript już będzie wiedział, że sales jest typem number.

// if we declare a variable and don't assign value to it:
// let variable; TypeScript will detect the type of any

// let level;
// level = 55
// level ='Typ any'

// Above we have type any. That type is against the idea of TypeScript. TS is 
// for type safety. So if we use 'any' type we essentially lose that feature.
// For best practice, you should avoid 'any' type as much as possible. 

// Type checking
// "strict": true - option in tsconfig file that turns on basic type checking features.
// "noImplicitAny": false - that will cause no errors from the compiler, but use it 
// with caution, only when  you exactly know what you are doing, otherwise there is 
// no point od using TypeScript because you will lose a major TypeScript features.

// Strict Compiler Option
// Strict option enables a range of type-checking behaviour. The exact settings 
// affected by this are dependent on the version of the TypeScript compiler you’re 
// using. The newer versions may introduce additional stricter checking under this 
// flag so upgrading the TypeScript compiler may result in new errors. 

// You can see the exact options enabled by turning on the strict setting here: 

// https://www.typescriptlang.org/tsconfig#strict


// ----------     Array     ----------


// JS arrays are dynamic, so each element can have a different type.
// In TS we can explicitly apply a type annotation and ex say a numbers is a number array

let numbers1: number[] = [1, 2, 3]

// W powyższym przykładzie nie musimy wyraźnie określać z czego się składa array, 
// bo TS to wykryje.Ale np: 

// let numbers = [] - w tym przypadku moglibyśmy mieć mixa różnych typów.

// If you wanna use an empty array you have to explicitly apply a type annotation

// Code Completion or IntelliSense - if you type ex:
// numbers.forEach(n => n. ('Tutaj za kropką rozwinie się lista dostępnych metod dla array'))

// Because our code editor knows the type of n it offers code completion. So we can 
// see all the methods of number objects. We don't have that in plain JS.


// ----------     Touple      ----------


// TS has a new type called touple, which is a fixed-length array, where each 
// element has a particular type. We often use it working with a pair of values.
// Ex. For each user you want to represent two values. An id and a name.

let user: [number, string] = [10, 'Artur']

// So we have fixed array with exactly two elements. If we want to add, a third 
// element that will cause an error. And first one needs to be a number, second a string.

// user[0]. ('It has a code completion as well')

// Trouble method is user.push(1). Compiler will not complain when we want to do that. 
// This is one of the TS gaps, which may be solved later.

// !!! BEST PRACTISE: restrict a touples to only 2 values, because anything more 
// than that will become your code hard to understand. ex: !!!

// let user: [number, string, boolean, number] = [2, 'Mosh', true, 40] - messy. 
// It is hard to tell what these values represent.

// !!! Touples are useful when you have two values. Like key-value pairs !!!

// ----------     Enums     ----------


// Enum - represents a list of related constants

// Let's create a group of constants that represents a T-shirt sizes:

const small = 1;
const medium = 2;
const large =  3;

// do the same thing using enum:

// Pascal naming convention - first letter on every word should be uppercase.

enum Size {
    Small,
    Medium,
    Large
}

log_description('Log Enum Size.Large', Size.Large)

// By default, TS compiler will assign to the first member the value of 0, and for 
// the rest 1, 2, and so on...

// enum Size { Small = 1, Medium, Large} - we can explicitly assign the first value, 
// and another one will be 2, and 3...

// enum Size { Small = 's', Medium ='m', Large ='l'} - we can use string values, 
// but then we need to explicitly assign a value to each member of enum

// Declaratione of a new variable:

let mySize: Size = Size.Medium 

// !!! If we define an enum and use the const keyword before it, the compiler 
// will generate more optimized JS code. ex.

// const enum Size { Small, Medium, Large}


// ----------     Function      ----------


// TS compiler has inferred the type of the return value for us (if we will hover 
// over the function name) 
// !!! As a best practise we should try to always annotate our functions. 
// So all the parameters as well as te return type should be properly annotaded 
// especially when you build an API for other people to use !!!

function calculateTax (income: number): number {
	return income;
}


// ----------     Function without return value     ----------


function calculateTaxTest (income: number): void {}

// When you do that, then when you will not return any value, or the value will be 
// in a different type, you will get an error immediately.

// In tsconfig:
// "noUnusedParameters": true - then when the parameter from a function is not 
// being used, we will get a warning.
// "noImplicitReturns": true - useful in cases, ex. when in if statement you not 
// return a specific value under some conditions.
// "noUnusedLocals": true - warning if you have a local variable, which is not being used  


// function calculateTax(income: number, taxYear: number): number {
//  if (taxYear < 2022)
//   return income * 1.2;
//  return income * 1.3
// }

// calculateTax(10_000, 2022)   - tutaj możemy przekazać tylko 2 parametry, 
// w przeciwnym wypadku compiler podkreśli błąd

// function calculateTax(income: number, taxYear?: number): number {
//   if ((taxYear || 2022) < 2022)
//     return income * 1.2;
//   return income * 1.3
// }

// calculateTax(10_000) 

// !!! By adding a question mark '?', we are making a parameter optional !!!

// To make the default value:
// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022)
//     return income * 1.2;
//   return income * 1.3
// }

// calculateTax(10_000) 

let calculatedTax = calculateTax(10)
log_description('Return value from a function based on the condition', calculatedTax)


// ----------     Objects       ----------


// In JS objects are dynamic, so their shape can change through their lifetime or 
// programs. So even when we have employee object: 

// let employee = { id: 1 }

// and later we want to add the property name, it is still valid for JS, but not for TS.

// employee.name = 'Mosh'

// We can explicitly type annotation to the object.

// let employee: { 
//   id: number,
//   name: string,
//   fax?: number   -> ? that means, that this is optional
// }

// Sometimes you want to make certain properties read-only, so we don't 
// accidentally change them later on.

// let employee: { 
//   readonly id: number,
//   name: string,
//   fax?: number
// } = { id: 1, name: 'Mosh'}
  
// employee.id = 0   - when we add read-only, TS will prevent us from accidentally 
// change the id in this case

let employeeObject: {  id: number, name: string, fax?: number } = {id: 10, name: 'Artur'}

log_description('Log Employee object', employeeObject)