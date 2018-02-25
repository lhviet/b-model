import { EPLocal, EPSystem, EWClass } from '../enums';
export interface IPronunciationClass {
    c: EWClass;
    p: string;
    d: string;
}
export declare class MWord {
    keyid: string;
    word: string;
    custom_url: string;
    created_at: number;
    updated_at: number;
    system: {
        [system: string]: {
            [local: string]: IPronunciationClass[];
        };
    };
    constructor(keyid: string, word: string, custom_url: string, created_at: number, updated_at: number);
    addPronunciation(system: EPSystem, local: EPLocal, wordClass: EWClass, pronunciation: string, description: string): void;
}
