import * as moment from 'moment';
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
            status: 1 /* Pending */,
            created_at: now(),
            updated_at: now(),
        };
    };
    BModel.initPronunciation = function () {
        return {
            word_keyid: '',
            word_class: 1 /* all */,
            system: 1 /* IPA */,
            local: 1 /* US */,
            transcript: '',
            description: '',
            soundUrl: '',
            created_at: now(),
            updated_at: now(),
        };
    };
    BModel.initMeaning = function () {
        return {
            word_keyid: '',
            word_class: 1 /* all */,
            mean: '',
            tags: '',
        };
    };
    BModel.initMeaningUsage = function () {
        return {
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
            status: 1 /* Pending */,
            role: 1 /* User */,
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
            gender: 1 /* NA */,
            update_from_provider: 1 /* Local */,
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
export { BModel };
//# sourceMappingURL=BModel.js.map