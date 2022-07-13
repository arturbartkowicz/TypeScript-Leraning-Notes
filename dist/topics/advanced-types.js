"use strict";
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
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
const myType = { min: 1, max: 200 };
function save(source) { }
var ColorsEnum;
(function (ColorsEnum) {
    ColorsEnum["white"] = "#ffffff";
    ColorsEnum["black"] = "#000000";
})(ColorsEnum || (ColorsEnum = {}));
//# sourceMappingURL=advanced-types.js.map