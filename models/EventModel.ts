import {Helper} from "../functions/helper";

class EventModel {
  keyid: string;
  value: any;
  /*value: {
    actor: {
      keyid: string,
      username: string,
      displayname: string
      avatar_url: string,
    },
    obj: {
      keyid: string,
      custom_url: string,
      cover_url: string,
      title: string,
      description: string
    },
    type: string,
    obj_url: string,
    description: string,
    created_at: number
  };*/

  addition = {
    created_at: ''
  };

  constructor(keyid?:string) {
    if (keyid) this.keyid = keyid;
    this.value = {};
    /*this.value = {
      actor: { keyid: '', username: '', displayname: '', avatar_url: '' },
      obj: { keyid: '', custom_url: '', cover_url: '', title: '' , description: '' },
      description: '',
      created_at: 0
    };*/
  }

  /**
   * @param sModel
   */
  setupModel(sModel: any) {
    this.keyid = sModel.keyid;
    this.value = sModel.value;
    /*this.value = {
      actor: { keyid: sModel.value.actor.keyid, username: sModel.value.actor.username, displayname: sModel.value.actor.displayname, avatar_url: sModel.value.actor.avatar_url },
      obj: { keyid: sModel.value.obj.keyid, custom_url: sModel.value.obj.custom_url, cover_url: sModel.value.obj.cover_url, title: sModel.value.obj.title , description: sModel.value.obj.description },
      description: sModel.value.description,
      created_at: sModel.value.created_at
    };*/
    this.setupAddition();
    return this;
  }

  setupAddition() {
    this.addition.created_at = Helper.getDatetime(this.value.created_at);
  }
}

export default EventModel;