export interface IBMUserFriendship {
    keyid: string;
    value: IBMUserFriendshipValue;
}
export interface IBMUserFriendshipValue {
    user_keyid_1: string;
    user_keyid_2: string;
    status: number;
    created_at: number;
}
