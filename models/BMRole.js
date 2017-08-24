"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BMRole = /** @class */ (function () {
    function BMRole() {
    }
    BMRole.book_person_role = {
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
    BMRole.user_role = {
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
    BMRole.isUser = function (roleCode) { return roleCode === BMRole.user_role.user.code; };
    BMRole.isAdmin = function (roleCode) { return roleCode === BMRole.user_role.admin.code; };
    BMRole.isAdminSuper = function (roleCode) { return roleCode === BMRole.user_role.superAdmin.code; };
    BMRole.isAdminOrSuper = function (roleCode) {
        return roleCode === BMRole.user_role.admin.code || roleCode === BMRole.user_role.superAdmin.code;
    };
    return BMRole;
}());
exports.BMRole = BMRole;
//# sourceMappingURL=BMRole.js.map