export declare class BDbPostgres {
    static CONDITION_KEY: {
        IN_ARRAY: string;
        NOT_IN_ARRAY: string;
    };
    static getConditionKey(key: string): string;
    /**
     * parse array string in format "[abc, def, xyz,...]"
     * @param {string} input
     * @returns {any[]}
     */
    static parseArray(input: string): any[];
}
