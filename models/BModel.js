"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var BStatus_1 = require("./core/BStatus");
var BWordClass_1 = require("./core/BWordClass");
var BPronunciationSystem_1 = require("./core/BPronunciationSystem");
var BLocal_1 = require("./core/BLocal");
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
            word_class: BWordClass_1.default.EnumWordClass.all,
            system: BPronunciationSystem_1.default.EnumSystem.IPA,
            local: BLocal_1.default.EnumLocal.US,
            transcript: '',
        };
        return value;
    };
    BModel.initMeaning = function () {
        var value = {
            word_keyid: '',
            word_class: BWordClass_1.default.EnumWordClass.all,
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