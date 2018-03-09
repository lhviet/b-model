import { IMeaningValue, IMeaningExampleValue, IMeaningUsageValue, IPronunciationValue, IWordValue, IUserValue, IUserBasicInfoValue } from './interfaces';
export declare class BModel {
    static DEFAULT_IMG: {
        COVER: string;
        PERSON: string;
    };
    static SUPPORT_ACTION: {
        remindUsername: string;
        emailActivation: string;
        resetPassword: string;
    };
    static initWord(): IWordValue;
    static initPronunciation(): IPronunciationValue;
    static initMeaning(): IMeaningValue;
    static initMeaningUsage(): IMeaningUsageValue;
    static initMeaningExample(): IMeaningExampleValue;
    static initUser(): IUserValue;
    static initUserBasic(): IUserBasicInfoValue;
}
