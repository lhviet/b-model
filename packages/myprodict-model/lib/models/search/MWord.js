"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MWord = /** @class */ (function () {
    function MWord(keyid, word, custom_url, created_at, updated_at) {
        this.keyid = keyid;
        this.word = word;
        this.custom_url = custom_url;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.systems = [];
    }
    MWord.prototype.addPronunciation = function (keyid, system, local, wordClass, pronunciation, description) {
        var pClass = {
            k: keyid,
            c: wordClass,
            p: pronunciation,
            d: description
        };
        var foundSystem = this.systems.find(function (s) { return s.system === system; });
        if (!foundSystem) {
            this.systems.push({
                system: system,
                locals: [{
                        local: local,
                        pArr: [pClass],
                    }],
            });
        }
        else {
            var foundLocal = foundSystem.locals.find(function (l) { return l.local === local; });
            if (!foundLocal) {
                foundSystem.locals.push({
                    local: local,
                    pArr: [pClass],
                });
            }
            else {
                var foundPro = foundLocal.pArr.find(function (p) { return p.c === pClass.c && p.p === pClass.p; });
                if (!foundPro) {
                    foundLocal.pArr.push(pClass);
                }
            }
        }
    };
    return MWord;
}());
exports.MWord = MWord;
//# sourceMappingURL=MWord.js.map