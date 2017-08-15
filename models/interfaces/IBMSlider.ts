export interface IBMSlider {
  keyid: string;
  value: IBMSliderValue;
}

export interface IBMSliderValue {
  language: string; // 2 chars
  content: string;    // 512 varchars
  cover_url: string; // 1255 chars
  link: string;       // 1255 chars
  tags: string;       // 250 chars
  created_at: number;  // 10 digits
}
