"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumWordClass;
(function (EnumWordClass) {
    EnumWordClass[EnumWordClass["all"] = 1] = "all";
    EnumWordClass[EnumWordClass["noun"] = 2] = "noun";
    EnumWordClass[EnumWordClass["verb"] = 3] = "verb";
    EnumWordClass[EnumWordClass["adjective"] = 4] = "adjective";
    EnumWordClass[EnumWordClass["adverb"] = 5] = "adverb";
    EnumWordClass[EnumWordClass["pronoun"] = 6] = "pronoun";
    EnumWordClass[EnumWordClass["abbreviation"] = 7] = "abbreviation";
    EnumWordClass[EnumWordClass["interjection"] = 8] = "interjection";
    EnumWordClass[EnumWordClass["conjunction"] = 9] = "conjunction";
    EnumWordClass[EnumWordClass["prefix"] = 10] = "prefix";
    EnumWordClass[EnumWordClass["preposition"] = 11] = "preposition";
    EnumWordClass[EnumWordClass["article"] = 12] = "article";
    EnumWordClass[EnumWordClass["unclassified"] = 13] = "unclassified";
})(EnumWordClass = exports.EnumWordClass || (exports.EnumWordClass = {}));
exports.isAll = function (statusType) { return statusType === EnumWordClass.all; };
exports.isNoun = function (statusType) { return statusType === EnumWordClass.noun; };
exports.isVerb = function (statusType) { return statusType === EnumWordClass.verb; };
exports.isAdj = function (statusType) { return statusType === EnumWordClass.adjective; };
exports.getEString = function (eLocal) { return EnumWordClass[eLocal].substr(0, 4); };
//# sourceMappingURL=BWordClass.js.map