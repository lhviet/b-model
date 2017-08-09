import {IBMBookText} from './IBMBookText';

export class BMBookText implements IBMBookText {

  keyid = '';
  value = {
    contributor_keyid: '',
    book_keyid: '',
    custom_url: '',
    language: '',
    native_name: '',
    alternative_names: {},
    author_info: '',
    book_info: '',
    description: '',
    year: null,
    status: 1,
    links: [],
    images: [],
    files: [''],
    isbn: '',
    tags: '',
    updated_at: 0,
    created_at: 0,
  };

  constructor() {
    this.value.language = 'en';
    this.value.links.push('');
    this.value.images.push('/images/default-book.png');
    this.value.alternative_names['en'] = [];
  }
}
