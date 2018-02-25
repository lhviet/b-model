"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BQuery = /** @class */function () {
    function BQuery() {}
    /**
     * Return a search string to use in SQL search
     * input: This is "a group" of 'test text' to search
     * output: %This%is%a group%of%test text%to%search
     * @param {string} searchText
     * @returns {string}
     */
    BQuery.getOrderedQuerySearchString = function (searchText) {
        var phrases = searchText.split(BQuery.REGEX_SEARCH_SPLIT);
        var queryString = '';
        phrases.map(function (item) {
            item = item.trim();
            if (item.startsWith('"') && item.endsWith('"') || item.startsWith('\'') && item.endsWith('\'')) {
                item = item.substring(1, item.length - 1);
            }
            if (item.trim().length > 0) {
                queryString += item + '%';
            }
        });
        if (queryString.length > 0) {
            queryString = '%' + queryString;
        }
        return queryString;
    };
    /**
     * Return a search array to use in SQL search
     * input: This is "a group" of 'test text' to search
     * output: ["%This%", "%is%", "%a group%", "%of%", "%test text%", "%to%", "%search%"]
     * @param {string} searchText
     * @returns {string[]}
     */
    BQuery.getQuerySearchArray = function (searchText) {
        var phrases = searchText.split(BQuery.REGEX_SEARCH_SPLIT);
        var queryArray = [];
        phrases.map(function (item) {
            item = item.trim();
            if (item.startsWith('"') && item.endsWith('"') || item.startsWith('\'') && item.endsWith('\'')) {
                item = item.substring(1, item.length - 1);
            }
            if (item.trim().length > 0) {
                queryArray.push("%" + item + "%");
            }
        });
        return queryArray;
    };
    BQuery.REGEX_SEARCH_SPLIT = /('.*?'|".*?"|\S+)/g;
    BQuery.QUERY = {
        keyid: 'kid',
        search: 's',
        language: 'lang',
        offset: 'off',
        limit: 'lim',
        sorter: 'sr',
        direct: 'dir'
    };
    return BQuery;
}();
exports.BQuery = BQuery;
//# sourceMappingURL=BQuery.js.map