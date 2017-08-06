
import {BMHelperLanguage, BMHelper, BMHelperStatus} from '../functions';
import BMBase from './BMBase';

class BMBookText extends BMBase {

  keyid = '';
  value = {
    contributor_keyid: '',
    book_keyid: '',
    custom_url: '',
    language: 'en',
    native_name: '',
    alternative_names: {},
    author_info: '',
    book_info: '',
    description: '',
    year: null,
    status: 1,
    links: [''],
    images: ['/images/default-book.png'],
    files: [''],
    isbn: '',
    tags: '',
    updated_at: 0,
    created_at: 0,
  };

  // original book of this book-text
  creditPersonRoles = {}; // in format {personKeyid: [author, writer, translator...]}

  addition = {
    additional_nameArr: [['', 'en', 'English']],  // separated by "\n"
    additional_nameArr2: [['', 'en', 'English']], // separated by hyphens ","
    linkArr: [],
    imageArr: [],
    fileArr: [],
    tags: [],
    language: '',
    languageEn: '',
    status: '',
    statusIcon: '',
    updated_at: '',
    created_at: '',
  };

  constructor() {
    super();
    this.value.alternative_names = {
      en: []
    };
  }

  /**
   * @param {string} cdnHost
   * @returns {BMBookText}
   */
  setupImageCDN(cdnHost = ''): BMBookText {
    return super.setupImageCDN(cdnHost);
  }

  /**
   * @param {string} cdnHost
   * @returns {BMBookText}
   */
  convertAdditionImg2Value(cdnHost = ''): BMBookText {
    return super.convertAdditionImg2Value(cdnHost);
  }

  /**
   * Setup model based on the model returned from server (sModel = server-Model)
   * @param sModel
   * @param isFlat
   */
  setupModel(sModel: any, isFlat = false) {
    this.keyid = sModel.keyid;
    if (isFlat) {
      for (const key in this.value) {
        if (sModel[key]) {
          this.value[key] = sModel[key];
        }
      }
    } else {
      this.value = sModel.value;
    }
    this.setupAddition();
    return this;
  }

  setupAddition() {
    // setup alternative_names
    this.addition.additional_nameArr = [['', 'en', 'English']];
    this.addition.additional_nameArr2 = [];
    if (typeof this.value.alternative_names === 'string') {
      this.addition.additional_nameArr.push([this.value.alternative_names, 'en', 'English']);
      this.addition.additional_nameArr2.push([this.value.alternative_names, 'en', 'English']);
    } else {
      for (const lang in this.value.alternative_names) {
        const altNames1 = this.value.alternative_names[lang].toString().replace(/,/g, '\n');
        const altNames2 = this.value.alternative_names[lang].toString().replace(/,/g, ', ');
        this.addition.additional_nameArr.push([altNames1, lang, BMHelperLanguage.getLanguageName(lang)]);
        this.addition.additional_nameArr2.push([altNames2, lang, BMHelperLanguage.getLanguageName(lang)]);
      }
    }
    if (this.addition.additional_nameArr.length > 1) {
      this.addition.additional_nameArr.splice(0, 1);
    }

    // setup links
    this.addition.linkArr = [];
    for (const link of this.value.links) {
      this.addition.linkArr.push({url: link});
    }

    // setup images
    this.addition.imageArr = [];
    for (const link of this.value.images) {
      this.addition.imageArr.push({url: link});
    }

    // setup files
    this.addition.fileArr = [];
    for (const link of this.value.files) {
      this.addition.fileArr.push({url: link});
    }

    // setup tags
    this.addition.tags = this.value.tags ? this.value.tags.split(',') : [];

    // setup language & countries
    this.addition.languageEn = BMHelperLanguage.getLanguageName(this.value.language);
    this.addition.language = BMHelperLanguage.getLanguageNative(this.value.language);

    // setup status
    this.addition.status = BMHelperStatus.getSharingSttLabel(this.value.status);
    this.addition.statusIcon = BMHelperStatus.getSharingSttIcon(this.value.status);

    this.addition.updated_at = BMHelper.getDatetime(this.value.updated_at);
    this.addition.created_at = BMHelper.getDatetime(this.value.created_at);

  }
}

export default BMBookText;
