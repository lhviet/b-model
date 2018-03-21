import { EStatus } from '../enums';
export declare function isPending(statusType: EStatus): boolean;
export declare function isProcessing(statusType: EStatus): boolean;
export declare function isRejected(statusType: EStatus): boolean;
export declare function isActive(statusType: EStatus): boolean;
export declare function isDisabled(statusType: EStatus): boolean;
export declare function getEStatusString(e: EStatus): string;
export declare const getEStatusMap: () => EStatus[];
