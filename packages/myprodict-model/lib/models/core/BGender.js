"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
function isNoAnwser(gender) {
    return gender === enums_1.EGender.NA;
}
exports.isNoAnwser = isNoAnwser;
function isMale(gender) {
    return gender === enums_1.EGender.Male;
}
exports.isMale = isMale;
function isFemale(gender) {
    return gender === enums_1.EGender.Female;
}
exports.isFemale = isFemale;
function isLGBT(gender) {
    return gender === enums_1.EGender.LGBT;
}
exports.isLGBT = isLGBT;
// enum EGender helper
function getEGenderString(gender) {
    switch (gender) {
        case enums_1.EGender.Male:
            return 'Male';
        case enums_1.EGender.Female:
            return 'Female';
        case enums_1.EGender.LGBT:
            return 'LGBT';
        case enums_1.EGender.NA:
        default:
            return 'User';
    }
}
exports.getEGenderString = getEGenderString;
exports.getEGenderMap = function () { return [enums_1.EGender.Male, enums_1.EGender.Female, enums_1.EGender.LGBT, enums_1.EGender.NA]; };
//# sourceMappingURL=BGender.js.map