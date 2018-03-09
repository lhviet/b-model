export function isUser(role) {
    return role === 1 /* User */;
}
export function isAdmin(role) {
    return role === 2 /* Admin */;
}
export function isSuperAdmin(role) {
    return role === 3 /* SuperAdmin */;
}
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
//# sourceMappingURL=BRole.js.map