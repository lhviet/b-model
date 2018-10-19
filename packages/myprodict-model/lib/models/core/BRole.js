"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
function isUser(role) {
    return role === enums_1.EUserRole.User;
}
exports.isUser = isUser;
function isAdmin(role) {
    return role === enums_1.EUserRole.Admin;
}
exports.isAdmin = isAdmin;
function isSuperAdmin(role) {
    return role === enums_1.EUserRole.SuperAdmin;
}
exports.isSuperAdmin = isSuperAdmin;
function isAdminOrSuperAdmin(role) {
    return role === enums_1.EUserRole.Admin || role === enums_1.EUserRole.SuperAdmin;
}
exports.isAdminOrSuperAdmin = isAdminOrSuperAdmin;
// enum EUserRole helper
function getEUserRoleString(role) {
    switch (role) {
        case enums_1.EUserRole.Admin:
            return 'Admin';
        case enums_1.EUserRole.SuperAdmin:
            return 'SuperAdmin';
        case enums_1.EUserRole.User:
        default:
            return 'User';
    }
}
exports.getEUserRoleString = getEUserRoleString;
exports.getEUserRoleMap = function () { return [enums_1.EUserRole.Admin, enums_1.EUserRole.SuperAdmin, enums_1.EUserRole.User]; };
//# sourceMappingURL=BRole.js.map