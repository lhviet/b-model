import {IBMBase} from './IBMBase';

export interface IBMUserFriendship extends IBMBase {

  value: {
    user_keyid_1: string,
    user_keyid_2: string,
    status: number,
    created_at: number,
  };

}
