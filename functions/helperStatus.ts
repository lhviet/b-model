class HelperStatus {
  public static list = {
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
    sharing_status: {
      public: {
        code: 1,
        label: 'Public'
      },
      friends: {
        code: 2,
        label: 'Friends'
      },
      private: {
        code: 3,
        label: 'Private'
      }
    },
    friendship_status: {
      pending: {
        code: -1,
        label: 'Friend request sent',
        follow: 'Following',
        description: 'When a friend request is sent, this status is used. ' +
        'The requester who sent the request starting follow the target user'
      },
      notFriend_following: {
        code: 0,
        label: 'Not friend',
        follow: 'Following',
        description: 'When the target user ignore the friend request, the requester still can follow the user'
      },
      friend_following: {
        code: 1,
        label: 'Friend',
        follow: 'Following',
        description: 'In case the target user accept the friend request, the friendship and following relationship were built'
      },
      friend_unfollowing: {
        code: 2,
        label: 'Friend',
        follow: 'Not Follow',
        description: 'If a user want to maintain the friendship but ' +
        'do not want to see the updates from the friends, this status is used'
      },
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

  static isPending(code: string) {
    return code == HelperStatus.list.pending.code;
  }
  static isVerifying(code: string) {
    return code == HelperStatus.list.verifying.code;
  }
  static isRejected(code: string) {
    return code == HelperStatus.list.rejected.code;
  }
  static isDisabled(code: string) {
    return code == HelperStatus.list.disabled.code;
  }
  static isActive(code: string) {
    return code == HelperStatus.list.active.code;
  }
  static isPendingOrRejected(code: string) {
    return (code == HelperStatus.list.pending.code || code == HelperStatus.list.rejected.code);
  }

  static getStatusColor(code: string): string {
    let color = '';
    switch (code) {
      case 'pending':
        color = 'text-danger';
        break;
      case 'verifying':
        color = 'text-primary';
        break;
      case 'rejected':
      case 'disabled':
        color = 'text-muted';
        break;
      case 'active':
        break;
      default:
        color = 'text-warning';
        break;
    }
    return color;
  }

  static getSharingSttLabel(code: number): string {
    let sharing_stt = HelperStatus.list.sharing_status;
    let label = '';
    for (let key in sharing_stt) {
      if (sharing_stt[key].code == code) {
        label = sharing_stt[key].label;
        break;
      }
    }
    return label;
  }
  static getSharingSttIcon(code: number): string {
    let label = '';
    if (code == 1) {
      label = 'fa-globe';
    }
    else if (code == 2) {
      label = 'fa-users';
    }
    else if (code == 3) {
      label = 'fa-user-secret';
    }
    return label;
  }

  static getFriendshipSttLabel(code: number): string {
    let friendship_stt = HelperStatus.list.friendship_status;
    let label = '';
    for (let key in friendship_stt) {
      if (friendship_stt[key].code == code) {
        label = friendship_stt[key].label;
        break;
      }
    }
    return label;
  }
}
export {HelperStatus};