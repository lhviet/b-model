"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BMQuery = /** @class */ (function () {
    function BMQuery() {
    }
    /**
     * Return a search string to use in SQL search
     * input: This is "a group" of 'test text' to search
     * output: %This%is%a group%of%test text%to%search
     * @param {string} searchText
     * @returns {string}
     */
    BMQuery.getOrderedQuerySearchString = function (searchText) {
        var phrases = searchText.split(BMQuery.REGEX_SEARCH_SPLIT);
        var queryString = '';
        phrases.map(function (item) {
            item = item.trim();
            if ((item.startsWith('"') && item.endsWith('"'))
                || (item.startsWith('\'') && item.endsWith('\''))) {
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
    BMQuery.getQuerySearchArray = function (searchText) {
        var phrases = searchText.split(BMQuery.REGEX_SEARCH_SPLIT);
        var queryArray = [];
        phrases.map(function (item) {
            item = item.trim();
            if ((item.startsWith('"') && item.endsWith('"'))
                || (item.startsWith('\'') && item.endsWith('\''))) {
                item = item.substring(1, item.length - 1);
            }
            if (item.trim().length > 0) {
                queryArray.push("%" + item + "%");
            }
        });
        return queryArray;
    };
    BMQuery.REGEX_SEARCH_SPLIT = /('.*?'|".*?"|\S+)/g;
    BMQuery.QUERY = {
        keyid: 'kid',
        search: 's',
        language: 'lang',
        offset: 'off',
        limit: 'lim',
        sorter: 'sr',
        direct: 'dir',
    };
    return BMQuery;
}());
exports.BMQuery = BMQuery;
//# sourceMappingURL=BMQuery.js.map