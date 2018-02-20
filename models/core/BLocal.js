"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumLocal;
(function (EnumLocal) {
    EnumLocal[EnumLocal["US"] = 1] = "US";
    EnumLocal[EnumLocal["GB"] = 2] = "GB";
    EnumLocal[EnumLocal["AU"] = 3] = "AU";
})(EnumLocal || (EnumLocal = {}));
var isUS = function (statusType) { return statusType === EnumLocal.US; };
var isGB = function (statusType) { return statusType === EnumLocal.GB; };
var isAU = function (statusType) { return statusType === EnumLocal.AU; };
exports.default = {
    EnumLocal: EnumLocal,
    isUS: isUS,
    isGB: isGB,
    isAU: isAU,
};
//# sourceMappingURL=BLocal.js.map