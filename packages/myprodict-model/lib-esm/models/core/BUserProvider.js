export function isLocal(role) {
    return role === 1 /* Local */;
}
export function isGoogle(role) {
    return role === 2 /* Google */;
}
export function isFacebook(role) {
    return role === 3 /* Facebook */;
}
// enum EUserProvider helper
export function getEUserProviderString(role) {
    switch (role) {
        case 2 /* Google */:
            return 'Google';
        case 3 /* Facebook */:
            return 'Facebook';
        case 1 /* Local */:
        default:
            return 'Local';
    }
}
export var getEUserProviderMap = function () { return [2 /* Google */, 3 /* Facebook */, 1 /* Local */]; };
//# sourceMappingURL=BUserProvider.js.map