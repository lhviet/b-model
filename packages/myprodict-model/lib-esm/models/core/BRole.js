export function isUser(role) {
    return role === 1 /* User */;
}
export function isAdmin(role) {
    return role === 2 /* Admin */;
}
export function isSuperAdmin(role) {
    return role === 3 /* SuperAdmin */;
}
export function isAdminOrSuperAdmin(role) {
    return role === 2 /* Admin */ || role === 3 /* SuperAdmin */;
}
// enum EUserRole helper
export function getEUserRoleString(role) {
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
export var getEUserRoleMap = function () { return [2 /* Admin */, 3 /* SuperAdmin */, 1 /* User */]; };
//# sourceMappingURL=BRole.js.map