export function isLocal(role) {
    return role === 1 /* Local */;
}
export function isGoogle(role) {
    return role === 2 /* Google */;
}
export function isFacebook(role) {
    return role === 3 /* Facebook */;
}
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
//# sourceMappingURL=BUserProvider.js.map