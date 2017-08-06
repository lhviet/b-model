import {BMHelperLanguage, BMHelper} from '../functions';

class BMQuote {

  keyid = '';
  value = {
    person_keyid: '',   // 36 chars
    book_keyid: '',     // 36 chars
    person_info: '',    // 125 chars
    book_info: '',      // 125 chars
    language: 'en', // 2 chars
    content: '',        // 1,255 varchars
    cover_url: '/images/default-cover.png', // 1,255 chars
    tags: '', // 250 chars
    created_at: 0,   // 10 digits
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
   * @returns {BMQuote}
   */
  setupImageCDN(cdnHost = ''): BMQuote {
    // setup images
    const isValid = this.value.cover_url.indexOf('/uploads/') === 0 || this.value.cover_url.indexOf('/images/') === 0;
    this.addition.cover_url = isValid && cdnHost ? (cdnHost + this.value.cover_url) : ('' + this.value.cover_url);
    return this;
  }

  /**
   * @param {string} cdnHost
   * @returns {BMQuote}
   */
  convertAdditionImg2Value(cdnHost = ''): BMQuote {
    const index = cdnHost && cdnHost.length > 0 ? this.addition.cover_url.indexOf(cdnHost) : -1;
    this.value.cover_url = index > -1 ? (this.addition.cover_url.substring(index + cdnHost.length)) : this.addition.cover_url;
    return this;
  }

  /**
   * Setup model based on BMBook model return from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any): BMQuote {
    this.keyid = sModel.keyid;
    this.value = sModel.value;
    this.setupAddition();
    return this;
  }

  setupAddition(): void {
    this.addition.languageEn = BMHelperLanguage.getLanguageName(this.value.language);
    this.addition.language = BMHelperLanguage.getLanguageNative(this.value.language);

    this.addition.created_at = BMHelper.getDatetime(this.value.created_at);

    // setup images
    this.addition.cover_url = this.value.cover_url;
  }
}

export default BMQuote;
