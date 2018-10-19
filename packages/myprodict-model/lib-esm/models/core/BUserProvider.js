import { EUserProvider } from '../enums';
export function isLocal(role) {
    return role === EUserProvider.Local;
}
export function isGoogle(role) {
    return role === EUserProvider.Google;
}
export function isFacebook(role) {
    return role === EUserProvider.Facebook;
}
// enum EUserProvider helper
export function getEUserProviderString(role) {
    switch (role) {
        case EUserProvider.Google:
            return 'Google';
        case EUserProvider.Facebook:
            return 'Facebook';
        case EUserProvider.Local:
        default:
            return 'Local';
    }
}
export var getEUserProviderMap = function () { return [EUserProvider.Google, EUserProvider.Facebook, EUserProvider.Local]; };
//# sourceMappingURL=BUserProvider.js.map