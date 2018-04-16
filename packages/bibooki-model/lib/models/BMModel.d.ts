import { IBMUserValue } from './interfaces/IBMUser';
import { IBMPersonValue } from './interfaces/IBMPerson';
import { IBMUserBasicInfoValue } from './interfaces/IBMUserBasicInfo';
import { IBMBookValue } from './interfaces/IBMBook';
import { IBMBookTextValue } from './interfaces/IBMBookText';
import { IBMBookTextChapterValue } from './interfaces/IBMBookTextChapter';
import { IBMQuoteValue } from './interfaces/IBMQuote';
import { IBMSliderValue } from './interfaces/IBMSlider';
import { IBMInfoValue } from './interfaces/IBMInfo';
import { IBMUserFriendshipValue } from './interfaces/IBMUserFriendship';
import { IBMConfigsValue } from './interfaces/IBMConfigs';
import { IBMUserActivityValue } from '../index';
import { IBMUserActivityExtractedValue } from './interfaces/IBMUserActivity';
import { IBMRatePersonValue } from "./interfaces/IBMRatePerson";
import { IBMRateBookValue } from "./interfaces/IBMRateBook";
import { IBMRateBooktextValue } from "./interfaces/IBMRateBookText";
import { IBMRateInfoValue } from "./interfaces/IBMRateInfo";
export declare class BMModel {
    static DEFAULT_IMG: {
        COVER: string;
        PERSON: string;
        BOOK: string;
    };
    static AUTH_PROVIDER: {
        LOCAL: string;
        FACEBOOK: string;
        GOOGLE: string;
    };
    static SUPPORT_ACTION: {
        remindUsername: string;
        emailActivation: string;
        resetPassword: string;
    };
    static initUser(): IBMUserValue;
    static initUserBasic(): IBMUserBasicInfoValue;
    static initPerson(): IBMPersonValue;
    static initBook(): IBMBookValue;
    static initBookText(): IBMBookTextValue;
    static initBookTextChapter(): IBMBookTextChapterValue;
    static initQuote(): IBMQuoteValue;
    static initSlider(): IBMSliderValue;
    static initInfo(): IBMInfoValue;
    static initUserFriendship(): IBMUserFriendshipValue;
    static initUserActivity(): IBMUserActivityValue;
    static initUserActivityExtracted(): IBMUserActivityExtractedValue;
    static initConfig(): IBMConfigsValue;
    static initRatePerson(): IBMRatePersonValue;
    static initRateBook(): IBMRateBookValue;
    static initRateBooktext(): IBMRateBooktextValue;
    static initRateInfo(): IBMRateInfoValue;
}
