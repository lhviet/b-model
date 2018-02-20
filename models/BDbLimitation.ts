import {IBMDbLimitation} from './interfaces/IBMDbLimitation';

export class BDbLimitation implements IBMDbLimitation {

  offset: number;
  limit: number;
  sorter: string;
  direct: string;

  static limit25 = (sorter = 'created_at', direct = 'desc') => new BDbLimitation(0, 25, sorter, direct);
  static limit150 = (sorter = 'created_at', direct = 'desc') => new BDbLimitation(0, 150, sorter, direct);

  constructor(offset = 0, limit = 25, sorter?: string, direct?: string) {
    this.offset = offset;
    this.limit = limit;
    this.sorter = sorter;
    this.direct = direct;
  }
}
