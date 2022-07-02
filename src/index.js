var colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
var numbers = [0, 1];
function decodedValue(colorsCollection) {
    var collection = [];
    numbers.forEach(function (number) {
        collection.push(colors.indexOf(colorsCollection[number]));
    });
    return parseInt(collection.join(""));
}
