import { EStatus } from '../enums';
export function isPending(statusType) {
    return statusType === EStatus.Pending;
}
export function isProcessing(statusType) {
    return statusType === EStatus.Processing;
}
export function isRejected(statusType) {
    return statusType === EStatus.Rejected;
}
export function isActive(statusType) {
    return statusType === EStatus.Active;
}
export function isDisabled(statusType) {
    return statusType === EStatus.Disabled;
}
// enum EStatus helper
export function getEStatusString(e) {
    switch (e) {
        case EStatus.Pending:
            return 'Pending';
        case EStatus.Processing:
            return 'Processing';
        case EStatus.Rejected:
            return 'Rejected';
        case EStatus.Active:
            return 'Active';
        case EStatus.Disabled:
            return 'Disabled';
        default:
            return '';
    }
}
export var getEStatusMap = function () { return [EStatus.Pending, EStatus.Processing, EStatus.Rejected, EStatus.Active, EStatus.Disabled]; };
//# sourceMappingURL=BStatus.js.map