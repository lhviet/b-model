export interface IBMUserActivity {
  keyid: string;
  value: IBMUserActivityValue;
}
export interface IBMUserActivityValue {
  subject: string;
  verb: string;
  object: string;
  tags?: string;
  created_at: number;
}
