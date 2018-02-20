"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumSystem;
(function (EnumSystem) {
    EnumSystem[EnumSystem["IPA"] = 1] = "IPA";
})(EnumSystem || (EnumSystem = {}));
var isIPA = function (statusType) { return statusType === EnumSystem.IPA; };
exports.default = {
    EnumSystem: EnumSystem,
    isIPA: isIPA,
};
//# sourceMappingURL=BPronunciationSystem.js.map