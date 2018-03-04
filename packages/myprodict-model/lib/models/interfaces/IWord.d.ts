import { EStatus } from '../enums';
export interface IWord {
    keyid: string;
    value: IWordValue;
}
export interface IWordValue {
    word: string;
    custom_url: string;
    status: EStatus;
    created_at: number;
    updated_at: number;
}
