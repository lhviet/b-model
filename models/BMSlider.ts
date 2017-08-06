import {BMHelper, BMHelperLanguage} from '../functions';

class BMSlider {

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
   * @param {string} cdnHost
   * @returns {BMSlider}
   */
  setupImageCDN(cdnHost = ''): BMSlider {
    // setup images
    const isValid = this.value.cover_url.indexOf('/uploads/') === 0 || this.value.cover_url.indexOf('/images/') === 0;
    this.addition.cover_url = isValid && cdnHost ? (cdnHost + this.value.cover_url) : ('' + this.value.cover_url);
    return this;
  }

  /**
   * @param {string} cdnHost
   * @returns {BMSlider}
   */
  convertAdditionImg2Value(cdnHost = ''): BMSlider {
    const index = cdnHost && cdnHost.length > 0 ? this.addition.cover_url.indexOf(cdnHost) : -1;
    this.value.cover_url = index > -1 ? (this.addition.cover_url.substring(index + cdnHost.length)) : this.addition.cover_url;
    return this;
  }

  /**
   * Setup model based on BMBook model return from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any) {
    this.keyid = sModel.keyid;
    this.value = sModel.value;
    this.setupAddition();
    return this;
  }

  setupAddition() {
    this.addition.languageEn = BMHelperLanguage.getLanguageName(this.value.language);
    this.addition.language = BMHelperLanguage.getLanguageNative(this.value.language);

    // try to decache the image
    if (this.value.cover_url.indexOf('/uploads/slider/') > -1) {
      this.addition.cover_url = this.value.cover_url + '?_ts=' + new Date().getTime();
    } else {
      this.addition.cover_url = this.value.cover_url;
    }

    this.addition.created_at = BMHelper.getDatetime(this.value.created_at);
  }
}

export default BMSlider;
