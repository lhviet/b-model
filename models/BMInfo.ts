import {BMHelper} from '../functions';

class BMInfo {

  keyid = '';
  value: any = {
    contributor_keyid: '', // 36 varchars
    custom_url: '',       // 125 varchars
    language: 'en',       // 2 chars
    title: '',            // 125 varchars
    description: '',      // 512 varchars
    content: '',          // TEXT
    updated_at: 0,        // 10 digits
    created_at: 0,        // 10 digits
  };

  addition: any = {
    image_location: '',
    imageArr: [],
    updated_at: '',
    created_at: '',

    person_keyids: [],
    book_keyids: [],
  };

  constructor() {}

  /**
   * Setup model based on the model returned from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any) {
    this.keyid = sModel.keyid;
    this.value = sModel.value;
    this.setupAddition();
    return this;
  }

  setupAddition() {
    this.addition.image_location = '/uploads/info/' + this.keyid + '/';
    this.addition.updated_at = BMHelper.getDatetime(this.value.updated_at);
    this.addition.created_at = BMHelper.getDatetime(this.value.created_at);
  }
}

export default BMInfo;
