import { EUserRole } from '../enums';
export function isUser(role) {
    return role === EUserRole.User;
}
export function isAdmin(role) {
    return role === EUserRole.Admin;
}
export function isSuperAdmin(role) {
    return role === EUserRole.SuperAdmin;
}
export function isAdminOrSuperAdmin(role) {
    return role === EUserRole.Admin || role === EUserRole.SuperAdmin;
}
// enum EUserRole helper
export function getEUserRoleString(role) {
    switch (role) {
        case EUserRole.Admin:
            return 'Admin';
        case EUserRole.SuperAdmin:
            return 'SuperAdmin';
        case EUserRole.User:
        default:
            return 'User';
    }
}
export var getEUserRoleMap = function () { return [EUserRole.Admin, EUserRole.SuperAdmin, EUserRole.User]; };
//# sourceMappingURL=BRole.js.map