"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BPronunciationSystem;
(function (BPronunciationSystem) {
    BPronunciationSystem.isIPA = function (statusType) { return statusType === 1 /* IPA */; };
    BPronunciationSystem.getEString = function (e) {
        switch (e) {
            case 1 /* IPA */:
                return 'IPA';
            default:
                return '';
        }
    };
})(BPronunciationSystem || (BPronunciationSystem = {}));
exports.default = BPronunciationSystem;
//# sourceMappingURL=BPronunciationSystem.js.map