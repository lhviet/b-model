export function isNoAnwser(gender) {
    return gender === 1 /* NA */;
}
export function isMale(gender) {
    return gender === 2 /* Male */;
}
export function isFemale(gender) {
    return gender === 3 /* Female */;
}
export function isLGBT(gender) {
    return gender === 4 /* LGBT */;
}
export function getEGenderString(gender) {
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
//# sourceMappingURL=BGender.js.map