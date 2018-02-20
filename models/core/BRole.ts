export class BRole {
  static user_role = {
    user: {
      code: 'user',
      label: 'User'
    },
    admin: {
      code: 'admin',
      label: 'Administrator'
    },
    superAdmin: {
      code: 'super_admin',
      label: 'Super Administrator'
    }
  };

  static isUser = (roleCode: string): boolean => roleCode === BRole.user_role.user.code;
  static isAdmin = (roleCode: string): boolean => roleCode === BRole.user_role.admin.code;
  static isAdminSuper = (roleCode: string): boolean => roleCode === BRole.user_role.superAdmin.code;
  static isAdminOrSuper = (roleCode: string): boolean =>
    roleCode === BRole.user_role.admin.code || roleCode === BRole.user_role.superAdmin.code;
}
