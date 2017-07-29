import * as moment from 'moment';
import {BMHelperLanguage, BMHelperCountry, BMHelper, BMHelperStatus} from '../functions';

interface IPersonValue {
  contributor_keyid: string;
  custom_url: string;
  native_name: string;
  english_name: string;
  alternative_names: {};
  language: string;
  country: string;
  gender: string;
  year_of_birth: number;
  year_of_death: number;
  description: string;
  tags: string;
  links: string[];
  images: string[];
  updated_at: number;
  created_at: number;
  status: string;
}

interface IPersonAddition {
  additional_nameArr: any[];
  additional_nameArr2: any[];
  linkArr: any[];
  imageArr: any[];
  tags: string[];
  country: string;
  language: string;
  languageEn: string;
  updated_at: string;
  created_at: string;
  age: number;
  statusColor: string;
}

class BMPerson {

  keyid = '';

  value: IPersonValue = {
    contributor_keyid: '',
    custom_url: '',
    native_name: '',
    english_name: '',
    alternative_names: {en: []},
    language: 'en',
    country: 'U_N',
    gender: 'noanswer',
    year_of_birth: 0,
    year_of_death: 0,
    description: '',
    tags: '',
    links: [''],
    images: ['/images/default-person.png'],
    updated_at: 0,
    created_at: 0,
    status: '',
  };

  addition: IPersonAddition = {
    additional_nameArr: [['', 'en', 'English']],
    additional_nameArr2: [['', 'en', 'English']],
    linkArr: [],
    imageArr: [],
    tags: [],
    country: '',
    language: '',
    languageEn: '',
    updated_at: '',
    created_at: '',
    age: 0,
    statusColor: '',
  };

  constructor() {
  }

  /**
   * Setup model based on BMPerson model return from server (sModel = server-Model)
   * @param sModel
   * @param {boolean} isFlat
   * @returns {BMPerson}
   */
  setupModel(sModel: any, isFlat = false): BMPerson {
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
      this.addition.linkArr.push({url: ('' + link)});
    }

    // setup images
    this.addition.imageArr = [];
    for (const link of this.value.images) {
      this.addition.imageArr.push({url: link});
    }

    // setup tags
    this.addition.tags = this.value.tags ? this.value.tags.split(',') : [];

    // setup language & country
    this.addition.country = BMHelperCountry.getCountryName(this.value.country);
    this.addition.languageEn = BMHelperLanguage.getLanguageName(this.value.language);
    this.addition.language = BMHelperLanguage.getLanguageNative(this.value.language);

    this.addition.updated_at = BMHelper.getDatetime(this.value.updated_at);
    this.addition.created_at = BMHelper.getDatetime(this.value.created_at);

    // setup years of living (ages)
    this.addition.age = +this.value.year_of_death - +this.value.year_of_birth;
    if (this.addition.age < 0) {
      this.addition.age = moment().year() - +this.value.year_of_birth;
    }
    if (this.addition.age > 200) {
      this.addition.age = 0;
    }

    this.addition.statusColor = BMHelperStatus.getStatusColor(this.value.status);
  }

  /**
   * @param {string} cdnHost
   * @returns {BMPerson}
   */
  setupImageCDN(cdnHost = ''): BMPerson {
    // setup images
    this.addition.imageArr = [];
    for (const link of this.value.images) {
      const isValid = link.indexOf('/uploads/') === 0 || link.indexOf('/images/') === 0;
      const url = isValid && cdnHost ? (cdnHost + link) : ('' + link);
      this.addition.imageArr.push({url});
    }
    return this;
  }

  isPendingOrRejected(): boolean {
    return BMHelperStatus.isPendingOrRejected(this.value.status);
  }

}

export default BMPerson;
