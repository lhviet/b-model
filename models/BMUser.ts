/*
* This User model (class) must contain the same attributes in value field of server User/UserBasicInfo model
* */
import {BMHelperLanguage, BMHelper, BMHelperCountry, BMHelperStatus} from '../functions';

class BMUser {
  keyid = '';

  value = {
    username: '',
    email: '',
    status: '',
    role: '',
    created_at: 0,
  };
  basic = {
    update_from_provider: '',
    displayname: '',
    firstname: '',
    lastname: '',
    middlename: '',
    avatar_url: '',
    cover_url: '',
    home_url: '',
    gender: '',
    birthday: '',
    language: '',
    country: '',
    timezone: '',
    quote: '',
    updated_at: '',
  };

  addition = {
    language: '',
    country: '',
    created_at: '',
    statusColor: '',
  };

  constructor() {
  }

  /**
   * Setup model based on BMPerson model return from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any) {
    if (sModel.keyid) {
      this.keyid = sModel.keyid;
    }
    if (sModel.value) {
      this.value = sModel.value;
    }
    if (sModel.basic) {
      this.basic = sModel.basic;
    }
    this.setupAddition();
    return this;
  }

  private setupAddition() {
    // setup language & country
    this.addition.country = BMHelperCountry.getCountryName(this.basic.country);
    this.addition.language = BMHelperLanguage.getLanguageNative(this.basic.language);
    this.addition.created_at = BMHelper.getDatetime(this.value.created_at);

    this.addition.statusColor = BMHelperStatus.getStatusColor(this.value.status);
  }

  isUser() {
    return this.value.role === 'user';
  }
  isAdmin() {
    return this.value.role === 'admin';
  }

}

export default BMUser;
