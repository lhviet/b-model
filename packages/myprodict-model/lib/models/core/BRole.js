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
function isAdminOrSuperAdmin(role) {
    return role === 2 /* Admin */ || role === 3 /* SuperAdmin */;
}
exports.isAdminOrSuperAdmin = isAdminOrSuperAdmin;
// enum EUserRole helper
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
exports.getEUserRoleMap = function () { return [2 /* Admin */, 3 /* SuperAdmin */, 1 /* User */]; };
//# sourceMappingURL=BRole.js.map