"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BStatus_1 = require("core/BStatus");
var moment = require("moment");
var BModel = /** @class */ (function () {
    function BModel() {
    }
    BModel.initWord = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            word: '',
            custom_url: '',
            status: BStatus_1.default.EnumStatus.Pending,
            created_at: NOW,
            updated_at: NOW,
        };
        return value;
    };
    BModel.initPronunciation = function () {
        var value = {
            word_keyid: '',
            word_class: 1,
            system: 1,
            local: 1,
            transcript: '',
        };
        return value;
    };
    BModel.initMeaning = function () {
        var value = {
            word_keyid: '',
            word_class: '',
            mean: '',
            tags: '',
        };
        return value;
    };
    BModel.initMeaningUsage = function () {
        var value = {
            meaning_keyid: '',
            usage: '',
            explanation: '',
        };
        return value;
    };
    BModel.initMeaningExample = function () {
        var value = {
            meaning_usage_keyid: '',
            sentence: '',
        };
        return value;
    };
    return BModel;
}());
exports.BModel = BModel;
//# sourceMappingURL=BModel.js.map