"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var BModel = /** @class */ (function () {
    function BModel() {
    }
    BModel.initWord = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            word: '',
            custom_url: '',
            status: 1 /* Pending */,
            created_at: NOW,
            updated_at: NOW,
        };
        return value;
    };
    BModel.initPronunciation = function () {
        var value = {
            word_keyid: '',
            word_class: 1 /* all */,
            system: 1 /* IPA */,
            local: 1 /* US */,
            transcript: '',
        };
        return value;
    };
    BModel.initMeaning = function () {
        var value = {
            word_keyid: '',
            word_class: 1 /* all */,
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