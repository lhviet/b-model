import { EPLocal } from '../enums';
export function isUS(statusType) {
    return statusType === EPLocal.US;
}
export function isGB(statusType) {
    return statusType === EPLocal.GB;
}
export function isAU(statusType) {
    return statusType === EPLocal.AU;
}
// enum EPLocal helper
export function getEPLocalString(e) {
    switch (e) {
        case EPLocal.US:
            return 'US';
        case EPLocal.GB:
            return 'GB';
        case EPLocal.AU:
            return 'AU';
        default:
            return '';
    }
}
export var getEPLocalMap = function () { return [EPLocal.US, EPLocal.GB, EPLocal.AU]; };
//# sourceMappingURL=BLocal.js.map