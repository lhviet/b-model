"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BRole = /** @class */ (function () {
    function BRole() {
    }
    BRole.user_role = {
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
    BRole.isUser = function (roleCode) { return roleCode === BRole.user_role.user.code; };
    BRole.isAdmin = function (roleCode) { return roleCode === BRole.user_role.admin.code; };
    BRole.isAdminSuper = function (roleCode) { return roleCode === BRole.user_role.superAdmin.code; };
    BRole.isAdminOrSuper = function (roleCode) {
        return roleCode === BRole.user_role.admin.code || roleCode === BRole.user_role.superAdmin.code;
    };
    return BRole;
}());
exports.BRole = BRole;
//# sourceMappingURL=BRole.js.map