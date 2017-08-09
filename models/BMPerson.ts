
import {IBMPerson} from './IBMPerson';

export class BMPerson implements IBMPerson{

  keyid = '';

  value = {
    contributor_keyid: '',
    custom_url: '',
    native_name: '',
    english_name: '',
    alternative_names: {},
    language: '',
    country: '',
    gender: '',
    year_of_birth: 0,
    year_of_death: 0,
    description: '',
    tags: '',
    links: [],
    images: [],
    updated_at: 0,
    created_at: 0,
    status: '',
  };

  constructor() {
    this.value.language = 'en';
    this.value.country = 'U_N';
    this.value.gender = 'noanswer';
    this.value.links.push('');
    this.value.images.push('/images/default-person.png');
    this.value.alternative_names['en'] = [];
  }

}
