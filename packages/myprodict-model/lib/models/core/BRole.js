"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isUser(role) {
    return role === 1 /* User */;
}
exports.isUser = isUser;
function isAdmin(role) {
    return role === 2 /* Admin */;
}
exports.isAdmin = isAdmin;
function isSuperAdmin(role) {
    return role === 3 /* SuperAdmin */;
}
exports.isSuperAdmin = isSuperAdmin;
function getEUserRoleString(role) {
    switch (role) {
        case 2 /* Admin */:
            return 'Admin';
        case 3 /* SuperAdmin */:
            return 'SuperAdmin';
        case 1 /* User */:
        default:
            return 'User';
    }
}
exports.getEUserRoleString = getEUserRoleString;
//# sourceMappingURL=BRole.js.map