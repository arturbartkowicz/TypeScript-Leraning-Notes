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


let numbers1: number[] = [1, 2, 3]


// ----------     Touple      ----------


let user: [number, string] = [10, 'Artur']


// ----------     Enums     ----------


enum Size {
    Small,
    Medium,
    Large
}

console.log(Size.Large)


// ----------     Function      ----------


function calculateTax (income: number): number {
	return 0;
}


// ----------     Function without return value     ----------


function calculateTaxTest (income: number): void {}

let calculatedTax = calculateTax(10)
console.log(calculatedTax)


// ----------     Objects       ----------


let employeeObject: {  id: number, name: string, fax?: number } = {id: 10, name: 'Artur'}

console.log(employeeObject)