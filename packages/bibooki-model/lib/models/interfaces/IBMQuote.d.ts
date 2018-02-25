export interface IBMQuote {
    keyid: string;
    value: IBMQuoteValue;
}
export interface IBMQuoteValue {
    person_keyid: string;
    book_keyid: string;
    person_info: string;
    book_info: string;
    language: string;
    content: string;
    cover_url: string;
    tags: string;
    updated_at: number;
    created_at: number;
}
