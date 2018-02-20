"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BPronunciationSystem;
(function (BPronunciationSystem) {
    var EnumSystem;
    (function (EnumSystem) {
        EnumSystem[EnumSystem["IPA"] = 1] = "IPA";
    })(EnumSystem = BPronunciationSystem.EnumSystem || (BPronunciationSystem.EnumSystem = {}));
    BPronunciationSystem.isIPA = function (statusType) { return statusType === EnumSystem.IPA; };
})(BPronunciationSystem || (BPronunciationSystem = {}));
exports.default = BPronunciationSystem;
//# sourceMappingURL=BPronunciationSystem.js.map