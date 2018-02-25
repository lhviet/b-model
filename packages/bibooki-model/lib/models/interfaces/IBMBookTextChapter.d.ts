export interface IBMBookTextChapter {
    keyid: string;
    value: IBMBookTextChapterValue;
}
export interface IBMBookTextChapterValue {
    booktext_keyid: string;
    custom_url: string;
    chapter_order: number;
    part_name: string;
    chapter_name: string;
    description: string;
    content: string;
    links: string[];
    image_location: string;
    updated_at: number;
    created_at: number;
}
