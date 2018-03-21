import { EGender } from '../enums';
export declare function isNoAnwser(gender: EGender): boolean;
export declare function isMale(gender: EGender): boolean;
export declare function isFemale(gender: EGender): boolean;
export declare function isLGBT(gender: EGender): boolean;
export declare function getEGenderString(gender: EGender): string;
export declare const getEGenderMap: () => EGender[];
