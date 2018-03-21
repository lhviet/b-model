import { EPLocal } from '../enums';
export declare function isUS(statusType: EPLocal): boolean;
export declare function isGB(statusType: EPLocal): boolean;
export declare function isAU(statusType: EPLocal): boolean;
export declare function getEPLocalString(e: EPLocal): string;
export declare const getEPLocalMap: () => EPLocal[];
