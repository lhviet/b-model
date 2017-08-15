export class Status {
  static list = {
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
    event_type: { // using for event_notification system
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
    event_status: {	// using for event_notification system. unseen (-1), unread (0), and read (1)
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

  static isPending = (code: string): boolean => code === Status.list.general.pending.code;
  static isVerifying = (code: string): boolean => code === Status.list.general.verifying.code;
  static isRejected = (code: string): boolean => code === Status.list.general.rejected.code;
  static isDisabled = (code: string): boolean => code === Status.list.general.disabled.code;
  static isActive = (code: string): boolean => code === Status.list.general.active.code;
  static isPendingOrRejected = (code: string): boolean =>
    code === Status.list.general.pending.code || code === Status.list.general.rejected.code;
  static isFriend = (code: number): boolean => code === 1 || code === 2;
  static isSharing_public = (code: number): boolean => code === Status.list.sharing_status.public.code;
  static isSharing_friend = (code: number): boolean => code === Status.list.sharing_status.friends.code;
}