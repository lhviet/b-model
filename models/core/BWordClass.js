"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumWordClass;
(function (EnumWordClass) {
    EnumWordClass[EnumWordClass["all"] = 1] = "all";
    EnumWordClass[EnumWordClass["noun"] = 2] = "noun";
    EnumWordClass[EnumWordClass["verb"] = 3] = "verb";
    EnumWordClass[EnumWordClass["adjective"] = 4] = "adjective";
})(EnumWordClass || (EnumWordClass = {}));
var isAll = function (statusType) { return statusType === EnumWordClass.all; };
var isNoun = function (statusType) { return statusType === EnumWordClass.noun; };
var isVerb = function (statusType) { return statusType === EnumWordClass.verb; };
var isAdj = function (statusType) { return statusType === EnumWordClass.adjective; };
exports.default = {
    EnumWordClass: EnumWordClass,
    isAll: isAll,
    isNoun: isNoun,
    isVerb: isVerb,
    isAdj: isAdj,
};
//# sourceMappingURL=BWordClass.js.map