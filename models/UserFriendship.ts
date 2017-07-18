/*
 * This UserFriendship model (class) must contain the same attributes in value field of server UserFriendship model
 * */
import {HelperStatus} from "./functions/helperStatus";

class UserFriendship {
  keyid = '';
  value = {
    user_keyid_1: '',
    user_keyid_2: '',
    status: -1,
    created_at: 0,
  };

  addition = {
    status: ''
  };

  constructor() {
  }

  get user_keyid_1() {
    return this.value['user_keyid_1'];
  }
  set user_keyid_1(user_keyid_1: string) {
    this.value['user_keyid_1'] = user_keyid_1;
  }
  get user_keyid_2() {
    return this.value['user_keyid_2'];
  }
  set user_keyid_2(user_keyid_2: string) {
    this.value['user_keyid_2'] = user_keyid_2;
  }
  get status() {
    return this.value['status'];
  }
  set status(status: number) {
    this.value['status'] = status;
  }

  /**
   * Setup model based on Person model return from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any) {
    if (sModel.keyid)
      this.keyid = sModel.keyid;
    if (sModel.value)
      this.value = sModel.value;
    this.setupAddition();
    return this;
  }

  private setupAddition() {
    this.addition.status = HelperStatus.getFriendshipSttLabel(this.value.status);
  }
}

export { UserFriendship };