import * as moment from "moment";
import {Helper} from "../functions/helper";
import {HelperLanguage} from "../functions/helperLanguage";
import {HelperCountry} from "../functions/helperCountry";
import {HelperStatus} from "../functions/helperStatus";

class Person {

  keyid = '';
  value: any = {
    contributor_keyid: '',
    custom_url: '',
    native_name: '',
    english_name: '',
    alternative_names: {},
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

  addition: any = {
    additional_nameArr: [['','en','English']],
    additional_nameArr2: [['','en','English']],
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
    this.value.alternative_names = {
      en: []
    };
  }

  /**
   * Setup model based on Person model return from server (sModel = server-Model)
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

    // setup tags
    this.addition.tags = this.value.tags ? this.value.tags.split(',') : [];

    // setup language & country
    this.addition.country = HelperCountry.getCountryName(this.value.country);
    this.addition.languageEn = HelperLanguage.getLanguageName(this.value.language);
    this.addition.language = HelperLanguage.getLanguageNative(this.value.language);

    this.addition.updated_at = Helper.getDatetime(this.value.updated_at);
    this.addition.created_at = Helper.getDatetime(this.value.created_at);

    // setup years of living (ages)
    this.addition.age = +this.value.year_of_death - +this.value.year_of_birth;
    if (this.addition.age < 0)
      this.addition.age = moment().year() - +this.value.year_of_birth;
    if (this.addition.age > 200)
      this.addition.age = 0;

    this.addition.statusColor = HelperStatus.getStatusColor(this.value.status);
  }

  isPendingOrRejected(): boolean {
    return HelperStatus.isPendingOrRejected(this.value.status);
  }

}

export default Person;