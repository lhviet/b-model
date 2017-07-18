import {Helper} from "../functions/helper";
import {HelperLanguage} from "../functions/helperLanguage";
import {HelperStatus} from "../functions/helperStatus";

class BookText {

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
    additional_nameArr: [['','en','English']],  // separated by "\n"
    additional_nameArr2: [['','en','English']], // separated by hyphens ","
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
    this.value.alternative_names = {
      en: []
    };
  }

  /**
   * Setup model based on the model returned from server (sModel = server-Model)
   * @param sModel
   * @param isFlat
   */
  setupModel(sModel: any, isFlat = false) {
    this.keyid = sModel.keyid;
    if (isFlat)
      for (let key in this.value) {
        if (sModel[key])
          this.value[key] = sModel[key];
      }
    else
      this.value = sModel.value;
    this.setupAddition();
    return this;
  }

  setupAddition() {
    // setup alternative_names
    this.addition.additional_nameArr = [['','en','English']];
    this.addition.additional_nameArr2 = [];
    if (typeof this.value.alternative_names === 'string'){
      this.addition.additional_nameArr.push([this.value.alternative_names, 'en','English']);
      this.addition.additional_nameArr2.push([this.value.alternative_names, 'en','English']);
    }
    else {
      for (let lang in this.value.alternative_names) {
        let altNames1 = this.value.alternative_names[lang].toString().replace(/,/g, '\n');
        let altNames2 = this.value.alternative_names[lang].toString().replace(/,/g, ', ');
        this.addition.additional_nameArr.push([altNames1, lang, HelperLanguage.getLanguageName(lang)]);
        this.addition.additional_nameArr2.push([altNames2, lang, HelperLanguage.getLanguageName(lang)]);
      }
    }
    if (this.addition.additional_nameArr.length > 1){
      this.addition.additional_nameArr.splice(0, 1);
    }

    // setup links
    this.addition.linkArr = [];
    for (let link of this.value.links) {
      this.addition.linkArr.push({url: link});
    }

    // setup images
    this.addition.imageArr = [];
    for (let link of this.value.images) {
      this.addition.imageArr.push({url: link});
    }

    // setup files
    this.addition.fileArr = [];
    for (let link of this.value.files) {
      this.addition.fileArr.push({url: link});
    }

    // setup tags
    this.addition.tags = this.value.tags ? this.value.tags.split(',') : [];

    // setup language & countries
    this.addition.languageEn = HelperLanguage.getLanguageName(this.value.language);
    this.addition.language = HelperLanguage.getLanguageNative(this.value.language);

    // setup status
    this.addition.status = HelperStatus.getSharingSttLabel(this.value.status);
    this.addition.statusIcon = HelperStatus.getSharingSttIcon(this.value.status);

    this.addition.updated_at = Helper.getDatetime(this.value.updated_at);
    this.addition.created_at = Helper.getDatetime(this.value.created_at);

  }
}

export default BookText;