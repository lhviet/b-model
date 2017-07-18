import {Helper} from "./functions/helper";
import {HelperLanguage} from "./functions/helperLanguage";

export class Slider {

  keyid = '';
  value = {
    language: 'en', // 2 chars
    content: '',    // 512 varchars
    cover_url: '/images/default-cover.png', // 1,255 chars
    link: '',       // 1,255 chars
    tags: '',       // 250 chars
    created_at: 0,  // 10 digits
  };

  addition = {
    language: '',
    languageEn: '',
    cover_url: '',
    created_at: '',
  };

  constructor() {
  }

  /**
   * Setup model based on Book model return from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any) {
    this.keyid = sModel.keyid;
    this.value = sModel.value;
    this.setupAddition();
    return this;
  }

  setupAddition() {
    this.addition.languageEn = HelperLanguage.getLanguageName(this.value.language);
    this.addition.language = HelperLanguage.getLanguageNative(this.value.language);

    // try to decache the image
    if (this.value.cover_url.indexOf('/uploads/slider/') > -1)
      this.addition.cover_url = this.value.cover_url + "?_ts=" + new Date().getTime();
    else this.addition.cover_url = this.value.cover_url;

    this.addition.created_at = Helper.getDatetime(this.value.created_at);
  }
}
