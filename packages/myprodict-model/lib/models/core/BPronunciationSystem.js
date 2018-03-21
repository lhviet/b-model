"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIPA(statusType) {
    return statusType === 1 /* IPA */;
}
exports.isIPA = isIPA;
// enum EPSystem helper
function getEPSystemString(e) {
    switch (e) {
        case 1 /* IPA */:
            return 'IPA';
        default:
            return '';
    }
}
exports.getEPSystemString = getEPSystemString;
exports.getEPSystemMap = function () { return [1 /* IPA */]; };
//# sourceMappingURL=BPronunciationSystem.js.map