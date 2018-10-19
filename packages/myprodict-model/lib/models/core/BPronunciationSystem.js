"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
function isIPA(statusType) {
    return statusType === enums_1.EPSystem.IPA;
}
exports.isIPA = isIPA;
// enum EPSystem helper
function getEPSystemString(e) {
    switch (e) {
        case enums_1.EPSystem.IPA:
            return 'IPA';
        default:
            return '';
    }
}
exports.getEPSystemString = getEPSystemString;
exports.getEPSystemMap = function () { return [enums_1.EPSystem.IPA]; };
//# sourceMappingURL=BPronunciationSystem.js.map