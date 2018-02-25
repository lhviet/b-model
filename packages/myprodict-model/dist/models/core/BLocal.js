"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isUS(statusType) {
    return statusType === 1 /* US */;
}
exports.isUS = isUS;
function isGB(statusType) {
    return statusType === 2 /* GB */;
}
exports.isGB = isGB;
function isAU(statusType) {
    return statusType === 3 /* AU */;
}
exports.isAU = isAU;
function getEPLocalString(e) {
    switch (e) {
        case 1 /* US */:
            return 'US';
        case 2 /* GB */:
            return 'GB';
        case 3 /* AU */:
            return 'AU';
        default:
            return '';
    }
}
exports.getEPLocalString = getEPLocalString;
//# sourceMappingURL=BLocal.js.map