"use strict";
function log_description(description) {
    let dashes = ' ---------- ';
    console.log('');
    console.log(dashes + description + dashes);
}
let numbers1 = [1, 2, 3];
let user = [10, 'Artur'];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
log_description('Log Enum Size.Large');
console.log(Size.Large);
let mySize = Size.Medium;
function calculateTax(income) {
    return 0;
}
function calculateTaxTest(income) { }
let calculatedTax = calculateTax(10);
log_description('Return value from a function based on the condition');
console.log(calculatedTax);
let employeeObject = { id: 10, name: 'Artur' };
log_description('Log Employee object');
console.log(employeeObject);
//# sourceMappingURL=01_fundamentals.js.map