import { TestModule } from "./topics/modules";
// import * as Shapes from ".topics/modules" -> wildcard import. Importing all the exports in once

//!!!! ctrl + .             -> Automatycznie zaimportuje moduł
let test = new TestModule('Nazwa')



// let COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'] as const
// type COLOR = typeof COLORS[number];
// export function decodedResistorValue([color1, color2, color3]: [COLOR, COLOR, ...COLOR[]]) {
//   const decodedValue = (COLORS.indexOf(color1)*10 + COLORS.indexOf(color2)) * 1 +('0'.repeat(COLORS.indexOf(color3)))
  
//   if (parseInt(decodedValue) < 1000)
//     return decodedValue + ' ohms'
//   return(parseInt(decodedValue) / 1000).toString() + ' kiloohms'
// }

// console.log(typeof COLORS[1])


// const COLORS = {
//     black: 0,
//     brown: 1,
//     ...
//   };
  
//   export function decodedResistorValue([
//     color1,
//     color2,
//     color3,
//   ]: (keyof typeof COLORS)[]) { // TS trick
//     const decodedValue =
//       (COLORS[color1] * 10 + COLORS[color2]) * 1 + "0".repeat(COLORS[color3]);
  
//     ...
//   }

