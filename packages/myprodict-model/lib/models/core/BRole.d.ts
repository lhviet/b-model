export declare class BRole {
    static user_role: {
        user: {
            code: string;
            label: string;
        };
        admin: {
            code: string;
            label: string;
        };
        superAdmin: {
            code: string;
            label: string;
        };
    };
    static isUser: (roleCode: string) => boolean;
    static isAdmin: (roleCode: string) => boolean;
    static isAdminSuper: (roleCode: string) => boolean;
    static isAdminOrSuper: (roleCode: string) => boolean;
}
