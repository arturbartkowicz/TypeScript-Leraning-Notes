"use strict";
let numbers1 = [1, 2, 3];
let user = [10, 'Artur'];
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
console.log(Size.Large);
function calculateTax(income) {
    return 0;
}
function calculateTaxTest(income) { }
let calculatedTax = calculateTax(10);
console.log(calculatedTax);
let employeeObject = { id: 10, name: 'Artur' };
console.log(employeeObject);
//# sourceMappingURL=01_fundamentals.js.map