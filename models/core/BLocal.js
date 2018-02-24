"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BLocal;
(function (BLocal) {
    BLocal.isUS = function (statusType) { return statusType === 1 /* US */; };
    BLocal.isGB = function (statusType) { return statusType === 2 /* GB */; };
    BLocal.isAU = function (statusType) { return statusType === 3 /* AU */; };
    BLocal.getEString = function (e) {
        switch (e) {
            case 1 /* US */:
                return 'US';
            case 2 /* GB */:
                return 'GB';
            case 3 /* AU */:
                return 'AU';
            default:
                return '';
        }
    };
})(BLocal || (BLocal = {}));
exports.default = BLocal;
//# sourceMappingURL=BLocal.js.map