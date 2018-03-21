export function isUS(statusType) {
    return statusType === 1 /* US */;
}
export function isGB(statusType) {
    return statusType === 2 /* GB */;
}
export function isAU(statusType) {
    return statusType === 3 /* AU */;
}
// enum EPLocal helper
export function getEPLocalString(e) {
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
export var getEPLocalMap = function () { return [1 /* US */, 2 /* GB */, 3 /* AU */]; };
//# sourceMappingURL=BLocal.js.map