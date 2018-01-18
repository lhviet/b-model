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

// the extracted model of UserActivity
export interface IBMUserActivityExtractedValue {
  sbj: {
    keyid: string,
    username: string,
    displayname: string
    avatar_url: string,
  };
  obj: {
    keyid: string,
    custom_url: string,
    cover_url: string,
    title: string,
    description: string
  };
  type: string;
  obj_url: string;
  description: string;
  created_at: number;
}
