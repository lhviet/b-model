"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var BStatus = require("./core/BStatus");
var BWordClass = require("./core/BWordClass");
var BPronunciationSystem = require("./core/BPronunciationSystem");
var BLocal = require("./core/BLocal");
var BModel = /** @class */ (function () {
    function BModel() {
    }
    BModel.initWord = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            word: '',
            custom_url: '',
            status: BStatus.EnumStatus.Pending,
            created_at: NOW,
            updated_at: NOW,
        };
        return value;
    };
    BModel.initPronunciation = function () {
        var value = {
            word_keyid: '',
            word_class: BWordClass.EnumWordClass.all,
            system: BPronunciationSystem.EnumSystem.IPA,
            local: BLocal.EnumLocal.US,
            transcript: '',
        };
        return value;
    };
    BModel.initMeaning = function () {
        var value = {
            word_keyid: '',
            word_class: BWordClass.EnumWordClass.all,
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