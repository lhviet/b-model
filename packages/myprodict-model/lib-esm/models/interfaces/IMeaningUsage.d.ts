import { EWClass } from "../enums";
export interface IMeaningUsage {
    keyid: string;
    value: IMeaningUsageValue;
}
export interface IMeaningUsageValue {
    word_keyid: string;
    word_class: EWClass;
    meaning_keyid: string;
    usage: string;
    explanation: string;
}
