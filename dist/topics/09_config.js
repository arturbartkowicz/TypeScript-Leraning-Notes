"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log_description = void 0;
function log_description(description, value) {
    let dashes = ' ---------- ';
    console.log('');
    console.log(dashes + description + dashes);
    if (value)
        return console.log(value);
}
exports.log_description = log_description;
//# sourceMappingURL=09_config.js.map