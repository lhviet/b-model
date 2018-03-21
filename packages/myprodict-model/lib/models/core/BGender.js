"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNoAnwser(gender) {
    return gender === 1 /* NA */;
}
exports.isNoAnwser = isNoAnwser;
function isMale(gender) {
    return gender === 2 /* Male */;
}
exports.isMale = isMale;
function isFemale(gender) {
    return gender === 3 /* Female */;
}
exports.isFemale = isFemale;
function isLGBT(gender) {
    return gender === 4 /* LGBT */;
}
exports.isLGBT = isLGBT;
// enum EGender helper
function getEGenderString(gender) {
    switch (gender) {
        case 2 /* Male */:
            return 'Male';
        case 3 /* Female */:
            return 'Female';
        case 4 /* LGBT */:
            return 'LGBT';
        case 1 /* NA */:
        default:
            return 'User';
    }
}
exports.getEGenderString = getEGenderString;
exports.getEGenderMap = function () { return [2 /* Male */, 3 /* Female */, 4 /* LGBT */, 1 /* NA */]; };
//# sourceMappingURL=BGender.js.map