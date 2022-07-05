"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting in the DOM');
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
function Component1(value) {
    return (constructor) => {
        console.log('Component decorator called');
        constructor.prototype.options = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting in the DOM');
        };
    };
}
let ProfileComponent1 = class ProfileComponent1 {
};
ProfileComponent1 = __decorate([
    Component1({ selector: '#my-profile' })
], ProfileComponent1);
function Pipe(constructor) {
    console.log('Pipe Decorator');
    constructor.prototype.pipe = true;
}
let ProfileComponent2 = class ProfileComponent2 {
};
ProfileComponent2 = __decorate([
    Component1({ selector: '#my-profile' }),
    Pipe
], ProfileComponent2);
function Log(target, methodName, descriptor) {
    let original = descriptor.value;
    descriptor.value = function (message) {
        console.log('Before');
        original.call(this, 'Musimy przekazać dwa argumenty. this and second some string');
        original.call(this, message);
        console.log('After');
    };
}
class Person1 {
    say(message) {
        console.log('Person says ' + message);
    }
}
__decorate([
    Log
], Person1.prototype, "say", null);
let person1 = new Person1();
person1.say('Hello');
//# sourceMappingURL=decorators.js.map