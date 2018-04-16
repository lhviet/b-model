export interface IBMRateBook {
  keyid: string;
  value: IBMRateBookValue;
}

export interface IBMRateBookValue {
  book_keyid: string;
  user_keyid: string;
  rate: number;
  updated_at: number,
  created_at: number,
}
