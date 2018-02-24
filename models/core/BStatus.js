"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPending(statusType) {
    return statusType === 1 /* Pending */;
}
exports.isPending = isPending;
function isProcessing(statusType) {
    return statusType === 2 /* Processing */;
}
exports.isProcessing = isProcessing;
function isRejected(statusType) {
    return statusType === 3 /* Rejected */;
}
exports.isRejected = isRejected;
function isActive(statusType) {
    return statusType === 4 /* Active */;
}
exports.isActive = isActive;
function isDisabled(statusType) {
    return statusType === 5 /* Disabled */;
}
exports.isDisabled = isDisabled;
function getEStatusString(e) {
    switch (e) {
        case 1 /* Pending */:
            return 'Pending';
        case 2 /* Processing */:
            return 'Processing';
        case 3 /* Rejected */:
            return 'Rejected';
        case 4 /* Active */:
            return 'Active';
        case 5 /* Disabled */:
            return 'Disabled';
        default:
            return '';
    }
}
exports.getEStatusString = getEStatusString;
//# sourceMappingURL=BStatus.js.map