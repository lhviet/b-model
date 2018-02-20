"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumStatus;
(function (EnumStatus) {
    EnumStatus[EnumStatus["Pending"] = 1] = "Pending";
    EnumStatus[EnumStatus["Processing"] = 2] = "Processing";
    EnumStatus[EnumStatus["Rejected"] = 3] = "Rejected";
    EnumStatus[EnumStatus["Active"] = 4] = "Active";
    EnumStatus[EnumStatus["Disabled"] = 5] = "Disabled";
})(EnumStatus || (EnumStatus = {}));
var isPending = function (statusType) { return statusType === EnumStatus.Pending; };
var isProcessing = function (statusType) { return statusType === EnumStatus.Processing; };
var isRejected = function (statusType) { return statusType === EnumStatus.Rejected; };
var isActive = function (statusType) { return statusType === EnumStatus.Active; };
var isDisabled = function (statusType) { return statusType === EnumStatus.Disabled; };
exports.default = {
    EnumStatus: EnumStatus,
    isPending: isPending,
    isActive: isActive,
    isDisabled: isDisabled,
    isProcessing: isProcessing,
    isRejected: isRejected,
};
//# sourceMappingURL=BStatus.js.map