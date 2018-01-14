"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BMDbPostgres = /** @class */ (function () {
    function BMDbPostgres() {
    }
    // retrieve the correct key using in SQL in PostgreSQL in backend
    BMDbPostgres.getConditionKey = function (key) {
        var conditionKey = key;
        switch (key) {
            case BMDbPostgres.CONDITION_KEY.IN_ARRAY:
                conditionKey = ' IN ';
                break;
            case BMDbPostgres.CONDITION_KEY.NOT_IN_ARRAY:
                conditionKey = ' NOT IN ';
                break;
            default:
                break;
        }
        return conditionKey;
    };
    /**
     * parse array string in format "[abc, def, xyz,...]"
     * @param {string} input
     * @returns {any[]}
     */
    BMDbPostgres.parseArray = function (input) {
        var result = [input];
        try {
            var tempStr = input.replace(/{/g, '[');
            tempStr = tempStr.replace(/}/g, ']');
            result = JSON.parse(tempStr);
        }
        catch (ex) {
            console.error('parseArray ERROR = ' + JSON.stringify(ex));
            console.error('parseArray ERROR input = ' + JSON.stringify(input));
            // throw ex;
        }
        return result;
    };
    // condition key using for JSON condition format in request to convert to SQL in PostgreSQL in backend server
    BMDbPostgres.CONDITION_KEY = {
        IN_ARRAY: 'in_array',
        NOT_IN_ARRAY: 'not_in_array',
    };
    return BMDbPostgres;
}());
exports.BMDbPostgres = BMDbPostgres;
//# sourceMappingURL=BMDbPostgres.js.map