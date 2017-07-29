import {Helper} from '../functions/helper';
import {HelperLanguage} from '../functions/helperLanguage';

class Quote {

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
   * Setup model based on Book model return from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any): Quote {
    this.keyid = sModel.keyid;
    this.value = sModel.value;
    this.setupAddition();
    return this;
  }

  setupAddition(): void {
    this.addition.languageEn = HelperLanguage.getLanguageName(this.value.language);
    this.addition.language = HelperLanguage.getLanguageNative(this.value.language);

    this.addition.created_at = Helper.getDatetime(this.value.created_at);

    // setup images
    this.addition.cover_url = this.value.cover_url;
  }

  /**
   * @param {string} cdnHost
   * @returns {Quote}
   */
  setupImageCDN(cdnHost = ''): Quote {
    // setup images
    const isValid = this.value.cover_url.indexOf('/uploads/') === 0 || this.value.cover_url.indexOf('/images/') === 0;
    this.addition.cover_url = isValid && cdnHost ? (cdnHost + this.value.cover_url) : ('' + this.value.cover_url);
    return this;
  }
}

export default Quote;