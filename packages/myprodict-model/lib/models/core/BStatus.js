"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
function isPending(statusType) {
    return statusType === enums_1.EStatus.Pending;
}
exports.isPending = isPending;
function isProcessing(statusType) {
    return statusType === enums_1.EStatus.Processing;
}
exports.isProcessing = isProcessing;
function isRejected(statusType) {
    return statusType === enums_1.EStatus.Rejected;
}
exports.isRejected = isRejected;
function isActive(statusType) {
    return statusType === enums_1.EStatus.Active;
}
exports.isActive = isActive;
function isDisabled(statusType) {
    return statusType === enums_1.EStatus.Disabled;
}
exports.isDisabled = isDisabled;
// enum EStatus helper
function getEStatusString(e) {
    switch (e) {
        case enums_1.EStatus.Pending:
            return 'Pending';
        case enums_1.EStatus.Processing:
            return 'Processing';
        case enums_1.EStatus.Rejected:
            return 'Rejected';
        case enums_1.EStatus.Active:
            return 'Active';
        case enums_1.EStatus.Disabled:
            return 'Disabled';
        default:
            return '';
    }
}
exports.getEStatusString = getEStatusString;
exports.getEStatusMap = function () { return [enums_1.EStatus.Pending, enums_1.EStatus.Processing, enums_1.EStatus.Rejected, enums_1.EStatus.Active, enums_1.EStatus.Disabled]; };
//# sourceMappingURL=BStatus.js.map