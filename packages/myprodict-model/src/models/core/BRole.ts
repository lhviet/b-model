import {EUserRole} from '../enums';

export function isUser(role: EUserRole): boolean {
  return role === EUserRole.User;
}
export function isAdmin(role: EUserRole): boolean {
  return role === EUserRole.Admin;
}
export function isSuperAdmin(role: EUserRole): boolean {
  return role === EUserRole.SuperAdmin;
}

export function getEUserRoleString(role: EUserRole): string {
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
