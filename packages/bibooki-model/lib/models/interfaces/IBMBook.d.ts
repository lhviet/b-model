export interface IBMBook {
    keyid: string;
    value: IBMBookValue;
}
export interface IBMBookValue {
    contributor_keyid: string;
    custom_url: string;
    native_name: string;
    english_name: string;
    alternative_names: any;
    language: string;
    countries: string;
    type: string;
    year_of_start: number;
    year_of_end: number;
    author_info: string;
    links: string[];
    images: string[];
    status: string;
    description: string;
    tags: string;
    view_count: number;
    rate_avg: number;
    rate_count: number;
    updated_at: number;
    created_at: number;
}
