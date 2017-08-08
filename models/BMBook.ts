import {IBMBook} from './IBMBook';

export class BMBook implements IBMBook {

  keyid = '';
  value = {
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

  constructor() {
    this.value.alternative_names = {
      en: []
    };
  }

}
