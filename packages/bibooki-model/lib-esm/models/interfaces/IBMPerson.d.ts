export interface IBMPerson {
    keyid: string;
    value: IBMPersonValue;
}
export interface IBMPersonValue {
    contributor_keyid: string;
    custom_url: string;
    native_name: string;
    english_name: string;
    alternative_names: any;
    language: string;
    country: string;
    gender: string;
    year_of_birth: number;
    year_of_death: number;
    description: string;
    tags: string;
    links: string[];
    images: string[];
    updated_at: number;
    created_at: number;
    status: string;
}
