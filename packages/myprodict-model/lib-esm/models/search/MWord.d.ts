import { EPLocal, EPSystem, EWClass } from '../enums';
import { IWordPSystem } from "./IWordPSystem";
export declare class MWord {
    keyid: string;
    word: string;
    custom_url: string;
    created_at: number;
    updated_at: number;
    systems: IWordPSystem[];
    constructor(keyid: string, word: string, custom_url: string, created_at: number, updated_at: number);
    addPronunciation(keyid: string, system: EPSystem, local: EPLocal, wordClass: EWClass, pronunciation: string, description: string): void;
}
