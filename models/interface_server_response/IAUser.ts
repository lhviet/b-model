export interface IAUserFindFriendsModel {
  keyid: string;
  username: string;
  displayname: string;
  quote: string;
  avatar_url: string;
  cover_url: string;
  request_keyid: string;
}
export interface IAUserFindFriends {
  models: IAUserFindFriendsModel[];
  total: number;
}

export interface IAUserFindFriendRequestsModel {
  avatar_url: string;
  cover_url: string;
  displayname: string;
  keyid: string;
  quote: string;
  username: string;
}
export interface IAUserFindFriendRequests {
  models: IAUserFindFriendRequestsModel[];
  total: number;
}