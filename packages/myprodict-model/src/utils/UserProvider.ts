import {MPTypes} from '../MPTypes';
import UserProvider = MPTypes.UserProvider;

export const isLocal = (provider: UserProvider): boolean => provider === UserProvider.Local;
export const isGoogle = (provider: UserProvider): boolean => provider === UserProvider.Google;
export const isFacebook = (provider: UserProvider): boolean => provider === UserProvider.Facebook;

// enum UserProvider helper
export function getUserProviderString(role: UserProvider): string {
  switch (role) {
    case UserProvider.Google:
      return 'Google';
    case UserProvider.Facebook:
      return 'Facebook';
    case UserProvider.Local:
    default:
      return 'Local';
  }
}
export const getUserProviderArr = (): UserProvider[] => [UserProvider.Google, UserProvider.Facebook, UserProvider.Local];
