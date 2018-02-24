"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BLocal;
(function (BLocal) {
    function isUS(statusType) {
        return statusType === 1 /* US */;
    }
    BLocal.isUS = isUS;
    function isGB(statusType) {
        return statusType === 2 /* GB */;
    }
    BLocal.isGB = isGB;
    function isAU(statusType) {
        return statusType === 3 /* AU */;
    }
    BLocal.isAU = isAU;
    function getEString(e) {
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
    }
    BLocal.getEString = getEString;
    ;
})(BLocal || (BLocal = {}));
exports.default = BLocal;
//# sourceMappingURL=BLocal.js.map