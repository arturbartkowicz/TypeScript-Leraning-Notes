// AGENDA:
// - const assertions
// - typof


// ----------     const assertions     ----------

// Its syntax is a type assertion with const in place of the type name (e.g. 123 as const). 
// When we construct new literal expressions with const assertions, we can signal to the language that

//  - no literal types in that expression should be widened (e.g. no going from "hello" to string)
//  - object literals get readonly properties
//  - array literals become readonly tuples

// deklarując np array złożony ze stringów i dodając as const, nie możemy później nadpisać tego
// array-a

// Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;

// y = [1] -> to da nam już błąd


// ----------     typeof example     ----------


// If you add as const after your array, TS will now know that your array only contains for its keys 'black', 'brown', ... and that's all! 
// So, if you try COLORS.indexOf(colorsCollection[number]) -> this will fail to compile and indicate you that your input is not an element of the constant array!
// So how to allow them again: now, you can create a type derived from the elements of COLORS. The syntax is a bit special, this is the following:
// type COLOR = typeof COLORS[number]

export let COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'] as const

type COLOR = typeof COLORS[number]
// type COLOR daje nam możliwość wprowadzenia stringa do funkcji, który będzie tylko 'black' | 'brown'...  

export const colorCode = (color: COLOR) => {
  console.log(COLORS.indexOf(color))
}