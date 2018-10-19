"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
function isUS(statusType) {
    return statusType === enums_1.EPLocal.US;
}
exports.isUS = isUS;
function isGB(statusType) {
    return statusType === enums_1.EPLocal.GB;
}
exports.isGB = isGB;
function isAU(statusType) {
    return statusType === enums_1.EPLocal.AU;
}
exports.isAU = isAU;
// enum EPLocal helper
function getEPLocalString(e) {
    switch (e) {
        case enums_1.EPLocal.US:
            return 'US';
        case enums_1.EPLocal.GB:
            return 'GB';
        case enums_1.EPLocal.AU:
            return 'AU';
        default:
            return '';
    }
}
exports.getEPLocalString = getEPLocalString;
exports.getEPLocalMap = function () { return [enums_1.EPLocal.US, enums_1.EPLocal.GB, enums_1.EPLocal.AU]; };
//# sourceMappingURL=BLocal.js.map