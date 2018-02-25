import { IDbLimitation } from './interfaces/IDbLimitation';
export declare class DbLimitation implements IDbLimitation {
    offset: number;
    limit: number;
    sorter: string;
    direct: string;
    static limit25: (sorter?: string, direct?: string) => DbLimitation;
    static limit150: (sorter?: string, direct?: string) => DbLimitation;
    constructor(offset?: number, limit?: number, sorter?: string, direct?: string);
}
