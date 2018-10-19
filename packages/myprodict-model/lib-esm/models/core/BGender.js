import { EGender } from '../enums';
export function isNoAnwser(gender) {
    return gender === EGender.NA;
}
export function isMale(gender) {
    return gender === EGender.Male;
}
export function isFemale(gender) {
    return gender === EGender.Female;
}
export function isLGBT(gender) {
    return gender === EGender.LGBT;
}
// enum EGender helper
export function getEGenderString(gender) {
    switch (gender) {
        case EGender.Male:
            return 'Male';
        case EGender.Female:
            return 'Female';
        case EGender.LGBT:
            return 'LGBT';
        case EGender.NA:
        default:
            return 'User';
    }
}
export var getEGenderMap = function () { return [EGender.Male, EGender.Female, EGender.LGBT, EGender.NA]; };
//# sourceMappingURL=BGender.js.map