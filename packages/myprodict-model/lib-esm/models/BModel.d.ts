import { IMeaningValue } from './interfaces/IMeaning';
import { IMeaningExampleValue } from './interfaces/IMeaningExample';
import { IMeaningUsageValue } from './interfaces/IMeaningUsage';
import { IPronunciationValue } from './interfaces/IPronunciation';
import { IWordValue } from './interfaces/IWord';
import { IUserBasicInfoValue, IUserValue } from "./interfaces";
export declare class BModel {
    static initWord(): IWordValue;
    static initPronunciation(): IPronunciationValue;
    static initMeaning(): IMeaningValue;
    static initMeaningUsage(): IMeaningUsageValue;
    static initMeaningExample(): IMeaningExampleValue;
    static initUser(): IUserValue;
    static initUserBasic(): IUserBasicInfoValue;
}
