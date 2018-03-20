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
export function isAdminOrSuperAdmin(role: EUserRole): boolean {
  return role === EUserRole.Admin || role === EUserRole.SuperAdmin;
}

// enum EUserRole helper
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
export const getEUserRoleMap = (): EUserRole[] => [EUserRole.Admin, EUserRole.SuperAdmin, EUserRole.User];
