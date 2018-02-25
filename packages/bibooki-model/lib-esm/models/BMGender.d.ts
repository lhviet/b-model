export declare class BMGender {
    static list: {
        noanswer: {
            code: string;
            label: string;
        };
        male: {
            code: string;
            label: string;
        };
        female: {
            code: string;
            label: string;
        };
        lgbt: {
            code: string;
            label: string;
        };
    };
    static getGenderLabel: (gender_code: any) => string;
}
