// Array
let numbers1: number[] = [1, 2, 3]

// Touple ()
let user: [number, string] = [10, 'Artur']

// Enums
enum Size {
    Small,
    Medium,
    Large
}

console.log(Size.Large)

// Function
function calculateTax (income: number): number {
	return 0;
}

//Function without return value
function calculateTaxTest (income: number): void {}

let calculatedTax = calculateTax(10)
console.log(calculatedTax)

// Objects

let employeeObject: {  id: number, name: string, fax?: number } = {id: 10, name: 'Artur'}

console.log(employeeObject)