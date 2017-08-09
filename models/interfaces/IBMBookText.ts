export interface IBMBookText {

  keyid: string;

  value: {
    contributor_keyid: string,
    book_keyid: string,
    custom_url: string,
    language: string,
    native_name: string,
    alternative_names: any,
    author_info: string,
    book_info: string,
    description: string,
    year: number,
    status: number,
    links: string[],
    images: string[],
    files: string[],
    isbn: string,
    tags: string,
    updated_at: number,
    created_at: number,
  };

}
