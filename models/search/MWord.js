"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BPronunciationSystem_1 = require("../core/BPronunciationSystem");
var BLocal_1 = require("../core/BLocal");
var MWord = /** @class */ (function () {
    function MWord(keyid, word, custom_url, created_at, updated_at) {
        this.keyid = keyid;
        this.word = word;
        this.custom_url = custom_url;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.system = {};
    }
    MWord.prototype.addPronunciation = function (system, local, wordClass, pronunciation, description) {
        var systemString = BPronunciationSystem_1.default.getEString(system);
        var localString = BLocal_1.default.getEString(local);
        var pClass = {
            c: wordClass,
            p: pronunciation,
            d: description
        };
        if (!this.system[systemString]) {
            this.system[systemString] = (_a = {},
                _a[localString] = [pClass],
                _a);
        }
        else {
            var pArr = this.system[systemString][localString];
            if (!pArr) {
                this.system[systemString][localString] = [pClass];
            }
            else {
                var foundSamePronunciation = pArr.find(function (pItem) { return (pItem.p === pronunciation && pItem.c === wordClass); });
                if (!foundSamePronunciation) {
                    pArr.push(pClass);
                }
            }
        }
        var _a;
    };
    return MWord;
}());
exports.MWord = MWord;
//# sourceMappingURL=MWord.js.map