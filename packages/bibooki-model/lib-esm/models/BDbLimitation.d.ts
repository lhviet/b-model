import { IBMDbLimitation } from './interfaces/IBMDbLimitation';
export declare class BDbLimitation implements IBMDbLimitation {
    offset: number;
    limit: number;
    sorter: string;
    direct: string;
    static limit0: (sorter?: string, direct?: string) => BDbLimitation;
    static limit25: (sorter?: string, direct?: string) => BDbLimitation;
    static limit150: (sorter?: string, direct?: string) => BDbLimitation;
    constructor(offset?: number, limit?: number, sorter?: string, direct?: string);
}
