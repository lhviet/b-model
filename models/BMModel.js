"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MPDStatus_1 = require("core/MPDStatus");
var moment = require("moment");
var BMModel = /** @class */ (function () {
    function BMModel() {
    }
    BMModel.initWord = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            word: '',
            custom_url: '',
            status: MPDStatus_1.default.EnumStatus.Pending,
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