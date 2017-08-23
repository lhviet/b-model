"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BMStatus = (function () {
    function BMStatus() {
    }
    return BMStatus;
}());
BMStatus.list = {
    general: {
        pending: {
            code: 'pending',
            label: 'Pending...'
        },
        verifying: {
            code: 'verifying',
            label: 'Verifying...'
        },
        rejected: {
            code: 'rejected',
            label: 'Rejected'
        },
        disabled: {
            code: 'disabled',
            label: 'Disabled'
        },
        active: {
            code: 'active',
            label: 'Active'
        },
    },
    sharing_status: {
        public_share: {
            code: 1,
            label: 'Public'
        },
        friends_share: {
            code: 2,
            label: 'Friends'
        },
        private_share: {
            code: 3,
            label: 'Private'
        }
    },
    friendship_status: {
        pending: {
            code: -1,
            label: 'Pending & Following',
            description: 'When a friend request is sent, this status is used. ' +
                'The requester who sent the request starting follow the target user'
        },
        notFriend_following: {
            code: 0,
            label: 'Following & is not Friend',
            description: 'When the target user ignore the friend request, the requester still can follow the user'
        },
        friend_following: {
            code: 1,
            label: 'Following & is Friend',
            description: 'In case the target user accept the friend request, the friendship and following relationship were built'
        },
        friend_unfollowing: {
            code: 2,
            label: 'Unfollowing & is Friend',
            description: 'If a user want to maintain the friendship but ' +
                'do not want to see the updates from the friends, this status is used'
        }
    },
    event_type: {
        booktext_chapter_updated: {
            code: 1,
            locale_label: 'booktext_chapter_updated',
            description: 'A chapter\'s content or information of a book-text is updated'
        },
        friendship_create: {
            code: 3,
            locale_label: 'friendship_create',
            description: 'When user accepted the friend-request. A friendship between them is created.'
        }
    },
    event_status: {
        unseen: {
            code: -1,
            description: 'The event notification is unseen'
        },
        unread: {
            code: 0,
            description: 'The event notification was seen but unread'
        },
        read: {
            code: 1,
            description: 'The event notification was seen and read.'
        }
    }
};
BMStatus.isPending = function (code) { return code === BMStatus.list.general.pending.code; };
BMStatus.isVerifying = function (code) { return code === BMStatus.list.general.verifying.code; };
BMStatus.isRejected = function (code) { return code === BMStatus.list.general.rejected.code; };
BMStatus.isDisabled = function (code) { return code === BMStatus.list.general.disabled.code; };
BMStatus.isActive = function (code) { return code === BMStatus.list.general.active.code; };
BMStatus.isPendingOrRejected = function (code) {
    return code === BMStatus.list.general.pending.code || code === BMStatus.list.general.rejected.code;
};
BMStatus.isFriend = function (code) { return code === 1 || code === 2; };
BMStatus.isSharing_public = function (code) { return code === BMStatus.list.sharing_status.public_share.code; };
BMStatus.isSharing_friend = function (code) { return code === BMStatus.list.sharing_status.friends_share.code; };
exports.BMStatus = BMStatus;
//# sourceMappingURL=BMStatus.js.map