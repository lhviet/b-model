export interface IBMUserActivity {
    keyid: string;
    value: IBMUserActivityValue;
}
export interface IBMUserActivityValue {
    sbj: string;
    verb: string;
    obj: string;
    tags?: string;
    created_at: number;
}
export interface IBMUserActivityExtracted {
    keyid: string;
    value: IBMUserActivityExtractedValue;
}
export interface IBMUserActivityExtractedValue {
    sbj: {
        keyid: string;
        username: string;
        displayname: string;
        avatar_url: string;
    };
    obj: {
        keyid: string;
        custom_url: string;
        cover_url: string;
        title: string;
        description: string;
    };
    type: string;
    obj_url: string;
    description: string;
    created_at: number;
}
