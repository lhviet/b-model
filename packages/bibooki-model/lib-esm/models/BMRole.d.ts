export declare class BMRole {
    static book_person_role: {
        author: {
            code: string;
            label: string;
        };
        writer: {
            code: string;
            label: string;
        };
        illustrator: {
            code: string;
            label: string;
        };
        translator: {
            code: string;
            label: string;
        };
        reader: {
            code: string;
            label: string;
        };
        editor: {
            code: string;
            label: string;
        };
    };
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
