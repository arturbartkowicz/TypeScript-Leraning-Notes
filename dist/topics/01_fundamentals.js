"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _09_config_1 = require("./09_config");
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
(0, _09_config_1.log_description)('Log Enum Size.Large', Size.Large);
let mySize = Size.Medium;
function calculateTax(income) {
    return income;
}
function calculateTaxTest(income) { }
let calculatedTax = calculateTax(10);
(0, _09_config_1.log_description)('Return value from a function based on the condition', calculatedTax);
let employeeObject = { id: 10, name: 'Artur' };
(0, _09_config_1.log_description)('Log Employee object', employeeObject);
//# sourceMappingURL=01_fundamentals.js.map