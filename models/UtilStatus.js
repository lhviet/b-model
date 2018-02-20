"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TStatus_1 = require("./types/TStatus");
var isPending = function (statusType) { return statusType === TStatus_1.TYPE_STATUS_PENDING; };
exports.isPending = isPending;
var isActive = function (statusType) { return statusType === TStatus_1.TYPE_STATUS_ACTIVE; };
exports.isActive = isActive;
var isDisable = function (statusType) { return statusType === TStatus_1.TYPE_STATUS_DISABLED; };
exports.isDisable = isDisable;
var isProcessing = function (statusType) { return statusType === TStatus_1.TYPE_STATUS_PROCESSING; };
exports.isProcessing = isProcessing;
var isRejected = function (statusType) { return statusType === TStatus_1.TYPE_STATUS_REJECTED; };
exports.isRejected = isRejected;
//# sourceMappingURL=UtilStatus.js.map