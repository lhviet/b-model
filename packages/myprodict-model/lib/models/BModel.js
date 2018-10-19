"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var enums_1 = require("./enums");
var DEFAULT_IMG = {
    COVER: '/images/default-cover.png',
    PERSON: '/images/default-person.png',
};
var now = function () { return parseInt(moment().format('X'), 10); };
var BModel = /** @class */ (function () {
    function BModel() {
    }
    BModel.initWord = function () {
        return {
            word: '',
            custom_url: '',
            status: enums_1.EStatus.Pending,
            created_at: now(),
            updated_at: now(),
        };
    };
    BModel.initPronunciation = function () {
        return {
            word_keyid: '',
            word_class: enums_1.EWClass.all,
            system: enums_1.EPSystem.IPA,
            local: enums_1.EPLocal.US,
            transcript: '',
            description: '',
            sound_url: '',
            updated_at: now(),
            created_at: now(),
        };
    };
    BModel.initMeaning = function () {
        return {
            word_keyid: '',
            word_class: enums_1.EWClass.all,
            mean: '',
            tags: '',
        };
    };
    BModel.initMeaningUsage = function () {
        return {
            word_keyid: '',
            word_class: enums_1.EWClass.all,
            meaning_keyid: '',
            usage: '',
            explanation: '',
        };
    };
    BModel.initMeaningExample = function () {
        return {
            meaning_usage_keyid: '',
            sentence: '',
        };
    };
    // Authentication
    BModel.initUser = function () {
        return {
            username: '',
            email: '',
            password: '',
            updated_at: now(),
            created_at: now(),
            status: enums_1.EStatus.Pending,
            role: enums_1.EUserRole.User,
        };
    };
    BModel.initUserBasic = function () {
        return {
            displayname: '',
            firstname: '',
            lastname: '',
            middlename: '',
            avatar_url: DEFAULT_IMG.PERSON,
            cover_url: DEFAULT_IMG.COVER,
            home_url: '',
            birthday: '',
            language: 'en',
            country: '',
            timezone: '',
            quote: '',
            updated_at: now(),
            gender: enums_1.EGender.NA,
            update_from_provider: enums_1.EUserProvider.Local,
        };
    };
    BModel.DEFAULT_IMG = {
        COVER: '/images/default-cover.png',
        PERSON: '/images/default-person.png',
    };
    // using for email-helper
    BModel.SUPPORT_ACTION = {
        remindUsername: 'remind_username',
        emailActivation: 'email_activation',
        resetPassword: 'reset_password'
    };
    return BModel;
}());
exports.BModel = BModel;
//# sourceMappingURL=BModel.js.map