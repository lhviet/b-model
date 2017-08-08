import {IBMBase} from './IBMBase';

export interface IBMBookText extends IBMBase {
  value: {
    contributor_keyid: string,
    book_keyid: string,
    custom_url: string,
    language: string,
    native_name: string,
    alternative_names: {},
    author_info: string,
    book_info: string,
    description: string,
    year: null,
    status: 1,
    links: string[],
    images: string[],
    files: string[],
    isbn: string,
    tags: string,
    updated_at: number,
    created_at: number,
  };
}
