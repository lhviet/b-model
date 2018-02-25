"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIPA(statusType) {
    return statusType === 1 /* IPA */;
}
exports.isIPA = isIPA;
exports.getEPSystemString = function (e) {
    switch (e) {
        case 1 /* IPA */:
            return 'IPA';
        default:
            return '';
    }
};
//# sourceMappingURL=BPronunciationSystem.js.map