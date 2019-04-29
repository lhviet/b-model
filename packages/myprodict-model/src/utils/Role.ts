import {MPTypes} from '../MPTypes';
import UserRole = MPTypes.UserRole;

export const isUser = (role: UserRole): boolean => role === UserRole.User;
export const isAdmin = (role: UserRole): boolean => role === UserRole.Admin;
export const isSuperAdmin = (role: UserRole): boolean => role === UserRole.SuperAdmin;
export const isAdminOrSuperAdmin = (role: UserRole): boolean => role === UserRole.Admin || role === UserRole.SuperAdmin;

// enum UserRole helper
export function getUserRoleString(role: UserRole): string {
  switch (role) {
    case UserRole.Admin:
      return 'Admin';
    case UserRole.SuperAdmin:
      return 'SuperAdmin';
    case UserRole.User:
    default:
      return 'User';
  }
}
export const getUserRoleArr = (): UserRole[] => [UserRole.Admin, UserRole.SuperAdmin, UserRole.User];
