"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BStatus;
(function (BStatus) {
    BStatus.isPending = function (statusType) { return statusType === 1 /* Pending */; };
    BStatus.isProcessing = function (statusType) { return statusType === 2 /* Processing */; };
    BStatus.isRejected = function (statusType) { return statusType === 3 /* Rejected */; };
    BStatus.isActive = function (statusType) { return statusType === 4 /* Active */; };
    BStatus.isDisabled = function (statusType) { return statusType === 5 /* Disabled */; };
    BStatus.getEString = function (e) {
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
    };
})(BStatus || (BStatus = {}));
exports.default = BStatus;
//# sourceMappingURL=BStatus.js.map