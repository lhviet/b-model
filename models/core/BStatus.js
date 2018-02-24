"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumStatus;
(function (EnumStatus) {
    EnumStatus[EnumStatus["Pending"] = 1] = "Pending";
    EnumStatus[EnumStatus["Processing"] = 2] = "Processing";
    EnumStatus[EnumStatus["Rejected"] = 3] = "Rejected";
    EnumStatus[EnumStatus["Active"] = 4] = "Active";
    EnumStatus[EnumStatus["Disabled"] = 5] = "Disabled";
})(EnumStatus = exports.EnumStatus || (exports.EnumStatus = {}));
exports.isPending = function (statusType) { return statusType === EnumStatus.Pending; };
exports.isProcessing = function (statusType) { return statusType === EnumStatus.Processing; };
exports.isRejected = function (statusType) { return statusType === EnumStatus.Rejected; };
exports.isActive = function (statusType) { return statusType === EnumStatus.Active; };
exports.isDisabled = function (statusType) { return statusType === EnumStatus.Disabled; };
exports.getEString = function (eLocal) { return EnumStatus[eLocal]; };
//# sourceMappingURL=BStatus.js.map