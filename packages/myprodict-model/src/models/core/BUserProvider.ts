import {EUserProvider} from '../enums';

export function isLocal(role: EUserProvider): boolean {
  return role === EUserProvider.Local;
}
export function isGoogle(role: EUserProvider): boolean {
  return role === EUserProvider.Google;
}
export function isFacebook(role: EUserProvider): boolean {
  return role === EUserProvider.Facebook;
}

export function getEUserProviderString(role: EUserProvider): string {
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
