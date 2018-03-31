export interface IMeaningUsage {
    keyid: string;
    value: IMeaningUsageValue;
}
export interface IMeaningUsageValue {
    word_keyid: string;
    meaning_keyid: string;
    usage: string;
    explanation: string;
}
