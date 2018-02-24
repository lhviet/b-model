"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BPronunciationSystem;
(function (BPronunciationSystem) {
    function isIPA(statusType) {
        return statusType === 1 /* IPA */;
    }
    BPronunciationSystem.isIPA = isIPA;
    function getEString(e) {
        switch (e) {
            case 1 /* IPA */:
                return 'IPA';
            default:
                return '';
        }
    }
    BPronunciationSystem.getEString = getEString;
    ;
})(BPronunciationSystem || (BPronunciationSystem = {}));
exports.default = BPronunciationSystem;
//# sourceMappingURL=BPronunciationSystem.js.map