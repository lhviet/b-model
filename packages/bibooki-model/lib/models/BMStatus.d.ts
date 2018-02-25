export declare class BMStatus {
    static list: {
        general: {
            pending: {
                code: string;
                label: string;
            };
            verifying: {
                code: string;
                label: string;
            };
            rejected: {
                code: string;
                label: string;
            };
            disabled: {
                code: string;
                label: string;
            };
            active: {
                code: string;
                label: string;
            };
        };
        sharing_status: {
            public_share: {
                code: number;
                label: string;
            };
            friends_share: {
                code: number;
                label: string;
            };
            private_share: {
                code: number;
                label: string;
            };
        };
        friendship_status: {
            pending: {
                code: number;
                label: string;
                description: string;
            };
            notFriend_following: {
                code: number;
                label: string;
                description: string;
            };
            friend_following: {
                code: number;
                label: string;
                description: string;
            };
            friend_unfollowing: {
                code: number;
                label: string;
                description: string;
            };
        };
        event_type: {
            booktext_chapter_updated: {
                code: number;
                locale_label: string;
                description: string;
            };
            friendship_create: {
                code: number;
                locale_label: string;
                description: string;
            };
        };
        event_status: {
            unseen: {
                code: number;
                description: string;
            };
            unread: {
                code: number;
                description: string;
            };
            read: {
                code: number;
                description: string;
            };
        };
    };
    static isPending: (code: string) => boolean;
    static isVerifying: (code: string) => boolean;
    static isRejected: (code: string) => boolean;
    static isDisabled: (code: string) => boolean;
    static isActive: (code: string) => boolean;
    static isPendingOrRejected: (code: string) => boolean;
    static isFriend: (code: number) => boolean;
    static isSharing_public: (code: number) => boolean;
    static isSharing_friend: (code: number) => boolean;
}
