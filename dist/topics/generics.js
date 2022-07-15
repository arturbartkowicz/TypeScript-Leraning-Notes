"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new KeyValuePair('String', 'KeyIsAString, ValueAString');
let pair2 = new KeyValuePair(10, 'KeyIsANumber, ValueAString');
let pair3 = new KeyValuePair(10, 'KeyIsANumber, ValueAString');
function wrapInArrayFunction(value) {
    return [value];
}
let wrapCall = wrapInArrayFunction('1');
class ArrayUtils {
    wrapInArray(value) {
        return [value];
    }
}
let utils = new ArrayUtils();
let numbers = utils.wrapInArray(1);
function fetch(url) {
    return { data: null, error: null };
}
let result = fetch('url');
function echo(value) {
    return value;
}
echo('Albo number albo string');
function echo1(value) {
    return value;
}
echo1({ name: 'Artur' });
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
class StoreTest {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let storeTest = new StoreTest();
storeTest.add({ name: 'a', price: 1 });
storeTest.find('name', 'a');
storeTest.find('price', 1);
let primaryContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
};
const fieldContact = "name";
function getValue(source, propertyName) {
    return source[propertyName];
}
const value = getValue({ min: 1, max: 200 }, "max");
let computer = {
    name: 'Mac',
    price: 100
};
let computer1 = {
    name: 'Mac',
    price: 100
};
function echo2(arg) { return arg; }
function echo5(arg) { return arg; }
function printName(obj) { console.log(obj.name); }
class Entity {
    constructor(id) {
        this.id = id;
    }
}
//# sourceMappingURL=generics.js.map