
import {IBMPerson} from './IBMPerson';

export class BMPerson implements IBMPerson{

  keyid = '';

  value = {
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

  constructor() {
  }

}
