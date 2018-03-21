"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLocal(role) {
    return role === 1 /* Local */;
}
exports.isLocal = isLocal;
function isGoogle(role) {
    return role === 2 /* Google */;
}
exports.isGoogle = isGoogle;
function isFacebook(role) {
    return role === 3 /* Facebook */;
}
exports.isFacebook = isFacebook;
// enum EUserProvider helper
function getEUserProviderString(role) {
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
exports.getEUserProviderString = getEUserProviderString;
exports.getEUserProviderMap = function () { return [2 /* Google */, 3 /* Facebook */, 1 /* Local */]; };
//# sourceMappingURL=BUserProvider.js.map