export class BMRole {
  static book_person_role = {
    author: {
      code: 'author',
      label: 'Author'
    },
    writer: {
      code: 'writer',
      label: 'Writer'
    },
    illustrator: {
      code: 'illustrator',
      label: 'Illustrator'
    },
    translator: {
      code: 'translator',
      label: 'Translator'
    },
    reader: {
      code: 'reader',
      label: 'Reader'
    },
    editor: {
      code: 'editor',
      label: 'Editor'
    }
  };
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

  static isUser = (roleCode: string): boolean => roleCode === BMRole.user_role.user.code;
  static isAdmin = (roleCode: string): boolean => roleCode === BMRole.user_role.admin.code;
  static isAdminSuper = (roleCode: string): boolean => roleCode === BMRole.user_role.superAdmin.code;
  static isAdminOrSuper = (roleCode: string): boolean =>
    roleCode === BMRole.user_role.admin.code || roleCode === BMRole.user_role.superAdmin.code;
}
