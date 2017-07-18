/*
* This User model (class) must contain the same attributes in value field of server User/UserBasicInfo model
* */
import {HelperLanguage} from "./functions/helperLanguage";
import {HelperCountry} from "./functions/helperCountry";
import {Helper} from "./functions/helper";
import {HelperStatus} from "./functions/helperStatus";

export class User {
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
   * Setup model based on Person model return from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any) {
    if (sModel.keyid)
      this.keyid = sModel.keyid;
    if (sModel.value)
      this.value = sModel.value;
    if (sModel.basic)
      this.basic = sModel.basic;
    this.setupAddition();
    return this;
  }

  private setupAddition() {
    // setup language & country
    this.addition.country = HelperCountry.getCountryName(this.basic.country);
    this.addition.language = HelperLanguage.getLanguageNative(this.basic.language);
    this.addition.created_at = Helper.getDatetime(this.value.created_at);

    this.addition.statusColor = HelperStatus.getStatusColor(this.value.status);
  }

  isUser() {
    return this.value.role=='user';
  }
  isAdmin() {
    return this.value.role=='admin';
  }

}