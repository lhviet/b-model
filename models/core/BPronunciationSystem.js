"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumSystem;
(function (EnumSystem) {
    EnumSystem[EnumSystem["IPA"] = 1] = "IPA";
})(EnumSystem = exports.EnumSystem || (exports.EnumSystem = {}));
exports.isIPA = function (statusType) { return statusType === EnumSystem.IPA; };
exports.getEString = function (eSystem) { return EnumSystem[eSystem]; };
//# sourceMappingURL=BPronunciationSystem.js.map