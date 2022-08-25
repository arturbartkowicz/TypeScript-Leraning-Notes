"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _09_config_1 = require("./09_config");
let employeeAlias = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
var ContactStatus;
(function (ContactStatus) {
    ContactStatus["Active"] = "active";
    ContactStatus["Inactive"] = "inactive";
    ContactStatus["New"] = "new";
})(ContactStatus || (ContactStatus = {}));
let contactStatus = 'new';
(0, _09_config_1.log_description)('Create a variable as a type alias. Type aliases is a good alternative for enums', contactStatus);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let contact = {
    id: 12,
    birthDay: '24.10.1991'
};
(0, _09_config_1.log_description)('Log the contact description', contact);
let textBox = {
    drag: () => { },
    resize: () => { }
};
let exampleAdress = {
    line3: 10,
    line4: {
        line1: 'Test line 1',
        line2: 'Test line 2'
    }
};
(0, _09_config_1.log_description)('Combine Interfaces and Types', exampleAdress);
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log('Hola amigo, you have passed an Undefined value!');
}
(0, _09_config_1.log_description)('Pass undefined argument to a function');
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
(0, _09_config_1.log_description)('Log customer - refactore using optional chaining', customer);
(0, _09_config_1.log_description)('Display a customer birthday, using optional chaining operator');
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
function render(document) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}
const myType = { min: 1, max: 200 };
function save(source) {
    (0, _09_config_1.log_description)('typeof examples', source);
}
save({ min: 20, max: 100 });
var ColorsEnum;
(function (ColorsEnum) {
    ColorsEnum["white"] = "#ffffff";
    ColorsEnum["black"] = "#000000";
})(ColorsEnum || (ColorsEnum = {}));
let x = { name: 'Robert' };
//# sourceMappingURL=02_advanced-types.js.map