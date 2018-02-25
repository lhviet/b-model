export declare class BQuery {
    static REGEX_SEARCH_SPLIT: RegExp;
    static QUERY: {
        keyid: string;
        search: string;
        language: string;
        offset: string;
        limit: string;
        sorter: string;
        direct: string;
    };
    /**
     * Return a search string to use in SQL search
     * input: This is "a group" of 'test text' to search
     * output: %This%is%a group%of%test text%to%search
     * @param {string} searchText
     * @returns {string}
     */
    static getOrderedQuerySearchString(searchText: string): string;
    /**
     * Return a search array to use in SQL search
     * input: This is "a group" of 'test text' to search
     * output: ["%This%", "%is%", "%a group%", "%of%", "%test text%", "%to%", "%search%"]
     * @param {string} searchText
     * @returns {string[]}
     */
    static getQuerySearchArray(searchText: string): string[];
}
