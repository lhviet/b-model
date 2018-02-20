import {IDbLimitation} from './interfaces/IDbLimitation';

export class DbLimitation implements IDbLimitation {

  offset: number;
  limit: number;
  sorter: string;
  direct: string;

  static limit25 = (sorter = 'created_at', direct = 'desc') => new DbLimitation(0, 25, sorter, direct);
  static limit150 = (sorter = 'created_at', direct = 'desc') => new DbLimitation(0, 150, sorter, direct);

  constructor(offset?: number, limit?: number, sorter?: string, direct?: string) {
    this.offset = offset;
    this.limit = limit;
    this.sorter = sorter;
    this.direct = direct;
  }
}
