import { EUserRole } from '../enums';
export declare function isUser(role: EUserRole): boolean;
export declare function isAdmin(role: EUserRole): boolean;
export declare function isSuperAdmin(role: EUserRole): boolean;
export declare function isAdminOrSuperAdmin(role: EUserRole): boolean;
export declare function getEUserRoleString(role: EUserRole): string;
export declare const getEUserRoleMap: () => EUserRole[];
