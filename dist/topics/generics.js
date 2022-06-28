"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new KeyValuePair('String', 'KeyIsAString, ValueAString');
let pair2 = new KeyValuePair(10, 'KeyIsANumber, ValueAString');
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
}
//# sourceMappingURL=generics.js.map