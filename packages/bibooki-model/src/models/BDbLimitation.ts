import {IBMDbLimitation} from './interfaces/IBMDbLimitation';

export class BDbLimitation implements IBMDbLimitation {

  offset: number;
  limit: number;
  sorter: string;
  direct: string;

  static limit0 = (sorter?: string, direct?: string) => new BDbLimitation(0, 0, sorter, direct);
  static limit25 = (sorter = 'created_at', direct = 'desc') => new BDbLimitation(0, 25, sorter, direct);
  static limit150 = (sorter = 'created_at', direct = 'desc') => new BDbLimitation(0, 150, sorter, direct);

  constructor(offset?: number, limit?: number, sorter?: string, direct?: string) {
    this.offset = offset || 0;
    if (limit) {
      this.limit = limit;
    }
    if (sorter) {
      this.sorter = sorter;
    }
    if (direct) {
      this.direct = direct;
    }
  }
}
