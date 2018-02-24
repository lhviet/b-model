"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BStatus;
(function (BStatus) {
    var EnumStatus;
    (function (EnumStatus) {
        EnumStatus[EnumStatus["Pending"] = 1] = "Pending";
        EnumStatus[EnumStatus["Processing"] = 2] = "Processing";
        EnumStatus[EnumStatus["Rejected"] = 3] = "Rejected";
        EnumStatus[EnumStatus["Active"] = 4] = "Active";
        EnumStatus[EnumStatus["Disabled"] = 5] = "Disabled";
    })(EnumStatus = BStatus.EnumStatus || (BStatus.EnumStatus = {}));
    BStatus.isPending = function (statusType) { return statusType === EnumStatus.Pending; };
    BStatus.isProcessing = function (statusType) { return statusType === EnumStatus.Processing; };
    BStatus.isRejected = function (statusType) { return statusType === EnumStatus.Rejected; };
    BStatus.isActive = function (statusType) { return statusType === EnumStatus.Active; };
    BStatus.isDisabled = function (statusType) { return statusType === EnumStatus.Disabled; };
    BStatus.getEString = function (eLocal) { return EnumStatus[eLocal]; };
})(BStatus || (BStatus = {}));
exports.default = BStatus;
//# sourceMappingURL=BStatus.js.map