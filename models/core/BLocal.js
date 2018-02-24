"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumLocal;
(function (EnumLocal) {
    EnumLocal[EnumLocal["US"] = 1] = "US";
    EnumLocal[EnumLocal["GB"] = 2] = "GB";
    EnumLocal[EnumLocal["AU"] = 3] = "AU";
})(EnumLocal = exports.EnumLocal || (exports.EnumLocal = {}));
exports.isUS = function (statusType) { return statusType === EnumLocal.US; };
exports.isGB = function (statusType) { return statusType === EnumLocal.GB; };
exports.isAU = function (statusType) { return statusType === EnumLocal.AU; };
exports.getEString = function (eLocal) { return EnumLocal[eLocal]; };
//# sourceMappingURL=BLocal.js.map