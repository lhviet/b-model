
class DbLimitation {
  offset: number;
  limit: number;
  sorter: string;
  direct: string;

  static UNLIMITED_FILTERS: DbLimitation = {
    offset: 0,
    limit: 0,
    sorter: '',
    direct: ''
  };

  static LIMITATION_DEFAULT_25: DbLimitation = {
    offset: 0,
    limit: 25,
    sorter: 'created_at',
    direct: 'desc'
  };

  static LIMITATION_DEFAULT_150: DbLimitation = {
    offset: 0,
    limit: 150,
    sorter: 'created_at',
    direct: 'desc'
  };

  constructor(offset?: number, limit?: number) {
    this.offset = offset || 0;
    this.limit = limit || 25;
  }
}

export { DbLimitation };