"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BStatus;
(function (BStatus) {
    function isPending(statusType) {
        return statusType === 1 /* Pending */;
    }
    BStatus.isPending = isPending;
    function isProcessing(statusType) {
        return statusType === 2 /* Processing */;
    }
    BStatus.isProcessing = isProcessing;
    function isRejected(statusType) {
        return statusType === 3 /* Rejected */;
    }
    BStatus.isRejected = isRejected;
    function isActive(statusType) {
        return statusType === 4 /* Active */;
    }
    BStatus.isActive = isActive;
    function isDisabled(statusType) {
        return statusType === 5 /* Disabled */;
    }
    BStatus.isDisabled = isDisabled;
    function getEString(e) {
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
    BStatus.getEString = getEString;
    ;
})(BStatus || (BStatus = {}));
exports.default = BStatus;
//# sourceMappingURL=BStatus.js.map