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
console.log(echo('we'));
console.log(echo(123));
//# sourceMappingURL=generics.js.map