"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var TStatus_1 = require("./types/TStatus");
var BMModel = /** @class */ (function () {
    function BMModel() {
    }
    BMModel.initWord = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            word: '',
            custom_url: '',
            status: TStatus_1.TYPE_STATUS_PENDING,
            created_at: NOW,
            updated_at: NOW,
        };
        return value;
    };
    BMModel.initPronunciation = function () {
        var value = {
            word_keyid: '',
            word_class: 1,
            system: 1,
            local: 1,
            transcript: '',
        };
        return value;
    };
    BMModel.initMeaning = function () {
        var value = {
            word_keyid: '',
            word_class: '',
            mean: '',
            tags: '',
        };
        return value;
    };
    BMModel.initMeaningUsage = function () {
        var value = {
            meaning_keyid: '',
            usage: '',
            explanation: '',
        };
        return value;
    };
    BMModel.initMeaningExample = function () {
        var value = {
            meaning_usage_keyid: '',
            sentence: '',
        };
        return value;
    };
    return BMModel;
}());
exports.BMModel = BMModel;
//# sourceMappingURL=BMModel.js.map