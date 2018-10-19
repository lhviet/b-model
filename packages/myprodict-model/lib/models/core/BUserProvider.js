"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
function isLocal(role) {
    return role === enums_1.EUserProvider.Local;
}
exports.isLocal = isLocal;
function isGoogle(role) {
    return role === enums_1.EUserProvider.Google;
}
exports.isGoogle = isGoogle;
function isFacebook(role) {
    return role === enums_1.EUserProvider.Facebook;
}
exports.isFacebook = isFacebook;
// enum EUserProvider helper
function getEUserProviderString(role) {
    switch (role) {
        case enums_1.EUserProvider.Google:
            return 'Google';
        case enums_1.EUserProvider.Facebook:
            return 'Facebook';
        case enums_1.EUserProvider.Local:
        default:
            return 'Local';
    }
}
exports.getEUserProviderString = getEUserProviderString;
exports.getEUserProviderMap = function () { return [enums_1.EUserProvider.Google, enums_1.EUserProvider.Facebook, enums_1.EUserProvider.Local]; };
//# sourceMappingURL=BUserProvider.js.map