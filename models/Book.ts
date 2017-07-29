import {Helper} from "../functions/helper";
import {HelperLanguage} from "../functions/helperLanguage";
import {HelperCountry} from "../functions/helperCountry";
import {HelperStatus} from "../functions/helperStatus";

class Book {

  keyid = '';
  value: any = {
    contributor_keyid: '',
    custom_url: '',
    native_name: '',
    english_name: '',
    alternative_names: {},
    language: 'en',
    countries: '',
    type: 'text',
    year_of_start: 0,
    year_of_end: 0,
    author_info: '',
    links: [''],
    images: ['/images/default-book.png'],
    updated_at: 0,
    created_at: 0,
    status: '',
    description: '',
    tags: ''
  };

  addition: any = {
    additional_nameArr: [['','en','English']],
    additional_nameArr2: [['','en','English']],
    linkArr: [],
    imageArr: [],
    tags: [],
    language: '',
    languageEn: '',
    countries: [],
    countryNames: [],
    updated_at: '',
    created_at: '',
    statusColor: '',
  };

  creditPersonRoles = {}; // in format {personKeyid: ['author', 'writer', 'translator',...]}

  constructor() {
    this.value.alternative_names = {
      en: []
    };
  }

  /**
   * Setup model based on Book model return from server (sModel = server-Model)
   * @param sModel
   * @param {boolean} isFlat
   * @returns {Book}
   */
  setupModel(sModel: any, isFlat = false): Book {
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

  setupAddition(): void {
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
    for (const link of this.value.images) {
      this.addition.imageArr.push({url: link});
    }

    // setup tags
    this.addition.tags = this.value.tags ? this.value.tags.split(',') : [];

    // setup language & countries
    this.addition.languageEn = HelperLanguage.getLanguageName(this.value.language);
    this.addition.language = HelperLanguage.getLanguageNative(this.value.language);
    this.addition.countries = this.value.countries ? this.value.countries.split(',') : [];
    this.addition.countryNames = this.addition.countries.map((countryCode: string) => {
      return HelperCountry.getCountryName(countryCode);
    });

    this.addition.updated_at = Helper.getDatetime(this.value.updated_at);
    this.addition.created_at = Helper.getDatetime(this.value.created_at);

    this.addition.statusColor = HelperStatus.getStatusColor(this.value.status);
  }

  /**
   * @param {string} cdnHost
   * @returns {Book}
   */
  setupImageCDN(cdnHost = ''): Book {
    // setup images
    this.addition.imageArr = [];
    for (const link of this.value.images) {
      const isValid = link.indexOf('/uploads/') === 0 || link.indexOf('/images/') === 0;
      const url = isValid && cdnHost ? (cdnHost + link) : ('' + link);
      this.addition.imageArr.push({url});
    }
    return this;
  }

  // update countries' names in additional field
  updateCountries() {
    this.value.countries = this.addition.countries.toString();
    this.addition.countryNames = this.addition.countries.map((countryCode: string) => {
      return HelperCountry.getCountryName(countryCode);
    });
  }

  isPendingOrRejected(): boolean {
    return HelperStatus.isPendingOrRejected(this.value.status);
  }

}

export default Book;