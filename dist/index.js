"use strict";
let COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
function decodedValue([color1, color2]) {
    return COLORS.indexOf(color1) * 10 + COLORS.indexOf(color2);
}
decodedValue(['red', 'red']);
//# sourceMappingURL=index.js.map