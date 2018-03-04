export interface IMeaningUsage {
    keyid: string;
    value: IMeaningUsageValue;
}
export interface IMeaningUsageValue {
    meaning_keyid: string;
    usage: string;
    explanation: string;
}
