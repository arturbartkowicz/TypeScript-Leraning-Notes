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
    descriptor.value = function (...args) {
        console.log('Before');
        original.call(this, 'Musimy przekazać dwa argumenty. this and second some string');
        original.call(this, ...args);
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
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return (typeof result === 'string') ? result.toUpperCase() : result;
    };
}
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person2.prototype, "fullName", null);
let person2 = new Person2('Artur', 'Bartkowicz');
console.log(person2.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() { return value; },
            set(newValue) {
                if (newValue.length < 4)
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
let user1 = new User('1234');
console.log(user1.password);
function Sauce(sauce) {
    return (constructor) => {
        constructor.prototype.sauce = sauce;
    };
}
let Pizza = class Pizza {
};
Pizza = __decorate([
    Sauce('pesto')
], Pizza);
let pizza = new Pizza();
//# sourceMappingURL=05_decorators.js.map