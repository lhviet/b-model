export function isPending(statusType) {
    return statusType === 1 /* Pending */;
}
export function isProcessing(statusType) {
    return statusType === 2 /* Processing */;
}
export function isRejected(statusType) {
    return statusType === 3 /* Rejected */;
}
export function isActive(statusType) {
    return statusType === 4 /* Active */;
}
export function isDisabled(statusType) {
    return statusType === 5 /* Disabled */;
}
// enum EStatus helper
export function getEStatusString(e) {
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
export var getEStatusMap = function () { return [1 /* Pending */, 2 /* Processing */, 3 /* Rejected */, 4 /* Active */, 5 /* Disabled */]; };
//# sourceMappingURL=BStatus.js.map