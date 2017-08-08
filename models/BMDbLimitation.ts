import {IBMDbLimitation} from './IBMDbLimitation';

export class BMDbLimitation implements IBMDbLimitation{

  static UNLIMITED_FILTERS: IBMDbLimitation = {
    offset: 0,
    limit: 0,
    sorter: '',
    direct: ''
  };

  static LIMITATION_DEFAULT_25: IBMDbLimitation = {
    offset: 0,
    limit: 25,
    sorter: 'created_at',
    direct: 'desc'
  };

  static LIMITATION_DEFAULT_150: IBMDbLimitation = {
    offset: 0,
    limit: 150,
    sorter: 'created_at',
    direct: 'desc'
  };

  offset: number;
  limit: number;
  sorter: string;
  direct: string;

  constructor(offset?: number, limit?: number, sorter?: string, direct?: string) {
    this.offset = offset || 0;
    this.limit = limit || 25;
    this.sorter = sorter || '';
    this.direct = direct || '';
  }
}
