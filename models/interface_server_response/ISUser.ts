// api/user response data interface

// api/user/find-friends
export interface ISUserFindFriendsModel {
  keyid: string;
  username: string;
  displayname: string;
  quote: string;
  avatar_url: string;
  cover_url: string;
  request_keyid: string;
}
export interface ISUserFindFriends {
  models: ISUserFindFriendsModel[];
  total: number;
}

// api/user/find-friend-request
export interface ISUserFindFriendRequestsModel {
  avatar_url: string;
  cover_url: string;
  displayname: string;
  keyid: string;
  quote: string;
  username: string;
}
export interface ISUserFindFriendRequests {
  models: ISUserFindFriendRequestsModel[];
  total: number;
}
