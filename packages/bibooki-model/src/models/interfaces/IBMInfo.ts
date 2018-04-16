export interface IBMInfo {
  keyid: string;
  value: IBMInfoValue;
}

export interface IBMInfoValue {
  contributor_keyid: string;  // 36 varchars
  custom_url: string;         // 125 varchars
  language: string;           // 2 chars
  title: string;              // 125 varchars
  description: string;        // 512 varchars
  content: string;            // TEXT
  cover_url: string;              // 1024 varchars
  updated_at: number;         // 10 digits
  created_at: number;         // 10 digits
  view_count: number;
  rate_avg: number;
  rate_count: number;
  tags: string;               // 512 varchars
}
