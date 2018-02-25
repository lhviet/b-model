export interface IBMInfo {
    keyid: string;
    value: IBMInfoValue;
}
export interface IBMInfoValue {
    contributor_keyid: string;
    custom_url: string;
    language: string;
    title: string;
    description: string;
    content: string;
    updated_at: number;
    created_at: number;
}
