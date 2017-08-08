import {IBMBookText} from './IBMBookText';

export class BMBookText implements IBMBookText {

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

  constructor() {
    this.value.alternative_names = {
      en: []
    };
  }
}
