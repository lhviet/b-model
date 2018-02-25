import { EWClass } from '../enums';
export interface IMeaning {
    keyid: string;
    value: IMeaningValue;
}
export interface IMeaningValue {
    word_keyid: string;
    word_class: EWClass;
    mean: string;
    tags: string;
}
