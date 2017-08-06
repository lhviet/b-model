// Bibooki Model Book
import {BMHelperLanguage, BMHelperCountry, BMHelper, BMHelperStatus} from '../functions';
import BMBase from './BMBase';

class BMBook extends BMBase {

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
    additional_nameArr: [['', 'en', 'English']],
    additional_nameArr2: [['', 'en', 'English']],
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
    super();
    this.value.alternative_names = {
      en: []
    };
  }

  /**
   * @param {string} cdnHost
   * @returns {BMBook}
   */
  setupImageCDN(cdnHost = ''): BMBook {
    return super.setupImageCDN(cdnHost);
  }

  /**
   * @param {string} cdnHost
   * @returns {BMBook}
   */
  convertAdditionImg2Value(cdnHost = ''): BMBook {
    return super.convertAdditionImg2Value(cdnHost);
  }

  /**
   * Setup model based on BMBook model return from server (sModel = server-Model)
   * @param sModel
   * @param {boolean} isFlat
   * @returns {BMBook}
   */
  setupModel(sModel: any, isFlat = false): BMBook {
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

  setupAddition(): void {
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

    // setup tags
    this.addition.tags = this.value.tags ? this.value.tags.split(',') : [];

    // setup language & countries
    this.addition.languageEn = BMHelperLanguage.getLanguageName(this.value.language);
    this.addition.language = BMHelperLanguage.getLanguageNative(this.value.language);
    this.addition.countries = this.value.countries ? this.value.countries.split(',') : [];
    this.addition.countryNames = this.addition.countries.map((countryCode: string) => {
      return BMHelperCountry.getCountryName(countryCode);
    });

    this.addition.updated_at = BMHelper.getDatetime(this.value.updated_at);
    this.addition.created_at = BMHelper.getDatetime(this.value.created_at);

    this.addition.statusColor = BMHelperStatus.getStatusColor(this.value.status);
  }

  // update countries' names in additional field
  updateCountries() {
    this.value.countries = this.addition.countries.toString();
    this.addition.countryNames = this.addition.countries.map((countryCode: string) => {
      return BMHelperCountry.getCountryName(countryCode);
    });
  }

  isPendingOrRejected(): boolean {
    return BMHelperStatus.isPendingOrRejected(this.value.status);
  }

}

export default BMBook;
