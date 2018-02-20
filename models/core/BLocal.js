"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BLocal;
(function (BLocal) {
    var EnumLocal;
    (function (EnumLocal) {
        EnumLocal[EnumLocal["US"] = 1] = "US";
        EnumLocal[EnumLocal["GB"] = 2] = "GB";
        EnumLocal[EnumLocal["AU"] = 3] = "AU";
    })(EnumLocal = BLocal.EnumLocal || (BLocal.EnumLocal = {}));
    BLocal.isUS = function (statusType) { return statusType === EnumLocal.US; };
    BLocal.isGB = function (statusType) { return statusType === EnumLocal.GB; };
    BLocal.isAU = function (statusType) { return statusType === EnumLocal.AU; };
})(BLocal || (BLocal = {}));
exports.default = BLocal;
//# sourceMappingURL=BLocal.js.map