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
    avatar_url: '',
    cover_url: '',
  };

  constructor() {
  }

  /**
   * @param {string} cdnHost
   * @returns {BMUser}
   */
  setupImageCDN(cdnHost = ''): BMUser {
    // setup images
    let isValid = this.basic.cover_url.indexOf('/uploads/') === 0 || this.basic.cover_url.indexOf('/images/') === 0;
    this.addition.cover_url = isValid && cdnHost ? (cdnHost + this.basic.cover_url) : ('' + this.basic.cover_url);
    isValid = this.basic.avatar_url.indexOf('/uploads/') === 0 || this.basic.avatar_url.indexOf('/images/') === 0;
    this.addition.avatar_url = isValid && cdnHost ? (cdnHost + this.basic.avatar_url) : ('' + this.basic.avatar_url);
    return this;
  }

  /**
   * @param {string} cdnHost
   * @returns {BMUser}
   */
  convertAdditionImg2Value(cdnHost = ''): BMUser {
    let index = cdnHost && cdnHost.length > 0 ? this.addition.cover_url.indexOf(cdnHost) : -1;
    this.basic.cover_url = index > -1 ? (this.addition.cover_url.substring(index + cdnHost.length)) : this.addition.cover_url;
    index = cdnHost && cdnHost.length > 0 ? this.addition.avatar_url.indexOf(cdnHost) : -1;
    this.basic.avatar_url = index > -1 ? (this.addition.avatar_url.substring(index + cdnHost.length)) : this.addition.avatar_url;
    return this;
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
